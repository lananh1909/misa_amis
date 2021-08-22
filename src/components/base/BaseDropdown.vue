<template>
    <div class="dropdown-container flex">
        <div class="dropdown-main-content">
            <input type="text" readonly class="dropdown-input" v-model="textSelected">
        </div>
        <span class="dropdown-button" ref="arrow" @click="toggleDropdown()">
            <div class="background-image arrow-dropdown"></div>
        </span>
        <div ref="dropdown" class="dropdowm-items" :class="{'hide': !isShow}">
            <div class="dropdown-item"  v-for="(item, idx) in options" :class="{'same-as-selected': item.value === selected}" @click="select(item)" :key="idx">{{item.text}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "BaseDropdown",
    data() {
        return {
            isShow: false,
            selected: 0,
            textSelected: ""
        }
    },
    props: {
        options: {
            default: [{value: 1, text: "LA"}, {value: 2, text: "LA"}]
        },
        bottom: {
            type: Boolean,
            default: false
        },
        defaultIndex: {
            type: Number,
            default: 0
        }
    },
    methods: {
        /**
         * Đóng mở dropdown khi click nút mũi tên
         * Tính lại offset cho dropdown dựa vào offset của nút mũi tên
         * author: nlanh 20/8/2021
         */
        toggleDropdown(){
            let arrow = this.$refs['arrow'];
            let offset = this.offset(arrow);
            let top = Math.round(offset.top * 10) / 10;
            let bottom = Math.round((window.innerHeight - top) * 10) / 10 + 5;
            let left = Math.round(offset.left * 10) / 10 - 172;
            let dropdown = this.$refs['dropdown'];
            let style = "bottom: " + bottom + "px; left: " + left + "px";
            dropdown.setAttribute("style", style);
            this.isShow = ! this.isShow;
        },
        /**
         * Tính vị trí của element so với top, left của body
         * author: nlanh 20/8/2021
         */
        offset(el) {
            var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        },
        /**
         * Khi click chọn option
         */
        select(item){
            this.selected = item.value;
            this.isShow = false;
            this.textSelected = item.text;
            this.$emit("onchange", this.selected);
        }
    },
    created() {
        this.selected = this.options[this.defaultIndex].value;
        this.textSelected = this.options[this.defaultIndex].text;
    },
    mounted() {
        //click ra ngoài đóng lại
        document.addEventListener('click', (e) => {
            let el = this.$refs["dropdown"];
            if(el && !(el.contains(e.target) || el === e.target || this.$refs['arrow'] !== e.target)){
                this.isShow = false;
            }
        })
    },
}
</script>
<style scoped>
    @import url('../../css/employee/dropdown.css');
</style>