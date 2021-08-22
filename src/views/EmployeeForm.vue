<template>
    <div class="mymodal">
        <DragElement>
        <div class="my-modal-content" ref="employeeForm">
            <div class="my-modal-header flex">
                <div class="my-modal-title flex items-center">
                    <div class="text-title">Thông tin nhân viên</div>
                    <div class="checkbox-title">
                        <BaseCheckbox id="isCustomer" textLabel="Là khách hàng" v-model="employee.IsCustomer"/>
                    </div>
                    <div class="checkbox-title">
                        <BaseCheckbox id="isProvider" textLabel="Là nhà cung cấp" v-model="employee.IsProvider"/>
                    </div>
                </div>
                <div class="my-modal-close flex">
                    <div class="close-icon" title="Giúp">
                        <div class="background-image help-icon"></div>
                    </div>
                    <div class="close-icon" title="Đóng" @click="close()">
                        <div class="background-image close"></div>
                    </div>
                </div>
            </div>
            <div class="my-modal-body">
                <div class="my-modal-form flex-column">
                    <div class="flex" style="padding-bottom:12px">
                        <div class="modal-form-left w-50 flex-column">
                            <div class="flex input-row">
                                <div class="w-40 mr-6">
                                    <BaseLabelInput :tabindex="1" @keyup="change = true" :type="'text'" ref="EmployeeCode" v-model="employee.EmployeeCode" id="EmployeeCode" textLabel="Mã" :required="true"/>
                                </div>
                                <div class="w-60">
                                    <BaseLabelInput :tabindex="2" @keyup="change = true" :type="'text'" ref="EmployeeName" v-model="employee.EmployeeName" id="EmployeeName" textLabel="Tên" :required="true"/>
                                </div>
                            </div>
                            <div class="input-row">
                                <BaseCombobox :tabindex="3" textLabel="Đơn vị" v-model="employee.DepartmentId" id="DepartmentId" ref="DepartmentId" :items="departments" :required="true"/>
                            </div>
                            <div class="input-row">
                                <BaseLabelInput :tabindex="4" @keyup="change = true" :type="'text'" ref="EmployeePosition" v-model="employee.EmployeePosition" id="EmployeePosition" :textLabel="'Chức danh'"/>
                            </div>
                        </div>
                        <div class="modal-form-right w-50 flex-column">
                            <div class="flex input-row">
                                <div class="w-40 mr-6">
                                    <BaseDatePicker :tabindex="5" id="DateOfBirth" :maxDate="new Date()" ref="DateOfBirth" @onchange="change = true" v-model="employee.DateOfBirth" :textLabel="'Ngày sinh'"/>
                                </div>
                                <div class="w-60">
                                    <BaseRadioGroup :tabindex="6" @onchange="change = true" ref="Gender" v-model="employee.Gender" id="Gender" :options="genders" :textLabel="'Giới tính'"/>
                                </div>
                            </div>
                            <div class="flex input-row">
                                <div class="w-60 mr-6">
                                    <BaseLabelInput :tabindex="8" @input="change = true" :format="'number'" ref="IdentityNumber" v-model="employee.IdentityNumber" id="IdentityNumber" :textLabel="'Số CMND'" :validate="'identity'"/>
                                </div>
                                <div class="w-40">
                                    <BaseDatePicker :tabindex="9" :maxDate="new Date()" @onchange="change = true" ref="IdentityDate" v-model="employee.IdentityDate" id="IdentityDate" :textLabel="'Ngày cấp'"/>
                                </div>
                            </div>
                            <div class="input-row">
                                <BaseLabelInput :tabindex="10" @keyup="change = true" :type="'text'" ref="IdentityPlace" v-model="employee.IdentityPlace" id="IdentityPlace" :textLabel="'Nơi cấp'"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="input-row">
                            <BaseLabelInput :tabindex="11" @keyup="change = true" :type="'text'" ref="Address" v-model="employee.Address" id="Address" :textLabel="'Địa chỉ'"/>
                        </div>
                        <div class="input-row flex">
                            <div class="w-25 mr-6">
                                <BaseLabelInput :tabindex="12" @keyup="change = true" :format="'number'" ref="PhoneNumber" v-model="employee.PhoneNumber" id="PhoneNumber" :textLabel="'ĐT di động'" :validate="'phone'"/>
                            </div>
                            <div class="w-25 mr-6">
                                <BaseLabelInput :tabindex="13" @keyup="change = true" :format="'number'" ref="TelephoneNumber" v-model="employee.TelephoneNumber" id="TelephoneNumber" :textLabel="'ĐT cố định'"/>
                            </div>
                            <div class="w-25">
                                <BaseLabelInput :tabindex="14" @keyup="change = true" :type="'text'" ref="Email" v-model="employee.Email" id="Email" :textLabel="'Email'" :validate="'email'"/>
                            </div>
                        </div>
                        <div class="input-row flex">
                            <div class="w-25 mr-6">
                                <BaseLabelInput :tabindex="15" @keyup="change = true" :format="'number'" ref="BankAccountNumber" v-model="employee.BankAccountNumber" id="BankAccountNumber" :textLabel="'Tài khoản ngân hàng'"/>
                            </div>
                            <div class="w-25 mr-6">
                                <BaseLabelInput :tabindex="16" @keyup="change = true" :type="'text'" ref="BankName" v-model="employee.BankName" id="BankName" :textLabel="'Tên ngân hàng'"/>
                            </div>
                            <div class="w-25">
                                <BaseLabelInput :tabindex="17" @keyup="change = true" :type="'text'" ref="BankBranchName" v-model="employee.BankBranchName" id="BankBranchName" :textLabel="'Chi nhánh'"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-line"></div>
                <div class="my-modal-footer flex">
                    <BaseButton tabindex="20" :type="mode.buttonType.DEFAULT" :text="'Hủy'" @onClick="close()" />
                    <div class="flex">
                        <div style="padding-right:10px">
                            <BaseButton :type="mode.buttonType.DEFAULT" tabindex="18" :text="'Cất'" @onClick="submit(true)"/>
                        </div>
                        <BaseButton tabindex="19" :type="mode.buttonType.SUCCESS" :text="'Cất và thêm'" @onClick="submit(false)"/>
                    </div>
                </div>
            </div>
        </div>
        </DragElement>
        
        <BaseLoading v-if="isLoading"/>
    </div>
</template>
<script>
import BaseButton from '../components/base/BaseButton.vue'
import BaseCheckbox from '../components/base/BaseCheckbox.vue'
import BaseLabelInput from '../components/base/BaseLabelInput.vue'
import BaseRadioGroup from '../components/base/BaseRadioGroup.vue'
import Enumeration from '../script/common/Enumeration'
import data from '../constant/data'
import EmployeeAPI from '../api/component/employee/EmployeeAPI'
import BaseDatePicker from '../components/base/BaseDatePicker.vue'
import BaseLoading from '../components/base/BaseLoading.vue'
import BaseCombobox from '../components/base/BaseCombobox.vue'
import DragElement from '../components/base/DragElement.vue'
export default {
  components: { BaseCheckbox, BaseLabelInput, BaseButton, BaseRadioGroup, BaseDatePicker, BaseLoading, BaseCombobox, DragElement },
    name: "EmployeeForm",
    data() {
        return {
            employee: {},
            mode: Enumeration,
            genders: data.genders,
            departments: [],
            change: false,
            isLoading: false,
            validate: true
        }
    },
    props: {
        formMode: {},
        employeeId: {
            type: String,
            default: null
        }
    },
    methods: {
        close() {
            this.$emit('close', this.change);
        },
        /**
         * Validate các trường trước khi submit, nếu lỗi hiển thị dialog thông báo
         * author: nlanh
         */
        submit(isClose){
            this.isLoading = true;
            this.validate = true;
            let first = 0;
            for(var key in this.$refs){
                if(this.$refs[key] && this.$refs[key].validateInput){
                    this.$refs[key].validateInput();
                    if(this.employee[key] == "" && this.employee[key] !== 0){
                        this.employee[key] = undefined;
                    }
                    if(this.$refs[key].error){
                        if(first == 0){
                            first = key;
                        }
                         this.validate = false;
                    }
                }
            }
            if(this.validate) {
                //Nếu form mode là sửa thông tin nhân viên
                if(this.formMode == Enumeration.formMode.EDIT){
                    EmployeeAPI.update(this.employeeId, this.employee).then(
                        (res) => {
                            if(res.status == 200){
                                if(res.data.Success == true){
                                    this.change = false;
                                    this.$emit('success', isClose);
                                } else {
                                    this.$emit('error-validate', {msg: res.data.UserMsg, data: res.data.Data});
                                }
                            }
                            this.isLoading = false;
                        }
                    ).catch(
                        (error) => {
                            if(error.response && error.status == 500){
                                let data = error.response.data
                                this.$emit('error-validate', {msg: data.UserMsg});
                            }
                            this.isLoading = false;
                        }
                    )
                } else {
                    //Nếu form mode là thêm hoặc nhân bản
                    EmployeeAPI.create(this.employee).then(
                        (res) => {
                            if(res.status == 200 || res.status == 201){
                                if(res.data.Success == true){
                                    this.change = false;
                                    this.$emit('success', isClose);
                                } else {
                                    this.$emit('error-validate', {msg: res.data.UserMsg, data: res.data.Data});
                                }
                            }
                            this.isLoading = false;
                        }
                    ).catch(
                        (error) => {
                            if(error.response && error.status == 500){
                                let data = error.response.data
                                this.$emit('error-validate', {msg: data.UserMsg});
                            }
                            this.isLoading = false;
                        }
                    )
                }                
            } else {
                //Hiển thị thông báo lỗi
                let msg = this.$refs[first].errorMessage;
                this.$emit('error-danger', {msg: msg, data: first});
                this.isLoading = false;
            }
        },
        /**
         * Khi nhấn cất và xóa dữ liệu trong các trường và lấy mã code mới
         * author: nlanh 20/8/2021
         */
        genNewCreate(){
            this.employee = {}
            EmployeeAPI.newEmployeeCode().then(
                res => {
                    if(res.status == 200){
                        this.employee.EmployeeCode = res.data.Data;
                        this.$refs.EmployeeCode.focusInput();
                    }
                }
            ).catch(
                res => {
                    console.log(res);
                }
            )
        },
        /**
         * Focus và trường có ref truyền vào
         * author: nlanh 20/8/2021
         */
        focusInput(ref){
            if(this.$refs[ref].focusInput){
                this.$refs[ref].focusInput();
            }
        },
        async getNewCode(){
            await EmployeeAPI.newEmployeeCode().then(
                    res => {
                        if(res.status == 200){
                            this.employee.EmployeeCode = res.data.Data;
                        }
                    }
                ).catch(
                    res => {
                        console.log(res);
                    }
                )
        },
        async getEmployeeById(){
            await EmployeeAPI.getById(this.employeeId).then(
                    res => {
                        if(res.status == 200){
                            this.employee = res.data.Data;
                        } else {
                            console.log(res);
                        }
                    }
                ).catch(
                    error => {
                        console.log(error);
                    }
                )
        }
    },
    async created() {
        this.departments = JSON.parse(localStorage.getItem('departments'));

        switch (this.formMode) {
            case Enumeration.formMode.ADD:{
                //Nếu form mode là thêm mới, lấy mã nhân viên mới
                await this.getNewCode();
                break;
            }
            case Enumeration.formMode.REPLICATION: 
            case Enumeration.formMode.EDIT:{
                //Nếu form mode là nhân bản hoặc chỉnh sửa, lấy về thông tin nhân viên theo id
                await this.getEmployeeById();
                break;
            }
            default:
                break;
        }
        if(this.formMode == Enumeration.formMode.REPLICATION){
            //Nếu form mode là nhân bản lấy mã code mới
            await this.getNewCode();
        }
    },
    mounted() {
        this.$refs.EmployeeCode.focusInput();
    }
}
</script>
<style>
    @import url('../css/employee/form.css');
</style>