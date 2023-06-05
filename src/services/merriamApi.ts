import axios from "axios";

const MerriamInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_MERRIAM,
  timeout: 30 * 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

MerriamInstance.interceptors.response.use(
  (res) => {
    return res.data
  }, (error) => {
    return Promise.reject(error)
  }
)

export default MerriamInstance