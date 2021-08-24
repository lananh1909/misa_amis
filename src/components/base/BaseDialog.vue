<template>
    <div class="myDialog">
      <DragElement>
        <div class="my-dialog-content">
          <div class="dialog-confirm-content flex">
            <div class="confirm-img">
              <div :class="type" class="background-image"></div>
              <!-- <img src="../../assets/img/warning.png" alt="" style="width:30px"> -->
            </div>
            <div class="confirm-text">{{textMessage}}</div>
          </div>
          <div class="dialog-line"></div>
          <div class="dialog-confirm-bottom">
              <div :tabindex="mode.tabIndex.dialog" @focus="$refs['confirm-btn'].focus()"></div>
            <div class="bottom-warning flex" v-if="type == mode.dialogMode.WARNING">
                <div class="footer-left">
                    <BaseButton :tabindex="mode.tabIndex.dialog + 2" :text="unConfirmText" :type="mode.buttonType.DEFAULT" @onClick="unConfirm()"/>
                </div>
                <div class="footer-right ml-auto">
                    <BaseButton :tabindex="mode.tabIndex.dialog + 1" ref="confirm-btn" :text="confirmText" :type="mode.buttonType.SUCCESS" @onClick="confirm()"/>
                </div>
            </div>
            <div class="bottom-info flex" v-else-if="type == mode.dialogMode.INFO">
                <div class="footer-right ml-auto">
                    <BaseButton :tabindex="mode.tabIndex.dialog + 1" ref="confirm-btn" :text="confirmText" :type="mode.buttonType.SUCCESS" @onClick="confirm()"/>
                </div>
            </div>
            <div class="bottom-confirm flex" v-else-if="type == mode.dialogMode.CONFIRM">
                <div class="footer-left">
                    <BaseButton :tabindex="mode.tabIndex.dialog + 3" :text="cancelText" :type="mode.buttonType.DEFAULT" @onClick="cancel()"/>
                </div>
                <div class="footer-right ml-auto flex">
                    <div style="margin-right: 8px">
                        <BaseButton :tabindex="mode.tabIndex.dialog + 2" :text="unConfirmText" :type="mode.buttonType.DEFAULT" @onClick="unConfirm()"/>
                    </div>
                    <BaseButton :tabindex="mode.tabIndex.dialog + 1" ref="confirm-btn" :text="confirmText" :type="mode.buttonType.SUCCESS" @onClick="confirm()"/>
                </div>
            </div>

            <div class="bottom-danger flex" v-else>
                <BaseButton :tabindex="mode.tabIndex.dialog + 1" ref="confirm-btn" :text="confirmText" :type="mode.buttonType.SUCCESS" @onClick="confirm()"/>
            </div>
            <div :tabindex="mode.tabIndex.dialog + 4" @focus="$refs['confirm-btn'].focus()"></div>
          </div>
      </div>
      </DragElement>
            
    </div>
</template>

<style scoped>
    @import '../../css/employee/dialog.css';
</style>

<script>
import Enumeration from '../../script/common/enumeration';
import BaseButton from './BaseButton.vue';
import DragElement from './DragElement.vue';
export default {
  components: { BaseButton, DragElement },
    name: "BaseDialog",
    data() {
      return {
        mode: Enumeration,
      }
    },
    props: {
        textMessage: {
            default: "",
            type: String
        },
        type: {
            type: String,
            required: true,
            default: Enumeration.dialogMode.CONFIRM
        },
        cancelText: {
            type: String
        },
        confirmText: {
            type: String
        },
        unConfirmText: {
            type: String
        }
    },
    methods: {
      /**
       * Sự kiện click nút hủy
       * author: nlanh 20/8/2021
       */
      cancel(){
          this.$emit('cancel');
      },
      /**
       * Sự kiện click nút đồng ý
       * author: nlanh 20/8/2021
       */
      confirm(){
          this.$emit('confirm');
      },
      /**
       * Sự kiện click nút không
       * author: nlanh 20/8/2021
       */
      unConfirm(){
          this.$emit("unconfirm");
      },
    },
    mounted() {
      //Tự động focus vào nút confirm ngay khi khởi tạo
      this.$refs['confirm-btn'].focus();
    },
}
</script>