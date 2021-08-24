<template>
    <div class="flex message-container" :class="type">
        <div class="toast-icon background-image" :class="type"></div>
        <div class="message">{{message}}</div>
    </div>
</template>
<script>
import Enumeration from '../../script/common/enumeration'
export default {
    name: 'ToastMessage',
    props: {
        type: {
            type: String,
            default: Enumeration.toastMode.SUCCESS
        },
        message: {
            type: String,
            default: ""
        }
    },
    methods: {
        closeToast() {
            this.$emit('close');
        }
    },
}
</script>
<style scoped>
    @import url('../../css/common.css');
    @import url('../../css/employee/toast-message.css');
</style>