import BaseAPIConfig from './base-api-config';

export default class BaseAPI {
    constructor(){
        this.controller = null;
    }

    /**
     * method get all data
     * @returns promise 
     */
    getAll(){
        return BaseAPIConfig.get(`${this.controller}s`);
    }

    create(data){
        return BaseAPIConfig.post(`${this.controller}`, data);
    }

    update(id, data){
        return BaseAPIConfig.put(`${this.controller}/${id}`, data);
    }

    delete(id){
        return BaseAPIConfig.delete(`${this.controller}/${id}`);
    }

    getById(id){
        return BaseAPIConfig.get(`${this.controller}/${id}`);
    }
}