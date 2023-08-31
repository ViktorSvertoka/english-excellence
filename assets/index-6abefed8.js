(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=c(t);fetch(t.href,n)}})();(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),l=()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");const n=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};o.addEventListener("click",l),c.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const e={openModalBtn:document.querySelector("[menu-open-btn]"),closeModalBtn:document.querySelector("[menu-close-btn]"),modal:document.querySelector("[menu-backdrop]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}})();const u=document.querySelector(".menu-open__use");function a(e){e.matches?u.setAttribute("xlink:href","./sprite.svg#icon-menu"):u.setAttribute("xlink:href","./sprite.svg#icon-menu-mini")}const m=window.matchMedia("(min-width: 768px)");a(m);m.addEventListener("change",a);const g=document.querySelector(".footer__link"),r=document.querySelector(".team__backdrop"),f=document.querySelector(".team__modal-close-btn");function h(e){e.preventDefault(),r.classList.remove("is-hidden"),document.body.classList.add("modal-open"),k()}function p(e){e.preventDefault(),e.code==="Escape"&&d()}function y(e){e.target.closest(".team__wrapper")||d()}function b(e){e.preventDefault(),d()}function k(){document.addEventListener("keydown",p),r.addEventListener("click",y),f.addEventListener("click",b)}function d(){document.removeEventListener("keydown",p),r.removeEventListener("click",y),f.removeEventListener("click",b),r.classList.add("is-hidden"),document.body.classList.remove("modal-open")}g.addEventListener("click",h);const v=document.querySelectorAll('a[href*="#"]'),E=document.querySelectorAll(".scroll-button");function L(e,o){e.preventDefault(),document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}for(let e of v)e.addEventListener("click",function(o){const c=e.getAttribute("href").substr(1);L(o,c)});for(let e of E)e.addEventListener("click",function(o){const c=e.getAttribute("data-target");L(o,c)});document.addEventListener("scroll",S);let i=document.querySelector(".scroll__top");function S(){let e=document.documentElement.scrollHeight-document.documentElement.clientHeight,o=.1;document.documentElement.scrollTop/e>o?i.style.display="block":i.style.display="none"}i.addEventListener("click",M);function M(){window.scrollTo({top:0,behavior:"smooth"})}
