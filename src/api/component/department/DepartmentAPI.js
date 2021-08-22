import BaseAPI from '../../base/BaseAPI'

class DepartmentAPI extends BaseAPI{
    constructor(){
        super();
        // this.controller = '/api/Department';
        this.controller = 'api/v1/Department';
    }
}

export default new DepartmentAPI();