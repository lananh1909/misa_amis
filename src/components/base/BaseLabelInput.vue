<template>
    <div class="search-box" :class="{'error': error}">
        <label :title="labelTitle && labelTitle" :for="id" class="input-label">{{textLabel}} <span :style="required?'color:red':'color:transparent'">*</span></label>
        <input :tabindex="tabindex" :title="error?errorMessage:null" :id="id" ref="input" :type="type" v-model="inputVal" @blur="validateInput()" @input="onInput()" @keydown="formatNumber($event)" :placeholder="placeholder">
    </div>
</template>

<style>
    /* @import '../../css/page/employeeForm.css';
    @import '../../css/page/inputMessage.css'; */
    @import url('../../css/employee/input.css');
</style>

<script>
import Enumeration from '../../script/common/enumeration';
import Resources from '../../script/common/resource-vi';
export default {
    name: "BaseLabelInput",
    data() {
        return {
            error: false,
            errorMessage: Resources.ValidateError.Require.replace("%%", this.textLabel)
        }
    },
    props: {
        modelValue: {
            default: ""
        },
        required: {
            default: false
        },
        placeholder: {
            type: String
        },
        type: {
            type: String,
            default: "text"
        },
        validate: {
            type: String
        },
        format: {
            type: String
        },
        checkValidate: {
        },
        id: {
            required: true
        },
        tabindex: {},
        textLabel: {
            type: String,
            default: null
        },
        labelTitle: {
            type: String,
            default: null
        },
        maxLength: {
            type: Number,
            default: null
        }
    },
    computed: {
        /**
         * bind v-model from parent to v-model input
         */
        inputVal: {
            get(){
                return this.modelValue;
            },
            set(val){
                this.$emit('update:modelValue', val);
            }
        }
    },
    methods: {
        /**
         * validate input khi blur: email, phone, tax, ...
         * author: nlanh 20/8/2021
         */
        validateInput(){
            if(this.required && !this.modelValue){
                this.error = true;
                this.errorMessage = Resources.ValidateError.Require.replace("%%", this.textLabel);
            } else if(this.modelValue){
                let check = "";
                // switch(this.validate){
                //     case Enumeration.InputValidate.EMAIL: {
                //         check = FormatData.validateEmail(this.modelValue);
                //         break;
                //     }
                //     case Enumeration.InputValidate.PHONENUMBER: {
                //         check = FormatData.validatePhoneNumber(this.modelValue);
                //         break;
                //     }
                //     case Enumeration.InputValidate.IDENTITY: {
                //         check = FormatData.validateIdentityNumber(this.modelValue);
                //         break;
                //     }
                // }
                if(check){
                    this.errorMessage = check;
                    this.error = true;
                } else {
                    this.error = false;
                }
            } else {
                this.error = false;
            }
            return this.error;
        },
        onInput(){
            this.error = false; 
        },
        /**
         * Nếu format truyền vào là number thì chỉ cho nhập số
         * author: nlanh 20/8/2021
         */
        formatNumber(event){
            if(this.maxLength && this.inputVal.length >= this.maxLength){
                if(event.which !== 8)
                    event.preventDefault();
            } else 
                switch(this.format){
                    case Enumeration.InputValidate.NUMBER: {
                        let charCode = event.which ? event.which: event.keyCode;
                        if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode != 9) && (charCode < 96 || charCode > 105)) {
                            event.preventDefault();
                        } else {
                            return true;
                        }
                    }
                }
        },
        /**
         * Hàm giúp focus vào input
         * author: nlanh 20/8/2021
         */
        focusInput(){
            this.$refs["input"].focus();
        },
        /**
         * Set lỗi và hiển thị lỗi
         * author: nlanh 20/8/2021
         */
        setError(error){
            this.error = true;
            this.errorMessage = error;
        },
        /**
         * reset input
         * author: nlanh 20/8/2021
         */
        resetInput(){
            this.$emit('update:modelValue', null);
            this.error = false;
            this.errorMessage = "";
        }
    }
}
</script>