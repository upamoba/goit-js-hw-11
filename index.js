import{a as m,S as p,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="50307425-541b949c038afe75b2e77934f",g="https://pixabay.com/api/";async function h(s){const t={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(g,{params:t})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let b=new p(".gallery a");function L(s){const t=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:i,comments:d,downloads:f})=>`
    <li class="gallery-item">
      <a href="${n}">
        <img src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${r}</p>
        <p><b>Views:</b> ${i}</p>
        <p><b>Comments:</b> ${d}</p>
        <p><b>Downloads:</b> ${f}</p>
      </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",t),b.refresh()}function S(){l.innerHTML=""}function q(){u.classList.remove("is-hidden")}function w(){u.classList.add("is-hidden")}const c=document.querySelector(".form");document.querySelector(".gallery");document.querySelector(".loader");c.addEventListener("submit",async s=>{s.preventDefault();const t=c.elements["search-text"].value.trim();if(t){S(),q();try{const o=await h(t);o.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):L(o.hits)}catch{a.error({title:"Error",message:"Something went wrong!"})}finally{w()}}});
//# sourceMappingURL=index.js.map
