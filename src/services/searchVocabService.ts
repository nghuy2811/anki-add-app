import MerriamInstance from "./merriamApi";
import { IVocab } from "@/dictionary/merriam.dictionary";

const API_KEY = process.env.NEXT_PUBLIC_MERRIAM_KEY;
const SearchVocabService = {
  searchVocab: (keyword: string): Promise<IVocab[]> => {
    return MerriamInstance.get(`/${keyword}?key=${API_KEY}`)
  }
}

export default SearchVocabService