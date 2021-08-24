import BaseAPI from '../../base/base-api'

class DepartmentAPI extends BaseAPI{
    constructor(){
        super();
        // this.controller = '/api/Department';
        this.controller = 'api/v1/Department';
    }
}

export default new DepartmentAPI();