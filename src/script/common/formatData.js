import Resources from '../../script/common/resource-vi';
export default class FormatData{
    /**
    * ---5/7/2021---
    * function format birth date
    * Author: nlanh
    */
     static formatDate(date){
        if(!date){
            date = '';
        } else {
            date = new Date(date).toLocaleDateString("en-GB");
        }
        return date;
    }
    /** 
     * validate input value not null#
     * author: nlanh
     */
    static formatNull(value){
        if(!value)
            return "";
        else    
            return value;
    }

    /** 
     * format string date to yyyy-MM-dd to set value for input type date
     * author: nlanh
     */
    static formatDateOutput(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    //some function to validate data

    /**
     * validate phone number must start with 03/05/07/08/09 have 10 number
     * start with 01 must following by 2/6/8/9 and have 11 number
     * author: nlanh
     */
    static validatePhoneNumber(value){
        if(!/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(value)){
            return Resources.ValidateError.PhoneNumber;
        }
    }

    /** 
     * validate identity number must have 9 or 12 character 
     * author: nlanh
     */
    static validateIdentityNumber(value){
        if(value && value.length !== 9 && value.length !== 12){
            return Resources.ValidateError.IdentityNumber;
        }
    }

    /** 
     * validate email
     * author: nlanh
     */
    static validateEmail(value){
        value = value.toLowerCase();
        const re = /^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/;
        if(!re.test(value)){
            return Resources.ValidateError.Email;
        }
    }
    /**
     * hàm validate chỉ cho nhập số
     * @param {} e 
     * @returns boolean
     */
    static validateNumber(e){
        const pattern = /^[0-9]$/;
        return pattern.test(e.key);
    }
}