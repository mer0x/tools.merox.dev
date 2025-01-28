import{d as p,n as _,b as f,o,f as l,k as u,w as b,l as g,i as n,x as h,F as v,h as x,W as y,y as k,c as $}from"./index-f857f4b3.js";import{c as A}from"./index-9b24a2ab.js";import{_ as w}from"./InputCopyable.vue_vue_type_script_setup_true_lang-2be51f74.js";import{m as V}from"./macAddress-6353d04f.js";import{_ as C}from"./Alert-4cdd9eee.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-dd3ce02c.js";const T={key:0},M=p({__name:"ipv6-ula-generator",setup(F){const t=_("20:37:06:12:34:56"),d=f(()=>{const i=new Date().getTime(),e=A.SHA1(i+t.value).toString().substring(30),a=`fd${e.substring(0,2)}:${e.substring(2,6)}:${e.substring(6)}`;return[{label:"IPv6 ULA:",value:`${a}::/48`},{label:"First routable block:",value:`${a}:0::/64`},{label:"Last routable block:",value:`${a}:ffff::/64`}]}),r=V(t);return(i,e)=>{const a=C,c=k;return o(),l("div",null,[u(a,{title:"Info",type:"info"},{default:b(()=>[g(" This tool uses the first method suggested by IETF using the current timestamp plus the mac address, sha1 hashed, and the lower 40 bits to generate your random ULA. ")]),_:1}),u(c,{value:n(t),"onUpdate:value":e[0]||(e[0]=s=>h(t)?t.value=s:null),placeholder:"Type a MAC address",clearable:"",label:"MAC address:","raw-text":"","my-8":"",validation:n(r)},null,8,["value","validation"]),n(r).isValid?(o(),l("div",T,[(o(!0),l(v,null,x(n(d),({label:s,value:m})=>(o(),$(w,{key:s,value:m,label:s,"label-width":"160px","label-align":"right","label-position":"left",readonly:"","mb-2":""},null,8,["value","label"]))),128))])):y("",!0)])}}});export{M as default};
