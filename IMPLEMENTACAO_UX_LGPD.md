# Implementação — Home, Documentação do Quiz e Primeiro Acesso LGPD

## Alterações realizadas

- Ícone Home explícito na navegação desktop.
- Ícone Documentação do Quiz na navegação desktop.
- Opção Documentação do Quiz no menu mobile.
- Nova tela `DocumentationView`, com resumo pedagógico do Quiz e acesso ao DOCX completo.
- Modal bloqueante de primeiro acesso para ciência/consentimento de privacidade.
- Registro no perfil Firestore dos campos:
  - `privacyConsent`
  - `privacyConsentVersion`
  - `privacyConsentAt`
- O modal reaparece quando a versão do aviso muda.
- Se o usuário não concordar, a sessão é encerrada.
- Os dois documentos enviados foram adicionados a `public/docs/`.

## Atenção antes da publicação

O documento `LGPD_Aviso_Privacidade_Generico.docx` é um modelo genérico e afirma que a avaliação não coleta nome/e-mail ou outros identificadores. O aplicativo, entretanto, utiliza autenticação e mantém dados de perfil, e-mail, progresso, pontuação, histórico de quizzes e vínculo de turma/empresa. Por isso, o texto exibido no modal foi adaptado ao funcionamento observado no código.

Antes da publicação, preencher/validar formalmente:

1. Nome do Controlador.
2. Canal de contato para privacidade/proteção de dados.
3. Operadores/fornecedores efetivamente utilizados, inclusive serviços de IA e Firebase, quando aplicável.
4. Bases legais adequadas a cada finalidade; não assumir que consentimento é necessariamente a base legal de todo tratamento.
5. Prazo de retenção e critérios de exclusão.
6. Regras de acesso dos administradores e visualizações coletivas.

Recomenda-se validação jurídica/DPO/encarregado antes de colocar o aviso em produção.

## Observação de validação técnica

Foi realizada inspeção estrutural das alterações. A execução completa de `npm ci`/`npm run lint`/`npm run build` não pôde ser concluída no ambiente desta sessão porque a instalação das dependências excedeu o limite de execução disponível.
