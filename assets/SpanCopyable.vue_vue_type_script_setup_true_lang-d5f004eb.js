import{d as r,a6 as l,v as u,b as _,o as f,c as d,w as m,g as C,i as o,t as v,aW as x}from"./index-f857f4b3.js";const y="Copy to clipboard",T=r({__name:"SpanCopyable",props:{value:{default:""}},setup(s){const a=s,{value:t}=l(a),{copy:n,isJustCopied:p}=u({source:t,createToast:!1}),c=_(()=>p.value?"Copied!":y);return(b,e)=>{const i=x;return f(),d(i,{tooltip:o(c)},{default:m(()=>[C("span",{"cursor-pointer":"","font-mono":"",onClick:e[0]||(e[0]=k=>o(n)())},v(o(t)),1)]),_:1},8,["tooltip"])}}});export{T as _};
