<template>
    <div class="menu-container">
        <div class="amis-logo flex">
            <div class="menu-opiton"></div>
            <div class="logo">
                <img src="../assets/img/Logo_Module_TiengViet_White.66947422.svg" style="height: 32px" alt="">
            </div>
        </div>
        <ul class="menu-items">
            <router-link to="/employee">
                <li class="menu-item flex" data-title="Tổng quan">
                    <div class="icon dash-board"></div>
                    <div class="title">
                        Tổng quan
                    </div>
                </li>
            </router-link>
            <router-link to="/test">
                <li class="menu-item flex" data-title="Tiền mặt">
                    <div class="icon cash"></div>
                    <div class="title">
                        Tiền mặt
                    </div>
                </li>
            </router-link>
            <li class="menu-item flex" data-title="Tiền gửi">
                <div class="icon bank"></div>
                <div class="title">
                    Tiền gửi
                </div>
            </li>
            <li class="menu-item flex" data-title="Mua hàng">
                <div class="icon buy"></div>
                <div class="title">
                    Mua hàng
                </div>
            </li>
            <li class="menu-item flex" data-title="Bán hàng">
                <div class="icon sell"></div>
                <div class="title">
                    Bán hàng
                </div>
            </li>
            <li class="menu-item flex" data-title="Quản lý đơn">
                <div class="icon invoice"></div>
                <div class="title">
                    Quản lý đơn
                </div>
            </li>
            <li class="menu-item flex" data-title="Kho">
                <div class="icon stock"></div>
                <div class="title">
                    Kho
                </div>
            </li>
            <li class="menu-item flex" data-title="Công cụ dụng cụ">
                <div class="icon tool"></div>
                <div class="title">
                    Công cụ dụng cụ
                </div>
            </li>
            <li class="menu-item flex" data-title="Tài sản cố định">
                <div class="icon fixed-assets"></div>
                <div class="title">
                    Tài sản cố định
                </div>
            </li>
            <li class="menu-item flex" data-title="Thuế">
                <div class="icon tax"></div>
                <div class="title">
                    Thuế
                </div>
            </li>
            <li class="menu-item flex" data-title="Giá thành">
                <div class="icon price"></div>
                <div class="title">
                    Giá thành
                </div>
            </li>
            <li class="menu-item flex" data-title="Tổng hợp">
                <div class="icon general"></div>
                <div class="title">
                    Tổng hợp
                </div>
            </li>
            <li class="menu-item flex" data-title="Ngân sách">
                <div class="icon budget"></div>
                <div class="title">
                    Ngân sách
                </div>
            </li>
            <li class="menu-item flex" data-title="Báo cáo">
                <div class="icon report"></div>
                <div class="title">
                    Báo cáo
                </div>
            </li>
            <li class="menu-item flex" data-title="Phân tích tài chính">
                <div class="icon finance"></div>
                <div class="title">
                    Phân tích tài chính
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    @import url('../css/page/menu.css');
</style>