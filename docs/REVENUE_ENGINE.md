# PETSHOP PRO — MOTOR DE AUMENTO DE TICKET E RECORRÊNCIA

## Objetivo
Aumentar receita, margem, frequência e LTV sem depender apenas de aquisição de novos clientes.

## Blocos P0

### 1. Venda de produtos
Recomendações por contexto do atendimento e histórico do pet/tutor.
Exemplos: shampoo, antipulgas, petisco, brinquedo, higiene, acessórios.
Regra: nunca recomendar apenas por faturamento; proteger margem, adequação e experiência do cliente.

### 2. Cross-sell e upsell
- Produto complementar ao serviço comprado.
- Serviço adicional compatível com o perfil do pet.
- Upgrade de categoria quando houver valor claro.

Métricas: attach rate, ticket incremental, margem incremental, conversão por oferta.

### 3. Combos
Combos configuráveis de produtos + serviços.
Cada combo deve registrar preço cheio, desconto, margem mínima, economia percebida e conversão.

### 4. Plano mensal
Recorrência com quantidade de serviços/benefícios definidos por pet.
Possíveis benefícios: preço melhor por serviço, lembretes automáticos, prioridade limitada na agenda e ofertas exclusivas.

### 5. Plano trimestral
Objetivo: elevar retenção e previsibilidade de receita com maior compromisso e benefício percebido.
Nunca ocultar condições, renovação ou cancelamento.

### 6. Níveis de fidelidade
Modelo inicial configurável:
- Essencial
- Plus
- Premium

O nível pode evoluir por frequência, gasto ou assinatura ativa.
Benefícios devem ter custo calculado e limite claro.

### 7. Preferência no agendamento
Clientes elegíveis podem receber acesso antecipado a determinados horários ou janelas reservadas.
Regras obrigatórias:
- não bloquear toda a capacidade do pet shop;
- preservar encaixes operacionais;
- limitar percentual da agenda reservado a benefícios;
- medir ocupação, receita/hora e impacto sobre clientes sem plano.

## Motor de recomendação
Fluxo:
DADO → OPORTUNIDADE → OFERTA MAIS ADEQUADA → AÇÃO → VENDA → MARGEM → ATRIBUIÇÃO → APRENDIZADO

## Prioridade das recomendações
Score inicial:
(impacto estimado × probabilidade × margem × relevância) / fricção

Começar com regras explícitas. ML só após volume de dados suficiente.

## Eventos mínimos
product_viewed
product_added
cross_sell_offered
cross_sell_accepted
combo_offered
combo_purchased
plan_viewed
plan_subscribed
plan_renewed
plan_cancelled
loyalty_level_changed
priority_slot_used
recommendation_executed
incremental_revenue_attributed
incremental_margin_attributed

## KPIs
- Ticket médio
- Ticket incremental por recomendação
- Attach rate de produtos
- Conversão de combos
- MRR de planos
- Renovação mensal/trimestral
- Churn de planos
- Receita recorrente por pet
- LTV por tutor
- Margem incremental
- Ocupação da agenda
- Receita por hora disponível
- Uso de prioridade de agenda

## Guardrail
Nenhuma mecânica de desconto, combo, fidelidade ou plano deve ser promovida se reduzir margem abaixo do limite configurado pelo estabelecimento sem aprovação explícita.
