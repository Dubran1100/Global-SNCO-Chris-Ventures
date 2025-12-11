// Brand switcher interactivity and small enhancements
document.addEventListener('DOMContentLoaded',function(){
  // year
  const year = new Date().getFullYear();
  const el = document.getElementById('year'); if(el) el.textContent = year;

  // Brand switcher
  const switches = document.querySelectorAll('.brand-switcher .switch');
  const globalCard = document.getElementById('global');
  const vunicCard = document.getElementById('vunic');

  switches.forEach(btn=>{
    btn.addEventListener('click',()=>{
      switches.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const which = btn.dataset.site;
      if(which === 'global'){
        globalCard.classList.add('active');
        vunicCard.classList.remove('active');
      } else {
        vunicCard.classList.add('active');
        globalCard.classList.remove('active');
      }
    });
  });

  // simple form submit feedback
  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      alert('Thanks — your message has been received. We\'ll be in touch soon.');
      form.reset();
    });
  }
});
