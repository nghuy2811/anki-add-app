import MerriamInstance from "./merriamApi";

const API_KEY = process.env.NEXT_PUBLIC_MERRIAM_KEY;
const SearchVocabService = {
  searchVocab: (keyword: string): Promise<any> => {
    return MerriamInstance.get(`/${keyword}?key=${API_KEY}`)
  }
}

export default SearchVocabService