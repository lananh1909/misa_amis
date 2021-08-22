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
            return "Số điện thoại không hợp lệ! Vui lòng nhập lại!";
        }
    }

    /** 
     * validate money must > 1000
     * author: nlanh
     */
    static validateMoney(value){
        if(Number(value) < 1000){
            return "Số tiền nhập vào phải lớn hơn 1000 VNĐ!";
        }
    }

    /**
     * validate tax code must have 10 or 13 character
     * author: nlanh
     */
    static validateTaxCode(value){
        if(value && value.length !== 10 && value.length !== 13){
            return "Mã số thuế phải có 10 hoặc 13 chữ số!";
        }
    }

    /** 
     * validate identity number must have 9 or 12 character 
     * author: nlanh
     */
    static validateIdentityNumber(value){
        if(value && value.length !== 9 && value.length !== 12){
            return "Số CMT/CCCD phải có 9 hoặc 12 chữ số!";
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
            return "Email không hợp lệ!"
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

    static validateInput(required, validate, value){
        let error = "";
        if(required && !value){
            error = "Trường này không được để trống!";
        } else if(value){
            let check = "";
            switch(validate){
                case "email": {
                    check = FormatData.validateEmail(value);
                    break;
                }
                case "phone": {
                    check = FormatData.validatePhoneNumber(value);
                    break;
                }
                case "identity": {
                    check = FormatData.validateIdentityNumber(value);
                    break;
                }
                case "taxcode": {
                    check = FormatData.validateTaxCode(value);
                    break;
                }
            }
            if(check){
                error = check;
            } else {
                error = "";
            }
        } else {
            error = "";
        }
        return error;
    }
}