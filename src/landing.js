window.dataLayer=window.dataLayer||[];
const track=(event,detail={})=>{
  const payload={event,...detail,page:'landing',timestamp:new Date().toISOString()};
  window.dataLayer.push(payload);
  window.dispatchEvent(new CustomEvent('petshoppro:analytics',{detail:payload}));
};
track('page_view');
document.querySelectorAll('.js-track').forEach(element=>element.addEventListener('click',()=>track(element.dataset.event||'click',{label:element.textContent.trim()})));
document.querySelectorAll('details').forEach(element=>element.addEventListener('toggle',()=>{if(element.open)track('faq_open',{question:element.querySelector('summary').textContent.trim()});}));
document.querySelector('.demo-action')?.addEventListener('click',event=>{event.currentTarget.textContent='Ação preparada';event.currentTarget.disabled=true;});
