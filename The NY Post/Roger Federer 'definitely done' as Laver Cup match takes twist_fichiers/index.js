!function(){"use strict";const e=e=>{(e=>{const t=document.cookie.split(";").map((e=>e.trim()));for(let e=0;e<t.length;e+=1){const[n="",o=""]=t[e].split("=");if("uid2_identity"===n)return o}return null})()||(console.log(`Fetching UID2 token for ${e}`),fetch("https://api.nypdev.com/ads/tradedesk/token",{body:JSON.stringify({email:e}),headers:{Authorization:"Basic QGxsZXk6dmZEVEJPM1Y3cnJ5","Content-Type":"application/json"},method:"POST"}).then((e=>e.ok?e.json():Promise.reject(e))).then((e=>{const{Message:{Data:t}={}}=e;t&&((e,t,n)=>{const o=new Date;o.setTime(o.getTime()+31536e6);const i=`expires=${o.toUTCString()}`;document.cookie=`uid2_identity=${t};${i};path=/`})(0,JSON.stringify(t))})).catch((e=>console.error("Error fetching UID2 token",e))))};(async()=>{const{nypAqfer:{featureFlags:{uid2:t=!1}={}}={}}=window;if(!t)return void console.log("UID2 is disabled");const n=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(t){const{detail:{account:{emailAddress:n=""}={}}={}}=t;if(n)return void e(n)}const n=JSON.parse(window.localStorage?.getItem("zephr")||"")||{},{user:{account:{emailAddress:o=""}={}}={}}=n;o&&e(o)};n(),window.addEventListener("nyp-membership:login",n),window.addEventListener("nyp-membership:account-loaded",n)})()}();