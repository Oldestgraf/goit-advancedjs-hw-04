import{a as g,S as b,i as m}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const p=a=>a.reduce((e,s)=>e+`
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
           `,"");g.defaults.baseURL="https://pixabay.com";const h=(a,e)=>{const s={q:a,page:e,key:"47600623-616adcc60326fea30dcc03763",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};return g.get("/api",{params:s})},f=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),n=document.querySelector(".js-loader"),i=document.querySelector(".js-load-more-btn");let c=1,l="",y=new b(".gallery-card a",{captionsData:"alt",captionDelay:250});const w=async a=>{try{if(a.preventDefault(),l=a.currentTarget.elements.user_query.value.trim(),l===""){m.error({message:"Search value should not be empty!",position:"topRight"});return}n.classList.remove("is-hidden"),c=1,i.classList.add("is-hidden");const e=await h(l,c);if(n.classList.add("is-hidden"),e.data.totalHits===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.innerHTML="",f.reset();return}e.data.totalHits>15&&(i.classList.remove("is-hidden"),i.addEventListener("click",v)),u.innerHTML=p(e.data.hits),L(),y.refresh()}catch(e){console.log(e)}};f.addEventListener("submit",w);const v=async a=>{try{i.classList.add("is-hidden"),n.classList.remove("is-hidden"),c++;const e=await h(l,c);n.classList.add("is-hidden"),i.classList.remove("is-hidden"),u.insertAdjacentHTML("beforeend",p(e.data.hits)),L(),y.refresh(),e.data.totalHits<=c*15&&(i.classList.add("is-hidden"),i.removeEventListener("click",v),m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){console.log(e)}};function L(){const e=document.querySelector(".gallery-card").getBoundingClientRect();for(const o in e)if(typeof e[o]!="function"){let t=document.createElement("p");t.textContent=`${o} : ${e[o]}`,document.body.appendChild(t)}const s=e.height;window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
