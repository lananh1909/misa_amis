<template>
    <div class="input-container">
        <input type="text" class="input-field" :placeholder="placeholder" v-model="inputVal" @input="onInput()">
        <div :class="icon" class="background-image input-icon"></div>
    </div>
</template>
<script>
export default {
    name: "BaseInputIcon",
    props: {
        placeholder: {
            type: String,
            default: ""
        },
        icon: {
            type: String,
            default: ""
        },
        modelValue: {
            type: String,
            default: ""
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
         * Sự kiện input 
         * author: nlanh 20/8/2021
         */
        onInput(){
            this.$emit("input");
        }
    },
}
</script>
<style scoped>
    .input-container{
        width: 240px;
        height: 32px;
        color: inherit;
        position: relative;
        padding: 6px 10px;
        padding-right: 32px;
        border-radius: 2px;
        border: 1px solid #babec5;
        box-sizing: border-box;
    }

    .input-field {
        border: none;
    }

    .input-field:focus {
        outline: none;
    }
    .input-icon {
        position: absolute;
        width: 16px;
        height: 16px;
        top: 8px;
        right: 5px;
        margin-right: 4px;
        cursor: pointer;
    }
</style>