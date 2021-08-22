<template>
    <div class="flex header">
        <div class="header-icon toggle-menu-icon"></div>
        <div class="header-branch flex">
            <div class="header-branch-name">CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ QUI PHÚC</div>
            <div class="flex items-center"><div class="header-branch-icon background-image chevron-right header-icon"></div></div>
        </div>
        <div class="flex ml-auto items-center">
            <div class="background-image notification header-icon"></div>
            <div class="account-info flex items-center">                
                <div class="user-avatar background-image user-default header-icon"></div>
                <div class="user-name">Nguyễn Lan Anh</div>
                <div class="flex items-center"><div class="background-image chevron-down header-icon"></div></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "TheHeader"
}
</script>
<style scoped>
    @import url('../css/page/header.css');
</style>