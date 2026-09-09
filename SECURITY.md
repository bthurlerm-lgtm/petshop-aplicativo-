# Segurança do PetShop Pro

## Escopo público
Este repositório contém somente o site estático e dados de demonstração. Ele não deve receber credenciais, dados pessoais reais, exportações de clientes, chaves de pagamento ou tokens de serviços.

## Relatar um problema
Não publique vulnerabilidades em issues públicas. Envie uma descrição objetiva para jarvisintuitivo@gmail.com com o assunto `[PetShop Pro] Segurança`.

## Regras antes de novas integrações
- Segredos ficam exclusivamente em variáveis de ambiente do provedor.
- Dados de clientes reais exigem autenticação, isolamento por empresa e RLS antes de irem para produção.
- Pagamentos usam checkout hospedado; nenhuma chave do Mercado Pago entra no frontend.
- Toda alteração que envolva dados, cobrança ou permissões passa por revisão humana.
