import BaseAPI from '../../base/BaseAPI'
import BaseAPIConfig from '../../base/BaseAPIConfig'
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