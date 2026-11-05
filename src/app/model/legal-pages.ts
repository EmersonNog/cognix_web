export type LegalSection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

export type LegalPage = {
  slug: string
  eyebrow: string
  title: string
  description: string
  sections: LegalSection[]
}

export const legalPages = [
  {
    slug: 'termos-de-uso',
    eyebrow: 'Termos legais',
    title: 'Termos de uso',
    description:
      'Regras para usar o app Cognix, suas assinaturas e este site. Última atualização: 5 de novembro de 2026.',
    sections: [
      {
        title: '1. Sobre o Cognix e estes termos',
        paragraphs: [
          'O Cognix é um app de estudos com questões de provas, trilha de estudos, redação, chat com inteligência artificial, análise de desempenho, plano da semana, flashcards, mapas mentais e salas multiplayer. Ele está disponível para Android, iOS e por este site (mkt.cognix-hub.com).',
          'Estes termos valem para o app, para as assinaturas e para este site. Ao criar uma conta ou usar o Cognix, você concorda com eles. Se não concordar, não use o serviço.',
        ],
      },
      {
        title: '2. Sua conta',
        paragraphs: [
          'Para usar o app, você precisa criar uma conta com Google, Apple ou e-mail. A conta é pessoal e intransferível.',
        ],
        bullets: [
          'Informe dados verdadeiros e mantenha seu acesso em segurança. Você é responsável pelo que for feito com a sua conta.',
          'Não compartilhe a conta nem a assinatura com outras pessoas.',
          'Menores de 18 anos devem usar o Cognix com a autorização de um responsável legal, que também responde pela assinatura.',
        ],
      },
      {
        title: '3. Planos e cobrança',
        paragraphs: [
          'Parte dos recursos exige uma assinatura ativa ou o período de teste. Há dois planos: o mensal, que custa R$ 19,90 no primeiro mês e R$ 29,90 por mês depois disso, e o anual, de R$ 299,00 por ano.',
          'O preço que vale é o exibido na tela de compra, que pode variar conforme a loja, o país e as ofertas vigentes. A oferta do primeiro mês do plano mensal vale uma única vez por pessoa.',
          'Você pode assinar pelo Google Play, pela App Store ou por este site. No Google Play e na App Store, a cobrança é feita pela própria loja. Pelo site, o pagamento é processado pela AbacatePay.',
          'A assinatura é renovada automaticamente ao fim de cada período, mensal ou anual, até ser cancelada.',
        ],
      },
      {
        title: '4. Teste grátis',
        paragraphs: [
          'Contas novas podem ativar um teste grátis de 3 dias, com acesso a todos os recursos e sem cobrança. O teste é ativado por você, dentro do app, e pode ser usado uma única vez por conta.',
          'Ao fim do teste, o acesso completo termina. Nenhuma assinatura é contratada automaticamente.',
        ],
      },
      {
        title: '5. Cancelamento',
        paragraphs: [
          'Não há fidelidade: você pode cancelar quando quiser. Após o cancelamento, o acesso continua até o fim do período já pago e a assinatura não é renovada. Para cancelar:',
        ],
        bullets: [
          'Google Play: Play Store → Pagamentos e assinaturas → Assinaturas.',
          'App Store: Ajustes → seu nome → Assinaturas.',
          'Site: no app, em Minha assinatura.',
          'Desinstalar o app ou excluir a conta não cancela assinaturas feitas no Google Play ou na App Store. Cancele na loja antes.',
        ],
      },
      {
        title: '6. Reembolso',
        paragraphs: [
          'Pedidos de reembolso de compras feitas no Google Play ou na App Store seguem as regras de cada loja e devem ser feitos diretamente a ela.',
          'Para compras feitas pelo site, você pode desistir em até 7 dias da contratação, conforme o artigo 49 do Código de Defesa do Consumidor, pedindo o reembolso pelo e-mail informado no item 15.',
        ],
      },
      {
        title: '7. Inteligência artificial',
        paragraphs: [
          'O chat, a correção de redações e outras funções do Cognix usam inteligência artificial. As respostas são geradas automaticamente e podem conter erros, imprecisões ou informações desatualizadas. Confira o que for importante. A IA é um apoio aos estudos e não substitui professores ou orientação profissional.',
          'O uso da IA tem um limite mensal por conta, exibido no app, que pode ser ajustado para manter o serviço estável.',
          'Não envie à IA dados pessoais sensíveis, nem conteúdos de terceiros que você não tenha o direito de usar.',
        ],
      },
      {
        title: '8. Seu conteúdo',
        paragraphs: [
          'Redações, mensagens, anexos, flashcards e outros conteúdos que você cria continuam sendo seus. Você autoriza o Cognix a armazená-los e processá-los apenas para prestar o serviço, por exemplo para corrigir uma redação ou responder no chat.',
          'Você é responsável pelo que envia. Não é permitido enviar conteúdo ilegal, ofensivo, que viole direitos de terceiros ou que contenha vírus e códigos maliciosos.',
        ],
      },
      {
        title: '9. Conteúdo do Cognix',
        paragraphs: [
          'As questões vêm de provas aplicadas por instituições públicas e são usadas para fins educacionais. As pinturas usadas nas capas do app são obras em domínio público.',
          'A marca, a identidade visual, os textos, a organização das trilhas, o código e os demais elementos do app e do site pertencem ao Cognix. Eles não podem ser copiados, redistribuídos ou usados comercialmente sem autorização.',
        ],
      },
      {
        title: '10. Uso permitido',
        paragraphs: ['Ao usar o Cognix, você se compromete a não:'],
        bullets: [
          'Copiar, raspar, automatizar o acesso ou extrair em massa questões e outros conteúdos.',
          'Tentar acessar áreas restritas, contornar limites ou bloqueios, ou fazer engenharia reversa do app.',
          'Atrapalhar outras pessoas, inclusive nas salas multiplayer, ou usar o serviço para fins ilegais.',
        ],
      },
      {
        title: '11. Disponibilidade e resultados',
        paragraphs: [
          'Trabalhamos para manter o Cognix sempre disponível, mas podem ocorrer manutenções e falhas. Recursos podem ser alterados, melhorados ou removidos ao longo do tempo.',
          'O Cognix ajuda a organizar e praticar seus estudos, mas não garante aprovação ou nota em nenhuma prova.',
        ],
      },
      {
        title: '12. Suspensão e exclusão da conta',
        paragraphs: [
          'Podemos suspender ou encerrar contas que violem estes termos, com aviso sempre que possível.',
          'Você pode excluir sua conta a qualquer momento pelo app. A exclusão remove seus dados conforme a Política de privacidade e não pode ser desfeita.',
        ],
      },
      {
        title: '13. Privacidade',
        paragraphs: [
          'O tratamento dos seus dados segue a Política de privacidade e a Política de cookies publicadas neste site.',
        ],
      },
      {
        title: '14. Alterações e lei aplicável',
        paragraphs: [
          'Estes termos podem ser atualizados. Quando a mudança for relevante, avisaremos no app ou neste site. Continuar usando o Cognix depois disso significa aceitar a nova versão.',
          'Estes termos seguem as leis do Brasil, incluindo o Código de Defesa do Consumidor. Fica eleito o foro do domicílio do consumidor.',
        ],
      },
      {
        title: '15. Contato',
        paragraphs: [
          'Dúvidas, pedidos de reembolso de compras feitas pelo site ou outras solicitações:',
          'vestibularapp@gmail.com',
          '@cognix_hub',
        ],
      },
    ],
  },
  {
    slug: 'politica-de-privacidade',
    eyebrow: 'Privacidade',
    title: 'Política de privacidade',
    description:
      'Como o Cognix coleta, utiliza, protege e trata informações relacionadas à experiência no app e na landing page.',
    sections: [
      {
        title: '1. Informações que coletamos',
        paragraphs: [
          'Para prestar nossos serviços, podemos coletar as seguintes informações:',
          'Não coletamos dados pessoais sensíveis, como informações financeiras ou localização precisa, salvo quando isso for informado de forma explícita.',
        ],
        bullets: [
          'Informações de conta: como nome, endereço de e-mail e credenciais de acesso.',
          'Dados de uso: incluindo atividade de estudo, questões respondidas, desempenho e progresso.',
          'Informações do dispositivo: como tipo de aparelho, sistema operacional e versão do app.',
        ],
      },
      {
        title: '2. Como usamos suas informações',
        paragraphs: ['Usamos seus dados para:'],
        bullets: [
          'Oferecer e melhorar a experiência de aprendizagem.',
          'Acompanhar seu progresso e desempenho.',
          'Personalizar recomendações de estudo com apoio de IA.',
          'Manter e melhorar o funcionamento do app.',
          'Oferecer suporte e responder solicitações.',
        ],
      },
      {
        title: '3. IA e processamento de dados',
        paragraphs: [
          'O Cognix pode usar inteligência artificial para:',
          'Seus dados são processados apenas para melhorar sua experiência. Não vendemos seus dados nem os utilizamos para finalidades não relacionadas.',
        ],
        bullets: [
          'Gerar insights de estudo.',
          'Sugerir questões e trilhas de aprendizagem.',
          'Analisar o desempenho do usuário.',
        ],
      },
      {
        title: '4. Compartilhamento de dados',
        paragraphs: [
          'Não vendemos seus dados pessoais.',
          'Podemos compartilhar dados limitados apenas quando necessário com:',
          'Todos os serviços de terceiros devem tratar seus dados com segurança.',
        ],
        bullets: [
          'Prestadores de serviço, como hospedagem, análise e infraestrutura.',
          'Autoridades legais, quando exigido por lei.',
        ],
      },
      {
        title: '5. Armazenamento e segurança',
        paragraphs: [
          'Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou uso indevido.',
          'Ainda assim, nenhum sistema é 100% seguro.',
        ],
      },
      {
        title: '6. Retenção de dados',
        paragraphs: [
          'Mantemos seus dados apenas pelo tempo necessário para prestar nossos serviços ou cumprir obrigações legais.',
          'Você pode solicitar a exclusão dos seus dados a qualquer momento.',
        ],
      },
      {
        title: '7. Seus direitos',
        paragraphs: [
          'Dependendo da sua localização, você pode ter o direito de:',
          'Para exercer esses direitos, entre em contato conosco por um dos canais informados no tópico 9.',
        ],
        bullets: [
          'Acessar seus dados.',
          'Corrigir dados imprecisos.',
          'Solicitar a exclusão dos seus dados.',
          'Retirar seu consentimento.',
        ],
      },
      {
        title: '8. Alterações nesta política',
        paragraphs: [
          'Podemos atualizar esta Política de privacidade periodicamente. As alterações serão publicadas no app ou no nosso site.',
          'O uso continuado do app após essas atualizações significa que você aceita a versão revisada da política.',
        ],
      },
      {
        title: '9. Contato',
        paragraphs: [
          'Se você tiver dúvidas ou preocupações sobre esta Política de privacidade, entre em contato por um dos canais abaixo:',
          '@cognix_hub',
          'vestibularapp@gmail.com',
        ],
      },
    ],
  },
  {
    slug: 'politica-de-cookies',
    eyebrow: 'Cookies',
    title: 'Política de cookies',
    description:
      'Como cookies e tecnologias semelhantes podem ser usados para manter carregamento, segurança e estabilidade da experiência.',
    sections: [
      {
        title: '1. O que são cookies',
        paragraphs: [
          'Cookies são pequenos arquivos gravados no navegador para lembrar preferências, manter recursos funcionando e registrar informações técnicas da navegação.',
          'Alguns cookies são temporários e desaparecem ao fechar o navegador. Outros podem permanecer por mais tempo para reconhecer configurações ou apoiar análises técnicas.',
        ],
      },
      {
        title: '2. Como o Cognix utiliza cookies',
        paragraphs: [
          'No estágio atual, a landing page do Cognix pode utilizar cookies estritamente necessários para carregamento, segurança, desempenho básico e integridade da experiência.',
          'Também podem existir cookies associados a provedores de hospedagem, navegadores e plataformas de terceiros acessadas a partir do site, como canais oficiais do projeto.',
        ],
      },
      {
        title: '3. Categorias que podem aparecer',
        paragraphs: [
          'Se novas categorias de cookies forem adotadas no futuro, esta política será atualizada para refletir a mudança com mais detalhe.',
        ],
        bullets: [
          'Cookies necessários: ajudam o site a abrir, manter estabilidade e proteger a navegação.',
          'Cookies de desempenho: podem apoiar leituras técnicas agregadas sobre uso, erros ou carregamento.',
          'Cookies de terceiros: podem surgir quando você interage com plataformas externas vinculadas ao Cognix.',
        ],
      },
      {
        title: '4. Como gerenciar cookies',
        paragraphs: [
          'Você pode controlar cookies a qualquer momento pelo navegador. A desativação de alguns recursos pode impactar carregamento, estabilidade ou funcionamento parcial da página.',
        ],
        bullets: [
          'Ajustar permissões de cookies diretamente nas configurações do navegador.',
          'Apagar cookies salvos anteriormente no dispositivo.',
          'Usar modos de navegação privada quando quiser reduzir persistência local.',
        ],
      },
      {
        title: '5. Atualizações desta política',
        paragraphs: [
          'Esta política pode mudar conforme o Cognix evoluir, novos recursos forem lançados ou houver ajuste de infraestrutura.',
          'A versão publicada nesta página substitui comunicações anteriores sobre cookies e uso local de dados de navegação.',
        ],
      },
    ],
  },
] satisfies LegalPage[]

export type LegalPageSlug = (typeof legalPages)[number]['slug']

export function findLegalPage(slug: string | null | undefined) {
  return legalPages.find((page) => page.slug === slug) ?? null
}
