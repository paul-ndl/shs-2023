/*! 20230508-6-RELEASE */

!function(){let t=!1,e=100;const n=(()=>{let t=!1;const e=.6;return n=>{try{if(t)return;const r=TRC.DistanceFromArticle.measure(e);if(!r)return;const i=r.containerWithShortestDistFromArticle.distance;"function"==typeof n&&(n("feed-distance-from-article-end",i.toString()),t=!0)}catch(t){__trcError("Error in reportArticleDistanceFromFeed",t)}}})();function r(n=.6){if(t)return;const r=i(n);r&&(e=TRCImpl.global["distance-violation-threshold"]||e,r.containerWithShortestDistFromArticle.distance<e?t=!0:u(r.articleElement,r.containerWithShortestDistFromArticle.distance))}function i(t=.6){const e=TRC.ArticleDetection.detectArticle(t);if(!e||!e.articleElement)return;const{articleElement:n,taboolaContainers:r,lowestContainer:i}=e,l=s(n,i),a=r.filter(t=>o(t,l));let u=a.map(t=>({container:t,distance:c(t,l)}));const f=u.every(t=>t.distance<=0);f?u.forEach(t=>{t.distance=Math.abs(t.distance)}):u=u.filter(t=>t.distance>0);const d=u.sort((t,e)=>t.distance-e.distance).shift();return d?{articleElement:n,containerWithShortestDistFromArticle:d}:void 0}function o(t,e){const n=o(t),r=o(e);return!i(n,r);function i(t,e){return t.x2<e.x1||e.x2<t.x1}function o(t){const e=a(t),n=e+t.offsetWidth,r={x1:e,x2:n};return r}}function c(t,e){const n=l(e)+e.offsetHeight,r=l(t);return r-n}function s(t,e){let n;return t.contains(e)&&(n=f(t,e)),n||t}function l(t){return t.getBoundingClientRect().top+window.pageYOffset}function a(t){return t.getBoundingClientRect().left+window.pageXOffset}function u(n,r){const i={distance:r,articleClasses:n.className,articleTag:n.nodeName,threshold:e},o={event_type:"END_OF_ARTICLE_MEASUREMENT",event_state:"REPORTED",event_value:JSON.stringify(i)};TRCImpl.sendEvent("supply-feature",{d:JSON.stringify(o)},null),TRC.util.isPercentEnabled(TRCImpl.global,"take-screenshot-on-violation")&&TRC.ModuleLoader.load("screenshot-capture",TRC.screenshotCaputre,function(){TRC.screenshotCaputre.init(document.body,{keepImages:!0})}.trcBind(this)),t=!0}function f(t,e){const n=d(t,e);return h(t,n)}function d(t,e){for(let n=0;n<t.children.length;++n)if(t.children[n].contains(e))return t.children[n]}function h(t,e){let n=e.previousElementSibling;for(;n;){const t=TRC.ArticleDetection.getAllTextLengthInElement(n);if(t)return n;n=n.previousElementSibling}}TRC.DistanceFromArticle={measureAndReport:r,measure:i,reportArticleDistanceFromFeed:n},window._trcIsUTactive&&(TRC.DistanceFromArticle.report=u)}();