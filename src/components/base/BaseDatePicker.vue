<template>
    <div class="date-search-box">
        <label :for="id" class="date-input-label">{{textLabel}} <span :style="required?'color:red':'color:transparent'">*</span></label>
        <v-date-picker @dayclick="onDayClick" v-model="date" :model-config="modelConfig" :max-date='maxDate' :min-date='minDate'>
            <template v-slot="{togglePopover }">
                <div class="flex input-date">
                    <input
                        :tabindex="tabindex"
                        ref="input"
                        placeholder="DD/MM/YYYY"
                        @input="onInput()"
                        @keydown="onKeydown($event)"
                        v-model="date" @blur="validateInput()"
                    />
                    <div class="datepick-icon background-image calender" @click="togglePopover()">
                    </div>
                </div>
            </template>
        </v-date-picker>
    </div>
</template>
<script>
import formatData from '../../script/common/formatData'
export default {
    name: "BaseDatePicker",
    data() {
        return {
            modelConfig: {
                type: 'string',
                mask: 'DD/MM/YYYY', // Uses 'iso' if missing
            },
            date: null
        };
    },
    props: {
        modelValue: {
            default: null
        },
        textLabel: {
            type: String,
            default: ""
        },
        id: {
            type: String,
            default: ""
        },
        required: {
            type: Boolean,
            default: false
        },
        maxDate: {
            type: Date,
            default: null
        },
        minDate: {
            type: Date,
            default: null
        },
        tabindex: {
        }
    },
    computed: {
        /**
         * bind v-model from parent to v-model input
         */
        datepick: {
            get(){
                return this.modelValue;
            },
            set(val){
                // val = new Date(val).toLocaleDateString('en-GB');
                this.$emit('update:modelValue', val);
            }
        }
    },
    methods: {
        /**
         * Hàm giúp focus vào input
         * author: nlanh 20/8/2021
         */
        focusInput(){
            this.$refs.input.focus();
        },
        /**
         * Format ngày tháng khi blur khỏi input nếu ngày không hợp lệ set lại thành null
         * author: nlanh 20/8/2021
         */
        validateInput(){
            if(this.date){
                let tmp = this.date.split('/');
                if(tmp.length != 3){
                    this.date = null;
                }
                let d = new Date(Number(tmp[2]), Number(tmp[1]) - 1, Number(tmp[0]));
                if (Object.prototype.toString.call(d) === "[object Date]") {
                    if (isNaN(d.getTime())) {
                        this.date = null;
                    } else {
                        if(this.maxDate && d > this.maxDate){
                            this.date = null;
                        } else if(this.minDate && d < this.minDate){
                            this.date = null;
                        } else {
                            this.datepick = formatData.formatDateOutput(d);
                            this.date = d.toLocaleDateString('en-GB');
                        }
                        
                    }
                } else {
                    this.date = null;
                }
            }
            
        },
        /**
         * Chỉ cho nhập số và ký tự '/'
         * author: nlanh 20/8/2021
         */
        onKeydown(event){
            let charCode = event.which ? event.which: event.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57) && (charCode != 9 && charCode != 191) && (charCode < 96 || charCode > 105))) {
                event.preventDefault();
            } else {
                this.$emit('onchange');
                return true;
            }
        },
        /**
         * Sự kiện click chọn ngày trong calender
         */
        onDayClick(day){
            if(this.datepick == day.id){
                this.datepick = null;
            } else {
                this.datepick = day.id;
            }
            this.$emit('onchange');
        },
        /**
         * khi nhập ngày tự thêm dấu / 
         * author: nlanh 20/8/2021
         */
        //TODO: input date freetext
        onInput(){
        }
    },
    watch: {
        /**
         * KHi props modelValue thay đổi set lại value cho input
         * author: nlanh 20/8/2021
         */
        modelValue(){
            if(this.modelValue !== null)
                this.date = new Date(this.modelValue).toLocaleDateString('en-GB');
            else {
                this.date = "";
            }
        }
    }
}
</script>
<style scoped>
    @import url('../../css/employee/datepicker.css');
    input::placeholder{
        font-style: italic;
    }
</style>