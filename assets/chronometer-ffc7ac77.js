import{d as y,n as d,bL as h,o as c,f as w,k as f,w as s,g as m,t as x,i as _,c as g,l as u,z as D,m as R,D as $}from"./index-f857f4b3.js";function C(a){const e=a%1e3,t=(a-e)/1e3%60,n=((a-e)/1e3-t)/60%60,o=(((a-e)/1e3-t)/60-n)/60;return`${o>0?`${o.toString().padStart(2,"0")}:`:""}${n.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}.${e.toString().padStart(3,"0")}`}const b={class:"duration"},B={"mt-5":"",flex:"","justify-center":"","gap-3":""},N=y({__name:"chronometer",setup(a){const e=d(!1),t=d(0);let n=Date.now();const{pause:o,resume:i}=h(()=>{const p=Date.now()-n;n=Date.now(),t.value+=p},{immediate:!1});function S(){n=Date.now(),i(),e.value=!0}function v(){o(),e.value=!1}return(p,l)=>{const k=D,r=R;return c(),w("div",null,[f(k,null,{default:s(()=>[m("div",b,x(_(C)(_(t))),1)]),_:1}),m("div",B,[_(e)?(c(),g(r,{key:1,type:"warning",onClick:v},{default:s(()=>[u(" Stop ")]),_:1})):(c(),g(r,{key:0,type:"primary",onClick:S},{default:s(()=>[u(" Start ")]),_:1})),f(r,{onClick:l[0]||(l[0]=V=>t.value=0)},{default:s(()=>[u(" Reset ")]),_:1})])])}}});const j=$(N,[["__scopeId","data-v-3e03ad8b"]]);export{j as default};
