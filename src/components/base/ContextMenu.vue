<template>
    <div ref="dropdown" class="dropdown-content">
        <div class="dropdown-item" @click="replication()">{{Resources.EmployeeContext.Replication}}</div>
        <div class="dropdown-item" @click="clickDelete()">{{Resources.EmployeeContext.Delete}}</div>
        <div class="dropdown-item" @click="clickUse()">{{Resources.EmployeeContext.StopUse}}</div>
    </div>
</template>
<script>
import Resources from '../../script/common/resource-vi'
export default {
    name: "ContextMenu",
    data() {
        return {
            isShow: true,
            Resources: Resources
        }
    },
    methods: {
        /**
         * Hàm đóng mở context menu tính toán lại vị trí theo offset truyền vào
         * author: nlanh 20/8/2021
         */
        toggleDropdown(offset){
            let top = Math.round(offset.top * 10) / 10 + 32;
            let bottom = Math.round((window.innerHeight - offset.top) * 10) / 10 - 8;
            let left = Math.round(offset.left * 10) / 10 - 85;
            let dropdown = this.$refs['dropdown'];
            let style = "";
            if(bottom < 110){
                style = "bottom: " + bottom + "px; left: " + left + "px";
            } else {
                style = "top: " + top + "px; left: " + left + "px";
            }
            dropdown.setAttribute("style", style);
        },
        /**
         * Hàm trả về context element
         * author: nlanh 20/8/2021
         */
        getContextElement(){
            return this.$refs.dropdown;
        },
        /**
         * Hàm xử lý sự kiện click chọn "Nhân bản"
         * author: nlanh 20/8/2021
         */
        replication(){
            this.$emit("replication");
            this.isShow = false;
        },
        /**
         * Hàm xử lý sự kiện click chọn "Xóa"
         * author: nlanh 20/8/2021
         */
        clickDelete(){
            this.$emit("delete");
            this.isShow = false;
        },
        /**
         * Hàm xử lý sự kiện click chọn "Sử dụng"
         * author: nlanh 20/8/2021
         */
        clickUse(){
            this.$emit("use");
            this.isShow = false;
        }
    },
    mounted() {        
    },
}
</script>
<style>
    @import url('../../css/employee/action-dropdown.css');
</style>