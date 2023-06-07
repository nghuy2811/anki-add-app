import { processableTokens, defTokenRegex } from "./constants";

export const processToken = (token: string) => {
  // Style bold, italic, double quotes
  if (processableTokens.includes(token)) {
    switch (token) {
      case '{bc}':
        return ":"
      case '{it}':
        return "<span class=\"italic\">"
      case '{b}':
        return "<span class=\"bold\">"
      case '{/it}':
      case '{/b}':
        return "</span>"
      case '{ldquo}':
      case '{rdquo}':
        return "\"\""
      default:
        return ''
    }
  };

  // Get text from link token
  if (token.split("|") && token.split('|').length > 0) {
    return token.split('|')[1];
  }

  return ''
}

export const containCrossReferenceToken = (dt: Array<any>) => {
  if (dt[0] === 'text' && dt[1].includes('{dx}see also')) {
    return true;
  }

  return false;
}

export const replaceTokenInString = (sentence: string) => {
  return sentence.replace(defTokenRegex, processToken)
}