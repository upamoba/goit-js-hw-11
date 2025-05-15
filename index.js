import{a as m,S as p,i}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y="50307425-541b949c038afe75b2e77934f",g="https://pixabay.com/api/";async function h(s){const o={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await m.get(g,{params:o})).data}catch(t){throw console.error("Error fetching images:",t.message),t}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let b=new p(".gallery a");function L(s){const o=s.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:a,comments:f,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img class="gallery-image" src="${t}" alt="${e}" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${r}</p>
            <p><b>Views:</b> ${a}</p>
            <p><b>Comments:</b> ${f}</p>
            <p><b>Downloads:</b> ${d}</p>
          </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",o),b.refresh()}function w(){c.innerHTML=""}function S(){l.classList.remove("hidden")}function v(){l.classList.add("hidden")}const u=document.querySelector(".form"),q=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const o=q.value.trim();if(!o){i.warning({message:"Please enter a search term"});return}S(),w();try{const t=await h(o);t.hits.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!"}):L(t.hits)}catch{i.error({message:"Something went wrong. Try again later."})}finally{v()}});
//# sourceMappingURL=index.js.map
