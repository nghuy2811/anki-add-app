import { LocalStorageKeys } from "@/utils/constants";
import MerriamInstance from "./merriamApi";
import { IVocab } from "@/dictionary/merriam.dictionary";

const SearchVocabService = {
  searchVocab: (keyword: string): Promise<IVocab[]> => {
    const apiKey = localStorage.getItem(LocalStorageKeys.apiKey) || '';
    return MerriamInstance.get(`/${keyword}?key=${apiKey}`)
  }
}

export default SearchVocabService