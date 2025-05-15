import{a as f,S as m,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="50307425-541b949c038afe75b2e77934f",p="https://pixabay.com/api/";async function g(s){const t={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(p,{params:t})).data}const l=document.querySelector(".gallery");document.querySelector(".loader");const h=new m(".gallery a",{captionsData:"alt"});function b(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:n,comments:u,downloads:d})=>`
    <li class="gallery-item">
      <a href="${i}">
        <img src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${r}</p>
        <p><b>Views:</b> ${n}</p>
        <p><b>Comments:</b> ${u}</p>
        <p><b>Downloads:</b> ${d}</p>
      </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",t),h.refresh()}function L(){l.innerHTML=""}function S(){document.querySelector(".loader").classList.remove("is-hidden")}function q(){document.querySelector(".loader").classList.add("is-hidden")}const c=document.querySelector(".form");document.querySelector(".gallery");document.querySelector(".loader");c.addEventListener("submit",async s=>{s.preventDefault();const t=c.elements["search-text"].value.trim();if(t){L(),S();try{const o=await g(t);o.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):b(o.hits)}catch{a.error({title:"Error",message:"Something went wrong!"})}finally{q()}}});
//# sourceMappingURL=index.js.map
