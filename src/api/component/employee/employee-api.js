import BaseAPI from '../../base/base-api'
import BaseAPIConfig from '../../base/base-api-config'
class EmployeeAPI extends BaseAPI{
    constructor(){
        super();
        // this.controller = '/v1/Employees';
        this.controller = 'api/v1/Employee';
    }

    filter(param){
        // return BaseAPIConfig.get(`${this.controller}/employeeFilter`, {
            return BaseAPIConfig.get(`${this.controller}s/GetEmployeeFilter`, {
            params: param
        })
    }

    newEmployeeCode(){
        return BaseAPIConfig.get(`${this.controller}/NewEmployeeCode`);
    }
}

export default new EmployeeAPI();