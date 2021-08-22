import axios from 'axios'
import APIConfig from '../config/APIConfig'

var BaseAPIConfig = axios.create({
    baseURL: APIConfig,
    headers: {'Content-type': 'application/json'}
})
export default BaseAPIConfig;