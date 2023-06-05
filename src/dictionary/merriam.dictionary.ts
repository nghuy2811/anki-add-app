export interface IVocab {
  hwi: {
    hw: string,
    prs?: IPronunciation[]
  },
  ins: IInflection[],
  // Functional label
  fl: string,
  def?: ISenseSequence[],
  shortdef: Array<string>,
  meta: IMeta
}

interface IMeta {
  stems: Array<string>,
  id: string
}

interface IPronunciation {
  ipa: string,
  sound: {
    audio: string
  }
}

interface IInflection {
  // Inflection
  if: string,
  // Inflection label
  il: string,
  prs?: IPronunciation[]
}

interface ISenseSequence {
  sseq: Array<any>
}