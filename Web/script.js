// Aven site scripts: smooth scroll and simple reveal animations
document.querySelectorAll('a[href^="#\"], a[href$=".html"]').forEach(link=>link.addEventListener('click',e=>{
  const href = link.getAttribute('href');
  if(href && href.startsWith('#')){
    const target=document.querySelector(href);
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
  }
}));

// Simple reveal on scroll
const observer=new IntersectionObserver((items)=>{
  items.forEach(i=>{
    if(i.isIntersecting){i.target.classList.add('reveal');observer.unobserve(i.target)}
  })
},{threshold:0.12});
document.querySelectorAll('.section, .cards article, .code-card, .road').forEach(el=>observer.observe(el));
