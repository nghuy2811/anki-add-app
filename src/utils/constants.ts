export const audioUrl = process.env.NEXT_PUBLIC_MERRIAM_AUDIO_URL;
export const defTokenRegex = /\{(.*?)\}/g
export const processableTokens = ['{bc}', '{it}', '{/it}', '{b}', '{/b}', '{ldquo}', '{rdquo}']
export const LocalStorageKeys = {
  apiKey: 'API_KEY',
  deckName: 'DECK_NAME'
}