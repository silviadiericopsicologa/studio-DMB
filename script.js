const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if(toggle && nav){
  toggle.addEventListener('click',()=>{
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true':'false');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}

document.querySelectorAll('[data-demo-form]').forEach(form=>{
  form.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Demo del sito: il modulo verrà collegato a email/CRM nella fase operativa.');
  });
});
