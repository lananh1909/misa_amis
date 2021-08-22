<template>
    <div class="base-loading">
        <div class="loader">
            <object :data="loaderUrl"></object>
        </div>
    </div>
</template>

<style>
    .base-loading {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
        opacity: 0.5;
        z-index: 250;
        width: 100%;
        height: 100%;
    }
    .loader {
        /* border: 8px solid #f3f3f3; 
        border-top: 8px solid #3498db; */
        /* border-radius: 50%; */
        width: 31px;
        height: 31px;
        /* animation: spin 2s linear infinite; */
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -25px;
        margin-top: -25px;
        /* background: url('../../assets/loading.svg') no-repeat; */
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>

<script>
    export default {
        name: "BaseLoading",
        props: {
            isLoading: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                loaderUrl: require("../../assets/loading.svg")
            }
        },
    }
</script>