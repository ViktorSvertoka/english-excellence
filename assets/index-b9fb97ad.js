(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const g=document.querySelector(".js-open-menu"),E=document.querySelector(".js-close-menu"),f=document.querySelector("#mobile-menu"),i=document.querySelector("[data-menu-backdrop]"),S=document.querySelectorAll(".menu__nav-link");function _(){f.classList.add("is-open"),i.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function d(){f.classList.remove("is-open"),i.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}g.addEventListener("click",()=>{_()});E.addEventListener("click",()=>{d()});i.addEventListener("click",()=>{d()});S.forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("href").substring(1),c=document.getElementById(n);c&&(c.scrollIntoView({behavior:"smooth"}),d())})});const m=document.querySelector(".menu-open__use");function p(e){e.matches?m.setAttribute("xlink:href","./sprite.svg#icon-menu"):m.setAttribute("xlink:href","./sprite.svg#icon-menu-mini")}const v=window.matchMedia("(min-width: 768px)");p(v);v.addEventListener("change",p);const q=document.querySelector(".footer__link"),r=document.querySelector(".team__backdrop"),y=document.querySelector(".team__modal-close-btn");function w(e){e.preventDefault(),r.classList.remove("is-hidden"),document.body.classList.add("modal-open"),A()}function L(e){e.preventDefault(),e.code==="Escape"&&u()}function h(e){e.target.closest(".team__wrapper")||u()}function b(e){e.preventDefault(),u()}function A(){document.addEventListener("keydown",L),r.addEventListener("click",h),y.addEventListener("click",b)}function u(){document.removeEventListener("keydown",L),r.removeEventListener("click",h),y.removeEventListener("click",b),r.classList.add("is-hidden"),document.body.classList.remove("modal-open")}q.addEventListener("click",w);const M=document.querySelectorAll('a[href*="#"]'),B=document.querySelectorAll(".scroll-button");function k(e,n){e.preventDefault(),document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}for(let e of M)e.addEventListener("click",function(n){const c=e.getAttribute("href").substr(1);k(n,c)});for(let e of B)e.addEventListener("click",function(n){const c=e.getAttribute("data-target");k(n,c)});document.addEventListener("scroll",I);let l=document.querySelector(".scroll__top");function I(){let e=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=.1;document.documentElement.scrollTop/e>n?l.style.display="block":l.style.display="none"}l.addEventListener("click",T);function T(){window.scrollTo({top:0,behavior:"smooth"})}