(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{1773:(e,s,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2530)}])},2530:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>G});var a=r(4584),i=r(3732),t=r(3526),l=r(5268);function n(){for(var e=arguments.length,s=Array(e),r=0;r<e;r++)s[r]=arguments[r];return(0,l.QP)((0,t.$)(s))}function c(e){let{children:s,className:r,...i}=e;return(0,a.jsx)("button",{className:n("group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50","before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]","bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]","dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",r),...i,children:s})}var d=r(1946),o=r(2070),h=r(1911);let x=e=>{let{id:s,x:r,y:i,color:t,delay:l,scale:n}=e;return(0,a.jsx)(h.P.svg,{className:"pointer-events-none absolute z-20",initial:{opacity:0,left:r,top:i},animate:{opacity:[0,1,0],scale:[0,n,0],rotate:[75,120,150]},transition:{duration:.8,repeat:1/0,delay:l},width:"21",height:"21",viewBox:"0 0 21 21",children:(0,a.jsx)("path",{d:"M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z",fill:t})},s)},m=e=>{let{text:s,colors:r={first:"#9E7AFF",second:"#FE8BBB"},className:t,sparklesCount:l=10,...c}=e,[d,o]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let e=()=>{let e="".concat(100*Math.random(),"%"),s="".concat(100*Math.random(),"%"),a=Math.random()>.5?r.first:r.second,i=2*Math.random(),t=1*Math.random()+.3,l=10*Math.random()+5;return{id:"".concat(e,"-").concat(s,"-").concat(Date.now()),x:e,y:s,color:a,delay:i,scale:t,lifespan:l}};o(Array.from({length:l},e));let s=setInterval(()=>{o(s=>s.map(s=>s.lifespan<=0?e():{...s,lifespan:s.lifespan-.1}))},100);return()=>clearInterval(s)},[r.first,r.second]),(0,a.jsx)("div",{className:n("text-6xl font-bold",t),...c,style:{"--sparkles-first-color":"".concat(r.first),"--sparkles-second-color":"".concat(r.second)},children:(0,a.jsxs)("span",{className:"relative inline-block",children:[d.map(e=>(0,a.jsx)(x,{...e},e.id)),(0,a.jsx)("strong",{children:s})]})})};var u=r(2768),j=r(9312);let v=e=>{let{children:s,width:r="fit-content",boxColor:t,duration:l}=e,n=(0,u.s)(),c=(0,u.s)(),d=(0,i.useRef)(null),o=(0,j.W)(d,{once:!0});return(0,i.useEffect)(()=>{o?(c.start("visible"),n.start("visible")):(c.start("hidden"),n.start("hidden"))},[o,n,c]),(0,a.jsxs)("div",{ref:d,style:{position:"relative",width:r,overflow:"hidden"},children:[(0,a.jsx)(h.P.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",animate:n,transition:{duration:l||.5,delay:.25},children:s}),(0,a.jsx)(h.P.div,{variants:{hidden:{left:0},visible:{left:"100%"}},initial:"hidden",animate:c,transition:{duration:l||.5,ease:"easeIn"},style:{position:"absolute",top:4,bottom:4,left:0,right:0,zIndex:20,background:t||"#5046e6"}})]})};var f=r(5999);let g="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),p=e=>Math.floor(Math.random()*e);function b(e){let{text:s,duration:r=800,framerProps:t={initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:3}},className:l,animateOnLoad:c=!0}=e,[d,o]=(0,i.useState)(s.split("")),[x,m]=(0,i.useState)(!1),u=(0,i.useRef)(0),j=(0,i.useRef)(!0);return(0,i.useEffect)(()=>{let e=setInterval(()=>{if(!c&&j.current){clearInterval(e),j.current=!1;return}u.current<s.length?(o(e=>e.map((e,r)=>" "===e?e:r<=u.current?s[r]:g[p(26)])),u.current=u.current+.1):(m(!1),clearInterval(e))},r/(10*s.length));return()=>clearInterval(e)},[s,r,x,c]),(0,a.jsx)("div",{className:"overflow-hidden py-2 flex cursor-default scale-100",onMouseEnter:()=>{u.current=0,m(!0)},children:(0,a.jsx)(f.N,{mode:"wait",children:d.map((e,s)=>(0,a.jsx)(h.P.h1,{className:n("font-mono"," "===e?"w-3":"",l),...t,children:e.toUpperCase()},s))})})}let A=e=>{let{number:s=20}=e,[r,t]=(0,i.useState)([]);return(0,i.useEffect)(()=>{t([...Array(s)].map(()=>({top:-5,left:Math.floor(Math.random()*window.innerWidth)+"px",animationDelay:1*Math.random()+.2+"s",animationDuration:Math.floor(8*Math.random()+2)+"s"})))},[s]),(0,a.jsx)(a.Fragment,{children:[...r].map((e,s)=>(0,a.jsx)("span",{className:n("pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"),style:e,children:(0,a.jsx)("div",{className:"pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent"})},s))})};var N=r(1710),y=r(3697),w=r(6170),k=r(1428),C=r(3468);let P={containerProps:{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",paddingTop:40}},options:{reverse:!0,depth:1,wheelZoom:!1,imageScale:2,activeCursor:"default",tooltip:"native",initial:[.1,-.1],clickToFront:500,tooltipDelay:0,outlineColour:"#0000",maxSpeed:.04,minSpeed:.02}},E=(e,s)=>(0,C.ci)({icon:e,bgHex:"light"===s?"#f3f2ef":"#080510",fallbackHex:"light"===s?"#6e6e73":"#ffffff",minContrastRatio:"dark"===s?2:1.2,size:42,aProps:{href:void 0,target:void 0,rel:void 0,onClick:e=>e.preventDefault()}});function M(e){let{iconSlugs:s}=e,[r,t]=(0,i.useState)(null),{theme:l}=(0,k.D)();(0,i.useEffect)(()=>{(0,C.fB)({slugs:s}).then(t)},[s]);let n=(0,i.useMemo)(()=>r?Object.values(r.simpleIcons).map(e=>E(e,l||"light")):null,[r,l]);return(0,a.jsx)(C.Es,{...P,children:(0,a.jsx)(a.Fragment,{children:n})})}var S=r(8243),_=r(7249),I=r(917);function L(){let e=(0,S._)(["\n            radial-gradient(","px circle at ","px ","px, ",", transparent 100%)\n          "]);return L=function(){return e},e}function z(e){let{children:s,className:r,gradientSize:t=200,gradientColor:l="#262626",gradientOpacity:c=.8}=e,d=(0,_.d)(-t),o=(0,_.d)(-t),x=(0,i.useCallback)(e=>{let{left:s,top:r}=e.currentTarget.getBoundingClientRect();d.set(e.clientX-s),o.set(e.clientY-r)},[d,o]),m=(0,i.useCallback)(()=>{d.set(-t),o.set(-t)},[d,o,t]);return(0,i.useEffect)(()=>{d.set(-t),o.set(-t)},[d,o,t]),(0,a.jsxs)("div",{onMouseMove:x,onMouseLeave:m,className:n("group relative flex size-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border text-black dark:text-white",r),children:[(0,a.jsx)("div",{className:"relative z-10",children:s}),(0,a.jsx)(h.P.div,{className:"pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",style:{background:(0,I.E)(L(),t,d,o,l),opacity:c}})]})}var R=r(1334);let B={initial:{"--x":"100%",scale:.8},animate:{"--x":"-100%",scale:1},whileTap:{scale:.95},transition:{repeat:1/0,repeatType:"loop",repeatDelay:1,type:"spring",stiffness:20,damping:15,mass:2,scale:{type:"spring",stiffness:200,damping:5,mass:.5}}},T=i.forwardRef((e,s)=>{let{children:r,className:i,...t}=e;return(0,a.jsxs)(h.P.button,{ref:s,...B,...t,className:n("relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",i),children:[(0,a.jsx)("span",{className:"relative block size-full text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]",style:{maskImage:"linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))"},children:r}),(0,a.jsx)("span",{style:{mask:"linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",maskComposite:"exclude"},className:"absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"})]})});T.displayName="ShinyButton";let D=e=>{let{className:s,children:r,borderSize:t=2,borderRadius:l=20,neonColors:c={firstColor:"#ff00aa",secondColor:"#00FFF1"},...d}=e,o=(0,i.useRef)(null),[h,x]=(0,i.useState)({width:0,height:0});return(0,i.useEffect)(()=>{let e=()=>{if(o.current){let{offsetWidth:e,offsetHeight:s}=o.current;x({width:e,height:s})}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,i.useEffect)(()=>{if(o.current){let{offsetWidth:e,offsetHeight:s}=o.current;x({width:e,height:s})}},[r]),(0,a.jsx)("div",{ref:o,style:{"--border-size":"".concat(t,"px"),"--border-radius":"".concat(l,"px"),"--neon-first-color":c.firstColor,"--neon-second-color":c.secondColor,"--card-width":"".concat(h.width,"px"),"--card-height":"".concat(h.height,"px"),"--card-content-radius":"".concat(l-t,"px"),"--pseudo-element-background-image":"linear-gradient(0deg, ".concat(c.firstColor,", ").concat(c.secondColor,")"),"--pseudo-element-width":"".concat(h.width+2*t,"px"),"--pseudo-element-height":"".concat(h.height+2*t,"px"),"--after-blur":"".concat(h.width/3,"px")},className:n("relative z-10 size-full rounded-[var(--border-radius)]",s),...d,children:(0,a.jsx)("div",{className:n("relative size-full min-h-[inherit] rounded-[var(--card-content-radius)] bg-gray-100 p-6","before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block","before:h-[var(--pseudo-element-height)] before:w-[var(--pseudo-element-width)] before:rounded-[var(--border-radius)] before:content-['']","before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]","before:animate-background-position-spin","after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block","after:h-[var(--pseudo-element-height)] after:w-[var(--pseudo-element-width)] after:rounded-[var(--border-radius)] after:blur-[var(--after-blur)] after:content-['']","after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:opacity-80","after:animate-background-position-spin","dark:bg-neutral-900"),children:r})})};var H=r(2646),O=r.n(H);let V={src:"/_next/static/media/gc.81cdae3f.png",height:751,width:1349,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJ1BMVEUNDUsIAz4ZRb8IAjYMB1IVHYoPH4AOG28yPGsQPIsXHGYzR4oyRIB+uY3xAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAJklEQVR4nAXBhwEAIAzDMKe7wP/3IkGHu0voPiACzcBaotOVZvUBCEYAfzhXa5kAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},F={src:"/_next/static/media/avatarbackground.dc4d1ba7.png",height:1500,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAALVBMVEVMaXEAOn8AYqUHaJ+mz+TP3uc1l8Om0uI8i7okhb0unsP///+szuP///+Sx+EbTdrdAAAADXRSTlMAEitL/r6g5V3rn/3n+iigiAAAAAlwSFlzAACmGAAAphgBfnXJjQAAAC9JREFUeJwliscRACAMw5xGC2H/cTmDX9LJAEQFnE6PQTTPPAZAdlV/sXmsfzL6BRDFAJ5/ajmnAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},J={src:"/_next/static/media/vcheck.d88a7ac9.png",height:768,width:1366,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEXu8PPp6u2J10SlAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAE0lEQVR4nGNgZGSAIwYGNAYEAAABlQAXiNBmMwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},G=()=>(0,a.jsxs)("div",{children:[(0,a.jsx)("nav",{className:"h-14 sticky top-0.5 z-50 border border-blue-900",children:(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)("div",{children:(0,a.jsx)(m,{sparklesCount:"3",className:"text-lg text-white m-2",text:"<Hartzy />"})}),(0,a.jsxs)("div",{className:"flex justify-end m-2",children:[(0,a.jsx)("a",{href:"#home",className:"mx-1",children:(0,a.jsx)(c,{children:(0,a.jsx)(o.A,{})})}),(0,a.jsx)("a",{href:"https://github.com/hartzy0204",target:"_blank",className:"mx-1",children:(0,a.jsx)(c,{children:(0,a.jsx)(d.A,{})})}),(0,a.jsx)("a",{href:"#skill",className:"mx-1",children:(0,a.jsx)(c,{children:(0,a.jsx)(y.A,{})})}),(0,a.jsx)("a",{href:"#projects",className:"mx-1",children:(0,a.jsx)(c,{children:(0,a.jsx)(N.A,{})})}),(0,a.jsx)("a",{href:"#contact",className:"mx-1",children:(0,a.jsx)(c,{children:(0,a.jsx)(w.A,{})})})]})]})}),(0,a.jsx)("div",{id:"home",children:(0,a.jsxs)("div",{className:"relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl",children:[(0,a.jsx)(A,{number:10}),(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)("div",{className:"text-white",children:(0,a.jsx)("div",{className:"flex items-center justify-center h-screen",children:(0,a.jsxs)("div",{children:[(0,a.jsx)(O(),{style:{borderRadius:"90px"},src:F,height:400,alt:"image"}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(v,{boxColor:"#5046e6",duration:.5,children:(0,a.jsx)(b,{duration:"1000",className:"text-4xl font-bold text-white",text:"HI, I'm Harvey"})})})]})})}),(0,a.jsx)("div",{className:"text-white",children:(0,a.jsx)("div",{className:"flex items-center justify-center h-screen",children:(0,a.jsx)(v,{boxColor:"#0895ff",children:(0,a.jsx)("div",{className:"flex text-start mr-3",children:"I'm a software engineer focused on turning your ideas into effective, user-friendly applications. I work with modern web technologies like React, Vue, PHP (Laravel) to create scalable, dynamic solutions. Let's build something great together!"})})})})]})]})}),(0,a.jsx)("div",{id:"skill",className:"bg-black h-screen",children:(0,a.jsxs)("div",{className:"grid grid-cols-2 ",children:[(0,a.jsx)("div",{className:"col-span-1 mt-5",children:(0,a.jsx)("div",{className:"text-white",style:{marginTop:"75px"},children:(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)("div",{className:"col-span-1",children:(0,a.jsx)("div",{className:"text-3xl flex justify-center",children:"Technical Skills:"})}),(0,a.jsxs)("div",{className:"col-span-1",children:[(0,a.jsx)("div",{className:"text-start",children:"Web Development"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsxs)("ul",{className:"list-disc",children:[(0,a.jsx)("li",{children:"HTML"}),(0,a.jsx)("li",{children:"CSS"}),(0,a.jsx)("li",{children:"JAVASCRIPT"})]})}),(0,a.jsx)("div",{className:"text-start",children:"Programming Language"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"PHP"})})}),(0,a.jsx)("div",{className:"text-start",children:"PHP Framework"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"Laravel"})})}),(0,a.jsx)("div",{className:"text-start",children:"Javascript Framework"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsxs)("ul",{className:"list-disc",children:[(0,a.jsx)("li",{children:"React.JS"}),(0,a.jsx)("li",{children:"Next.JS"}),(0,a.jsx)("li",{children:"Vue.JS(Option API, Composition API)"})]})}),(0,a.jsx)("div",{className:"text-start",children:"Database"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"MySQL"})})}),(0,a.jsx)("div",{className:"text-start",children:"Version Control"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"GIT"})})}),(0,a.jsx)("div",{className:"text-start",children:"Tools"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsxs)("ul",{className:"list-disc",children:[(0,a.jsx)("li",{children:"NPM"}),(0,a.jsx)("li",{children:"PNPM"}),(0,a.jsx)("li",{children:"BUN"})]})})]})]})})}),(0,a.jsx)("div",{className:"col-span-1",children:(0,a.jsx)("div",{style:{marginTop:"95px",height:"500px"},className:"relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border border-gray-900 bg-gray-900  px-20 pb-20 pt-8 ",children:(0,a.jsx)(M,{iconSlugs:["typescript","javascript","laravel","react","vuedotjs","inertia","android","html5","css3","nodedotjs","nextdotjs","nginx","git","github","gitlab","visualstudiocode","androidstudio","figma"]})})})]})}),(0,a.jsx)("div",{className:"bg-black h-screen mt-9",id:"projects",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-white flex justify-center text-5xl",children:"Projects"}),(0,a.jsxs)("div",{className:"grid grid-cols-3 mt-7",children:[(0,a.jsxs)("div",{className:"col-span-1",children:[(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(D,{className:"max-w-sm items-center justify-center text-center",children:(0,a.jsx)(O(),{src:V,alt:"image"})})}),(0,a.jsx)("div",{className:"text-white text-lg ml-12 mt-3",children:"Project Title: GIFT CHECK MONITORING SYSTEM"}),(0,a.jsxs)("div",{className:"text-white ml-12 mt-2",children:[(0,a.jsx)("div",{className:"text-start",children:"Company"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"Alturas Group of Companies"})})}),(0,a.jsx)("div",{className:"text-start",children:"ROLE"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"Support Programmer"})})}),(0,a.jsx)("div",{className:"text-start",children:"Programming Language"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"PHP"})})}),(0,a.jsx)("div",{className:"text-start",children:"Frameworks"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsxs)("ul",{className:"list-disc",children:[(0,a.jsx)("li",{children:"Laravel 11"}),(0,a.jsx)("li",{children:"Vue.JS"}),(0,a.jsx)("li",{children:"Ant Design"})]})}),(0,a.jsx)("div",{className:"text-start",children:"Date"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"2024"})})})]})]}),(0,a.jsxs)("div",{className:"col-span-1",children:[(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(D,{className:"max-w-sm items-center justify-center text-center",children:(0,a.jsx)(O(),{src:J,alt:"image"})})}),(0,a.jsx)("div",{className:"text-white text-lg flex ml-12 mt-3",children:"Project Title: Variance Report System"}),(0,a.jsxs)("div",{className:"text-white ml-12 mt-2",children:[(0,a.jsx)("div",{className:"text-start",children:"Company"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"Alturas Group of Companies"})})}),(0,a.jsx)("div",{className:"text-start",children:"ROLE"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"Support Programmer"})})}),(0,a.jsx)("div",{className:"text-start",children:"Programming Language"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"PHP"})})}),(0,a.jsx)("div",{className:"text-start",children:"Frameworks"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsxs)("ul",{className:"list-disc",children:[(0,a.jsx)("li",{children:"Codeigniter 3"}),(0,a.jsx)("li",{children:"Bootstrap 5"})]})}),(0,a.jsx)("div",{className:"text-start",children:"Date"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"2024"})})})]})]}),(0,a.jsxs)("div",{className:"col-span-1",children:[(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(D,{className:"max-w-sm items-center justify-center text-center",children:(0,a.jsx)(O(),{src:V,alt:"image"})})}),(0,a.jsx)("div",{className:"text-white text-lg flex ml-12 mt-3",children:"Project Title: Our Lady Of Light Shrine Parish DBMS"}),(0,a.jsxs)("div",{className:"text-white ml-12 mt-2",children:[(0,a.jsx)("div",{className:"text-start",children:"Company"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"Our Lady of Light Shrine Parish"})})}),(0,a.jsx)("div",{className:"text-start",children:"ROLE"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"Main Programmer"})})}),(0,a.jsx)("div",{className:"text-start",children:"Programming Language"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"PHP"})})}),(0,a.jsx)("div",{className:"text-start",children:"Frameworks"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsxs)("ul",{className:"list-disc",children:[(0,a.jsx)("li",{children:"Laravel 11"}),(0,a.jsx)("li",{children:"Vue.JS"}),(0,a.jsx)("li",{children:"Ant Design"})]})}),(0,a.jsx)("div",{className:"text-start",children:"Date"}),(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsx)("ul",{className:"list-disc",children:(0,a.jsx)("li",{children:"Oct.14, 2024"})})})]})]})]})]})}),(0,a.jsx)("div",{className:"bg-black h-screen",children:(0,a.jsx)("div",{id:"contact",className:"text-white",children:(0,a.jsx)("div",{className:"flex items-center justify-center h-screen",children:(0,a.jsx)("div",{style:{width:"900px"},children:(0,a.jsx)(z,{className:"flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl",gradientColor:"#262626",children:(0,a.jsx)("div",{className:"mt-3",style:{height:"300px"},children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex justify-center mb-5",children:(0,a.jsx)(m,{text:"Get In Touch"})}),(0,a.jsx)("div",{children:(0,a.jsx)(R.A,{style:{width:"500px"},id:"outlined-basic",label:"Email",variant:"outlined",size:"small",color:"secondary"})}),(0,a.jsx)("div",{className:"mt-3",children:(0,a.jsx)(R.A,{style:{width:"500px"},id:"outlined-multiline-static",label:"Message",multiline:!0,color:"secondary",rows:4})}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"flex justify-end mt-1",children:(0,a.jsx)(T,{children:"Submit"})})})]})})})})})})})]})}},e=>{var s=s=>e(e.s=s);e.O(0,[362,636,593,792],()=>s(1773)),_N_E=e.O()}]);