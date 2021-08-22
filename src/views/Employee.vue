<template>
    <div class="employee-container">
        <div class="employee-header">
            <div class="flex">
                <div class="employee-title">Nhân viên</div>
                <div class="ml-auto">
                    <BaseButton text="Thêm mới nhân viên" :type="mode.buttonType.SUCCESS" @click="openForm(mode.formMode.ADD)"/>
                </div>
            </div>
        </div>
        <div class="content-container">
            <div class="employee-content">
                <div class="employee-action flex items-center">
                    <div class="ml-auto">
                        <BaseInputIcon placeholder="Tìm theo mã, tên nhân viên hoặc số điện thoại" v-model="filter.employeeFilter" icon="search-icon" @input="onChangeSearchKey()"/>
                    </div>
                    <div data-title="Lấy lại dữ liệu" class="background-image refresh ml-15 cursor-pointer" @click="filterEmployee()"></div>
                </div>
                <TableEmployee :employees="employees" @delete="deleteEmployee($event)" @dbclick="editEmployee($event)" @replication="replication($event)" :isLoading="loading"/>
                <div class="content-bottom">
                    <BasePaging :totalRecord="TotalRecord" :totalPage="TotalPage" :currentPage="CurrentPage" @paging="pagingChange($event)"/>
                </div>
            </div>
        </div>
        <BaseDialog v-if="showDialog" :textMessage="dialogInfo.text" 
        :type="dialogInfo.type" :cancelText="dialogInfo.cancelText" 
        :confirmText="dialogInfo.confirmText" :unConfirmText="dialogInfo.unConfirmText"
        @cancel="dialogCancel()" @confirm="dialogConfirm()" @unconfirm="dialogUnconfirm()"/>
        <EmployeeForm :employeeId="employeeId" ref="employeeForm"
        v-if="showForm" @close="closeForm($event)" @success="formSuccess($event)" 
        @error-validate="formError($event)" :formMode="formMode"
        @error-danger="formDanger($event)"
        />
    </div>
</template>
<script>
import BaseButton from '../components/base/BaseButton.vue'
import BaseInputIcon from '../components/base/BaseInputIcon.vue'
import TableEmployee from './TableEmployee.vue'
import EmployeeAPI from '../api/component/employee/EmployeeAPI'
import Enumeration from '../script/common/Enumeration'
import BasePaging from '../components/base/BasePaging.vue'
import BaseDialog from '../components/base/BaseDialog.vue'
import EmployeeForm from './EmployeeForm.vue'
import DepartmentAPI from '../api/component/department/DepartmentAPI'
export default {
  components: { BaseButton, BaseInputIcon, TableEmployee, BasePaging, BaseDialog, EmployeeForm },
    name: "Employee",
    data() {
        return {
            employees: [{}, {}, {}],
            filter: {
                pageSize: 20,
                pageNumber: 0,
                employeeFilter: '',
            },
            TotalPage: 1,
            TotalRecord: 0,
            timeout: null,
            loading: false,
            mode: Enumeration,
            showDialog: false,
            dialogInfo: {},
            showForm: false,
            formMode: null,
            departments: [],
            employeeId: null
        }
    },
    computed: {
        CurrentPage() {
            return this.filter.pageNumber + 1;
        }
    },
    methods: {
        /**
         * GỌi API lấy danh sách nhân viên theo các tiêu chí lọc và phân trang
         * author: nlanh 20/8/2021
         */
        filterEmployee(){
            this.loading = true;
            EmployeeAPI.filter(this.filter)
            .then(
                res => {
                    this.employees = res.data.Data.Data;
                    this.TotalPage = res.data.Data.TotalPage;
                    this.TotalRecord = res.data.Data.TotalRecord;
                    this.loading = false;
                }
            ).catch(
                () => {
                    this.loading = false;
                }
            )
        },
        /**
         * delay search khi nhập từ khóa tìm kiếm
         * author: nlanh 20/8/2021
         */
        onChangeSearchKey(){
            if(this.timeout){
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(() => {
                this.filter.pageNumber = 0;
                this.filterEmployee();
            }, 1000)
        },
        /**
         * Sự kiện thay đổi các giá trị phân trang: pageSize/pageNum
         * author: nlanh 20/8/2021
         */
        pagingChange(e){
            switch (e.name) {
                case "pageSize":
                    this.filter.pageNumber = 0;
                    this.filter.pageSize = e.value;
                    this.filterEmployee();
                    break;
                case "pageNum": 
                    this.filter.pageNumber = e.value - 1;
                    this.filterEmployee();
                    break;
                default:
                    break;
            }
        },
        //Các hàm xử lý sự kiện với dialog
        /**
         * Mở dialog
         * author: nlanh 20/8/2021
         */
        openDialog(){
            this.showDialog = true;
        },
        /**
         * Đóng dialog
         * author: nlanh 20/8/2021
         */
        closeDialog(){
            this.showDialog = false;
            this.dialogInfo = {}
        },
        /**
         * Hàm click đồng ý của dialog
         * author: nlanh 20/8/2021
         */
        dialogConfirm(){
            this.dialogInfo.action();
            this.closeDialog();
        },
        /**
         * Hàm hủy dialog
         * author: nlanh 20/8/2021
         */
        dialogCancel(){
            this.closeDialog();
        },
        /**
         * Hàm không đồng ý dialog
         * author: nlanh 20/8/2021
         */
        dialogUnconfirm(){
            this.dialogInfo.unconfirm();
            this.closeDialog();
        },
        //Các hàm xử lý sự kiện với form
        /**
         * Mở form
         * author: nlanh 20/8/2021
         */
        openForm(formMode){
            this.formMode = formMode;
            this.showForm = true;
        },
        /**
         * Đóng form
         * author: nlanh 20/8/2021
         */
        closeForm(e){
            if(!e){
                //Nếu không thay đổi dữ liệu
                this.showForm = false;
            } else {
                //Nếu dữ liệu bị thay đổi hỏi trước khi đóng
                this.dialogInfo = {
                    text: "Dữ liệu đã bị thay đổi. Bạn có muốn cất không?",
                    type: Enumeration.dialogMode.CONFIRM,
                    confirmText: "Có",
                    unConfirmText: "Không",
                    cancelText: "Hủy",
                    action: () => {
                        this.$refs.employeeForm.submit(true);
                    },
                    unconfirm: () => {
                        this.showForm = false;
                    }
                }
                this.openDialog();
            }
        },
        /**
         * Sự kiện sau khi form cất thành công
         * author: nlanh 20/8/2021
         */
        formSuccess(e){
            if(e){
                //Cất
                this.closeForm();
            } else {
                //Cất và thêm
                this.$refs.employeeForm.genNewCreate();
            }
            this.filterEmployee();
        },
        /**
         * Form cất lỗi
         * author: nlanh 20/8/2021
         */
        formError(e){
            this.dialogInfo = {
                text: e.msg,
                type: Enumeration.dialogMode.INFO,
                confirmText: "Đồng ý",
                action: () => {
                    this.closeDialog();
                    this.$refs.employeeForm.focusInput(e.data);
                }
            }
            this.openDialog();
        },
        formDanger(e){
            this.dialogInfo = {
                text: e.msg,
                type: Enumeration.dialogMode.DANGER,
                confirmText: "Đóng",
                action: () => {
                    this.closeDialog();
                    this.$refs.employeeForm.focusInput(e.data);
                }
            }
            this.openDialog();
        },
        /**
         * Xóa nhân viên
         * author: nlanh 20/8/2021
         */
        deleteEmployee(e){
            this.dialogInfo = {
                text: "Bạn có thực sự muốn xóa Nhân viên <" + e.EmployeeCode + "> không?",
                type: Enumeration.dialogMode.WARNING,
                confirmText: "Có",
                unConfirmText: "Không",
                action: () => {
                    //Đồng ý xóa
                    EmployeeAPI.delete(e.EmployeeId).then(
                        res => {
                            if(res.status == 200)
                                this.filterEmployee();
                        }
                    ).catch(
                        error => {
                            console.log(error);
                        }
                    )
                },
                unconfirm: () => {
                    //KHông đồng ý đóng dialog
                    this.closeDialog();
                }
            }
            this.openDialog();
        },
        /**
         * Sửa nhân viên
         * author: nlanh 20/8/2021
         */
        editEmployee(e){
            this.openForm(Enumeration.formMode.EDIT);
            this.employeeId = e;
        },
        /**
         * Nhân bản nhân viên
         * author: nlanh 20/8/2021
         */
        replication(e){
            this.openForm(Enumeration.formMode.REPLICATION);
            this.employeeId = e;
        }
    },
    created() {
        this.filterEmployee();
        //Lấy dữ liệu phòng ban
        DepartmentAPI.getAll()
        .then(
            res => {
                let departments = [];
                let data = res.data.Data;
                if(data){
                    data.map(item => {
                        let tmp = {};
                        tmp["value"] = item.DepartmentId;
                        tmp["text"] = item.DepartmentName;
                        tmp["key"] = item.DepartmentCode;
                        departments.push(tmp);
                    })
                }
                this.departments = departments;
                localStorage.setItem('departments', JSON.stringify(departments));   
            }
        )
        .catch(
            e => {
                console.log(e);
            }
        )
    },
}
</script>
<style scoped>
    @import url('../css/employee/employee.css');
</style>