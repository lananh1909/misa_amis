import axios from 'axios'
import APIConfig from '../config/api-config'

var BaseAPIConfig = axios.create({
    baseURL: APIConfig,
    headers: {'Content-type': 'application/json'}
})
export default BaseAPIConfig;