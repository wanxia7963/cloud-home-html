<template>
    <!-- 导航栏组件 -->
    <div id="HeaderNavigation" :class="nav ? 'bg': ''">
        <div class="Header">
            <div class="Header-Logo">
            <img src="../../img/headerImg/logo.png" alt="">
        </div>
        <div class="Header-Navigation">
            <div class="Header-Navigation-title" :class="anchor == 1? 'Header-Navigation-title active' : 'Header-Navigation-title'"   >
                <span @click="toAnchor(1)">首页</span>
            </div>
            <div class="Header-Navigation-title" :class="anchor == 2? 'Header-Navigation-title active' : 'Header-Navigation-title'"   >
                <span @click="toAnchor(2)">邻家优势</span>
            </div>
            <div class="Header-Navigation-title" :class="anchor == 3? 'Header-Navigation-title active' : 'Header-Navigation-title'"   >
                <span @click="toAnchor(3)">商家入驻</span>
            </div>
            <div class="Header-Navigation-title" :class="anchor == 4? 'Header-Navigation-title active' : 'Header-Navigation-title'"   >
                <span @click="toAnchor(4)">邻友社区</span>
            </div>
            <div class="Header-Navigation-title" :class="anchor == 5? 'Header-Navigation-title active' : 'Header-Navigation-title'"   >
                <span @click="toAnchor(5)">闲置处理</span>
            </div>
            <div class="Header-Navigation-title last" :class="anchor == 6? 'Header-Navigation-title last active' : 'Header-Navigation-title last'"   >
                <span @click="toAnchor(6)">用户权益</span>
            </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'headers',
    data(){
        return {
            nav:false
        }
    },
    props:[
        'anchor',
    ],
    mounted(){
        
        window.addEventListener('scroll',this.handleHeaderScroll)
    },
    methods:{
        handleHeaderScroll(){
             var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // window.console.log(document.documentElement.scrollTop+" "+window.pageYOffset+" "+document.body.scrollTop)
            if ((scrollTop - 80) > 0) {
                this.nav = true;
                return;
            } else {
                this.nav = false
            }
        },
        toAnchor(index){
            window.console.log(index)
            this.$emit('toAnchorByOffsetTop',index)
        }
    }
}
</script>
<style scoped>
#HeaderNavigation {
    width: 100%;
    height: 100px;
    position:fixed;
    color:#ffffff;
    z-index: 55;
    text-align: center;
    display: flex;
    justify-content: center;
    transition-property:background;
    transition-duration:0.s;
}
.bg{
    background: #212121;
    transition-property:background;
    transition-duration:0.2s;
}
#HeaderNavigation .Header{
    width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

#HeaderNavigation .Header .Header-Navigation{
    display: flex;
    line-height: 40px;
}
.Header-Navigation-title{
    margin-right: 80px;
}
.Header-Navigation-title.last{
    margin-right: 0;
}
.Header-Navigation-title span{
    height: 20px;   
    line-height: 20px;
    font-size: 16px;
    cursor:pointer;
    color:rgba(255,255,255,1);
}
.Header-Navigation-title.active{
    position: relative;
}
.Header-Navigation-title.active:after{
    content: '';
    margin: 0 auto ;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    border-radius: 2px;
    width: 75%;
    background-color: #FFFFFF;
}
</style>