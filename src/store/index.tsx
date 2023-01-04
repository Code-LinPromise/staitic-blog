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