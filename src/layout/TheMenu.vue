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
                <li class="menu-item flex" :data-title="Resources.Menu.DashBoard">
                    <div class="icon dash-board"></div>
                    <div class="title">
                        {{Resources.Menu.DashBoard}}
                    </div>
                </li>
            </router-link>
            <router-link to="/test">
                <li class="menu-item flex" :data-title="Resources.Menu.Cash">
                    <div class="icon cash"></div>
                    <div class="title">
                        {{Resources.Menu.Cash}}
                    </div>
                </li>
            </router-link>
            <li class="menu-item flex" :data-title="Resources.Menu.Bank">
                <div class="icon bank"></div>
                <div class="title">
                    {{Resources.Menu.Bank}}
                </div>
            </li>
            <li class="menu-item flex" :data-title="Resources.Menu.Buy">
                <div class="icon buy"></div>
                <div class="title">
                    {{Resources.Menu.Buy}}
                </div>
            </li>
            <li class="menu-item flex" :data-title="Resources.Menu.Sell">
                <div class="icon sell"></div>
                <div class="title">
                    {{Resources.Menu.Sell}}
                </div>
            </li>
            <li class="menu-item flex" :data-title="Resources.Menu.Invoice">
                <div class="icon invoice"></div>
                <div class="title">
                    {{Resources.Menu.Invoice}}
                </div>
            </li>
            <li class="menu-item flex" :data-title="Resources.Menu.Stock">
                <div class="icon stock"></div>
                <div class="title">
                    {{Resources.Menu.Stock}}
                </div>
            </li>
            <li class="menu-item flex" :data-title="Resources.Menu.Tool">
                <div class="icon tool"></div>
                <div class="title">
                    {{Resources.Menu.Tool}}
                </div>
            </li>
            <li class="menu-item flex" :data-title="Resources.Menu.FixedAssets">
                <div class="icon fixed-assets"></div>
                <div class="title">
                    {{Resources.Menu.FixedAssets}}
                </div>
            </li>
            <li class="menu-item flex" :data-title="Resources.Menu.Tax">
                <div class="icon tax"></div>
                <div class="title">
                    {{Resources.Menu.Tax}}
                </div>
            </li>
            <li class="menu-item flex" :data-title="Resources.Menu.Price">
                <div class="icon price"></div>
                <div class="title">
                    {{Resources.Menu.Price}}
                </div>
            </li>
            <li class="menu-item flex" :data-title="Resources.Menu.General">
                <div class="icon general"></div>
                <div class="title">
                    {{Resources.Menu.General}}
                </div>
            </li>
            <li class="menu-item flex" :data-title="Resources.Menu.Budget">
                <div class="icon budget"></div>
                <div class="title">
                    {{Resources.Menu.Budget}}
                </div>
            </li>
            <li class="menu-item flex" :data-title="Resources.Menu.Report">
                <div class="icon report"></div>
                <div class="title">
                    {{Resources.Menu.Report}}
                </div>
            </li>
            <li class="menu-item flex" :data-title="Resources.Menu.Finance">
                <div class="icon finance"></div>
                <div class="title">
                    {{Resources.Menu.Finance}}
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import Resources from '../script/common/resource-vi'
export default {
    name: "TheMenu",
    data() {
        return {
            Resources: Resources
        }
    },
}
</script>
<style scoped>
    @import url('../css/page/menu.css');
</style>