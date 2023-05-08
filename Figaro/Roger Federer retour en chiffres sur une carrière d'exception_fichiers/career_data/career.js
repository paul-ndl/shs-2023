(()=>{"use strict";var e,t,r,a={42919:(e,t,r)=>{var a={};r.r(a),r.d(a,{data$:()=>z});var i=r(20745),n=r(79310),o=r(70917);const l="rgb(22, 56, 96)",s=(0,o.iv)("width:100%;margin:auto;margin-bottom:20px;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased;font-family:'Noto Serif',serif;color:#163860;fill:#161616;z-index:1;background-color:transparent;position:relative;font-size:1em;a{color:#4a90e2;text-decoration:underline;&:visited{color:#4a90e2;}}@media (max-width: 600px){font-size:15px;}button{font-family:'Source Sans Pro',sans-serif;font-weight:600;padding:12px 24px;border-radius:4px;border:none;border-style:none;text-transform:uppercase;outline:none;cursor:pointer;@media (max-width: 600px){padding:8px 12px;font-size:0.7em;}}h1{display:block;font-size:1.8em;font-weight:bold;line-height:1.4;text-align:center;max-width:550px;margin:20px auto;color:#163860;@media (max-width: 700px){font-size:1.5em;margin:15px auto;}}h2{color:#163860;display:block;font-size:1.3em;line-height:1.4;margin:10px auto 5px auto;font-weight:bold;}h3{color:#163860;display:block;font-size:1.5em;line-height:1.2;margin:10px auto 5px auto;font-weight:bold;}h4{font-weight:bold;font-family:'Source Sans Pro',sans-serif;color:#163860;margin:20px auto 0 auto;}select{background-color:white;border:none;border-bottom:solid 1px ",l,";line-height:1em;color:#163860;outline:none;}.column{max-width:620px;margin:auto;padding:0 5px;>p{font-size:1.1em;line-height:1.6;margin:20px 0;}}.exergue{display:block;padding:25px 5px;width:80%;margin:25px auto;font-size:1.5em;font-weight:bold;max-width:500px;color:#163860;}.date{font-family:'Source Sans Pro',sans-serif;font-size:1em;color:#727272;font-weight:light;}.column .chapo{font-size:1.2em;font-weight:light;color:#163860;text-align:center;&::first-letter{font-size:2em;font-weight:bold;line-height:0;}@media (max-width: 700px){text-align:left;}}.axis-label{font-family:'Source Sans Pro',sans-serif;margin:0;padding:0;font-size:0.9em;&--right{text-align:right;&::after{content:' →';}}&--left{&::before{content:'↑ ';}}}.highlight{font-family:'Source Sans Pro',sans-serif;font-weight:bold;display:inline-block;padding:0 5px 0 5px;line-height:1;font-weight:bold;box-shadow:inset 0 -0.6em ","rgb(255, 202, 70)",";}svg.chart{font-family:'Source Sans Pro',sans-serif;}.chart-explainer{font-family:'Source Sans Pro',sans-serif;margin:0 auto;color:#727272;}.card{font-family:'Source Sans Pro',sans-serif;color:#666;background-color:#eff6ff;padding:10px;margin:30px auto;width:100%;max-width:600px;border-radius:4px;line-height:1.425;h4{margin-top:0;text-align:center;}hr{margin:10px 20%;}}.layout-tooltip{h4{margin:5px auto;}ul{padding-left:5px;list-style:none;}}.quote{display:inline;font-style:italic;&::before{content:'«';}&::after{content:'»';}}","");var d=r(25468),c=r.n(d),m=r(63360),p=r.n(m),u=r(21146),h=r.n(u),f=r(83049),g=r.n(f),v=r(8816),x=r.n(v),b=r(88846),y=r.n(b),w=r(46452),k=r(72335),Z=r(96529),N=r(67294),S=r(45270),j=r(77979),O=r(89201),D={name:"1saj31z",styles:"display:flex;align-items:center;justify-content:center;height:600px;background-color:#fafafa;img{max-width:20%;}"};function B(){return(0,O.tZ)("div",{className:"column",css:D,children:(0,O.tZ)("img",{src:"./images/logo-figdata.png"})})}var R=r(26715),P=r(17020),A=r(83927),X=r.n(A);const C=X().convert({cap:!1}),z=(0,R.D)(((e,t,r={})=>fetch("./data/career.csv").then((e=>e.text())).then((e=>{const a=(0,S.yvh)(t).parse(e,S.rA8);return 0===Object.keys(r).length?a:x()((0,S.yvh)(t).parse,(e=>e.map(((e,t)=>({...a[t],...C(((t,r)=>t(e[r])),r)})))))(e)})))(0,",",{score:e=>JSON.parse(e)})).pipe((0,P.d)(1)),q=(0,o.iv)("margin:auto;position:relative;width:100%;table{font-family:'Source Sans Pro',sans-serif;margin:20px 1em 1em 0;height:auto;table-layout:fixed;width:100%;border-collapse:collapse;border-spacing:0;@media (max-width: 520px){font-size:0.8em;}thead{border-bottom:1px solid ",l,";font-weight:bold;vertical-align:bottom;text-transform:uppercase;th{font-weight:400;text-align:left;padding:0.5em 0.5em 0.2em 0.5em;line-height:1.4em;vertical-align:bottom;}th.number{text-align:right;}}tr:last-child td{border-bottom:none;}td{border-bottom:1px solid #cdcdcd;vertical-align:middle;line-height:1.35em;padding:0.25em 0.5em 0.25em 0.5em;height:100%;&::last{}}td.text{text-align:left;}td.number{text-align:right;font-family:monospace;width:25%;}}",""),M=(0,N.memo)((({data:e,rowFill:t=(e=>{}),columns:r})=>(0,O.tZ)("div",{className:"chart-table",css:q,children:(0,O.BX)("table",{children:[(0,O.tZ)("thead",{children:(0,O.tZ)("tr",{children:r.map(((e,t)=>{const{title:r,type:a,width:i="auto"}=e;return(0,O.tZ)("th",{className:a,style:{width:i},children:r},t)}))})}),(0,O.tZ)("tbody",{children:e.map(((e,a)=>{const i=t(e,a);return(0,O.tZ)("tr",{children:r.map(((t,r)=>{const{attr:n,type:o,format:l=(e=>e),fill:s=(e=>"white"),width:d="auto"}=t,c=n(e,a),m=null!=i?i:s(c),p=(0,S.Ym7)(m).l>.65?"black":"white";return(0,O.tZ)("td",{className:o,style:{backgroundColor:m,color:p,width:d},children:l(c)},r)}))},a)}))})]})})));var W=r(2330),$=r.n(W),_=r(39060),E=r.n(_),L=r(3945),F=r.n(L),G=r(63422),T=r.n(G);const H={name:"1ogdult",styles:"display:flex;flex-wrap:wrap;justify-content:flex-left;font-family:'Source Sans Pro',sans-serif;color:#163860"},U={name:"lbtgsv",styles:"margin:0 10px"},Y=(0,N.memo)((({items:e,title:t})=>{const r=x()(h()(T()("color")),X()(x()(y()(T()("label")),F()(", "))),E(),y()($()(["color","label"])))(e);return(0,O.BX)("div",{className:"layout-legend",css:H,children:[t,r.map(((e,t)=>{const{color:r,label:a}=e;return(0,O.BX)("div",{className:"item",color:r,css:U,children:[(0,O.tZ)("svg",{style:{display:"inline-block",backgroundColor:r,width:"12px",height:"12px",marginRight:"10px",border:"solid 1px #ccc",borderRadius:"50%"},children:(0,O.tZ)("rect",{fill:r,width:"100%",height:"100%"})}),a]},t)}))]})})),I={name:"1gci4bg",styles:"margin:20px auto 20px auto;display:flex;align-items:center;justify-content:center;font-family:'Source Sans Pro',sans-serif;font-weight:bold;color:#163860"},J={name:"1c0dpkf",styles:"position:relative;display:block;width:35px;height:15px;border:solid 0.5px #ddd;border-radius:1px"},V={name:"p73o5b",styles:"position:absolute;display:inline-block;top:-20px"},Q=(0,N.memo)((({scale:e,size:t=6,format:r=(e=>e),label:a=""})=>{const i=[1,5,10,15,20];return(0,O.BX)("div",{className:"layout-legend-continue",css:I,children:[(0,O.tZ)("span",{style:{marginRight:"10px"},children:a}),i.map(((t,a)=>{const n=e(t);return(0,O.tZ)("div",{className:"layout-legend-continue__rect",css:J,style:{background:n},children:(0===a||a===i.length-1)&&(0,O.tZ)("span",{className:"layout-legend-continue__label",css:V,style:{[0===a?"left":"right"]:"0%"},children:r(t)})},t)}))]})})),K={defeat:"#b80065",victory:"#64d04c",victoryImportant:"#009f55",empty:"#fff","US Open":l,"Roland Garros":"#f7b500",Wimbledon:"#12981f","Australian Open":"#4ebbe7","Rafael Nadal":"#e9eda0","Novak Djokovic":"#74bbd3",Olympics:"#e9c051","Coupe Davis":"#0fdac9"},ee=[{title:"Près de 25 ans de carrière",color:(e,t,r)=>{var a,i;return t>=605&&t<=645?K.victoryImportant:null!==(a=null===(i={W:K.victory,L:K.defeat})||void 0===i?void 0:i[e.result])&&void 0!==a?a:K.empty},annotations:[{label:"Premier match",i:0,dx:0,dy:-15},{label:"Dernier match",i:1567,dx:0,dy:15}],Extra:({data:e})=>(e.map(((e,t)=>e.result+("L"===e.result?"":`(${t})`))).join("").split("L").filter(Boolean).map((e=>e.match(/\d+/g).map(Number))),(0,O.BX)("div",{children:[(0,O.tZ)("p",{children:"Roger Federer fait ses débuts sur le circuit ATP en 1998 avec une défaite contre l’Argentin Lucas Arnold Ker. Le légendaire Suisse a disputé 1526 matchs officiels pour 1251 victoires (82% de victoires). D’août 2006 à mars 2007, il est demeuré invaincu, enchaîne 41 victoires d'affilée. Une série stoppée par Guillermo Canas à Indian Wells. Quatre ans plus tard, le Suisse mettra fin à la série de 41 victoires consécutives de Novak Djokovic en stoppant le Serbe lors d’une inoubliable demi-finale à Roland-Garros (le record de victoires consécutives restant la propriété de John McEnroe, 42 en 1984). Roger Federer a terminé sa carrière par match perdu en quarts de finale à Wimbledon contre le Polonais Hubert Hurkacz 6-3, 7-6, 6-0…"}),(0,O.tZ)(Y,{items:[{color:K.victory,label:"Victoires"},{color:K.victoryImportant,label:"Série de 41 victoires"},{color:K.defeat,label:"Défaites"}]})]}))},{title:"156 finales disputées",color:(e,t,r)=>"Finals"===e.round&&e.url?"W"===e.result?K.victory:K.defeat:K.empty,Extra:({data:e})=>(0,O.BX)(O.HY,{children:[(0,O.tZ)("p",{children:"Roger Federer a disputé 156 finales sur le circuit ATP (il a perdu les deux premières à Marseille, puis Bâle en 2000, avant de remporter son premier titre à Milan en 2001). Son palmarès est riche de 103 titres (92 pour Nadal, 88 pour Djokovic), avec notamment 20 tournois du Grand Chelem (le premier à Wimbledon en 2003 ; le dernier lors de l’Open d’Australie 2018), 6 Masters et 28 Masters 1000. Le record est détenu par Jimmy Connors (109 titres). La plus folle année de Federer est 2006 (12 titres), devant 2004 et 2005 (11)."}),(0,O.tZ)(Y,{items:[{color:K.victory,label:"Victoires"},{color:K.defeat,label:"Défaites"}]})]}),annotations:[]},{title:"20 titres en Grand Chelem",color:(e,t,r)=>["US Open","Roland Garros","Wimbledon","Australian Open"].includes(e.tournamentName)?"W"===e.result?K[e.tournamentName]:`url(#${c()(e.tournamentName)})`:K.empty,Extra:({data:e})=>(0,O.BX)(O.HY,{children:[(0,O.tZ)("p",{children:"Le Suisse a débuté sa carrière en Grand Chelem à Roland-Garros en 1999 (défaite en 4 sets au 1er contre l’Australien Patrick Rafter, n°3 mondial). En Grand Chelem, il a participé à 429 matches (369 victoires). Il a signé 3 petits Chelems (2004, 2006, 2007), fait partie des joueurs ayant remporté au moins une fois tous les tournois majeurs (Donald Budge, Rod Laver, Fred Perry, Roy Emerson, André Agassi, Rafael Nadal et Novak Djokovic). Son tour de force en Grand Chelem, Roger Federer l’a signé avec 18 demi-finales remporté sur 19 entre Wimbledon 2005 et l’Open d’Australie 2010). Le Suisse a remporté 20 titres majeurs (8 Wimbledon, 6 Open d’Australie, 5 US Open, 1 Roland-Garros), il est devancé par Rafael Nadal 22 et Novak Djokovic 21."}),(0,O.tZ)(Y,{items:[...["US Open","Roland Garros","Wimbledon","Australian Open"].map((e=>({color:K[e],label:e}))),{color:K.defeat,label:"Dont défaites"}]})]}),annotations:[]},{title:"Dominé par Rafael Nadal et Novak Djokovic",color:(e,t,r)=>["Rafael Nadal","Novak Djokovic"].includes(e.opp_name)?"W"===e.result?K[e.opp_name]:`url(#${c()(e.opp_name)})`:K.empty,Extra:()=>(0,O.BX)(O.HY,{children:[(0,O.tZ)("p",{children:"Installé pour la première fois au sommet du tennis mondial en février 2002, Roger Federer va assister à l'émergence de deux joueurs qui vont devenir ses principaux rivaux : Rafael Nadal et Novak Djokovic. L’Espagnol le tourmente dès leur premier face-à-face et s’impose à Miami en 2004. Il remportera 24 de leurs 40 duels. Novak Djokovic apparaît pour la première fois en 2006, le Serbe s’imposera à 27 reprises lors de leurs 50 face-à-face. Le Suisse n’aura jamais réussi à museler ces deux joueurs."}),(0,O.tZ)(M,{data:[{player:"Rafael Nadal",victoires:17,defaites:24},{player:"Novak Djokovic",victoires:24,defaites:28}],columns:[{title:"Adversaire",attr:e=>e.player,type:"text"},{title:"Victoires",attr:e=>e.victoires,type:"number"},{title:"Défaites",attr:e=>e.defaites,type:"number"}]}),(0,O.tZ)(Y,{items:[...["Rafael Nadal","Novak Djokovic"].map((e=>({color:K[e],label:`vs ${e}`}))),{color:K.defeat,label:"Dont défaites"}]})]}),annotations:[]},{title:"Un n°1 qui lui longtemps collé à la peau",color:(e,t,r)=>(0,S.cJy)([1,20],(e=>(0,S.T0$)(1-e)))(e.rank),inner:(e,t,r,a)=>{const i=(0,S.cJy)([1,20],(e=>(0,S.T0$)(1-e)))(e.rank);if(e.rank<100)return(0,O.tZ)("text",{style:{pointerEvents:"none"},x:a/2,y:a/2,dominantBaseline:"middle",textAnchor:"middle",fill:(n=i,(0,S.Ym7)(n).l>.65?"black":"white"),fontSize:.65*a,fontWeight:"bold",children:e.rank});var n},Extra:({data:e})=>(0,O.BX)(O.HY,{children:[(0,O.tZ)("p",{children:"Roger Federer aimait les records. En juillet 2012, il vivait une 287e semaine au sommet du classement mondial. Une de plus que Pete Sampras. Numéro 1 mondial en fin d’année en 2004, 2005, 2006, 2007 et 2009, il a occupé la première place du classement ATP pendant 310 semaines. Novak Djokovic est le recordman du genre avec 373 semaines passées dans la peau de n°1 mondial."}),(0,O.tZ)(Q,{label:"Classement ATP",format:e=>e<20?e:"20+",scale:(0,S.cJy)([1,20],(e=>(0,S.T0$)(1-e)))})]}),annotations:[]},{title:"Le bourreau des Français",color:(e,t,r)=>"fra"===e.opp_flag?"W"===e.result?K.victory:K.defeat:K.empty,Extra:({data:e})=>(0,O.BX)(O.HY,{children:[(0,O.tZ)("p",{children:"Depuis 2018, le Suisse a affronté les Français à de nombreuses reprises. Un bilan largement en sa faveur : 138 victoires contre seulement 31 défaites. Avec une victime favorite : Richard Gasquet. Le Biterrois compte 19 défaites pour seulement 2 victoires face à Roger Federer."}),(0,O.tZ)(Y,{items:[{color:K.victory,label:"Victoires"},{color:K.defeat,label:"Défaites"}]})]}),annotations:[]},{title:"Les Jeux Olympiques, la symphonie inachevée",color:(e,t,r)=>/Olympics/.test(e.tournamentName)?"W"===e.result?K.Olympics:"url(#olympics)":/Coupe Davis/.test(e.tournamentName)?"W"===e.result?K["Coupe Davis"]:"url(#coupe-davis)":K.empty,Extra:({data:e})=>(0,O.BX)(O.HY,{children:[(0,O.tZ)("p",{children:"De Sydney 2000 à Londres 2012 en passant par Athènes 2004 ou Pékin 2008, Roger Federer porte-drapeau de l’équipe suisse à deux reprises a participé à 4 Jeux olympiques sans parvenir à décrocher le titre olympique en simple. Il a dû se contenter d’une médaille d’argent en 2012 et d’une médaille d’or en… double avec Stan Wawrinka en 2008."}),(0,O.tZ)("p",{children:"En revanche, il a été au bout de son rêve en Coupe Davis avec l'équipe suisse en 2014. En finale, avec son complice Wawrinka en disposant des Français (3-1) à Lille, grâce à une victoire face à Richard Gasquet."}),(0,O.tZ)(Y,{items:[{color:K.Olympics,label:"Jeux Olympiques"},{color:K["Coupe Davis"],label:"Coupe Davis"},{color:K.defeat,label:"Dont défaites"}]})]}),annotations:[{label:"Vainqueur de la Coupe Davis en 2014",i:1258,dx:0,dy:-15}]}],te=(0,N.memo)((e=>{const{id:t,colors:r}=e;return(0,O.BX)("pattern",{id:t,width:"4",height:"4",patternUnits:"userSpaceOnUse",patternContentUnits:"objectBoundingBox",patternTransform:"rotate(-40)",viewBox:"0 0 16 16",children:[(0,O.tZ)("rect",{width:"8",height:"16",fill:Array.isArray(r)?r[0]:r}),(0,O.tZ)("rect",{width:"8",height:"16",x:"8",fill:Array.isArray(r)?r[1]:"white"})]})}));var re={name:"r3572n",styles:"height:12px;display:flex;justify-content:flex-end;align-items:end;img{display:inline;height:100%;}"};const ae=function(){return(0,O.tZ)("div",{css:re,children:(0,O.tZ)("img",{src:"./images/logo-figdata.png"})})};var ie=r(40104),ne=r.n(ie);const oe=x()(E(),ne()((([,e])=>e)),y()((([e])=>e)),F()(" ")),le=y().convert({cap:!1}),se=o.F4`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(5px);
    }
`,de=o.F4`
    from {
        transform: translateX(-5px);
    }
    to {
        transform: translateX(0);
    }
`,ce=(0,N.createContext)(0);function me(){const e=(0,w.nv)((e=>e.data$)),[t,r]=(0,N.useState)(0),{title:a,Extra:i}=ee[t];return(0,O.BX)(O.HY,{children:[(0,O.tZ)("div",{className:"column",children:(0,O.tZ)("div",{className:"chart-explainer",children:"Naviguez à l'aide des flèches ci-dessous pour explorer la carrière de Roger Federer :"})}),(0,O.BX)("div",{className:"column",css:(0,o.iv)("h3{text-align:center;}hr{margin:0 20%;}.nav{margin:20px auto;display:flex;align-items:center;justify-content:space-around;.arrow-container{animation:",se," 0.5s infinite alternate;&--right{animation:",de," 0.5s infinite alternate-reverse;}.arrow{position:relative;height:30px;width:30px;cursor:pointer;&--right{transform:rotate(180deg);}}}.puces{height:30px;display:flex;flex-direction:row;align-items:center;.puce{position:relative;width:10px;height:10px;border-radius:50%;background-color:",l,";margin:0 10px;cursor:pointer;}}}.middle{position:relative;font-size:0.95em;min-height:250px;}",""),children:[(0,O.BX)("div",{className:"nav",children:[(0,O.tZ)("div",{className:"arrow-container",onClick:e=>r((t-1+ee.length)%ee.length),children:(0,O.tZ)(he,{})}),(0,O.tZ)("div",{className:"puces",children:(0,S.w6H)(0,ee.length).map((e=>(0,O.tZ)(j.E.div,{animate:{scale:e===t?2:1},className:"puce",onClick:()=>r(e)},e)))}),(0,O.tZ)("div",{className:"arrow-container arrow-container--right",onClick:e=>r((t+1+ee.length)%ee.length),children:(0,O.tZ)(he,{type:"right"})})]}),(0,O.BX)("div",{className:"middle",children:[(0,O.tZ)("h3",{children:a}),(0,O.tZ)("hr",{}),i&&(0,O.tZ)(i,{data:e})]})]}),(0,O.tZ)(ce.Provider,{value:t,children:(0,O.tZ)(ue,{})})]})}var pe={name:"1nqq452",styles:"position:relative;max-width:620px;margin:0 auto;svg{font-size:0.8rem;.match{stroke:#efefef;stroke-width:0.5;}}"};function ue({squareSize:e=12.5,squarePerRow:t=32,margin:r=40}){const a=(0,w.nv)((e=>e.data$)),i=(0,N.useContext)(ce),{title:n,color:o,annotations:l,inner:s}=ee[i],d={w:e*t,h:e*Math.ceil(a.length/t)},m=d.w+2*r,u=d.h+2*r,f={x:(0,S.tiA)((0,S.w6H)(0,t),[0,d.w]).paddingOuter(0).paddingInner(.075),y:(0,S.tiA)((0,S.w6H)(0,Math.ceil(a.length/t)),[0,d.h]).paddingOuter(0).paddingInner(.075)},[v,b]=(0,k.l)({},[]),y=x()(le(((e,t)=>({year:+e.tournamentDates.slice(0,4),index:t}))),g()("year"),h()((e=>f.y(Math.floor(e.index/t)))),p())(a);return(0,O.BX)("div",{ref:b,css:pe,children:[(0,O.tZ)(v,{}),(0,O.BX)("svg",{className:"chart",preserveAspectRatio:"xMidYMid meet",viewBox:`0 0 ${m} ${u}`,children:[(0,O.BX)("defs",{children:[(0,O.tZ)("rect",{id:"square",width:f.x.bandwidth(),height:f.y.bandwidth(),rx:2}),["US Open","Roland Garros","Wimbledon","Australian Open"].map((e=>(0,O.tZ)(te,{id:c()(e),colors:[K.defeat,K[e]]},e))),["Rafael Nadal","Novak Djokovic"].map((e=>(0,O.tZ)(te,{id:c()(e),colors:[K.defeat,K[e]]},e))),["Olympics","Coupe Davis"].map((e=>(0,O.tZ)(te,{id:c()(e),colors:[K.defeat,K[e]]},e)))]}),(0,O.BX)("g",{transform:`translate(${r} ${r})`,children:[a.map(((r,i)=>{var n,l;const d=f.x(i%t),c=f.y(Math.floor(i/t));return(0,O.BX)("g",{transform:`translate(${d} ${c})`,children:[(0,O.tZ)(j.E.use,{href:"#square",className:"match",initial:{fill:"#fff"},animate:{fill:o(r,i,a)},transition:{duration:1/60,delay:.3*Math.random()},"data-tooltip":`\n                                    <h4>${r.tournamentName} (${r.tournamentDates.slice(0,4)})</h4>\n                                    ${{W:"Vainqueur",L:"Perdant"}[r.result]} contre ${r.opp_name}\n                                    <br />\n                                    ${null===(n=r.score)||void 0===n?void 0:n.map((e=>null==e?void 0:e.join("-"))).join(" ")}\n                                    `}),null!==(l=null==s?void 0:s(r,i,a,e))&&void 0!==l?l:null]},i)})),y.map(((e,a)=>{const{year:i,index:n}=e[0],o=(f.x(n%t),f.y(Math.floor(n/t)));return(0,O.BX)("g",{children:[(0,O.tZ)("text",{x:5-r,y:o+f.y.bandwidth()/2,dominantBaseline:"middle",children:i}),2===e.length&&function(){const{year:r,index:a}=e[1],i=(f.x(a%t),f.y(Math.floor(a/t)));return(0,O.tZ)("text",{x:d.w+5,y:i+f.y.bandwidth()/2,dominantBaseline:"middle",children:r})}(),e.map((e=>{const r=f.x(e.index%t);return(0,O.tZ)("line",{x1:r,x2:r,y1:o,y2:o+f.y.bandwidth(),stroke:"black",strokeWidth:2},e.index)}))]},i)})),l&&l.map((({i:e,label:r,dx:a,dy:i})=>{const n=f.x(e%t),o=f.y(Math.floor(e/t));return(0,O.tZ)(Z.Z,{label:r,dx:a,dy:i,children:(0,O.tZ)("rect",{x:n,y:o,width:f.x.bandwidth(),height:f.y.bandwidth()})},e)}))]})]})]})}function he({type:e="left"}){return(0,O.tZ)("div",{className:oe({arrow:!0,"arrow--left":"left"===e,"arrow--right":"right"===e}),children:(0,O.tZ)("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 100 100",children:(0,O.tZ)("path",{d:(0,S.jvg)()([[75,25],[25,50],[75,75]]),stroke:l,strokeWidth:25,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})})})}(0,i.s)(document.querySelector("#root")).render((0,O.tZ)("div",{className:"figdata-app",css:s,children:(0,O.tZ)((function(){return(0,O.tZ)(w.XQ,{store:a,children:(0,O.BX)(N.Suspense,{fallback:(0,O.tZ)(B,{}),children:[(0,O.tZ)(me,{}),(0,O.BX)("div",{className:"column",children:[(0,O.tZ)("div",{className:"chart-explainer",children:"Source : atpworldtour.com"}),(0,O.tZ)(ae,{})]})]})})}),{})})),(0,n.z)()}},i={};function n(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return a[e](r,r.exports,n),r.loaded=!0,r.exports}n.m=a,e=[],n.O=(t,r,a,i)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){for(var[r,a,i]=e[c],l=!0,s=0;s<r.length;s++)(!1&i||o>=i)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,i<o&&(o=i));if(l){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,a,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var i=Object.create(null);n.r(i);var o={};t=t||[null,r({}),r([]),r(r)];for(var l=2&a&&e;"object"==typeof l&&!~t.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,n.d(i,o),i},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=773,(()=>{var e={773:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,i,[o,l,s]=r,d=0;if(o.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var c=s(n)}for(t&&t(r);d<o.length;d++)i=o[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=globalThis.webpackChunkfront_scaffolder=globalThis.webpackChunkfront_scaffolder||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[736,592],(()=>n(42919)));o=n.O(o)})();