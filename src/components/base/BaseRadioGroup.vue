<template>
    <div style="padding-left: 10px">
        <label :for="id" class="input-label">{{textLabel}}</label>
        <div class="radio-options flex items-center">
            <div class="radio-option flex items-center" v-for="(option, idx) in options" :key="option.value">
                <input type="radio" :value="option.value" :name="id" :id="option.value" hidden v-model="inputVal">
                <div @click="check(option)" class="my-radio" :class="{'active': inputVal === option.value}" :tabindex="tabindex + idx" @keydown="enterCheck($event, option)">
                    <div class="radio-selected"></div>
                </div>
                <label :for="option.value">{{option.text}}</label>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "BaseRadioGroup",
    props: {
        id: {
            type: String
        },
        options: {
            default: []
        },
        textLabel: {
            type: String,
            default: null
        },
        modelValue: {
        },
        tabindex: {
            type: Number
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
         * Chọn một option trong group
         * author: nlanh 20/8/2021
         */
        check(option){
            this.inputVal = option.value;
            this.$emit('onchange');
        },
        /**
         * Sự kiện nhấn nút enter khi đang focus
         * author: nlanh 20/8/2021
         */
        enterCheck(e, option){
            if(e.which == 13){
                this.check(option);
            }
        }
    },
    created() {
        if(this.options.length > 0)
            this.inputVal = this.options[0].value;
    },
}
</script>
<style>
    .radio-options {
        height: 32px;
    }
    .radio-option {
        margin-right: 20px;
    }
    .my-radio {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 1px solid #afafaf;
        background: #fff;
        display: inline-block;
        margin-right: 5px;
        cursor: pointer;
        position: relative;
    }
    .my-radio:focus{
        outline: 1px solid #e2e2e2;
    }
    .radio-selected {
        width: 10px;
        height: 10px;
        background-color: transparent;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .active.my-radio {
        border-color: #2ca01c;
    }
    .active .radio-selected {
        background-color: #2ca01c !important;
    }
</style>