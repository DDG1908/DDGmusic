import axios from "axios";

// const baseURl = 'http://39.108.122.104:3000'
const baseURl = 'http://localhost:3000'

//้็จ
export function Request(api){
    const url = baseURl + api
    return axios.get(url)
}
// ๆ็ดข
export function Search(keywords){
    const url = baseURl + '/search?keywords=' + keywords
    return axios.get(url)
}
