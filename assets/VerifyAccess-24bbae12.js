import{d as c,e as r,o as l,c as d,a as e,i,w as n,j as m,u}from"./index-8f437fd4.js";const p={class:"max-h-screen bg-gray-100 flex flex-col justify-center sm:py-12 min-h-screen"},_={class:"relative py-3 sm:max-w-xl sm:mx-auto"},x=e("div",{class:"absolute inset-0 bg-gradient-to-r from-emerald-300 to-emerald-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"},null,-1),f={class:"relative px-4 bg-white shadow-lg sm:rounded-3xl sm:p-20"},h={class:"max-w-md mx-auto"},v={class:"divide-y divide-gray-200"},b={class:"relative"},y=e("label",{for:"access_code",class:"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"},"Access Code",-1),g=e("div",{class:"relative"},[e("button",{class:"hover:shadow hover:bg-blue-400 bg-blue-500 btn-block text-white rounded-md px-4 py-1 mt-4"}," Verify ")],-1),A={__name:"VerifyAccess",setup(w){const a=c(),t=r({access_code:""});return(k,s)=>(l(),d("div",p,[e("div",_,[x,e("div",f,[e("div",h,[e("div",v,[e("form",{onSubmit:s[1]||(s[1]=i(o=>u(a).verifyAccess(t.value),["prevent"])),class:"text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"},[e("div",b,[n(e("input",{autocomplete:"off",id:"access_code",name:"access_code",type:"text","onUpdate:modelValue":s[0]||(s[0]=o=>t.value.access_code=o),class:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600",placeholder:"access_code"},null,512),[[m,t.value.access_code]]),y]),g],32)])])])])]))}};export{A as default};
