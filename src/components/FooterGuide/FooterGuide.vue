<template>
    <footer class="footer_guide border-1px">
        <router-link to = '/msite' class="guide_item" :class='{on: this.$route.path==="/"}' active-class="on">
        <span class="item_icon">
            <i class="iconfont icon-waimai"></i>
        </span>
        <span>外卖</span>
        </router-link>
        <router-link to = '/search' class="guide_item" active-class="on">
        <span class="item_icon">
            <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
        </router-link>
        <router-link to = '/order' class="guide_item" active-class="on">
        <span class="item_icon">
            <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
        </router-link>
        <router-link to = '/profile' class="guide_item" active-class="on">
        <span class="item_icon">
            <i class="iconfont icon-geren"></i>
        </span>
        <span>我的</span>
        </router-link>
    </footer>
</template>

<script>
export default {
    name:'FooterGuide',
    methods: {
    },
}
</script>

<style scoped>
    #app .footer_guide {
    position: relative;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
    }
    #app .footer_guide::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
    }
    #app .footer_guide .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999;
    }
    #app .footer_guide .guide_item.on {
    color: #02a774;
    }
    #app .footer_guide .guide_item span {
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 2px;
    }
    #app .footer_guide .guide_item span .iconfont {
    font-size: 22px;
    }
</style>