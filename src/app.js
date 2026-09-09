const money = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'});

const state={
  confidence:0.91,
  recovered:0,
  opportunities:[
    {id:'rebuy',title:'Recompras atrasadas',detail:'23 clientes fora do ciclo esperado',value:1180,action:'Recuperar'},
    {id:'agenda',title:'Agenda ociosa',detail:'4 horários disponíveis amanhã',value:720,action:'Preencher'},
    {id:'inactive',title:'Clientes sumidos',detail:'12 clientes reduziram a frequência',value:497,action:'Reativar'},
    {id:'crosssell',title:'Cross-sell perdido',detail:'9 clientes elegíveis para complemento',value:450,action:'Oferecer'}
  ],
  growth:[
    {title:'Produtos',detail:'Sugira itens compatíveis com o pet e o serviço comprado.',metric:'↑ ticket por atendimento'},
    {title:'Combos',detail:'Combine serviço + produto com vantagem clara e margem protegida.',metric:'↑ ticket e conversão'},
    {title:'Plano mensal',detail:'Recorrência com serviços periódicos e benefícios definidos.',metric:'↑ receita recorrente'},
    {title:'Plano trimestral',detail:'Maior compromisso, economia percebida e retenção.',metric:'↑ LTV e previsibilidade'},
    {title:'Níveis & fidelidade',detail:'Evolução por gasto/frequência com benefícios controlados.',metric:'↑ frequência e retenção'},
    {title:'Prioridade na agenda',detail:'Benefício premium para planos/níveis elegíveis, sem bloquear operação.',metric:'↑ valor percebido'}
  ]
};

const total=state.opportunities.reduce((sum,item)=>sum+item.value,0);
document.querySelector('#opportunityTotal').textContent=money.format(total);
document.querySelector('#recoveredTotal').textContent=money.format(state.recovered);
document.querySelector('#confidenceBadge').textContent=`confiança ${Math.round(state.confidence*100)}%`;

const list=document.querySelector('#opportunityList');
for(const item of state.opportunities){
  const el=document.createElement('article');
  el.className='opportunity card';
  el.innerHTML=`<div><h3>${item.title}</h3><p>${item.detail}</p><strong>${money.format(item.value)}</strong></div><button class="action" data-id="${item.id}">${item.action}</button>`;
  list.appendChild(el);
}

const growthList=document.querySelector('#growthList');
for(const item of state.growth){
  const el=document.createElement('article');
  el.className='growth-card card';
  el.innerHTML=`<div><h3>${item.title}</h3><p>${item.detail}</p></div><strong>${item.metric}</strong>`;
  growthList.appendChild(el);
}

list.addEventListener('click',(event)=>{
  const button=event.target.closest('[data-id]');
  if(!button)return;
  button.textContent='Preparado';
  button.disabled=true;
});
