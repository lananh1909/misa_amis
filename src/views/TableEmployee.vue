<template>
    <div class="table-employee">
        <div class="table-container">
            <table class="my-table">
                <thead>
                    <tr>
                        <th><BaseCheckbox @onchange="checkAll()" v-model="selectAll"/></th>
                        <th>Mã nhân viên</th>
                        <th>Tên nhân viên</th>
                        <th>Giới tính</th>
                        <th class="justify-center">Ngày sinh</th>
                        <th>Số CMND</th>
                        <th>Chức danh</th>
                        <th>Tên đơn vị</th>
                        <th>Số tài khoản</th>
                        <th>Tên ngân hàng</th>
                        <th class="before-last">Chi nhánh TK ngân hàng</th>
                        <th class="justify-center">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, idx) in employees" :key="item.EmployeeId" @click="onClickRow(idx)" @dblclick="dbClickRow(item)" :class="{'row-selected': idx == selected}">
                        <td><span class="skeleton" v-if="isLoading"></span><BaseCheckbox v-else @onchange="selectRow(item)" v-model="item.selected"/></td>
                        <td>
                            <span class="skeleton" v-if="isLoading"></span>
                            <span v-else>{{item.EmployeeCode}}</span>
                        </td>
                        <td>
                            <span class="skeleton" v-if="isLoading"></span>
                            <span v-else>{{item.EmployeeName}}</span>
                        </td>
                        <td>
                            <span class="skeleton" v-if="isLoading"></span>
                            <span v-else>{{item.GenderName}}</span>
                        </td>
                        <td class="justify-center">
                            <span class="skeleton" v-if="isLoading"></span>
                            <span v-else>{{formatDate(item.DateOfBirth)}}</span>
                        </td>
                        <td>
                            <span class="skeleton" v-if="isLoading"></span>
                            <span v-else>{{item.IdentityNumber}}</span>
                        </td>
                        <td>
                            <span class="skeleton" v-if="isLoading"></span>
                            <span v-else>{{item.EmployeePosition}}</span>
                        </td>
                        <td>
                            <span class="skeleton" v-if="isLoading"></span>
                            <span v-else>{{item.DepartmentName}}</span>
                        </td>
                        <td>
                            <span class="skeleton" v-if="isLoading"></span>
                            <span v-else>{{item.BankAccountNumber}}</span>
                        </td>
                        <td>
                            <span class="skeleton" v-if="isLoading"></span>
                            <span v-else>{{item.BankName}}</span>
                        </td>
                        <td class="before-last">
                            <span class="skeleton" v-if="isLoading"></span>
                            <span v-else>{{item.BankBranchName}}</span>
                        </td>
                        <td>
                            <span class="skeleton" v-if="isLoading"></span>
                            <span v-else>
                                <div class="action-dropdown-container flex justify-end">
                                    <div class="edit-btn items-center flex" @click="dbClickRow(item)"><div class="action-btn">Sửa</div> </div>
                                    <div class="btn-arrow flex justify-center items-center" :ref="'arrow' + idx" >
                                        <div class="background-image arrow-up-blue action-btn" @click="showContext($event, item, idx)"></div>
                                    </div> 
                                </div>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <ContextMenu ref="context" v-show="isShow" @delete="deleteEmployee()" @replication="replication()"/>
    </div>
    
</template>
<script>
import BaseCheckbox from '../components/base/BaseCheckbox.vue';
import FormatData from '../script/common/formatData';
import ContextMenu from '../components/base/ContextMenu.vue';
export default {
  components: { BaseCheckbox, ContextMenu },
    name: "TableEmployee",
    props: {
        employees: {
            default: [
                {EmployeeCode: 1}, {EmployeeCode:2}
            ],
        },
        isLoading: {
            default: false
        }
    },
    data() {
        return {
            selected: -1,
            selectAll: false,
            employee: null,
            isShow: false,
            offsetContext: {}
        }
    }, 
    methods: {
        /**
         * sự kiện click arrow icon tính toán vị trí và hiện context menu
         */
        showContext(e, item, idx){
            e.stopPropagation();
            if(idx == this.selected && this.isShow == true){
                this.isShow = false;
                this.employee = null;
            } else {
                this.offsetContext = this.offset(this.$refs['arrow' + idx]);
                this.employee = item;
                this.isShow = true;
                this.selected = idx;
                this.$refs.context.toggleDropdown(this.offsetContext);
            }
            
        },
        /**
         * hàm tinhs vị trí của element so với body
         * author: nlanh 20/8/2021
         */
        offset(el) {
            var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        },
        /**
         * Hàm sự kiện click chọn một dòng
         * author: nlanh 20/8/2021
         */
        onClickRow(idx) {
            this.selected = idx;
        },
        /**
         * Sự kiện double click trên dòng
         * author: nlanh 20/8/2021
         */
        dbClickRow(item){
            this.$emit("dbclick", item.EmployeeId);
        },
        /**
         * format date to dd/mm/yyyy to display in table
         * author: nlanh 20/8/2021
         */
        formatDate(val){
            return FormatData.formatDate(val);
        },
        /**
         * Nhân bản nhân viên
         * author: nlanh 20/8/2021
         */
        replication(){
            this.$emit("replication", this.employee.EmployeeId);
            this.isShow = false;
        },
        /**
         * Xóa nhân viên
         * author: nlanh 20/8/2021
         */
        deleteEmployee(){
            this.$emit("delete", this.employee);
            this.isShow = false;
        },
        /** 
         * Sự kiện tích vào checkbox của mỗi hàng
         */
        selectRow(item) {
            if(item.selected === false){
                this.selectAll = false;
            } else {
                let all = 0;
                this.employees.forEach(element => {
                    if(element.selected){
                        all++;
                    } else {
                        return;
                    }
                });
                if(all == this.employees.length){
                    this.selectAll = true;
                }
            }
        },
        /**
         * Sự kiện tích chọn checkbox header -> chọn/bỏ chọn tất cả
         * author: nlanh 20/8/2021
         */
        checkAll(){
            this.employees.map(item => {
                item.selected = this.selectAll;
            })
        }
    },
    mounted() {
        //click ra ngoài đóng lại
        let el;
        document.addEventListener('click', (e) => {
            if(this.$refs['context']){
                el = this.$refs["context"].getContextElement();
                // let arrow = this.$refs['arrow' + this.selected];
                if(el && !(el.contains(e.target) || el === e.target)){
                    this.isShow = false;
                }
            }
        })
    },
}
</script>
<style scoped>
    @import url('../css/employee/table.css');
    @import url('../css/employee/action-dropdown.css');
</style>