import AnkiConnectInstance from "./ankiConnectApi";

const AddVocabService = {
  addNote: (data: any) => {
    const noteData = {
      deckName: 'English',
      modelName: 'Basic',
      fields: {
        "Front": data.front,
        "Back": data.back,
        "Type": data.type
      }
    }
    const params = {
      "action": "addNote",
      "version": 6,
      params: { note: { ...noteData } }
    }
    return AnkiConnectInstance.post("", params)
  }
}

export default AddVocabService