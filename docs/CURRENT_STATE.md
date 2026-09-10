# CURRENT STATE — PETSHOP PRO

[SALES-001]
STATUS:
BLOCKED
DONE:
- Produto, demo, oferta Fundador e onboarding verificados.
- Primeiro lote de 3 pet shops locais com perfil ICP pesquisado em fontes públicas.
- Copy de abordagem aprovada pelo playbook: curta, sem promessa de resultado e com CTA de demonstração.
BLOCKED:
- Conector de envio WhatsApp desta conta retornou: AI connector not enabled. Nenhuma mensagem foi enviada.
NEXT:
- Habilitar o conector comercial já usado nos demais apps ou conectar o remetente autorizado.
- Enviar lote inicial de até 3 abordagens personalizadas.
- Registrar resposta, objeção e próxima ação.


[PET-009]
STATUS:
IN_PROGRESS

DONE:
- Landing comercial completa para os 50 Pet Shops Fundadores por R$ 69,90/mês.
- Mensagem “Dinheiro para Trás” com distinção explícita entre valor identificado, recuperado e margem.
- Demo visual e demonstração navegável com Home, Agenda, Tutor/Pet 360, Produtos, Combos, Planos, Fidelidade e CRM.
- Todos os números simulados marcados como DEMONSTRAÇÃO.
- CTAs de WhatsApp conectados ao canal comercial Jarvis: +55 38 99920-0021.
- FAQ, aviso de privacidade, termos básicos, favicon, Open Graph e página 404.
- Eventos de conversão instrumentados em `window.dataLayer` e evento `petshoppro:analytics`.
- Workflow de GitHub Pages preparado e landing pública publicada.
- Proteção de navegador aplicada: CSP, política de referenciador e bloqueio de conexões externas não necessárias.
- `.gitignore` preventivo e `SECURITY.md` adicionados para evitar credenciais e dados reais no repositório público.
- Novo onboarding de Fundador em `onboarding.html`, sem backend e sem armazenamento próprio nesta fase; coleta somente o essencial e envia o diagnóstico montado ao WhatsApp autorizado.
- Playbook de primeira venda criado em `docs/FIRST_SALE_PLAYBOOK.md` com ICP, abordagem, objeções, fechamento, funil e critérios de venda real.

FILES_CHANGED:
- landing.html
- index.html
- src/landing.css
- src/landing.js
- src/styles.css
- src/app.js
- onboarding.html
- privacidade.html
- termos.html
- 404.html
- favicon.svg
- og-petshop-pro.svg
- robots.txt
- .nojekyll
- .github/workflows/pages.yml
- docs/FIRST_SALE_PLAYBOOK.md
- docs/CURRENT_STATE.md

TESTS:
- `node --check src/landing.js`: PASS
- `node --check src/app.js`: PASS
- páginas e ativos servidos localmente via HTTP: PASS (200)
- arquivos internos referenciados: PASS
- CTAs `wa.me/5538999200021`: PASS
- mensagem dos 50 Fundadores: PASS
- HTML base + viewport: PASS
- busca de segredos no frontend: PASS
- GitHub Pages habilitado com fonte GitHub Actions.
- landing pública HTTPS: PASS — https://bthurlerm-lgtm.github.io/petshop-aplicativo-/landing.html
- landing renderizada e CTAs/links essenciais validados: PASS
- endurecimento pós-publicação: PASS
- onboarding criado e commitado; publicação depende do ciclo do GitHub Pages após o novo push.

DECISIONS:
- Manter arquitetura static-first para validação comercial.
- Não bloquear a primeira venda por cobrança SaaS complexa.
- Pagamento inicial pode ser Pix/link de pagamento enviado após qualificação.
- Mercado Pago continua sendo a preferência brasileira para checkout recorrente futuro.
- O funil comercial oficial passa a ser: LEAD -> QUALIFIED -> DEMO -> INTERESTED -> PAYMENT_SENT -> PAID -> ONBOARDING -> ACTIVE.
- Só considerar venda quando existir cliente real + pagamento confirmado.

RISKS:
- Ainda não existe cobrança Mercado Pago integrada ou link de pagamento oficial configurado.
- Termos e privacidade são bases operacionais e precisam de validação jurídica antes da escala.
- Analytics possui eventos locais, mas ainda não há fornecedor externo de coleta configurado.
- A publicação do novo `onboarding.html` precisa concluir o ciclo automático do GitHub Pages.

NEXT:
- Confirmar publicação do onboarding.
- Criar/obter link de pagamento Mercado Pago ou usar Pix no primeiro fechamento.
- Iniciar prospecção real com o playbook.
- Registrar primeiro lead qualificado.
- Enviar proposta e cobrança.
- Após PAID, enviar onboarding e executar diagnóstico inicial.

NEXT_AGENT:
AGENTE DE VENDAS PETSHOP PRO

CONTEXT_TO_READ:
- docs/CURRENT_STATE.md
- docs/FIRST_SALE_PLAYBOOK.md
- landing.html
- onboarding.html
