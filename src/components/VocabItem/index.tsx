'use client';

import React, { useCallback, useMemo } from 'react';

import { audioUrl } from '@/utils/constants';
import {
  containCrossReferenceToken,
  replaceTokenInString,
} from '@/utils/utilFunctions';
import AddVocabService from '@/services/addVocabService';

import { IVocab } from '@/dictionary/merriam.dictionary';
import Button from '../Button';

type VocabItemPropTypes = {
  data: IVocab;
};

const VocabItem = ({ data }: VocabItemPropTypes) => {
  const mainWord = useMemo(
    () => data.hwi.hw.replace(/[*]/g, ''),
    [data.hwi.hw]
  );
  const sseq = useMemo(() => {
    return data.def && data.def.length > 0 ? data.def[0].sseq : [];
  }, [data]);

  const handleGetDefinitionsAndExamples = useCallback(() => {
    if (sseq.length === 0) return [];
    const defArray: Array<any> = [];

    sseq.forEach((sseqItem) => {
      sseqItem.forEach((def: any) => {
        if (def[0] === 'sense') {
          def[1].dt.forEach((defItem: any, defIndex: number) => {
            if (defItem[0] === 'text' && !containCrossReferenceToken(defItem)) {
              const definition = {
                def: replaceTokenInString(defItem[1]),
              };

              if (
                def[1].dt[defIndex + 1] &&
                def[1].dt[defIndex + 2] &&
                def[1].dt[defIndex + 1][0] === 'wsgram' &&
                def[1].dt[defIndex + 2][0] === 'vis'
              ) {
                Object.assign(definition, {
                  example: {
                    context: def[1].dt[defIndex + 1][1],
                    sentences: def[1].dt[defIndex + 2][1].map((visItem: any) =>
                      replaceTokenInString(visItem.t)
                    ),
                  },
                });
              }

              if (
                def[1].dt[defIndex + 1] &&
                def[1].dt[defIndex + 1][0] === 'vis'
              ) {
                Object.assign(definition, {
                  example: {
                    context: null,
                    sentences: def[1].dt[defIndex + 1][1].map((visItem: any) =>
                      replaceTokenInString(visItem.t)
                    ),
                  },
                });
              }

              if (defArray.length <= 2) {
                defArray.push(definition);
              }
            }
          });
        }
      });
    });

    return defArray;
  }, [sseq]);

  const handleAddToAnki = useCallback(async () => {
    const front = `<div class='front'><h1 class='word'>${mainWord}</h1></div>`;
    const type = `<div class='type'>(${data.fl})</div>`;
    let definitions = '';
    const definitionsAndExamples = handleGetDefinitionsAndExamples();

    for (let index = 0; index < definitionsAndExamples.length; index++) {
      const curDef = definitionsAndExamples[index];
      if (curDef.def) {
        let exampleContext = '';
        let examples = '';

        if (curDef.example) {
          exampleContext = Boolean(curDef.example.context)
            ? `<h5 class='example-context'>(${curDef.example.context})</h5>`
            : '';
          for (
            let egIndex = 0;
            egIndex < curDef.example.sentences.length;
            egIndex++
          ) {
            const example = curDef.example.sentences[egIndex];
            const exampleListEle = `<li class='example-item'><h5>${example}</h5></li>`;
            examples = examples.concat(exampleListEle);
          }
        }

        const defElement = `<li class='definition-item'><h2 class='definition'>${curDef.def}</h2>${exampleContext}<ul class='example-list'>${examples}</ul></li>`;
        definitions = definitions.concat(defElement);
      }
    }

    const back = `<div class='back'><h6 class='ipa'>${
      data.hwi.prs && data.hwi.prs.length > 0 ? data.hwi.prs[0].ipa : ''
    }</h6><ul class='definition-content'>${definitions}</ul></div>`;
    const audioLink =
      data.hwi.prs && data.hwi.prs.length > 0
        ? `${audioUrl}/en/us/mp3/${data.hwi.prs[0].sound.audio.slice(0, 1)}/${
            data.hwi.prs[0].sound.audio
          }.mp3`
        : '';

    await AddVocabService.addNote({
      front: front.replace(/\n/g, ''),
      type,
      back,
      audio: audioLink,
    });
  }, [data, mainWord, handleGetDefinitionsAndExamples]);

  return (
    <div className='my-[10px] rounded-[10px] border bg-white px-[10px] py-[20px]'>
      <h2 className='text-[24px] font-[700] leading-[40px]'>{mainWord}</h2>
      <h4 className='text-[16px] font-[500] leading-[20px] text-blue'>
        {data.fl}
      </h4>
      {data.shortdef.length > 0 && (
        <ul className='ml-[16px] pt-[16px]'>
          {data.shortdef.map((def, index) => (
            <li key={index} className='list-decimal text-[18px] leading-[26px]'>
              {def}
            </li>
          ))}
        </ul>
      )}
      <div className='mt-[20px] flex justify-center'>
        <Button label='Add to Anki' action={handleAddToAnki} />
      </div>
    </div>
  );
};

export default React.memo(VocabItem);
