import{a as p,S as b,i as u}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const h=a=>a.reduce((e,s)=>e+`
            <li class="gallery-card">
              <a class="gallery-img-orig" href="${s.largeImageURL}">
                <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}" />
                <div class="img-data">
                 <div class="img-data-column img-likes">
                  <p class="img-title">Likes</p>
                  <p class="img-value">${s.likes}</p>
                 </div>
                 <div class="img-data-column img-views">
                  <p class="img-title">Views</p>
                  <p class="img-value">${s.views}</p>
                 </div>
                 <div class="img-data-column img-comments">
                  <p class="img-title">Comments</p>
                  <p class="img-value">${s.comments}</p>
                 </div>
                  <div class="img-data-column img-downloads">
                  <p class="img-title">Downloads</p>
                  <p class="img-value">${s.downloads}</p>
                 </div>
                </div>
              </a>
            </li>
           `,"");p.defaults.baseURL="https://pixabay.com";const f=(a,e)=>{const s={q:a,page:e,key:"47600623-616adcc60326fea30dcc03763",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};return p.get("/api/",{params:s})},g=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),d=document.querySelector(".js-loader"),i=document.querySelector(".js-load-more-btn");let n=1,l="",y=new b(".gallery-card a",{captionsData:"alt",captionDelay:250});const w=async a=>{try{if(a.preventDefault(),l=a.currentTarget.elements.user_query.value.trim(),l===""){u.error({message:"Search value should not be empty!",position:"topRight"});return}g.reset(),c.innerHTML="",i.classList.add("is-hidden"),d.classList.remove("is-hidden"),n=1;const e=await f(l,n);if(d.classList.add("is-hidden"),e.data.totalHits===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",g.reset();return}e.data.totalHits>15&&(i.classList.remove("is-hidden"),i.addEventListener("click",v)),c.innerHTML=h(e.data.hits),L(),y.refresh()}catch(e){console.log(e)}};g.addEventListener("submit",w);const v=async a=>{try{i.classList.add("is-hidden"),d.classList.remove("is-hidden"),n++;const e=await f(l,n);d.classList.add("is-hidden"),i.classList.remove("is-hidden"),c.insertAdjacentHTML("beforeend",h(e.data.hits)),L(),y.refresh(),e.data.totalHits<=n*15&&(i.classList.add("is-hidden"),i.removeEventListener("click",v),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){console.log(e)}};function L(){const e=document.querySelector(".gallery-card").getBoundingClientRect();for(const o in e)if(typeof e[o]!="function"){let t=document.createElement("p");t.textContent=`${o} : ${e[o]}`,document.body.appendChild(t)}const s=e.height;window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
