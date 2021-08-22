<template>
    <div class="flex items-center">
        <input type="checkbox" :id="id" v-model="inputVal" hidden>
        <span class="check-box" :class="{'active': inputVal}" @click="check()">
            <span :class="{'background-image checkbox-active': inputVal}"></span>
        </span>
        <label :for="id" style="padding-left:10px" v-if="textLabel">{{textLabel}}</label>
    </div>
</template>
<script>
export default {
    name: "BaseCheckbox",
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        textLabel: {
            type: String,
            default: null
        }, 
        id: {
            type: String,
            default: null
        }
    },
    computed: {
        /**
         * bind v-model từ cha vào v-model của input
         * author: nlanh 20/8/2021
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
         * click checkbox thay đổi giá trị
         * author: nlanh 20/8/2021
         */
        check(){
            this.inputVal = !this.inputVal;
            this.$emit("onchange");
        }
    },
}
</script>
<style>
    @import url('../../css/employee/checkbox.css');
</style>