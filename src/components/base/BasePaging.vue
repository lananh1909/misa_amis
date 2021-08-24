<template>
    <div class="paging-container flex items-center">
        <div class="paging-left">{{Resources.Paging.Total}}: <b>{{totalRecord}}</b> {{Resources.Paging.Record}}</div>
        <div class="paging-right ml-auto flex items-center">
            <div class="record-in-page">
                <BaseDropdown :bottom="false" :options="pageSizeOptions" @onchange="onChangePageSize($event)" :defaultIndex="1"/>
            </div>
            <div class="page-number flex">
                <div class="change-page prev" :class="{'disable': currentPage === 1}" @click="prev()">{{Resources.Paging.Prev}}</div>
                <div class="pages">
                    <div class="little flex" v-if="totalPage <= 7">
                        <div class="pageNum" v-for="page in totalPage" :key="page" :class="{'current-page': currentPage == page}" @click="changePage(page)">{{page}}</div>
                    </div>
                    <div class="many flex" v-if="totalPage > 7">
                        <div class="pageNum" :class="{'current-page': currentPage == 1}" @click="changePage(1)">1</div>
                        <div class="pageNum page-hide" v-if="totalPage > 7 && currentPage > 4">...</div>
                        <div class="pageNum" v-for="page in pagesShow" :key="page" :class="{'current-page': currentPage == page}" @click="changePage(page)">{{page}}</div>
                        <div class="pageNum page-hide" v-if="totalPage > 7 && currentPage < (totalPage - 3)">...</div>
                        <div class="pageNum" v-if="totalPage > 1" :class="{'current-page': currentPage == totalPage}" @click="changePage(totalPage)">{{totalPage}}</div>
                    </div>
                </div>
                <div class="change-page next" :class="{'disable': currentPage === totalPage}" @click="next()">{{Resources.Paging.Next}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import BaseDropdown from './BaseDropdown.vue'
import data from '../../constant/data'
import Resources from '../../script/common/resource-vi'
export default {
  components: { BaseDropdown },
    name: "BasePaging",
    props: {
        totalRecord: {
            type: Number,
            default: 0
        },
        totalPage: {
            type: Number,
            default: 1
        },
        currentPage: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            pageSizeOptions: [],
            Resources: Resources
        }
    },
    computed: {
        /**
         * Tính toán các trang được show ra
         * author: nlanh 20/8/2021
         */
        pagesShow(){
            if(this.currentPage <= 4){
                return [2, 3, 4];
            } else if(this.currentPage >= this.totalPage - 3){
                return [this.totalPage - 3, this.totalPage - 2, this.totalPage - 1];
            } else {
                return [this.currentPage, this.currentPage + 1, this.currentPage + 2];
            }
        }
    },
    methods: {
        /**
         * Sự kiện thay đổi kích thước trang
         * author: nlanh 20/8/2021
         */
        onChangePageSize(e){
            this.$emit("paging", {name: "pageSize", value: e});
        },
        /**
         * Sự kiện chuyển về trang trước
         * author: nlanh 20/8/2021
         */
        prev(){
            if(this.currentPage > 1)
                this.$emit('paging', {name: "pageNum", value: this.currentPage - 1});
        },
        /**
         * Sự kiện chuyển trang tiếp theo
         * author: nlanh 20/8/2021
         */
        next(){
            if(this.currentPage < this.totalPage)
                this.$emit('paging', {name: "pageNum", value: this.currentPage + 1});
        },
        /**
         * Sự kiện đổi trang bất kì
         * author: nlanh 20/8/2021
         */
        changePage(page){
            this.$emit('paging', {name: "pageNum", value: page});
        },
        /**
         * Trang chắc chắn được hiện
         * author: nlanh 20/8/2021
         */
        isShow(page) {
            if(page == 1 || page == this.totalPage){
                return false;
            }
        }
    },
    created() {
        this.pageSizeOptions = data.pageSizeOptions;
    },
}
</script>
<style>
    @import url('../../css/employee/base-paging.css');
</style>