import create from 'zustand'
import userLpt from "../assets/userLpt.jpg"
import userLjb from "../assets/userLjb.jpg"
import userShg from "../assets/userShg.jpg"
import imgLjb from "../assets/fir-tree-7620654_1920.jpg"
import imgLpt from "../assets/source-4280758_1920.jpg"
import userMjf from "../assets/_C8Q$}5Y}P[347)]SJKKUVB.jpg"


export  const useUserInfo = create(() => ({
    smallUser:[
        {
            userLogo:userLjb,
            userName:"AjaxMactavish",
            tagTitle:"saying",
            image:imgLjb,
            title:"一只猪！",
            details:"早上匆匆茫茫去买肠粉，走的时候跑的飞快忘记给钱了😅，估计老板都懵了，拿了肠粉就跑...",
            time:"Tue，Jan 3，2023"
        },
        {
            userLogo:userShg,
            userName:"ruikedingzhen",
            tagTitle:"saying",
            image:imgLjb,
            title:"断崖",
            details:"石头很小，山群很大，生命繁忙。时间在头顶上的云层上空飘逝，断崖坐落在一个地方，从来没有移动过。朴素的断崖远离了灯火的辉煌，坚强的断崖支撑着深情的凝视。",
            time:"Tue，Jan 3，2023"
        },
        {
            userLogo:userMjf,
            userName:"番薯不是红苕",
            tagTitle:"saying",
            image:imgLjb,
            title:"只因你太美",
            details:"《只因你太美》是中国内地男子音乐组合SWIN-S演唱的歌曲，由WILLIUS、RK、邓晶、蔡徐坤作词，WILLIUS作曲并编曲，收录在SWIN-S2016年12月20日发行的专辑《New World》中\n",
            time:"Tue，Jan 3，2023"
        },

    ],
    bigUser:[
        {
            image:imgLpt,
            userLogo:userLpt,
            TagTitle:"create",
            title:"构建静态纯粹的博客站点",
            details:"Wasm 出现的一个根本原因在于前端正在从 “脚本化” 踏入 “工程化”，日益复杂的前端项目不仅需要大部分的维护成本，在一些领域现有的性能已经满足不了，出现了动态语言的瓶颈。动态语言让编译过程无法去猜测变量的类型而去进行热优化，每一个类型的动态变更都会导致编译过程需要做一次去优化。当然期间也出现了诸如 asm.js 这样的编译目标，这里就不过多的进行介绍了。Wasm 让在浏览器里能跑的语言多了一种新的可能性并且带来了极高的性能，在一些需要高强度计算的场景可谓是及时雨，下图为fib 递归运算 js 和 wasm 的运行时间对比。",
            time:"Fri, Nov 25 2022",
            userName:"Promise"
        }
    ]
}))

export const useStudyInfo=create(()=>{
    Frame:[
        { imageUrl: "https://img.webmuban.com/2020/10/STAET.png",name:"StartMVC",
            details:"优雅轻量, 易扩展 高效的 PHP框架,基于MVC和面向对象设计模式", url:"https://startmvc.com/"},
        { imageUrl: "https://img.webmuban.com/2020/10/20201010143923457.png",name:"FastAdmin",
            details:"基于ThinkPHP和Bootstrap的极速后台开发框架", url:"https://www.fastadmin.net/"},
        { imageUrl: "https://api.iowen.cn/favicon/symfony.com.png",name:"Symfony",
            details:"开发大型复杂项目的首选的PHP框架", url:"https://symfony.com/"},
        { imageUrl: "https://api.iowen.cn/favicon/cakephp.org.png",name:"CakePHP",
            details:"一个可以让各种层次的PHP开发人员快速地开发出健壮的Web应用", url:"https://cakephp.org/"},
        { imageUrl: "https://api.iowen.cn/favicon/framework.zend.com.png",name:"Zend Framework",
            details:"一组专业的PHP软件包的集合", url:"https://framework.zend.com/"},
        { imageUrl: "https://api.iowen.cn/favicon/www.yiichina.com.png",name:"Yii",
            details:"一个 高性能的，适用于开发 WEB 2.0 应用的 PHP 框架", url:"https://www.yiichina.com/"},
        { imageUrl: "https://api.iowen.cn/favicon/codeigniter.org.cn.png",name:"CodeIgniter",
            details:"一个小巧但功能强大的 PHP 框架", url:"https://codeigniter.org.cn/"},
        { imageUrl: "https://api.iowen.cn/favicon/laravel.com.png",name:"Laravel",
            details:"优雅的PHP开发框架", url:"https://laravel.com/"},
        { imageUrl: "https://img.webmuban.com/2020/10/20201009035028737.png",name:"thinkPHP",
            details:"最佳实践PHP开源框架", url:"https://www.thinkphp.cn/"},
        { imageUrl: "https://api.iowen.cn/favicon/www.swiper.com.cn.png",name:"Swiper",
            details:"纯javascript打造的滑动特效插件,面向手机、平板电脑等移动终端", url:"https://www.swiper.com.cn/"},
        { imageUrl: "https://api.iowen.cn/favicon/www.redux.org.cn.png",name:"Redux",
            details:"Redux 是 JavaScript 状态容器，提供可预测化的状态管理", url:"https://www.redux.org.cn/"},
        { imageUrl: "https://www.webmuban.com/wp-content/uploads/2020/10/apple-touch-icon-1.png",name:"Next.js",
            details:"基于Node.js平台的下一代 web 开发框架", url:"https://nextjs.org/"},
        { imageUrl: "https://api.iowen.cn/favicon/nestjs.com.png",name:"Nest JS",
            details:"一个渐进式的Node.js框架,用于构建高效,可靠和可扩展的服务器端应用程序。", url:"https://nestjs.com/"},
        { imageUrl: "https://www.webmuban.com/wp-content/uploads/2020/10/favicon-1.png",name:"ThinkJS",
            details:"使用 ES6/7 特性开发 Node.js 项目，支持 TypeScript", url:"https://thinkjs.org/zh-cn"},
        { imageUrl: "https://www.webmuban.com/wp-content/uploads/2020/10/favicon.png",name:"Expressjs",
            details:"基于 Node.js 平台，快速、开放、极简的 Web 开发框架", url:"https://www.expressjs.com.cn/"},
        { imageUrl: "https://www.webmuban.com/wp-content/uploads/2020/10/koa-logo.png",name:"KoaJS",
            details:"基于Node.js平台的下一代 web 开发框架", url:"https://koa.bootcss.com/"},
        { imageUrl: "https://api.iowen.cn/favicon/preactjs.com.png",name:"Preact",
            details:"React的3kb轻量化方案,拥有同样的ES6 API", url:"https://preactjs.com/"},
        { imageUrl: "https://api.iowen.cn/favicon/zh.nuxtjs.org.png",name:"NuxtJS",
            details:"基于 Vue.js 的轻量级应用框架", url:"https://nuxtjs.org/"},
        { imageUrl: "https://api.iowen.cn/favicon/flutterchina.club.png",name:"Flutter",
            details:"谷歌的移动UI框架，极速构建漂亮的原生应用", url:"https://flutterchina.club/"},
        { imageUrl: "https://api.iowen.cn/favicon/www.h-ui.net.png",name:"H-ui",
            details:"轻量级前端框架，简单免费，兼容性好，服务中国网站", url:"http://www.h-ui.net/index.shtml"},
        { imageUrl: "https://api.iowen.cn/favicon/docs.kissyui.com.png",name:"KISSY",
            details:"淘宝前端类库", url:"http://docs.kissyui.com/"},
        { imageUrl: "https://api.iowen.cn/favicon/www.uileader.com.png",name:"QucikUI",
            details:"快速构建功能强大、美观、兼容的web应用系统", url:"http://www.uileader.com/product_quickui.html"},
        { imageUrl: "https://api.iowen.cn/favicon/angular.cn.png",name:"Angular",
            details:"一套框架，多种平台，移动&桌面", url:"https://angular.cn/"},
        { imageUrl: "https://api.iowen.cn/favicon/www.layui.com.png",name:"Layui",
            details:"低门槛开箱即用的前端 UI 解决方案", url:"https://www.layui.com/"},
        { imageUrl: "https://www.webmuban.com/wp-content/uploads/2020/10/jquery-logo-md.png",name:"jQuery",
            details:"用更少的代码完成更多工作", url:"https://www.jquery123.com/"},
        { imageUrl: "https://www.webmuban.com/wp-content/uploads/2020/10/logo.png",name:"VUE",
            details:"构建数据驱动的web界面的渐进式框架", url:"https://cn.vuejs.org/"},
        { imageUrl: "https://www.webmuban.com/wp-content/uploads/2020/10/logo-180x180-1.png",name:"React",
            details:"用于构建用户界面的Javscript库", url:"https://zh-hans.reactjs.org/"},
        { imageUrl: "https://www.webmuban.com/wp-content/uploads/2020/10/apple-touch-icon-precomposed.png",name:"Bootstrap",
            details:"简洁、直观、强悍的前端开发框架", url:"https://www.bootcss.com/"},
        { imageUrl: "https://www.webmuban.com/wp-content/uploads/2020/10/apple-touch-icon.png",name:"Node.js",
            details:"基于 Chrome V8 引擎的 JavaScript 运行环境", url:"https://www.nodeapp.cn/"},
        { imageUrl: "https://www.webmuban.com/wp-content/uploads/2020/10/logo-180x180-1.png",name:"React Native",
            details:"使用JavaScript和React编写原生移动应用", url:"https://reactnative.cn/"},
    ]
})