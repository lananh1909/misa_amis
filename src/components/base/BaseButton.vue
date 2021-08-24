<template>
    <div ref="btn" class="my-btn" :class="type" @click="onClick()" @keydown.enter="onClick()">
        {{text}}
    </div>
</template>
<script>
import Enumeration from '../../script/common/enumeration'
export default {
    name: "BaseButton",
    props: {
        text: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: Enumeration.buttonType.DEFAULT
        }
    },
    methods: {
        /**
         * Sự kiện click button
         * author: nlanh 20/8/2021
         */
        onClick(){
            this.$emit("onClick");
        },
        /**
         * Hàm focus button
         * author: nlanh 20/8/2021
         */
        focus(){
            this.$refs.btn.focus();
        }
    },
}
</script>
<style>
    .my-btn {
        padding: 8px 20px;
        border-radius: 4px;
        cursor: pointer;
    }
    .my-btn:focus {
        outline: none;
    }
    .btn-success {
        background-color: #2ca01c;
        color: #fff;
        font-weight: 600;
        border: 1px solid transparent;
    }
    .btn-success:hover, .btn-success:focus {
        background-color: #31b220;
    }

    .btn-default, .btn-default:focus{
        border: 1px solid #8d9096;
        color: #111;
        background-color: transparent;
    }
    .btn-default:hover, .btn-default:focus {
        background-color: #d2d3d6;
    }
</style>