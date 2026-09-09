const money=new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0});

const demo={
  opportunities:[
    {icon:'↻',title:'Recompras atrasadas',detail:'23 clientes fora do ciclo esperado',value:1180,confidence:94,action:'Recuperar'},
    {icon:'◷',title:'Agenda ociosa',detail:'4 horários disponíveis amanhã',value:720,confidence:89,action:'Preencher'},
    {icon:'♡',title:'Clientes sumidos',detail:'12 clientes reduziram a frequência',value:497,confidence:82,action:'Reativar'},
    {icon:'＋',title:'Cross-sell perdido',detail:'9 clientes elegíveis para complemento',value:450,confidence:78,action:'Oferecer'}
  ],
  customers:[
    {initial:'AM',name:'Ana Martins',pet:'Luna · Shih-tzu',tier:'Premium',last:'Banho há 32 dias',ticket:186,next:'Reativar banho'},
    {initial:'RC',name:'Rafael Costa',pet:'Thor · Golden',tier:'Plus',last:'Ração há 41 dias',ticket:242,next:'Recompra de ração'},
    {initial:'JS',name:'Júlia Souza',pet:'Nina · SRD',tier:'Essencial',last:'Tosa há 28 dias',ticket:98,next:'Agendar retorno'}
  ],
  appointments:[
    {time:'09:00',pet:'Luna',service:'Banho + hidratação',person:'Ana Martins',status:'Confirmado'},
    {time:'10:30',pet:'Thor',service:'Banho + tosa',person:'Rafael Costa',status:'A confirmar'},
    {time:'13:00',pet:'—',service:'Horário disponível',person:'Potencial de R$ 120',status:'Ocioso'},
    {time:'15:30',pet:'Nina',service:'Tosa higiênica',person:'Júlia Souza',status:'Confirmado'}
  ],
  products:[
    {name:'Ração Premium 10 kg',stock:3,min:5,price:219,cost:154,tag:'Ruptura próxima'},
    {name:'Petisco dental',stock:24,min:8,price:28,cost:12,tag:'Cross-sell'},
    {name:'Shampoo neutro',stock:18,min:6,price:42,cost:21,tag:'Boa margem'}
  ]
};

const views={
  home:()=>`<section class="money-card"><div><p>Oportunidades identificadas</p><strong>${money.format(2847)}</strong><small>estimativa com base nas oportunidades atuais</small></div><span>91% confiança</span></section><section class="section"><div class="section-head"><div><p class="eyebrow">PRÓXIMA MELHOR AÇÃO</p><h2>Faça primeiro</h2></div><span class="badge">4 oportunidades</span></div><div class="stack">${demo.opportunities.map((o,i)=>`<article class="opportunity card ${i===0?'priority':''}"><span class="opp-icon">${o.icon}</span><div><h3>${o.title}</h3><p>${o.detail}</p><small>confiança ${o.confidence}%</small></div><strong>${money.format(o.value)}</strong><button data-action="${o.action}">${o.action}</button></article>`).join('')}</div></section><section class="result-grid"><article class="card"><p>Recuperado</p><strong>${money.format(640)}</strong><small>receita atribuída</small></article><article class="card"><p>Margem recuperada</p><strong>${money.format(282)}</strong><small>após custos</small></article><article class="card"><p>Ações concluídas</p><strong>8</strong><small>este mês</small></article></section>`,
  clientes:()=>`<section class="section intro"><p class="eyebrow">TUTOR + PET 360</p><h2>Quem precisa de atenção agora</h2><p>Histórico, frequência e próxima oportunidade em uma única visão.</p></section><section class="stack">${demo.customers.map(c=>`<article class="customer card"><span class="initial">${c.initial}</span><div><div class="customer-name"><h3>${c.name}</h3><span>${c.tier}</span></div><p>${c.pet}</p><div class="mini-grid"><small>ÚLTIMA INTERAÇÃO<b>${c.last}</b></small><small>TICKET MÉDIO<b>${money.format(c.ticket)}</b></small></div><div class="next-action"><span>Próxima oportunidade</span><b>${c.next}</b></div></div></article>`).join('')}</section>`,
  agenda:()=>`<section class="section intro"><div class="section-head"><div><p class="eyebrow">AMANHÃ · 10 SET</p><h2>Agenda e capacidade</h2></div><span class="badge warning">1 horário ocioso</span></div></section><section class="timeline">${demo.appointments.map(a=>`<article class="appointment ${a.status==='Ocioso'?'empty':''}"><time>${a.time}</time><div class="card"><div><h3>${a.pet}</h3><p>${a.service}</p><small>${a.person}</small></div><span>${a.status}</span></div></article>`).join('')}</section><button class="wide-action" data-action="Preencher agenda">Encontrar clientes para o horário vazio</button>`,
  vendas:()=>`<section class="section intro"><div class="section-head"><div><p class="eyebrow">PRODUTOS + SERVIÇOS</p><h2>Proteja estoque e margem</h2></div><span class="badge">Ticket +12%</span></div></section><div class="product-list">${demo.products.map(p=>`<article class="product card"><div><span class="product-tag">${p.tag}</span><h3>${p.name}</h3><p>${p.stock} em estoque · mínimo ${p.min}</p></div><div><strong>${money.format(p.price)}</strong><small>margem ${Math.round((p.price-p.cost)/p.price*100)}%</small></div></article>`).join('')}</div><section class="section"><div class="section-head"><h2>Ofertas recorrentes</h2><span class="badge">margem protegida</span></div><div class="offer-grid"><article class="card"><span>COMBO</span><h3>Banho + hidratação</h3><p><s>R$ 105</s> por <b>R$ 94</b></p><small>Margem estimada: 46%</small></article><article class="card"><span>PLANO MENSAL</span><h3>Clube Bem-Cuidado</h3><p>2 banhos + prioridade</p><small>R$ 149/mês</small></article><article class="card"><span>TRIMESTRAL</span><h3>Rotina Premium</h3><p>6 banhos + 2 hidratações</p><small>R$ 419/trimestre</small></article></div></section>`,
  crm:()=>`<section class="section intro"><p class="eyebrow">CRM ACIONÁVEL</p><h2>Segmentos que merecem ação</h2><p>Prioridade por valor, confiança e urgência — sem disparo automático.</p></section><div class="segment-grid">${[['Recompra atrasada','23','R$ 1.180'],['Risco de abandono','12','R$ 497'],['VIP','18','R$ 3.840 LTV'],['Aniversário','9','esta semana'],['Alta frequência','34','clientes'],['Planos a renovar','7','R$ 813 MRR']].map(s=>`<article class="card"><span>${s[0]}</span><strong>${s[1]}</strong><small>${s[2]}</small><button data-action="Abrir segmento">Ver clientes</button></article>`).join('')}</div>`
};

const content=document.querySelector('#appContent');
const titles={home:'Dinheiro para trás',agenda:'Agenda',clientes:'Clientes e pets',vendas:'Vendas e recorrência',crm:'CRM'};
function render(screen){content.innerHTML=views[screen]();document.querySelector('#screenTitle').textContent=titles[screen];document.querySelectorAll('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.screen===screen));content.querySelectorAll('[data-action]').forEach(button=>button.addEventListener('click',()=>{button.textContent='Ação preparada';button.disabled=true;}));window.scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('.bottom-nav button').forEach(button=>button.addEventListener('click',()=>render(button.dataset.screen)));
render('home');
