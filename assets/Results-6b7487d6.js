import{d as P,e as C,r as E,o,c as n,a as t,t as e,u as i,f as u,F as h,g as f,b as N,h as x}from"./index-775cea0c.js";const D={id:"printContent"},I={class:"printHeader hidden -mt-6"},S=t("div",{class:"text-center"},[t("span",{class:"font-semibold text-xl"},"2022 National Election Results")],-1),V={class:"mb-2"},B={class:"headerTable"},O=t("td",{class:"w-[100px] font-semibold"},"DATE PRINTED:",-1),A={class:"uppercase indent-0.5"},L=t("td",{class:"w-[100px] font-semibold"},"REPORT LEVEL:",-1),M={class:"uppercase indent-0.5"},H={key:0},j=t("td",{class:"w-[100px] font-semibold"},"MUNICIPALITY:",-1),F={class:"indent-0.5"},z=t("td",{class:"w-[100px] font-semibold"},"POSITION:",-1),U={class:"indent-0.5"},Y=t("hr",null,null,-1),q={class:"bg-white px-6 lg:px-20 py-10 mx-auto relative uppercase"},G={class:"font-semibold text-xl"},J={key:0,class:"text-sm"},W={class:"font-semibold"},K={key:1,class:"text-sm"},Q={class:"font-semibold"},X={class:"text-sm"},Z={key:0,class:"font-semibold"},$={class:"text-sm"},tt={key:0,class:"font-semibold"},et={class:"text-sm"},st={key:0,class:"font-semibold"},ot={class:"text-sm"},nt={key:0,class:"font-semibold"},lt={class:"mt-4 lg:ml-8"},it={class:"text-lg font-semibold"},at={class:"table w-full table-compact mb-4 page-break-after-always contentTable"},rt={colspan:"4"},ct={colspan:"4",class:"py-0"},dt={class:"text-xs font-normal"},_t={class:"text-xs font-normal"},ut=t("tr",null,[t("th",{class:"w-2 text-left"},"#"),t("th",{class:"w-1/4 text-left"}," Candidate "),t("th",{class:"text-right"},"Votes"),t("th",{class:"text-right"},"Percentage")],-1),ht={class:"text-right"},mt={class:"text-right"},pt=t("thead",null,[t("tr",null,[t("th",{class:"w-2 text-left"},"#"),t("th",{class:"w-1/4 text-left"},"Candidate"),t("th",{class:"text-right"},"Votes"),t("th",{class:"text-right"},"Percentage")])],-1),xt={class:"text-right"},ft={class:"text-right"},gt={key:0},vt=t("td",{class:"font-semibold text-right pr-20 text-lg",colspan:"2"}," Total ",-1),bt={class:"font-semibold text-lg text-right"},yt=t("td",{class:"font-semibold text-lg text-right"}," 100% ",-1),Tt=t("div",{class:"divider"},null,-1),Pt={__name:"Results",setup(kt){const a=P(),T=new Date().toLocaleDateString("en-PH");function g(d,_){return(100*d/_).toFixed(2)}function y(d){return d.sort((_,m)=>{let s=parseInt(_.total_votes),p=parseInt(m.total_votes);return s<p?1:s>p?-1:0}),d}function c(d){return d.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")}function k(){let _=0;const m=document.querySelectorAll(".print-content");for(let s=0;s<m.length;s++){let p=m[s].offsetHeight;s==0&&(p-=400),_>1024&&(m[s].classList.add("break-page"),_=0),_+=p}return setTimeout(function(){window.print()},500),!1}const w=C([]);return(d,_)=>{const m=E("mdicon");return o(),n(h,null,[t("div",D,[t("div",I,[S,t("div",V,[t("table",B,[t("tr",null,[O,t("td",A,e(i(T)),1)]),t("tr",null,[L,t("td",M,e(i(a).report_level),1)]),i(a).report_level=="municipality"?(o(),n("tr",H,[j,t("td",F,e(i(a).municipality.join(", ")),1)])):u("",!0),t("tr",null,[z,t("td",U,e(i(a).position.join(", ")),1)])])]),Y]),t("div",q,[(o(!0),n(h,null,f(i(a).result,(s,p)=>(o(),n("div",{key:p,ref_for:!0,ref_key:"tableContainer",ref:w,class:"print-content"},[t("h3",G,e(s.municipality),1),i(a).report_level=="barangay"?(o(),n("div",J,[x(" Barangay: "),t("span",W,e(s.barangay),1)])):u("",!0),i(a).report_level=="district"?(o(),n("div",K,[x(" District: "),t("span",Q,e(i(a).district),1)])):u("",!0),t("div",X,[x(" Registered Voters: "),s.result.stats?(o(),n("span",Z,e(c(s.result.stats[0].reg_voters)),1)):u("",!0)]),t("div",$,[x(" Total Turnout: "),s.result?(o(),n("span",tt,e(c(s.result.stats[0].total_turnout)),1)):u("",!0)]),t("div",et,[x(" Turnout Percentage: "),s.result?(o(),n("span",st,e(g(s.result.stats[0].total_turnout,s.result.stats[0].reg_voters))+"%",1)):u("",!0)]),t("div",ot,[x(" JPM Members: "),s.jpm_members?(o(),n("span",nt,e(c(s.jpm_members.total_members)),1)):u("",!0)]),(o(!0),n(h,null,f(s.result.turnouts,(l,wt)=>(o(),n("div",lt,[t("p",it,e(l.position),1),t("table",at,[i(a).report_level=="province"&&(l.position=="CONGRESSMAN"||l.position=="BOARD MEMBER")?(o(!0),n(h,{key:0},f(l.district,(r,v)=>(o(),n(h,null,[t("thead",null,[t("tr",null,[t("th",rt,"District "+e(r.id),1)]),t("tr",null,[t("th",ct,[t("p",dt," Registered Voters: "+e(c(r.reg_voters)),1),t("p",_t," Total Turnout: "+e(c(r.total_turnout)),1)])]),ut]),t("tbody",null,[(o(!0),n(h,null,f(y(r.candidates),(b,R)=>(o(),n("tr",null,[t("td",null,e(R+1)+".",1),t("td",null,e(b.candidate_name),1),t("td",ht,e(c(b.total_votes)),1),t("td",mt,e(g(b.total_votes,r.position_total_votes))+"% ",1)]))),256))])],64))),256)):(o(),n(h,{key:1},[pt,t("tbody",null,[(o(!0),n(h,null,f(y(l.candidates),(r,v)=>(o(),n("tr",{key:v,class:"border-b"},[t("td",null,e(v+1)+".",1),t("td",null,e(r.candidate_name),1),t("td",xt,e(c(r.total_votes)),1),t("td",ft,e(g(r.total_votes,l.position_total_votes))+"% ",1)]))),128))]),t("tfoot",null,[l.position!="SENATOR"&&l.position!="BOARD MEMBER"&&l.position!="COUNCILOR"&&l.position!="PARTY LIST"?(o(),n("tr",gt,[vt,t("td",bt,e(c(l.position_total_votes)),1),yt])):u("",!0)])],64))]),Tt]))),256))]))),128))])]),t("button",{title:"Print",onClick:k,class:"no-print fixed z-90 bottom-10 right-8 bg-red-400 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-green-400 hover:drop-shadow-2xl hover:animate-bounce duration-300"},[N(m,{name:"printer",size:"40"})])],64)}}};export{Pt as default};
