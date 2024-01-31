import{m as I,p as Z,q,d as S,e as C,s as M,l as T,o as i,c as n,a as e,w as A,x as L,u as d,F as y,g as k,t as c,f as g,v as N,n as F,i as Q,r as j,b as B,h as X,k as K,j as J,L as ee}from"./index-75739538.js";import{h as te}from"./moment-fbc5633a.js";I.create({paramsSerializer:{serialize:Z.stringify}});const Y=q("bskResult",{state:()=>({bskResult:[],formDistrict:null,formMunicipality:[],formBarangay:[],formPosition:[],formReportLevel:null,selectBarangay:[],selectMunicipality:[],limited_access:!1,loading:!1,resultErrors:[]}),getters:{has_limited_access:s=>s.limited_access,is_loading:s=>s.loading,result:s=>s.bskResult,district:s=>s.formDistrict,municipality:s=>s.formMunicipality,position:s=>s.formPosition,barangay:s=>s.formBarangay,select_municipality:s=>s.selectMunicipality,select_barangay:s=>s.selectBarangay,report_level:s=>s.formReportLevel,errors:s=>s.resultErrors},actions:{async getResult(){const s=await I.get("/api/v1/bskresult");this.bskResult=s.data},async getBarangay(s){if(s)try{const a=await I.get("/api/v1/bsk-barangay-by-municipality",{params:{municipality:s}});this.selectBarangay=a.data,this.formBarangay=a.data}catch(a){console.log(a)}},async generateResult(s){if(s)try{this.resultErrors=[],this.loading=!0;const a=await I.get("/api/v1/bskresult",{params:{municipality:s.municipalities,position:s.positions,barangay:s.barangays,report_level:s.report_level,district:s.district}});if(s.report_level=="municipality"){let p;for(let t=0;t<s.municipalities.length;t++)p+=`municipalities[]=${s.municipalities[t]}&`,this.getBarangay(s.municipalities[t])}else s.report_level=="barangay"&&(this.formBarangay=s.barangays.map(p=>({barangay_name:p})));a.status===200&&(this.loading=!1),this.bskResult=a.data.result,this.formReportLevel=s.report_level,this.formDistrict=s.district,this.formMunicipality=typeof s.municipalities=="string"?[s.municipalities]:s.municipalities,this.formPosition=s.positions}catch{this.loading=!1}}}}),se={class:"relative"},ae=e("p",{class:"mx-4 mt-4 px-1 text-[14px] font-semibold text-gray-600"}," Report level: ",-1),le={class:"grid grid-cols-2 border rounded mx-4 my-2 px-1"},ie={class:"py-2"},ne={class:"flex p-2 cursor-pointer gap-1"},oe=e("span",{class:"label-text uppercase text-xs"},"Municipality",-1),re={class:"py-2"},ce={class:"flex p-2 cursor-pointer gap-1"},de=e("span",{class:"label-text uppercase text-xs"},"Barangay",-1),ue=e("div",{class:"divider"},null,-1),pe={key:0,class:"flex border rounded m-4 px-1"},_e=e("div",{class:"py-3 my-auto px-2 w-[120px] border-gray-300 text-gray-600 text-xs font-semibold"}," District ",-1),me={tabindex:"0",class:"flex p-2 gap-1 w-full max-h-[300px]"},ve={class:"flex p-2 cursor-pointer ml-3 gap-1"},ge=["value"],be={class:"label-text uppercase text-xs"},xe={key:1,class:"flex border rounded m-4 px-1"},ye=e("div",{class:"py-3 my-auto px-2 border-r-2 w-[120px] border-gray-300 text-gray-600 text-xs font-semibold"}," Municipality ",-1),he={key:0,class:"mx-auto btn bg-transparent btn-sm btn-block text-gray-800 m-1 hover:bg-transparent border-0 text-[10px]"},fe={key:1,class:"w-full dropdown dropdown-bottom"},Ae={tabindex:"0",class:"dropdown-content p-1 shadow bg-base-100 rounded-box w-full absolute z-[1000] min-w-max list-none overflow-y-auto h-[350px]"},ke={key:0},we={class:"cursor-pointer w-full whitespace-nowrap bg-transparent items-center flex py-2 gap-2 px-2 hover:bg-gray-100 rounded-lg"},Ce=e("span",{class:"label-text text-xs"},"ALL",-1),Re={class:"cursor-pointer w-full whitespace-nowrap bg-transparent items-center flex py-2 gap-2 px-2 hover:bg-gray-100 rounded-lg"},$e=["id","value"],Ne=["id","value"],Be={class:"label-text text-xs"},Pe={key:2,class:"px-4 flex items-center justify-center"},Oe={key:0,class:"grid gap-1 grid-cols-3"},Ee=["onClick"],Le={class:"uppercase text-[10px]"},Ie={key:3,class:"flex border rounded m-4 px-1"},Ue=e("div",{class:"py-3 my-auto px-2 border-r-2 w-[120px] border-gray-300 text-gray-600 text-xs font-semibold"}," Barangay ",-1),Me={class:"w-full dropdown dropdown-bottom"},Se={tabindex:"0",class:"dropdown-content p-1 shadow bg-base-100 rounded-box w-full absolute z-[1000] min-w-max list-none overflow-y-auto h-[350px]"},Te={class:"cursor-pointer w-full whitespace-nowrap bg-transparent items-center flex py-2 gap-2 px-2 hover:bg-gray-100 rounded-lg"},Ye=e("span",{class:"label-text text-xs"},"ALL",-1),Ge={class:"cursor-pointer w-full whitespace-nowrap bg-transparent items-center flex py-2 gap-2 px-2 hover:bg-gray-100 rounded-lg"},Ve=["id","value"],ze={class:"label-text text-xs"},Fe={class:"px-4 flex items-center justify-center"},je={class:"grid gap-1 grid-cols-3"},Ke=["onClick"],We={class:"uppercase text-[10px]"},De={class:"flex border rounded m-4 px-1"},He=e("div",{class:"py-3 my-auto px-2 border-r-2 w-[120px] border-gray-300 text-gray-600 text-xs font-semibold"}," Position ",-1),Ze={class:"w-full dropdown dropdown-bottom"},qe={tabindex:"0",class:"dropdown-content p-1 shadow bg-base-100 rounded-box w-full absolute z-[400] min-w-max list-none overflow-y-auto h-[250px]"},Qe={class:"cursor-pointer w-full whitespace-nowrap bg-transparent items-center flex py-2 gap-2 px-2 hover:bg-gray-100 rounded-lg"},Xe=e("span",{class:"label-text text-xs"},"ALL",-1),Je={class:"cursor-pointer w-full whitespace-nowrap bg-transparent items-center flex py-2 gap-2 px-2 hover:bg-gray-100 rounded-lg"},et=["id","value"],tt={class:"label-text text-xs"},st={class:"px-4 flex items-center justify-center"},at={class:"grid gap-1 grid-cols-3"},lt=["onClick"],it={class:"text-[10px]"},nt={class:"flex py-6"},ot={__name:"FilterForm",setup(s){const a=S(),p=Y(),t=C({district:1,municipalities:[],barangays:[],positions:[],report_level:"municipality"}),_=C(!1),R=C(!1),b=C(!0),h=[{id:1,name:"1st",municipalities:["AGUTAYA","ARACELI","BUSUANGA","CAGAYANCILLO","CORON","CULION","CUYO","DUMARAN","EL NIDO","KALAYAAN","LINAPACAN","MAGSAYSAY","ROXAS","SAN VICENTE","TAYTAY"]},{id:2,name:"2nd",municipalities:["BALABAC","BATARAZA","BROOKE'S POINT","NARRA","QUEZON","RIZAL","SOFRONIO ESPAÑOLA"]},{id:3,name:"3rd",municipalities:["ABORLAN","PUERTO PRINCESA CITY"]}],u=["PUNONG BARANGAY","BARANGAY KAGAWAD"],w=M(()=>{let r=[];return t.value.report_level==="district"||t.value.report_level==="province"?(r=a.province=="PALAWAN"?["MAYOR","VICE-MAYOR","COUNCILOR"]:[],u.filter(l=>!r.includes(l))):(r=["GOVERNOR","VICE-GOVERNOR","BOARD MEMBER"],t.value.municipalities=="PUERTO PRINCESA CITY"||t.value.municipalities.includes("PUERTO PRINCESA CITY")?u.filter(l=>!r.includes(l)):u)}),x=M(()=>{if(a.province=="PALAWAN"){const r=h.find(l=>l.id==t.value.district);return r?r.municipalities:[]}else return Array.isArray(a.municipality)?a.municipality.map(l=>l.municipality_name??l):[a.municipality]});function $(){t.value.municipalities=[],t.value.barangays=[],_.value=!1,z()}function m(){t.value.municipalities=[],t.value.barangays=[],t.value.positions=w.value,_.value=!1,z()}function O(){_.value?t.value.municipalities=x.value.flatMap(r=>r):t.value.municipalities=[]}function f(){R.value?t.value.barangays=p.select_barangay.flatMap(r=>r.barangay_name):t.value.barangays=[]}function U(){b.value?t.value.positions=w.value.flatMap(r=>r):t.value.positions=[]}function G(){_.value=!1,t.value.barangays=[],t.value.report_level=="barangay"&&p.getBarangay(t.value.municipalities)}function W(r){t.value.positions=t.value.positions.filter(l=>l!=r)}function V(r){t.value.report_level=="barangay"?t.value.municipalities=[]:t.value.municipalities=t.value.municipalities.filter(l=>l!=r)}function D(r){t.value.barangays=t.value.barangays.filter(l=>l!=r)}function E(r){let l=r.currentTarget;l&&l.matches(":focus")&&setTimeout(function(){l.blur()},0)}function H(){b.value=!1}function z(){a.has_limited_access&&(t.value.report_level!=="barangay"?(_.value=!0,O()):p.getBarangay(t.value.municipalities))}return T(()=>{t.value.positions=w.value.flatMap(r=>r)}),(r,l)=>(i(),n("div",se,[e("form",{onSubmit:l[12]||(l[12]=Q(()=>{},["prevent"]))},[ae,e("div",le,[e("div",ie,[e("label",ne,[A(e("input",{class:"my-auto radio radio-xs",type:"radio",name:"report_level",value:"municipality",ref:"municipalityRadioBtn","onUpdate:modelValue":l[0]||(l[0]=o=>t.value.report_level=o),onChange:$},null,544),[[L,t.value.report_level]]),oe])]),e("div",re,[e("label",ce,[A(e("input",{class:"my-auto radio radio-xs",type:"radio",name:"report_level",value:"barangay","onUpdate:modelValue":l[1]||(l[1]=o=>t.value.report_level=o),onChange:$},null,544),[[L,t.value.report_level]]),de])])]),ue,t.value.report_level!=="province"&&d(a).province=="PALAWAN"?(i(),n("div",pe,[_e,e("ul",me,[(i(),n(y,null,k(h,o=>e("li",null,[e("label",ve,[A(e("input",{class:"my-auto radio radio-xs",type:"radio",name:"district",value:o.id,"onUpdate:modelValue":l[2]||(l[2]=v=>t.value.district=v),onChange:$},null,40,ge),[[L,t.value.district]]),e("span",be,c(o.name),1)])])),64))])])):g("",!0),t.value.report_level!="district"&&t.value.report_level!="province"?(i(),n("div",xe,[ye,d(a).has_limited_access&&d(a).municipality?(i(),n("div",he,c(Array.isArray(d(a).municipality)?d(a).municipality[0]:d(a).municipality),1)):(i(),n("div",fe,[e("div",{tabindex:"0",class:"btn bg-transparent btn-sm btn-block text-gray-500 m-1 hover:bg-transparent border-0 text-[10px]",onMousedown:E}," Click to select ",32),e("ul",Ae,[t.value.report_level=="municipality"?(i(),n("li",ke,[e("label",we,[A(e("input",{type:"checkbox",class:"checkbox checkbox-sm",id:"all-city","onUpdate:modelValue":l[3]||(l[3]=o=>_.value=o),onChange:O},null,544),[[N,_.value]]),Ce])])):g("",!0),(i(!0),n(y,null,k(d(x),o=>(i(),n("li",{key:o},[e("label",Re,[t.value.report_level=="municipality"?A((i(),n("input",{key:0,type:"checkbox",class:"checkbox checkbox-sm",id:o,value:o,onChange:G,"onUpdate:modelValue":l[4]||(l[4]=v=>t.value.municipalities=v)},null,40,$e)),[[N,t.value.municipalities]]):g("",!0),t.value.report_level=="barangay"?A((i(),n("input",{key:1,type:"radio",class:"radio radio-xs",id:o,value:o,onChange:G,onClick:E,"onUpdate:modelValue":l[5]||(l[5]=v=>t.value.municipalities=v)},null,40,Ne)),[[L,t.value.municipalities]]):g("",!0),e("span",Be,c(o),1)])]))),128))])]))])):g("",!0),d(a).has_limited_access?g("",!0):(i(),n("div",Pe,[t.value.report_level=="municipality"?(i(),n("div",Oe,[(i(!0),n(y,null,k(t.value.municipalities,o=>(i(),n("div",{class:"bg-gray-200 shadow text-gray-600 rounded font-semibold px-2 text-center align-middle py-1 cursor-pointer",onClick:v=>V(o)},[e("p",Le,c(o),1)],8,Ee))),256))])):g("",!0),t.value.report_level=="barangay"&&t.value.municipalities.length?(i(),n("div",{key:1,class:"bg-gray-200 shadow text-gray-600 rounded font-semibold px-2 text-center whitespace-nowrap align-middle py-1 text-[10px] cursor-pointer",onClick:l[6]||(l[6]=o=>V(r.city))},[e("span",null,c(t.value.municipalities),1)])):g("",!0)])),t.value.report_level=="barangay"?(i(),n("div",Ie,[Ue,e("div",Me,[e("div",{tabindex:"0",class:"btn bg-transparent btn-sm btn-block text-gray-500 m-1 hover:bg-transparent border-0 text-[10px]",onMousedown:E}," Click to select ",32),e("ul",Se,[e("li",null,[e("label",Te,[A(e("input",{type:"checkbox",class:"checkbox checkbox-sm",id:"all-barangay","onUpdate:modelValue":l[7]||(l[7]=o=>R.value=o),onChange:f},null,544),[[N,R.value]]),Ye])]),(i(!0),n(y,null,k(d(p).select_barangay,(o,v)=>(i(),n("li",{key:v},[e("label",Ge,[A(e("input",{type:"checkbox",class:"checkbox checkbox-sm",id:"bgy"+v,value:o.barangay_name,"onUpdate:modelValue":l[8]||(l[8]=P=>t.value.barangays=P)},null,8,Ve),[[N,t.value.barangays]]),e("span",ze,c(o.barangay_name),1)])]))),128))])])])):g("",!0),e("div",Fe,[e("div",je,[(i(!0),n(y,null,k(t.value.barangays,(o,v)=>(i(),n("div",{class:"bg-gray-200 shadow text-gray-600 rounded font-semibold px-2 text-center whitespace-nowrap align-middle py-1 cursor-pointer",key:v,onClick:P=>D(o)},[e("p",We,c(o),1)],8,Ke))),128))])]),t.value.report_level!="province"?(i(),n(y,{key:4},[e("div",De,[He,e("div",Ze,[e("div",{tabindex:"0",class:"btn bg-transparent btn-sm btn-block text-gray-500 m-1 hover:bg-transparent border-0 text-[10px]",onMousedown:E}," Click to select ",32),e("ul",qe,[e("li",null,[e("label",Qe,[A(e("input",{type:"checkbox",class:"checkbox checkbox-sm",id:"all-position","onUpdate:modelValue":l[9]||(l[9]=o=>b.value=o),onChange:U},null,544),[[N,b.value]]),Xe])]),(i(!0),n(y,null,k(d(w),(o,v)=>(i(),n("li",{key:v},[e("label",Je,[A(e("input",{type:"checkbox",class:"checkbox checkbox-sm",id:"pos"+v,value:o,onChange:H,"onUpdate:modelValue":l[10]||(l[10]=P=>t.value.positions=P)},null,40,et),[[N,t.value.positions]]),e("span",tt,c(o),1)])]))),128))])])]),e("div",st,[e("div",at,[(i(!0),n(y,null,k(t.value.positions,(o,v)=>(i(),n("div",{class:"bg-gray-200 shadow text-gray-600 rounded font-semibold px-2 py-1 text-center align-middle cursor-pointer",key:"position"+v,onClick:P=>W(o)},[e("p",it,c(o),1)],8,lt))),128))])])],64)):g("",!0),e("div",nt,[e("button",{class:"btn mx-auto rounded w-[130px] shadow-lg",onClick:m}," Reset "),e("button",{class:F(["btn mx-auto btn-success text-white w-[130px] rounded shadow-lg",t.value.report_level=="municipality"&&!t.value.municipalities.length||t.value.report_level=="barangay"&&!t.value.barangays.length||!t.value.positions.length?"btn-disabled":""]),onClick:l[11]||(l[11]=o=>d(p).generateResult(t.value))}," Generate ",2)])],32)]))}},rt={class:"relative lg:block lg:space-y-10 p-2 md:grid md:grid-cols-12 lg:h-full"},ct={key:0},dt={__name:"NavBar",setup(s){const a=C(!1),p=1024,t=C(document.body.offsetWidth),_=C(t.value>p);return window.addEventListener("resize",function(){t.value=document.body.offsetWidth,_.value=t.value>p}),(R,b)=>{const h=j("mdicon");return i(),n("div",rt,[_.value?g("",!0):(i(),n("div",ct,[!_.value&&!a.value?(i(),n("button",{key:0,class:"btn btn-success gap-2 text-white",onClick:b[0]||(b[0]=u=>a.value=!a.value)},[B(h,{name:"play-circle-outline"}),X(" Get Started ")])):(i(),n("button",{key:1,class:"btn btn-ghost absolute right-4 z-50 text-red-600",onClick:b[1]||(b[1]=u=>a.value=!a.value)},[B(h,{name:"close",size:"22"})]))])),_.value||a.value?(i(),K(ot,{key:1})):g("",!0)])}}},ut={class:"flex flex-col md:flex-row gap-10 justify-between items-center"},pt=e("h1",{class:"font-bold md:font-extrabold text-xl md:text-3xl text-gray-700 drop-shadow"}," 2023 Barangay and Sangguniang Kabataan Elections ",-1),_t={class:"font-semibold text-center md:text-left text-xl md:text-3xl uppercase text-gray-600 whitespace-normal md:whitespace-nowrap"},mt=e("p",{class:"mx-auto w-48 px-1 md:mx-0 mt-1"},[e("iframe",{src:"https://free.timeanddate.com/clock/i8sjc6kt/n4159/tlph/fc555/tct/pct/ahl/tt0/tw0/td2/ta1/tb2",frameborder:"0",width:"225",height:"19",allowtransparency:"true"})],-1),vt={class:"flex justify-between gap-2 items-center"},gt={class:"flex justify-center items-center"},bt=e("span",{class:"font-bold drop-shadow-lg"},"Logout",-1),xt={__name:"HelloBar",setup(s){const a=S();return(p,t)=>{const _=j("mdicon");return i(),n("div",ut,[e("div",null,[pt,e("h2",_t," Province of "+c(d(a).province),1),mt]),e("div",vt,[e("div",gt,[e("button",{onClick:t[0]||(t[0]=(...R)=>d(a).logout&&d(a).logout(...R)),class:"text-sm px-2 text-red-500 underline rounded-full flex gap-1 drop-shadow-lg md:-mt-24 -mt-6"},[B(_,{name:"logout-variant",width:"15px"}),bt])])])])}}};const yt={class:"flex flex-col gap-6 p-2 md:p-7 relative"},ht=e("div",{class:"absolute bg-gradient-to-b from-gray-200 to-stone-100 opacity-75 inset-0 z-0 no-print"},null,-1),ft=e("div",{class:"absolute inset-0 bg-[url(assets/img/grid.svg)] bg-center z-0 no-print"},null,-1),At={class:"z-20 text-gray-500"},kt={class:"printHeader hidden mt-4"},wt=e("div",{class:"text-center"},[e("span",{class:"font-semibold text-2xl uppercase"},"2023 Barangay and Sangguniang Kabataan Election Results")],-1),Ct={class:"px-4 py-2 mx-auto"},Rt={class:"headerTable"},$t=e("td",{class:"w-[120px] font-semibold"}," DATE GENERATED: ",-1),Nt={class:"uppercase indent-0.5"},Bt={key:0},Pt=e("td",{class:"w-[120px] font-semibold"}," MUNICIPALITY: ",-1),Ot={class:"indent-0.5"},Et={key:1},Lt=e("td",{class:"w-[120px] font-semibold"},"POSITION:",-1),It={class:"indent-0.5"},Ut=e("hr",null,null,-1),Mt={class:"rounded bg-gray-50"},St={class:"flex gap-3 py-8 px-4 no-print"},Tt={class:"form-control mt-2"},Yt={class:"label cursor-pointer"},Gt=e("span",{class:"label-text font-semibold text-gray-500"},"Proclaimed",-1),Vt={class:"px-6 py-4"},zt={class:"text-xl font-semibold"},Ft={class:"text-lg"},jt={class:"px-4 overflow-x-auto"},Kt={colspan:"6",class:"bg-gray-50 border-b-0 border-t-2"},Wt=e("tr",{class:"border-b"},[e("th",{class:"text-xs bg-gray-50"}," Rank "),e("th",{class:"bg-gray-50"},[e("span",{class:"font-semibold"},"Name")]),e("th",{class:"bg-gray-50"},[e("span",{class:"font-semibold"},"Nickname")]),e("th",{class:"bg-gray-50"},[e("span",{class:"font-semibold"},"Votes")]),e("th",{class:"bg-gray-50"},[e("span",{class:"font-semibold"},"Date Proclaimed")])],-1),Dt={class:"text-xs"},Ht={class:"text-xs"},Zt={class:"text-xs"},qt={class:"text-xs"},Qt={class:"text-xs"},Xt={__name:"Content",setup(s){const a=Y();T(()=>{a.result&&a.getResult()});const p=C(""),t=C(!1),_=new Date().toLocaleDateString("en-PH"),R=M(()=>{try{if(Array.isArray(a.result))return a.result.map(b=>{const h=b.barangays.map(u=>{const w=u.positions.map(x=>{const $=x.result.filter(m=>m.candidate_name.includes(p.value.toUpperCase())||m.candidate_nickname&&m.candidate_nickname.includes(p.value.toUpperCase())).filter(m=>t.value&&m.candidate_position=="PUNONG BARANGAY"?m.candidate_rank==1:t.value&&m.candidate_position=="BARANGAY KAGAWAD"?m.candidate_rank<=7:m);if($.length)return{position:x.position_name,result:$}}).filter(x=>x!=null&&x!==0);if(w.length)return{barangay_name:u.barangay_name,positions:w}}).filter(u=>u!=null&&u!==0);return{municipality_name:b.municipality_name,barangays:h}})}catch(b){console.log(b)}});return(b,h)=>(i(),n("div",yt,[ht,ft,B(xt,{class:"z-20 no-print"}),e("div",At,[e("div",kt,[wt,e("div",Ct,[e("table",Rt,[e("tr",null,[$t,e("td",Nt,c(d(_)),1)]),d(a).report_level=="municipality"?(i(),n("tr",Bt,[Pt,e("td",Ot,c(d(a).municipality.join(", ")),1)])):g("",!0),d(a).report_level!="province"?(i(),n("tr",Et,[Lt,e("td",It,c(d(a).position.join(", ")),1)])):g("",!0)])]),Ut]),e("div",Mt,[e("div",St,[A(e("input",{class:"input w-full max-w-xs font-normal uppercase rounded border-gray-400",type:"text","onUpdate:modelValue":h[0]||(h[0]=u=>p.value=u),name:"search-filter",placeholder:"Search for name or nickname"},null,512),[[J,p.value]]),e("div",Tt,[e("label",Yt,[Gt,A(e("input",{"onUpdate:modelValue":h[1]||(h[1]=u=>t.value=u),type:"checkbox",class:"checkbox checkbox-sm ml-2",name:"is-proclaimed"},null,512),[[N,t.value]])])])]),(i(!0),n(y,null,k(d(R),(u,w)=>(i(),n("div",{key:w},[(i(!0),n(y,null,k(u.barangays,(x,$)=>(i(),n("div",null,[e("div",Vt,[e("p",zt,c(u.municipality_name=="PUERTO PRINCESA CITY"?u.municipality_name:"MUNICIPALITY OF "+u.municipality_name),1),e("span",Ft,"BGY. "+c(x.barangay_name),1),e("div",jt,[(i(!0),n(y,null,k(x.positions,(m,O)=>(i(),n("table",{class:"table table-compact w-full shadow mb-8 uppercase",key:"pos"+O},[e("thead",null,[e("tr",null,[e("th",Kt,c(m.position)+" - "+c(x.barangay_name),1)]),Wt]),e("tbody",null,[Array.isArray(m.result)&&m.result.length>0?(i(!0),n(y,{key:0},k(m.result,(f,U)=>(i(),n("tr",{key:"bskres"+U,class:F(f.candidate_position=="PUNONG BARANGAY"&&f.candidate_rank==1||f.candidate_position=="BARANGAY KAGAWAD"&&f.candidate_rank<=7?"font-semibold":"")},[e("td",Dt,c(f.candidate_rank),1),e("td",Ht,c(f.candidate_name),1),e("td",Zt,c(f.candidate_nickname),1),e("td",qt,c(f.total_votes),1),e("td",Qt,c(f.proclamation_date?d(te)(f.proclamation_date).format("L"):""),1)],2))),128)):g("",!0)])]))),128))])])]))),256))]))),128))])])]))}},Jt={class:"grid grid-cols-12 h-screen"},es={class:"col-span-12 bg-stone-50 flex flex-col lg:flex-row md:divide-x-2"},ts={class:"lg:max-w-[350px] w-full lg:h-full relative lg:fixed overflow-y-scroll lg:z-40 no-print"},ls={__name:"Container",setup(s){S();const a=Y();return T(async()=>{await a.getResult()}),(p,t)=>(i(),n(y,null,[d(a).is_loading?(i(),K(ee,{isFullScreen:!0,key:"loader",bgColor:"bg-slate-500"})):g("",!0),e("div",Jt,[e("div",es,[e("div",ts,[B(dt)]),B(Xt,{class:"flex-1 lg:ml-[350px] print-div"})])])],64))}};export{ls as default};
