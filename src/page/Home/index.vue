<template>
    <div class="Home-Page">
        <HeaderNavigation :anchor="homeAnchor" @toAnchorByOffsetTop="toAchar"></HeaderNavigation>
        <div ref="one" class="Home-Page-div Home-Page-first">
            <canvas id="canvas" width="1950px" height="968px;"></canvas>
            <canvas id="canvasbg" width="1950px" height="968px"></canvas>
            <div class="Home-Page-first-content">
                    <div class="left animated fadeInLeft">
                        <div class="left-content one">
                            <span class="title">邻家平台APP</span>
                        </div>
                        <div class="left-content two">
                            <span class="message">分享社交电商新领袖，汇聚海量网购优惠券</span>
                        </div>
                        <div class="left-content three">
                            <div class="three-erweima-img">
                                <img src="../../img/code.png" alt="">
                                <img style="margin-left:35px;width:240px;" src="../../img/1(1).png" alt="">
                            </div>
                        </div>
                        <div class="left-content four">
                            <div class="four-download-img">
                                <img @mouseover="mouseAndroid()" @mouseout="mouseoutAndroid()" style="margin-right:20px;" :src="androidUrl" alt="">
                                <img @mouseover="mouseIos()" @mouseout="mouseoutIos()" :src="iosUrl" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="right animated fadeInRight">
                        <img style="width:590px;margin-left:70px;" src="../../img/phone.png" alt="">
                    </div>
                </div>
            
        </div>
        <div ref="two" class="Home-Page-div Home-Page-second">
            <div class="Home-Page-second-content">
                <div ref="secondTitle" class="sloganeer">
                   <img  v-show="secondTitleShow" class="animated fadeInUp" src="../../img/ys.png" alt="">
                </div>
                <div class="card" ref="secondCard">
                    <div v-show="secondCardShow" @mouseenter="mousesecondCard($event)" @mouseleave="mouseoutsecondCard($event)" class="card-content animated slideInUp">
                        <div class="card-content-img">
                            <img id="imgs"  class="card-img" src="../../img/Group 2(2).png" alt="">
                            <span class="card-img-title">购物省钱</span>
                        </div>
                        <span class="card-content-desc">
                            Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed,
                        </span>
                    </div>
                    <div  v-show="secondCardShow"  @mouseenter="mousesecondCard($event)" @mouseleave="mouseoutsecondCard($event)" class="card-content animated slideInUp">
                        <div class="card-content-img">
                            <img  class="card-img" src="../../img/Group 2(1).png" alt="">
                            <span class="card-img-title">闲置赚钱</span>
                        </div>
                        <span class="card-content-desc">
                            Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed, 
                        </span>
                    </div>
                    <div  v-show="secondCardShow"  @mouseenter="mousesecondCard($event)" @mouseleave="mouseoutsecondCard($event)" class="card-content animated slideInUp">
                        <div class="card-content-img">
                            <img  class="card-img" src="../../img/Group 2.png" alt="">
                            <span class="card-img-title">商家推广</span>
                        </div>
                        <span class="card-content-desc">
                            Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed, 
                        </span>
                    </div>
                    <div  v-show="secondCardShow"  @mouseenter="mousesecondCard($event)" @mouseleave="mouseoutsecondCard($event)" class="card-content animated slideInUp">
                        <div class="card-content-img">
                            <img  class="card-img" src="../../img/Group 2 Copy 3.png" alt="">
                            <span class="card-img-title">团队提成</span>
                        </div>
                        <span class="card-content-desc">
                            Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed, 
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div ref="three" class="Home-Page-div Home-Page-third">
            <div class="Home-Page-third-content">
                <div ref="thirdTitle"  class="sloganeer ">
                   <img v-show="thirdTitleShow" class="animated fadeInUp" src="../../img/商家入驻.png" alt="">
                </div>
                <div class="merit">
                    <div ref="thirdBgImg" class="meritBackground">
                        <img v-show="thirdBgImgShow" class="merit-bg animated slideInUp"  src="../../img/041f6d5f3e0fc445b0a4f1e752d33c83.png" alt="">
                    </div>
                    
                    <div class="merit-content">
                        <div ref="thirdDescOne" class="merit-content-top">
                            <div v-show="thirdDescOneShow" class="merit-desc animated slideInLeft">
                                <img class="merit-img" src="../../img/merit/1.png" alt="">
                                <div class="desc">
                                    <div class="desc-title">
                                        <span>平台引流，</span>
                                        <span style="color:#FF5B57">提升销量</span>
                                    </div>
                                    <span class="desc-ms">邀请其他人成为你的粉丝，粉丝在APP内购物，你可以享受粉丝消费收益的部分奖励，升级推广专员，收益更高</span>
                                </div>
                            </div>
                        </div>
                        <div class="merit-content-bottom">
                            <div ref="thirdDescTwo">
                                <div v-show="thirdDescOneShow"   class="merit-desc animated slideInLeft">
                                    <img class="merit-img" src="../../img/merit/2.png" alt="">
                                    <div class="desc">
                                        <div class="desc-title">
                                            <span>免费推广，</span>
                                            <span style="color:#2E73FF">合作双赢</span>
                                        </div>
                                        <span class="desc-ms">邀请其他人成为你的粉丝，粉丝在APP内购物，你可以享受粉丝消费收益的部分奖励，升级推广专员，收益更高</span>
                                    </div>
                                </div>
                            </div>
                            <div ref="thirdDescThree">
                                <div v-show="thirdDescOneShow"  class="merit-desc animated slideInRight">
                                    <img class="merit-img" src="../../img/merit/3.png" alt="">
                                    <div class="desc">
                                        <div class="desc-title">
                                            <span>真实用户，</span>
                                            <span style="color:#2E73FF">信誉保证</span>
                                        </div>
                                        <span class="desc-ms">邀请其他人成为你的粉丝，粉丝在APP内购物，你可以享受粉丝消费收益的部分奖励，升级推广专员，收益更高</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref="four" class="Home-Page-div Home-Page-fourth">
            <img style="position:absolute" src="../../img/background/chat.png" alt="">
            <div class="fourth-content">
                <div ref="fourthLeftImg" class="fourth-content-left">
                    <img v-show="fourthLeftImgShow" class="animated slideInLeft" src="../../img/chat.png" alt="">
                </div>
                <div ref="fourthRightChat" class="fourth-content-right">
                    <div v-show="fourthRightChatShow" class="animated slideInRight">
                        <div class="fourth-right-top">
                            <span class="fourth-top-title">邻家社区随时随地畅快聊天</span>
                            <span class="fourth-top-desc">邻家社区随时随地畅快聊天，结交四海之内的知心朋友～</span>
                        </div>
                        <div class="fourth-right-mid">
                            <img style="width:590px" src="../../img/undraw_experts3_3njd.png" alt="">
                        </div>
                        <div class="fourth-right-bot">
                            <div class="fourth-bot-slogan">
                                <img src="../../img/aixin.png" alt="">
                                <span class="fourth-bot-desc">邻家社区随时随地畅快聊～</span>
                            </div>
                            <div class="fourth-bot-slogan" style="margin-top:50px;">
                                <img src="../../img/people.png" alt="">
                                <span class="fourth-bot-desc">邻家社区四海之内皆朋友～</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref="five" class="Home-Page-div Home-Page-fifth">
            <div class="Home-Page-fifth-top">
                <div ref="fifthTitle" class="sloganeer" style="margin-top:45px">
                   <img v-show="fifthTitleShow" class="animated fadeInUp" src="../../img/闲置动起来.png" alt="">
                </div>
                <div class="skip-container">
                    <div @mouseover="selectTimer(0)"  class="fifth-skip" :class="current === 0 ? 'fifth-skip active':'fifth-skip'">
                        <img v-if="current == 0" src="../../img/flag1.png" alt="">
                        <img v-else src="../../img/flag.png" alt="">
                        <span class="skip-title">丰富物品</span>
                    </div>
                    <div @mouseover="selectTimer(1)"  class="fifth-skip" :class="current === 1 ? 'fifth-skip active':'fifth-skip'">
                        <img v-if="current == 1" src="../../img/computer1.png" alt="">
                        <img v-else src="../../img/computer.png" alt="">
                        <span class="skip-title">交易安全</span>
                    </div>
                    <div @mouseover="selectTimer(2)"  class="fifth-skip" :class="current === 2 ? 'fifth-skip active':'fifth-skip'">
                        <img v-if="current == 2" src="../../img/harddisk1.png" alt="">
                        <img v-else src="../../img/harddisk.png" alt="">
                        <span class="skip-title">买卖舒心</span>
                    </div>
                </div>
            </div>
            
            <div  class="Home-Page-third-bot">
                <div v-if="current === 0" class="third-bot-content">
                    <div class="third-bot-content-left">
                        <div class="one">
                            <span>各类物品，满足需求1</span>
                        </div>
                        <div  class="two">
                            <span>SEE = Seeking Experience & Engineering，意为探索用户体验与工程实践，</span>
                            <span style="margin-top:10px;">SEE = Seeking Experience & Engineering，意为探索用户体验与工程实践，</span>
                        </div>
                        <div  class="three">
                            <img src="../../img/位图(1).png" alt="">
                            <div class="three-desc">
                                <span class="four-desc-title">邻家平台</span>
                                <div class="four-desc-ms">
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                </div>
                            </div>
                        </div>
                        <div  class="four">
                            <img src="../../img/位图(1).png" alt="">
                            <div class="four-desc">
                                <span class="four-desc-title">邻家平台</span>
                                <div class="four-desc-ms">
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="third-bot-content-right">
                        <img  src="../../img/analysischart.png" alt="">
                    </div>
                </div>
                <div v-if="current === 1" class="third-bot-content">
                    <div class="third-bot-content-left">
                        <div class="one">
                            <span>各类物品，满足需求2</span>
                        </div>
                        <div  class="two">
                            <span>SEE = Seeking Experience & Engineering，意为探索用户体验与工程实践，</span>
                            <span style="margin-top:10px;">SEE = Seeking Experience & Engineering，意为探索用户体验与工程实践，</span>
                        </div>
                        <div  class="three">
                            <img src="../../img/位图(1).png" alt="">
                            <div class="three-desc">
                                <span class="four-desc-title">邻家平台</span>
                                <div class="four-desc-ms">
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                </div>
                            </div>
                        </div>
                        <div  class="four">
                            <img src="../../img/位图(1).png" alt="">
                            <div class="four-desc">
                                <span class="four-desc-title">邻家平台</span>
                                <div class="four-desc-ms">
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="third-bot-content-right">
                        <img  src="../../img/analysischart.png" alt="">
                    </div>
                </div>
                <div v-if="current === 2" class="third-bot-content">
                    <div class="third-bot-content-left">
                        <div class="one">
                            <span>各类物品，满足需求3</span>
                        </div>
                        <div  class="two">
                            <span>SEE = Seeking Experience & Engineering，意为探索用户体验与工程实践，</span>
                            <span style="margin-top:10px;">SEE = Seeking Experience & Engineering，意为探索用户体验与工程实践，</span>
                        </div>
                        <div  class="three">
                            <img src="../../img/位图(1).png" alt="">
                            <div class="three-desc">
                                <span class="four-desc-title">邻家平台</span>
                                <div class="four-desc-ms">
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                </div>
                            </div>
                        </div>
                        <div  class="four">
                            <img src="../../img/位图(1).png" alt="">
                            <div class="four-desc">
                                <span class="four-desc-title">邻家平台</span>
                                <div class="four-desc-ms">
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                    <span>邻家平台各类物品满足不同人群的需求</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="third-bot-content-right">
                        <img  src="../../img/analysischart.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div ref="six" class="Home-Page-div Home-Page-sixth">
            <div class="sixth-content">
                <div ref="sixthTitle" class="sloganeer">
                   <img v-show="sixthTitleShow" class="animated fadeInUp" src="../../img/bt.png" alt="">
                </div>
                <div ref="sixthCard" class="sixth-card">
                    <div v-show="sixthCardShow" @mouseover="mouseCard(0)" class="sixth-card-content animated slideInUp" :class="currentCard === 0 ? 'sixth-card-content animated slideInUp active':'sixth-card-content animated slideInUp'">
                        <div class="sixth-card-content-img">
                            <img v-if="currentCard === 0"  class="sixth-card-img" src="../../img/无网状态备份1.png" alt="">
                            <img v-else class="sixth-card-img" src="../../img/无网状态备份(1).png" alt="">
                            <span class="sixth-card-img-title">现金奖励</span>
                        </div>
                        <span class="sixth-card-content-desc">
                            Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed,
                        </span>
                    </div>
                   <div v-show="sixthCardShow" @mouseover="mouseCard(1)" class="sixth-card-content animated slideInUp" :class="currentCard === 1 ? 'sixth-card-content animated slideInUp active':'sixth-card-content animated slideInUp'">
                        <div class="sixth-card-content-img">
                            <img v-if="currentCard === 1"  class="sixth-card-img" src="../../img/无网状态备份1.png" alt="">
                            <img v-else class="sixth-card-img" src="../../img/无网状态备份(1).png" alt="">
                            <span class="sixth-card-img-title">生日福利</span>
                        </div>
                        <span class="sixth-card-content-desc">
                            Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed,
                        </span>
                    </div>
                    <div v-show="sixthCardShow" @mouseover="mouseCard(2)" class="sixth-card-content animated slideInUp" :class="currentCard === 2 ? 'sixth-card-content animated slideInUp active':'sixth-card-content animated slideInUp'">
                        <div class="sixth-card-content-img">
                            <img v-if="currentCard === 2"  class="sixth-card-img" src="../../img/无网状态备份1.png" alt="">
                            <img v-else class="sixth-card-img" src="../../img/无网状态备份(1).png" alt="">
                            <span class="sixth-card-img-title">提现提额</span>
                        </div>
                        <span class="sixth-card-content-desc">
                            Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed,
                        </span>
                    </div>
                    <div v-show="sixthCardShow" @mouseover="mouseCard(3)" class="sixth-card-content animated slideInUp" :class="currentCard === 3 ? 'sixth-card-content animated slideInUp active':'sixth-card-content animated slideInUp'">
                        <div class="sixth-card-content-img">
                            <img v-if="currentCard === 3"  class="sixth-card-img" src="../../img/无网状态备份1.png" alt="">
                            <img v-else class="sixth-card-img" src="../../img/无网状态备份(1).png" alt="">
                            <span class="sixth-card-img-title">定制地推</span>
                        </div>
                        <span class="sixth-card-content-desc">
                            Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed,
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="Home-Page-div Home-Page-seventh">
            <div  class="seventh-content">
                <div class="seventh-content-top">
                    <div class="left">
                        <div class="top">
                            <span>欢迎加入邻家平台</span>
                            <img src="../../img/wenzi.png" alt="">
                        </div>
                        <div class="bot">
                            <div class="left-content blank" >
                                <span class="title">公司产品</span>
                                <div class="info">
                                    <span>邻家云</span>
                                    <span>邻家平台</span>
                                    <span>微小阅</span>
                                    
                                </div>
                            </div>
                            <div class="left-content blank">
                                <span class="title">商务合作</span>
                                <div class="info">
                                    <span>客户经理:</span>
                                    <span> 12345678912</span>
                                    <span>电话/微信:</span>
                                    <span>123124141241</span>
                                </div>
                            </div>
                            <div class="left-content blank">
                                <span class="title">联系我们</span>
                                <div class="info">
                                    <span>客服热线：</span>
                                    <span>123124141414</span>
                                    <span>客服QQ：</span>
                                    <span>212312312313</span>
                                
                                </div>
                            </div>
                            <div class="left-content">
                                <span class="title">关于我们</span>
                                <div class="info">
                                    <span>公司介绍</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <img style="margin-top:25px;margin-right:91px;" src="../../img/关注“茄子HTTP” 获取更多独家资讯 2.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderNavigation from '@/components/HeaderNavigation'
import android_no from '../../img/android1.png'
import android from '../../img/android.png'

import ios_no from '../../img/ios1.png'
import ios from '../../img/ios.png'
import $ from 'jquery'


export default {
    name:'home',
    components:{
        HeaderNavigation
    },
    data(){
        return{
            secondCardShow: false,
            secondTitleShow: false,
            thirdTitleShow: false,
            thirdBgImgShow:false,
            thirdDescOneShow: false,
            thirdDescTwoShow: false,
            thirdDescThreeShow:false,
            fourthLeftImgShow:false,
            fourthRightChatShow:false,
            fifthTitleShow: false,
            fifthSlideShow:false,
            sixthTitleShow:false,
            sixthCardShow:false,
            activeStyle: false,

            current: 0,
            currentCard:0,
            homeAnchor:1,
            androidUrl: android_no,
            iosUrl: ios_no,
            
        }
    },
    mounted(){
       this.$nextTick(()=>{
            window.console.log("11s"+document.getElementById('canvas'))
       })
    window.addEventListener('scroll',this.handleScroll)
    canvasTD()
    },
    methods:{
        handleScroll(){
            let _this = this;
            let refArrayAchar = [
                {ref:'one',index: 1},
                {ref:'two',index: 2},
                {ref:'three',index: 3},
                {ref:'four',index: 4},
                {ref:'five',index: 5},
                {ref:'six',index: 6}
            ]
            let refArray = [
                {ref:'secondTitle',show:'secondTitleShow'},
                {ref:'secondCard',show:'secondCardShow'},
                {ref:'thirdTitle',show:'thirdTitleShow'},
                {ref:'thirdBgImg',show:'thirdBgImgShow'},
                {ref:'thirdDescOne',show:'thirdDescOneShow'},
                {ref:'thirdDescTwo',show:'thirdDescTwoShow'},
                {ref:'thirdDescThree',show:'thirdDescThreeShow'},
                {ref:'fourthLeftImg',show:'fourthLeftImgShow'},
                {ref:'fourthRightChat',show:'fourthRightChatShow'},
                {ref:'fifthTitle',show:'fifthTitleShow'},
                {ref:'fifthSlide',show:'fifthSlideShow'},
                {ref:'sixthTitle',show:'sixthTitleShow'},
                {ref:'sixthCard',show:'sixthCardShow'}
            ]
            refArray.forEach((r)=>{
                _this.gdjz(r.ref,200,()=>{
                    _this[r.show] = true
                    // window.console.log(r.ref)
                })
            })
            refArrayAchar.forEach((r)=>{
                this.setAnchor(r.ref,r.index)
            })
        },
        gdjz(div,offset,callback){
            let dom = this.$refs[div]
            if(dom){
                 var a,b,c,d;
                d = dom.offsetTop // 元素距离相对父级的高度，这里父级指的是body
                a = eval(d + offset)
                b = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop //  获取窗口滚动条高度
                c = document.documentElement.clientHeight || document.body.clientHeight // 获取浏览器可视区的高度
                // window.console.log(a+" "+b+" "+c+" "+d)
                if( b + c > a ) {
                    callback && callback()
                }
            }
        },
        selectTimer(index){
            this.current = index;
        },
        mouseCard(index){
            this.currentCard = index;
        },
        setAnchor(div,index){
            let dom = this.$refs[div]
            if(dom){
                var a,b;
                a =  dom.offsetTop
                b = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop //  获取窗口滚动条高度
                // window.console.log("achar: "+a+" "+b)
                if((b + 100) >= a){
                   this.homeAnchor = index
                }
            }
        },
        toAchar(index){
            switch(index) {
                case 1: 
                    window.scrollTo({
                        top:this.$refs['one'].offsetTop,
                        behavior:'smooth'
                    });break;
                case 2: 
                    window.scrollTo({
                        top:this.$refs['two'].offsetTop - 100,
                        behavior:'smooth'
                    });break;
                case 3: 
                    window.scrollTo({
                        top:this.$refs['three'].offsetTop - 100,
                        behavior:'smooth'
                    });break;
                case 4: 
                    window.scrollTo({
                        top:this.$refs['four'].offsetTop - 100,
                        behavior:'smooth'
                    });break;
                case 5: 
                    window.scrollTo({
                        top:this.$refs['five'].offsetTop - 100,
                        behavior:'smooth'
                    });break;
                case 6: 
                    window.scrollTo({
                        top:this.$refs['six'].offsetTop - 100,
                        behavior:'smooth'
                    });break;
                default:break;
            }
        },

        mouseAndroid(){
           this.androidUrl = android;
        },
        mouseoutAndroid(){
            this.androidUrl = android_no;
        },

        mouseIos(){
           this.iosUrl = ios;
        },
        mouseoutIos(){
           this.iosUrl = ios_no;
        },

        mousesecondCard(e){
            e.stopPropagation();
           $(e.target).addClass('active')
        },
        mouseoutsecondCard(e){
            e.stopPropagation();
            $(e.target).removeClass('active')
        }
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll); // 离开页面 关闭监听 不然会报错
    }
}

function canvasTD(){
var radMin = 5,
    radMax = 50,
    filledCircle = 40, //percentage of filled circles
    concentricCircle = 20, //percentage of concentric circles
    radThreshold = 20; //IFF special, over this radius concentric, otherwise filled

    //min and max speed to move
    var speedMin = 0.3,
    speedMax = 2.5;

    //max reachable opacity for every circle and blur effect
    var maxOpacity = 0.6;
    //default palette choice
    var colors = ['255,255,255'],
    bgColors = ['255,255,255'],
    circleBorder = 8,
    backgroundLine = bgColors[0];
    var backgroundMlt = 0.85;
    var canvas = document.getElementById('canvas')
    window.console.log(canvas)
    //min distance for links
    var linkDist = Math.min(canvas.width, canvas.height) / 3,

    lineBorder = 2.5;
    //most importantly: number of overall circles and arrays containing them
    var maxCircles = 5,
    points = [],
    pointsBack = [];

    //populating the screen
    for (var i = 0; i < maxCircles * 2; i++) points.push(new Circle());
    for (var i = 0; i < maxCircles; i++) pointsBack.push(new Circle(true));

    //experimental vars
    var circleExp = 1,
    circleExpMax = 1.003,
    circleExpMin = 0.997,
    circleExpSp = 0.00004,
    circlePulse = false;

    //circle class
    function Circle(background) {
    //if background, it has different rules
    this.background = (background || false);
    this.x = randRange(-canvas.width / 2, canvas.width / 2);
    this.y = randRange(-canvas.height / 2, canvas.height / 2);
    this.radius = background ? hyperRange(radMin, radMax) * backgroundMlt : hyperRange(radMin, radMax);
    this.filled = this.radius < radThreshold ? (randint(0, 100) > filledCircle ? false : 'full') : (randint(0, 100) > concentricCircle ? false : 'concentric');
    this.color = background ? bgColors[randint(0, bgColors.length - 1)] : colors[randint(0, colors.length - 1)];
    this.borderColor = background ? bgColors[randint(0, bgColors.length - 1)] : colors[randint(0, colors.length - 1)];
    this.opacity = 0.05;
    this.speed = (background ? randRange(speedMin, speedMax) / backgroundMlt : randRange(speedMin, speedMax)); // * (radMin / this.radius);
    this.speedAngle = Math.random() * 2 * Math.PI;
    this.speedx = Math.cos(this.speedAngle) * this.speed;
    this.speedy = Math.sin(this.speedAngle) * this.speed;
    var spacex = Math.abs((this.x - (this.speedx < 0 ? -1 : 1) * (canvas.width / 2 + this.radius)) / this.speedx),
        spacey = Math.abs((this.y - (this.speedy < 0 ? -1 : 1) * (canvas.height / 2 + this.radius)) / this.speedy);
    this.ttl = Math.min(spacex, spacey);
    };

    Circle.prototype.init = function() {
    Circle.call(this, this.background);
    }

    //support functions
    //generate random int a<=x<=b
    function randint(a, b) {
        return Math.floor(Math.random() * (b - a + 1) + a);
    }
    //generate random float
    function randRange(a, b) {
        return Math.random() * (b - a) + a;
    }
    //generate random float more likely to be close to a
    function hyperRange(a, b) {
    return Math.random() * Math.random() * Math.random() * (b - a) + a;
    }

    //rendering function
    function drawCircle(ctx, circle) {
    //circle.radius *= circleExp;
    var radius = circle.background ? circle.radius *= circleExp : circle.radius /= circleExp;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, radius * circleExp, 0, 2 * Math.PI, false);
    ctx.lineWidth = Math.max(1, circleBorder * (radMin - circle.radius) / (radMin - radMax));
    ctx.strokeStyle = ['rgba(', circle.borderColor, ',', circle.opacity, ')'].join('');
    if (circle.filled == 'full') {
        ctx.fillStyle = ['rgba(', circle.borderColor, ',', circle.background ? circle.opacity * 0.8 : circle.opacity, ')'].join('');
        ctx.fill();
        ctx.lineWidth=0;
        ctx.strokeStyle = ['rgba(', circle.borderColor, ',', 0, ')'].join('');
    }
    ctx.stroke();
    if (circle.filled == 'concentric') {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, radius / 2, 0, 2 * Math.PI, false);
        ctx.lineWidth = Math.max(1, circleBorder * (radMin - circle.radius) / (radMin - radMax));
        ctx.strokeStyle = ['rgba(', circle.color, ',', circle.opacity, ')'].join('');
        ctx.stroke();
    }
    circle.x += circle.speedx;
    circle.y += circle.speedy;
    if (circle.opacity < (circle.background ? maxOpacity : 1)) circle.opacity += 0.01;
    circle.ttl--;
    }

    //initializing function
    function init() {
    window.requestAnimationFrame(draw);
    }

    //rendering function
    function draw() {

    if (circlePulse) {
        if (circleExp < circleExpMin || circleExp > circleExpMax) circleExpSp *= -1;
        circleExp += circleExpSp;
    }
    var ctxfr = document.getElementById('canvas').getContext('2d');
    var ctxbg = document.getElementById('canvasbg').getContext('2d');

    ctxfr.globalCompositeOperation = 'destination-over';
    ctxfr.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    ctxbg.globalCompositeOperation = 'destination-over';
    ctxbg.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    ctxfr.save();
    ctxfr.translate(canvas.width / 2, canvas.height / 2);
    ctxbg.save();
    ctxbg.translate(canvas.width / 2, canvas.height / 2);

    //function to render each single circle, its connections and to manage its out of boundaries replacement
    function renderPoints(ctx, arr) {
        for (var i = 0; i < arr.length; i++) {
        var circle = arr[i];
        //checking if out of boundaries
        if (circle.ttl<0) {}
        var xEscape = canvas.width / 2 + circle.radius,
            yEscape = canvas.height / 2 + circle.radius;
        if (circle.ttl < -20) arr[i].init(arr[i].background);
        //if (Math.abs(circle.y) > yEscape || Math.abs(circle.x) > xEscape) arr[i].init(arr[i].background);
        drawCircle(ctx, circle);
        }
        for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var deltax = arr[i].x - arr[j].x;
            var deltay = arr[i].y - arr[j].y;
            var dist = Math.pow(Math.pow(deltax, 2) + Math.pow(deltay, 2), 0.5);
            //if the circles are overlapping, no laser connecting them
            if (dist <= arr[i].radius + arr[j].radius) continue;
            //otherwise we connect them only if the dist is < linkDist
            if (dist < linkDist) {
            var xi = (arr[i].x < arr[j].x ? 1 : -1) * Math.abs(arr[i].radius * deltax / dist);
            var yi = (arr[i].y < arr[j].y ? 1 : -1) * Math.abs(arr[i].radius * deltay / dist);
            var xj = (arr[i].x < arr[j].x ? -1 : 1) * Math.abs(arr[j].radius * deltax / dist);
            var yj = (arr[i].y < arr[j].y ? -1 : 1) * Math.abs(arr[j].radius * deltay / dist);
            ctx.beginPath();
            ctx.moveTo(arr[i].x + xi, arr[i].y + yi);
            ctx.lineTo(arr[j].x + xj, arr[j].y + yj);
            var samecolor = arr[i].color == arr[j].color;
            ctx.strokeStyle = ["rgba(", arr[i].borderColor, ",", Math.min(arr[i].opacity, arr[j].opacity) * ((linkDist - dist) / linkDist), ")"].join("");
            ctx.lineWidth = (arr[i].background ? lineBorder * backgroundMlt : lineBorder) * ((linkDist - dist) / linkDist); //*((linkDist-dist)/linkDist);
            ctx.stroke();
            }
        }
        }
    }

    var startTime = Date.now();
    renderPoints(ctxfr, points);
    renderPoints(ctxbg, pointsBack);
    var deltaT = Date.now() - startTime;

    ctxfr.restore();
    ctxbg.restore();

    window.requestAnimationFrame(draw);
    }

    init();
    
}
</script>
<style scoped>
.animated {animation-duration: 2s;}
.Home-Page-first{
    background-image: url('../../img/background/bg.png');
    background-repeat:no-repeat;
    background-size:cover;
    width:100%;
    height: 968px; 
    display: flex;
    justify-content: center;
}
#canvas {
  z-index: 1;
  position: absolute
}
#canvasbg {
  z-index: -10;
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  filter: blur(3px);
  opacity: 0.6;
  position: absolute
}
.Home-Page-first-content{
    padding-top: 222px;
    width: 1200px;
    margin:0 auto;
    display: flex;
    position: absolute;
    z-index: 10;
}
/* .Home-Page-first-content .left{} */
.left .one .title{
    width:443px;
    height:80px;
    font-size:70px;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:80px;
    letter-spacing:3px;
}
.left .two{
    width:500px;
    height:50px;
    background:rgba(255,224,125,1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
}
.left .two .message{
    margin: 0 auto;
    width:411px;
    height:20px;
    font-size:16px;
    font-weight:500;
    color:rgba(46,115,255,1);
    line-height:20px;
    letter-spacing:5px;
}
.left .three,.left .four{
    margin-top: 40px;
}
.left .three .three-erweima-img{
    display: flex;
    justify-content: center;
    align-items: center;
}

.left .four .four-download-img{
    display: flex;
    align-items: flex-start;
    
}
.left .four .four-download-img img{
     cursor:pointer;
}
.Home-Page-second{
    width: 100%;
    height: 797px;
    padding-top: 130px;
}
.Home-Page-second .Home-Page-second-content{
    width: 1200px;
    margin:0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.sloganeer {
    display: flex;
    justify-content: center;
    align-items: center;
}
.Home-Page-second-content .card{
    display: flex;
    margin-top: 80px;
}
.card .card-content{
    width: 285px;
    height: 496px;
    margin-right: 18px;
    background:rgba(255,255,255,1);
    display: flex;
    flex-direction: column;
}
.card-content-img{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 71px;
}
.Home-Page-second-content .card .active{

    box-shadow:0px 10px 50px 0px rgba(0,0,0,0.05);
    border:1px solid rgba(219,219,219,1);
}
.card-img-title{
    font-size:25px;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:48px;
}
.card-content-desc{
    padding: 0 20px;
    margin-top: 36px;
    text-align: center;
    font-size:18px;
    font-weight:400;
    color:rgba(11,22,43,0.5);
    line-height:30px;
}
.Home-Page-third{
    width: 100%;
    height: 980px;
    padding-top: 130px;
}
.Home-Page-third .Home-Page-third-content{
    width: 1200px;
    margin:0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.merit{
    display: flex;
    justify-content: center;
    margin-top: 79px;
}
.merit .meritBackground{
    margin: 0 auto;
    position: absolute;
    margin-top: 32.5px;
}
.merit-content{
    display: flex;
    flex-direction: column;
    z-index: 15;
    width: 100%
}
.merit-content-top{
    margin-left: 95px;
}
.merit-content-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 189px;
}

.merit-desc{
    box-shadow:10px 20px 30px 20px rgba(0,0,0,0.05);
    width: 500px;
    height: 180px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
}
.merit-img{
    margin-left: 40px;
}
.merit-desc .desc{
    margin-left: 23px;
    height: 126px;
    width: 275px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.desc-title{
    font-size:20px;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:30px;
}
.desc-ms{
    font-size:14px;
    font-weight:500;
    color:rgba(178,178,178,1);
    line-height:20px;
}
.Home-Page-fourth{
    width: 100%;
    height: 868px;
    background-image: url('../../img/background/mengban.png');
    background-repeat:no-repeat;
    background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;
}
.fourth-content{
    width: 1370px;
    display: flex;
    flex-direction: row;
    height: 100%;

}
.fourth-content-left{
    display: flex;
    align-items: flex-end;
}
.fourth-content-right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 110px;
}
.fourth-right-top{
    display: flex;
    flex-direction: column;
}
.fourth-right-mid{
    margin-top: 52px;
}
.fourth-right-bot{
    margin-top: 68px;
}
.fourth-top-title{
    font-size:35px;
    font-weight:bold;
    color:rgba(255,255,255,0.9);
    line-height:40px;
}
.fourth-top-desc{
    font-size:18px;
    font-weight:500;
    color:rgba(255,255,255,0.5);
    line-height:20px;
    margin-top: 15px;
}
.fourth-bot-slogan{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.fourth-bot-desc{
    font-size:20px;
    font-weight:500;
    color:rgba(255,255,255,0.8);
    line-height:28px;
    letter-spacing:8px;
    margin-left: 16px;
}
.Home-Page-fifth{
    width: 100%;
    height: 1065px;
}
.Home-Page-fifth-top{
    width: 1200px;
    height: 385px;
    margin:0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.skip-container{
    width: 740px;
    display: flex;
    justify-content: space-between;
}
.fifth-skip{
    width: 180px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 68px;
}
.skip-title{
    margin-top: 21px;
    font-size:20px;
    color:rgba(51,51,51,1);
    line-height:28px;
}
.skip-container .active{
    background: url('../../img/background/矩形.png');
    background-repeat:no-repeat;
    background-size:cover;
}
.skip-container .active .skip-title{
    font-size:20px;
    color:rgba(255,255,255) !important;
    line-height:28px;
}
.Home-Page-third-bot{
    background: url('../../img/background/位图.png');
    background-repeat:no-repeat;
    background-size:cover;
    width: 100%;
    height: 680px;
    padding-top: 107px;
}
.third-bot-content{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.third-bot-content-left .one{
    font-size:38px;
    font-weight:bold;
    color:rgba(255,255,255,0.9);
    line-height:38px;
}
.third-bot-content-left .two{
    font-size:14px;
    font-weight:500;
    color:rgba(255,255,255,0.5);
    line-height:14px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
}
.third-bot-content-left .three{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 107px;
}
.three-desc{
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}
.four-desc-title{
    font-size:16px;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:16px;
}
.four-desc-ms{
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    font-size:14px;
    font-weight:500;
    color:rgba(255,255,255,0.5);
    line-height:14px;
}
.four-desc-ms span{
    margin-top: 5px;
}
.third-bot-content-left .four{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 80px;
}
.four-desc{
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}
.Home-Page-sixth{
    width: 100%;
    height: 900px;
    padding-top: 67px;
    background:rgba(250,250,250,1);

}
.sixth-card{
    display: flex;
    flex-direction: row;
    margin-top: 67px;
}
.sixth-content{
    width: 1200px;
    margin: 0 auto;
    
}
.sixth-card-content{
    width: 285px;
    height: 500px;
    margin-right: 20px;
    background:rgba(255,255,255,1);
    box-shadow:0px 10px 50px 0px rgba(0,0,0,0.05);
    border:1px solid rgba(219,219,219,1);
    display: flex;
    flex-direction: column;
}
.sixth-content .active{
    background:url('../../img/background/矩形2.png');
    background-repeat:no-repeat;
    background-size:cover;
}
.sixth-card-content-img{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 71px;
}
.sixth-card-img-title{
    margin-top: 22px;
}
.sixth-content .active .sixth-card-img-title{
    color:rgba(255,255,255,1);
}
.sixth-card-content-desc{
    padding: 0 20px;
    margin-top: 54px;
    text-align: center;
    font-size:18px;
    font-weight:400;
    color:rgba(11,22,43,0.5);
    line-height:30px;
}
.sixth-content .active .sixth-card-content-desc{
    color:rgba(255,255,255,0.5);
}
.Home-Page-seventh{
    width: 100%;
    height: 300px;
    background: #333333;
    
}
.seventh-content{
    width: 1200px;
    margin: 0 auto;
    padding-top: 20px;
}
.seventh-content-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.seventh-content-top .left{
    display: flex;
    flex-direction: column;
}
.seventh-content-top .left span{
    font-size:30px;
    font-weight:bold;
    color:rgba(255,255,255,0.8);
    margin-bottom: 15px;
}

.seventh-content-top .left .top{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.seventh-content-top .left .bot{
    display: flex;
    flex-direction: row;
    margin-top: 40px;
}

.bot .left-content .title {
    font-size:18px;
    font-weight:bold;
    color:rgba(255,255,255,0.8);
    line-height:20px;
}
.bot .left-content .info{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-top: 17px;
}
.bot .left-content .info span{
    margin-bottom: 8px;;
    font-size:14px;
    font-weight:400;
    color:rgba(255,255,255,0.6);
}

.bot .left-content.blank{
    margin-right: 120px;
}
</style>