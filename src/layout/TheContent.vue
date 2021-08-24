<template>
    <div>
        <router-view @message="showToast($event)"/>
        <div class="messages">
             <BaseToastMessage v-for="(mess, index) in messages" :key="index" :type="mess.type" :message="mess.message"/>
        </div>
    </div>
</template>
<script>
import BaseToastMessage from '../components/base/BaseToastMessage.vue';
export default {
  components: { BaseToastMessage },
    name: "TheContent",
    data() {
        return {
            messages: []
        }
    },
    methods: {
        showToast(e){
            let me = this;
            e.id = e.type + this.messages.length;
            me.messages.push(e);
            setTimeout(function(){
                let index = me.messages.findIndex(item => item.id == e.id);
                me.messages.splice(index, 1);
            }, 1500);
        }
    },
}
</script>
<style>
    .messages {
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 15;
        top: 16px;
        right: 16px;
    }
</style>