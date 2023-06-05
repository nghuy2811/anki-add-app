import { atom } from "recoil";

import { IVocab } from "@/dictionary/merriam.dictionary";

export const vocabState = atom<IVocab[] | null>({
  key: 'vocabState',
  default: null
})