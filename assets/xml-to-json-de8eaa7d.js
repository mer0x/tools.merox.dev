import{_ as n}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-5de19ed1.js";import{c as a}from"./index-5c1d9a3f.js";import{i as s}from"./xml-formatter.service-f7355c32.js";import{w as i}from"./defaults-4d6daddf.js";import{d as m,o as u,c as l}from"./index-f857f4b3.js";import"./TextareaCopyable-51c80fe9.js";import"./Copy-ca35c030.js";import"./Scrollbar-b2517946.js";import"./index-3aa13386.js";const p=`<a x="1.234" y="It's"/>`,j=m({__name:"xml-to-json",setup(c){function o(t){return i(()=>JSON.stringify(a.xml2js(t,{compact:!0}),null,2),"")}const r=[{validator:s,message:"Provided XML is not valid."}];return(t,f)=>{const e=n;return u(),l(e,{"input-label":"Your XML content","input-default":p,"input-placeholder":"Paste your XML content here...","output-label":"Converted JSON","output-language":"json",transformer:o,"input-validation-rules":r})}}});export{j as default};
