<template>
    <div class="date-search-box">
        <label :for="id" class="date-input-label">{{textLabel}} <span :style="required?'color:red':'color:transparent'">*</span></label>
        <div class="my-custom-select" ref="combobox" :title="error && errorMessage"  :class="{'select-arrow-active': selecting, 'error': error}">
            <input :tabindex="tabindex" type="text" :id="id" v-model="text" ref="inputBox" @input="autoComplete()" @focus="autoComplete()" @keydown="changeOption($event)" @blur="validateInput()">     
            <!-- <div class="clearBtn" v-if="text" @click="clearInput()"><img style="height:13px;" src="../../assets/icon/x.svg" alt=""></div>  -->
            <!-- <div class="errorMessage" v-if="error">
                <p>{{errorMessage}}</p>
                <div class="bottom"></div>
            </div>                 -->
            <div class="select-items" v-if="selecting">
                <div v-for="(option, index) in options" @mousedown="select(option)" :key="index"
                :class="{'same-as-selected': option.value === value, 'hide': !option.text.toLowerCase().startsWith(text.toLowerCase()) && !selectIcon, 'hover': index === first && !selectIcon}"
                class="flex"
                >
                <div class="select-item" v-if="option.key">{{option.key}}</div>
                <div class="select-item">{{option.text}}</div>
                </div>
            </div>
            <div class="select-icon flex items-center justify-center" @mousedown="toggleSelect()">
                <div class="background-image arrow-dropdown"></div>
            </div>
        </div> 
    </div>
         
</template>
<script>
export default {
    name: "BaseComboBox",
    data() {
        return {
            errorMessage: "Dữ liệu " + this.textLabel +" không tồn tại trong hệ thống",
            error: false,
            selecting: false,
            text: "",
            selectIcon: false,
            first: 0,
            options: []
        }
    },
    props: {
        modelValue: {
            default: null
        },
        id: {},
        tabindex: {},
        textLabel: {
            type: String,
            default: ""
        },
        items: {
            default: [
                {
                    value: 1,
                    text: "LAN ANH"
                },
                {
                    value: 2,
                    text: "LAN ANH"
                },
                {
                    value: 3,
                    text: "LAN ANH"
                }
            ],
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        /**
         * bind v-model from parent to v-model input
         */
        value: {
            get(){
                return this.modelValue;
            },
            set(val){
                this.$emit('update:modelValue', val);
                if(val === null){
                    this.setText("");
                } else {
                    this.options.map((item) => {
                    if(val === item.value){
                            this.setText(item.text);
                        }
                    })
                    this.$emit('onchange');
                }
            }
        }
    },
    methods: {
        /**
         * set text vào input khi value thay đổi
         * author: nlanh 20/8/2021
         */
        setText(text){
            this.text = text;
        },
        /**
         * đóng dropdown
         * author: nlanh 20/8/2021
         */
        onClose(){
            this.selecting = false;
        },
        /** 
         * đóng mở dropdown khi click vào nút mũi tên
         * author: nlanh 20/8/2021
         */
        toggleSelect(){
            this.selecting = !this.selecting;   
            this.selectIcon = true;         
        },
        /**
         * Sự kiện click vào một lựa chọn set lại text và value
         * author: nlanh 20/8/2021
         */
        select(option){
            this.error = false;
            let selectedOption = this.options.find(item => item.value == option.value);
            this.value = selectedOption.value;
            // this.setValue(selectedOption.value);
            this.selecting = false;
        },
        /**
         * khi nhập input mở dropdown và xử lý sự kiện autocomplete
         * author: nlanh 20/8/2021
         */
        autoComplete(){
            this.error = false;
            this.selectIcon = false;
            this.selecting = true;
            this.value = "";
            // this.setValue("");
            this.first = -1;
            let me = this;
            this.options.map((item, idx) => {
                if(item.text.toLowerCase().startsWith(me.text.toLowerCase())){
                    if(me.first == -1 )
                        me.first = idx;
                    item.match = true;
                } else {
                    item.match = false;
                }
            });
            if(this.first == -1){
                this.error = true;
            }
        },
        /**
         * Thay đổi option bằng bàn phím
         * author: nlanh 20/8/2021
         */
        changeOption(event){
            switch(event.keyCode){
                case 40: {
                    let tmp = this.first;
                    while(tmp < this.options.length - 1 && !this.options[tmp+1].match){
                        tmp = tmp + 1;
                    }
                    tmp = tmp + 1;
                    if(tmp < this.options.length)
                        this.first = tmp;
                    break;
                }
                case 38: {
                    let tmp = this.first;
                    while(tmp > 0 && !this.options[tmp-1].match){
                        tmp = tmp -1;
                    }
                    tmp = tmp - 1;
                    if(tmp >= 0)
                        this.first = tmp;
                    break;
                } 
                case 13 : {
                    this.select(this.options[this.first]);
                    break;
                }
            }
        }, 
        /**
         * khi blur khỏi input kiểm tra giá trị nhập có tồn tại hay không và hiển tị tooltip thông báo lỗi
         * author: nlanh 20/8/2021
         */
        validateInput(){
            if(this.required && !this.value){
                this.error = true;
                this.errorMessage = this.textLabel + " không được để trống!";
            }
            if(!this.selectIcon){
                let find = false;
                this.selecting = false;
                this.options.map((item) => {
                    if(item.text.toLowerCase() == this.text.toLowerCase()){
                        find = true;
                        this.select(item);
                        return false;
                    }
                });
                if(!find && this.text != ""){
                    this.error = true;
                    this.errorMessage = "Dữ liệu " + this.textLabel + " không tồn tại trong hệ thống!";
                }
            }
        },
        focusInput(){
            this.$refs.inputBox.focus();
        },
        /**
         * Hàm giúp reset combobox về giá trị trống hoặc mặc định
         * author: nlanh 20/8/2021
         */
        resetInput(){
            if(this.defaultValue){
                this.value = this.defaultValue;
                // this.setValue(this.defaultValue);
            } else {
                this.value = "";
                // this.setValue("");
                this.setText("");
                this.$emit('select', {value: this.value, name: this.nameValue});
            }
            this.selecting = false;
        }
    },
    created() {
        /**
         * Thêm sự kiện click ra ngoài đóng combobox
         */
        document.addEventListener('click', (e) => {
            let el = this.$refs["combobox"];
            if(el && !(el.contains(e.target) || el === e.target)){
                this.onClose();
            }
        })

        this.options = this.items;
        
        // if(this.itemName){
        //     Array.prototype.push.apply(this.options, JSON.parse(localStorage.getItem(this.itemName)));
        // }
    },
    watch: {
        modelValue() {
            if(this.modelValue === null){
                this.setText("");
            } else 
                this.options.map((item) => {
                    if(this.modelValue === item.value){
                        this.setText(item.text);
                    }
                })
        }
    }
}
</script>
<style scoped>
    @import '../../css/employee/combobox.css';
</style>