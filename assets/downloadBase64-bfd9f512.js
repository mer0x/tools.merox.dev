import{m as l}from"./index-be8b8109.js";import{e as d}from"./index-f857f4b3.js";const f={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};function u({base64String:e}){const[,n]=e.match(/data:(.*?);base64/i)??[];if(n)return{mimeType:n};const t=d.find(f,(i,o)=>e.startsWith(o));return t?{mimeType:t}:{mimeType:void 0}}function g({mimeType:e,defaultExtension:n="txt"}){return e?l.extension(e)??n:n}function p({sourceValue:e,filename:n,extension:t,fileMimeType:i}){if(e==="")throw new Error("Base64 string is empty");const o=t??"txt",{mimeType:m}=u({base64String:e});let s=e;m||(s=`data:${i??l.extension(o)};base64,${e}`);const c=t??g({mimeType:m,defaultExtension:o});let r=n??`file.${c}`;t&&!r.endsWith(`.${t}`)&&(r=`${r}.${c}`);const a=document.createElement("a");a.href=s,a.download=r,a.click()}function h({source:e,filename:n,extension:t,fileMimeType:i}){return{download(){p({sourceValue:e.value,filename:n,extension:t,fileMimeType:i})}}}function B({source:e,filename:n,extension:t}){return{download(){p({sourceValue:e.value,filename:n?.value,extension:t?.value})}}}function F(e){if(e==="")throw new Error("Base64 string is empty");const n=document.createElement("img");n.src=e;const t=document.createElement("div");t.appendChild(n);const i=document.getElementById("previewContainer");if(i)i.innerHTML="",i.appendChild(t);else throw new Error("Preview container element not found");return n}export{h as a,u as g,F as p,B as u};
