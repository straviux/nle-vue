import{r as u,a as d,o as m,b as h,w as x,c as l,d as i,e as f,F as p,f as v,t as g}from"./index-4e16e08f.js";const _={class:"px-4 flex items-center justify-center"},w={ref:"grid",class:"grid grid-cols gap-4"},W={__name:"Test",setup(y){const c=u([{text:"Short text"},{text:"Medium-length text that spans a few words"},{text:"Longer text that spans several words and multiple lines of text"},{text:"Another short text"},{text:"Yet another text with a medium length"},{text:"And a very long text that spans multiple lines and takes up a lot of space"}]),n=d(null),a=d(1),o=()=>{if(n.value===null)return;const s=200,r=400,e=n.value.offsetWidth;let t=Math.floor(e/s);t=Math.min(t,Math.ceil(e/r)),t=Math.max(t,1),a.value=t};return m(()=>{o(),window.addEventListener("resize",o)}),h(()=>{window.removeEventListener("resize",o)}),x(a,()=>{const s=100/a.value;c.forEach((r,e)=>{const t=n.value.children[e];t.style.width=`${s}%`})}),(s,r)=>(l(),i("div",_,[f("div",w,[(l(!0),i(p,null,v(c,(e,t)=>(l(),i("div",{key:t,class:"text-element bg-gray-100 p-4"},g(e.text),1))),128))],512)]))}};export{W as default};
