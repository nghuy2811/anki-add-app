import AnkiConnectInstance from "./ankiConnectApi";

const AddVocabService = {
  addNote: (data: any) => {
    const audioField = data.audio ? [{
      url: data.audio,
      filename: `${data.front}.mp3`,
      fields: ['Audio']
    }] : []
    const noteData = {
      deckName: 'Dev',
      modelName: 'Basic',
      fields: {
        "Front": data.front,
        "Back": data.back,
        "Type": data.type
      },
      audio: audioField
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