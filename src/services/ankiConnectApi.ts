import axios from "axios";

const AnkiConnectInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ANKI_CONNECT,
  timeout: 30 * 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

AnkiConnectInstance.interceptors.response.use(
  (res) => {
    return res.data
  }, (error) => {
    return Promise.reject(error.message || error)
  }
)

export default AnkiConnectInstance