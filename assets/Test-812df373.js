import{e as f,s as g,o as a,c as r,w as p,j as v,a as o,F as u,g as c,u as I,t as m}from"./index-0c9e1728.js";const _={__name:"Test",setup(w){const s=f(""),d=[{category:"Category A",items:[{id:1,name:"Item 1"},{id:2,name:"Item 2"}]},{category:"Category B",items:[{id:3,name:"Item 3"},{id:4,name:"Item 4"}]}],y=g(()=>{const n=s.value.toLowerCase();return d.map(e=>{const t=e.items.filter(l=>l.name.toLowerCase().includes(n));return{category:e.category,filteredItems:t}}).filter(e=>e.category.toLowerCase().includes(n)||e.filteredItems.length>0)});return(n,e)=>(a(),r("div",null,[p(o("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t),placeholder:"Search..."},null,512),[[v,s.value]]),(a(!0),r(u,null,c(I(y),(t,l)=>(a(),r("div",{key:l},[o("h2",null,m(t.category),1),o("ul",null,[(a(!0),r(u,null,c(t.filteredItems,i=>(a(),r("li",{key:i.id},m(i.name),1))),128))])]))),128))]))}};export{_ as default};
