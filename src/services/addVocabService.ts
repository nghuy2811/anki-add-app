import AnkiConnectInstance from "./ankiConnectApi";

const AddVocabService = {
  addNote: (data: any) => {
    const audioField = data.audio ? [{
      url: data.audio,
      filename: `${data.front}.mp3`,
      fields: ['Audio']
    }] : []
    const noteData = {
      deckName: data.deckName,
      modelName: 'Basic',
      fields: {
        "Front": data.front,
        "Back": data.back,
        "Type": data.type
      },
      audio: audioField,
      options: {
        allowDuplicate: data.allowDuplicate
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