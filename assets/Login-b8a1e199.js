import{l as c,a as u,c as l,d as n,e,m,n as d,v as p,u as a,t as h,j as i}from"./index-4e16e08f.js";const x={class:"max-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 min-h-screen"},_={class:"relative py-3 sm:max-w-xl sm:mx-auto"},f=e("div",{class:"absolute inset-0 bg-gradient-to-r from-emerald-300 to-emerald-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"},null,-1),y={class:"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"},v={class:"max-w-md mx-auto"},w=e("div",null,[e("h1",{class:"text-2xl font-semibold"},"Login")],-1),g={class:"divide-y divide-gray-200"},b={class:"relative"},k=e("label",{for:"username",class:"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"},"Username/Email",-1),S={key:0},V={class:"text-red-400 text-sm m-2 p-2"},B={class:"relative"},L=e("label",{for:"password",class:"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"},"Password",-1),P={key:0},U=e("span",{class:"text-red-400 text-sm m-2 p-2"},"Please enter your password",-1),j=[U],D=e("div",{class:"relative"},[e("button",{class:"hover:shadow hover:bg-blue-400 bg-blue-500 text-white rounded-md px-4 py-1 mt-4"}," Submit ")],-1),A={__name:"Login",setup(E){const o=c(),t=u({input_type:"",password:""});return(M,s)=>(l(),n("div",x,[e("div",_,[f,e("div",y,[e("div",v,[w,e("div",g,[e("form",{onSubmit:s[2]||(s[2]=m(r=>a(o).handleLogin(t.value),["prevent"])),class:"py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"},[e("div",b,[d(e("input",{autocomplete:"off",id:"username",name:"input_type",type:"text","onUpdate:modelValue":s[0]||(s[0]=r=>t.value.input_type=r),class:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600",placeholder:"username"},null,512),[[p,t.value.input_type]]),k,a(o).errors.username?(l(),n("div",S,[e("span",V,h(a(o).errors.username[0]),1)])):i("",!0)]),e("div",B,[d(e("input",{autocomplete:"off",id:"password",name:"password",type:"password","onUpdate:modelValue":s[1]||(s[1]=r=>t.value.password=r),class:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600",placeholder:"Password"},null,512),[[p,t.value.password]]),L,a(o).errors.password?(l(),n("div",P,j)):i("",!0)]),D],32)])])])])]))}};export{A as default};
