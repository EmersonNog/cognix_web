export const legalPageRoutes = [
  'termos-de-uso',
  'politica-de-privacidade',
  'politica-de-cookies',
] as const

export type LegalPageRoute = (typeof legalPageRoutes)[number]

export type LegalPageSectionModel = {
  bullets?: string[]
  paragraphs: string[]
  title: string
}

export type LegalPageContactChannelModel = {
  external?: boolean
  href: string
  label: string
}

export type LegalPageContactModel = {
  channels: LegalPageContactChannelModel[]
  description: string
  title: string
}

export type LegalPageModel = {
  contact?: LegalPageContactModel
  eyebrow: string
  highlights: string[]
  route: LegalPageRoute
  sections: LegalPageSectionModel[]
  summary: string
  title: string
  updatedAtLabel: string
}

export function isLegalPageRoute(value: string): value is LegalPageRoute {
  return legalPageRoutes.includes(value as LegalPageRoute)
}

export function createLegalHashHref(route: LegalPageRoute) {
  return `/#/${route}`
}

export function getLegalPageRouteFromHash(hash: string) {
  if (!hash.startsWith('#/')) {
    return null
  }

  const route = hash.slice(2).replace(/\/+$/, '').split('?')[0]

  return isLegalPageRoute(route) ? route : null
}

const defaultContactChannels: LegalPageContactChannelModel[] = [
  {
    external: true,
    href: 'https://www.instagram.com/cognix_hub/',
    label: '@cognix_hub',
  },
  {
    href: 'mailto:vestibularapp@gmail.com',
    label: 'vestibularapp@gmail.com',
  },
]

export const legalPages: Record<LegalPageRoute, LegalPageModel> = {
  'politica-de-cookies': {
    contact: {
      channels: defaultContactChannels,
      description:
        'Se precisar falar com o Cognix sobre cookies, preferências ou dados locais de navegação, use um dos canais abaixo.',
      title: 'Canais de contato',
    },
    eyebrow: 'Uso de cookies',
    highlights: [
      'A landing usa recursos técnicos necessários para funcionar com estabilidade.',
      'Cookies de terceiros podem aparecer em recursos de navegador, hospedagem e plataformas externas.',
      'Você pode revisar e bloquear cookies pelo próprio navegador a qualquer momento.',
    ],
    route: 'politica-de-cookies',
    sections: [
      {
        paragraphs: [
          'Cookies são pequenos arquivos gravados no navegador para lembrar preferências, manter recursos funcionando e registrar informações técnicas da navegação.',
          'Alguns cookies são temporários e desaparecem ao fechar o navegador. Outros podem permanecer por mais tempo para reconhecer configurações ou apoiar análises técnicas.',
        ],
        title: '1. O que são cookies',
      },
      {
        paragraphs: [
          'No estágio atual, a landing page do Cognix pode utilizar cookies estritamente necessários para carregamento, segurança, desempenho básico e integridade da experiência.',
          'Também podem existir cookies associados a provedores de hospedagem, navegadores e plataformas de terceiros acessadas a partir do site, como canais oficiais do projeto.',
        ],
        title: '2. Como o Cognix utiliza cookies',
      },
      {
        bullets: [
          'Cookies necessários: ajudam o site a abrir, manter estabilidade e proteger a navegação.',
          'Cookies de desempenho: podem apoiar leituras técnicas agregadas sobre uso, erros ou carregamento.',
          'Cookies de terceiros: podem surgir quando você interage com plataformas externas vinculadas ao Cognix.',
        ],
        paragraphs: [
          'Se novas categorias de cookies forem adotadas no futuro, esta política será atualizada para refletir a mudança com mais detalhe.',
        ],
        title: '3. Categorias que podem aparecer',
      },
      {
        bullets: [
          'Ajustar permissões de cookies diretamente nas configurações do navegador;',
          'Apagar cookies salvos anteriormente no dispositivo;',
          'Usar modos de navegação privada quando quiser reduzir persistência local.',
        ],
        paragraphs: [
          'Você pode controlar cookies a qualquer momento pelo navegador. A desativação de alguns recursos pode impactar carregamento, estabilidade ou funcionamento parcial da página.',
        ],
        title: '4. Como gerenciar cookies',
      },
      {
        paragraphs: [
          'Esta política pode mudar conforme o Cognix evoluir, novos recursos forem lançados ou houver ajuste de infraestrutura.',
          'A versão publicada nesta página substitui comunicações anteriores sobre cookies e uso local de dados de navegação.',
        ],
        title: '5. Atualizações desta política',
      },
    ],
    summary:
      'Como a landing page do Cognix pode usar cookies e como você pode gerenciar essas preferências no navegador.',
    title: 'Política de cookies',
    updatedAtLabel: 'Data de vigência: 10/04/2024',
  },
  'politica-de-privacidade': {
    contact: {
      channels: defaultContactChannels,
      description:
        'Se você tiver dúvidas ou preocupações sobre esta Política de privacidade, entre em contato por um dos canais abaixo.',
      title: 'Canais de contato',
    },
    eyebrow: 'Privacidade e dados',
    highlights: [
      'Podemos coletar informações de conta, uso e dispositivo para prestar nossos serviços.',
      'Não vendemos seus dados pessoais nem usamos suas informações para finalidades não relacionadas ao app.',
      'Para exercer seus direitos, entre em contato por Instagram ou e-mail.',
    ],
    route: 'politica-de-privacidade',
    sections: [
      {
        bullets: [
          'Informações de conta: como nome, endereço de e-mail e credenciais de acesso',
          'Dados de uso: incluindo atividade de estudo, questões respondidas, desempenho e progresso',
          'Informações do dispositivo: como tipo de aparelho, sistema operacional e versão do app',
        ],
        paragraphs: [
          'Para prestar nossos serviços, podemos coletar as seguintes informações:',
          'Não coletamos dados pessoais sensíveis, como informações financeiras ou localização precisa, salvo quando isso for informado de forma explícita.',
        ],
        title: '1. Informações que coletamos',
      },
      {
        bullets: [
          'Oferecer e melhorar a experiência de aprendizagem',
          'Acompanhar seu progresso e desempenho',
          'Personalizar recomendações de estudo com apoio de IA',
          'Manter e melhorar o funcionamento do app',
          'Oferecer suporte e responder solicitações',
        ],
        paragraphs: ['Usamos seus dados para:'],
        title: '2. Como usamos suas informações',
      },
      {
        bullets: [
          'Gerar insights de estudo',
          'Sugerir questões e trilhas de aprendizagem',
          'Analisar o desempenho do usuário',
        ],
        paragraphs: [
          'O Cognix pode usar inteligência artificial para:',
          'Seus dados são processados apenas para melhorar sua experiência. Não vendemos seus dados nem os utilizamos para finalidades não relacionadas.',
        ],
        title: '3. IA e processamento de dados',
      },
      {
        bullets: [
          'Prestadores de serviço, como hospedagem, análise e infraestrutura',
          'Autoridades legais, quando exigido por lei',
        ],
        paragraphs: [
          'Não vendemos seus dados pessoais.',
          'Podemos compartilhar dados limitados apenas quando necessário com:',
          'Todos os serviços de terceiros devem tratar seus dados com segurança.',
        ],
        title: '4. Compartilhamento de dados',
      },
      {
        paragraphs: [
          'Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou uso indevido.',
          'Ainda assim, nenhum sistema é 100% seguro.',
        ],
        title: '5. Armazenamento e segurança',
      },
      {
        paragraphs: [
          'Mantemos seus dados apenas pelo tempo necessário para prestar nossos serviços ou cumprir obrigações legais.',
          'Você pode solicitar a exclusão dos seus dados a qualquer momento.',
        ],
        title: '6. Retenção de dados',
      },
      {
        bullets: [
          'Acessar seus dados',
          'Corrigir dados imprecisos',
          'Solicitar a exclusão dos seus dados',
          'Retirar seu consentimento',
        ],
        paragraphs: [
          'Dependendo da sua localização, você pode ter o direito de:',
          'Para exercer esses direitos, entre em contato conosco por um dos canais informados no tópico 9.',
        ],
        title: '7. Seus direitos',
      },
      {
        paragraphs: [
          'Podemos atualizar esta Política de privacidade periodicamente. As alterações serão publicadas no app ou no nosso site.',
          'O uso continuado do app após essas atualizações significa que você aceita a versão revisada da política.',
        ],
        title: '8. Alterações nesta política',
      },
      {
        paragraphs: [
          'Se você tiver dúvidas ou preocupações sobre esta Política de privacidade, entre em contato por um dos canais abaixo:',
          '@cognix_hub',
          'vestibularapp@gmail.com',
        ],
        title: '9. Contato',
      },
    ],
    summary:
      'Esta Política de privacidade explica como o Cognix coleta, usa e protege suas informações quando você utiliza o app.',
    title: 'Política de privacidade',
    updatedAtLabel: 'Data de vigência: 10/04/2024',
  },
  'termos-de-uso': {
    contact: {
      channels: defaultContactChannels,
      description:
        'Se precisar falar com o Cognix sobre estes Termos de uso, use um dos canais abaixo.',
      title: 'Canais de contato',
    },
    eyebrow: 'Documento legal',
    highlights: [
      'A landing apresenta o Cognix e seus recursos em fase de pré-lançamento.',
      'O uso deve ser lícito, compatível com a finalidade do site e sem exploração técnica indevida.',
      'Conteúdos, funcionalidades e disponibilidade podem mudar conforme o produto evolui.',
    ],
    route: 'termos-de-uso',
    sections: [
      {
        paragraphs: [
          'Estes termos regulam o acesso e o uso da landing page do Cognix, incluindo materiais institucionais, recursos visuais, informações sobre produto e links para canais oficiais.',
          'Ao continuar navegando, você reconhece que utiliza esta página para fins informativos e concorda com as regras descritas aqui.',
        ],
        title: '1. Sobre esta página',
      },
      {
        bullets: [
          'Usar o site de forma lícita e compatível com sua finalidade institucional e informativa;',
          'Não tentar copiar, desmontar, automatizar, raspar ou explorar tecnicamente a página sem autorização;',
          'Não praticar atos que comprometam segurança, desempenho, reputação ou disponibilidade do ambiente.',
        ],
        paragraphs: [
          'O uso do Cognix deve respeitar a legislação aplicável e os limites técnicos e comerciais do projeto.',
        ],
        title: '2. Uso permitido',
      },
      {
        paragraphs: [
          'Marca, identidade visual, textos, layout, mockups, imagens, código e demais elementos da landing page pertencem ao Cognix ou são utilizados com autorização.',
          'Nenhum material pode ser reproduzido, redistribuído ou reutilizado comercialmente sem permissão prévia e expressa.',
        ],
        title: '3. Propriedade intelectual',
      },
      {
        paragraphs: [
          'O Cognix está em evolução e pode alterar descrições, recursos, cronogramas, telas, promessas de lançamento e disponibilidade da experiência sem aviso prévio.',
          'A página e seus conteúdos são apresentados conforme disponibilidade, sem garantia de funcionamento ininterrupto ou de permanência integral de cada elemento publicado.',
        ],
        title: '4. Conteúdo e disponibilidade',
      },
      {
        paragraphs: [
          'Esta landing page pode direcionar o usuário para canais e plataformas de terceiros, como o Instagram oficial do Cognix. O uso dessas plataformas segue as regras e políticas dos respectivos provedores.',
          'O Cognix não se responsabiliza por indisponibilidade, alterações externas ou práticas de terceiros fora do seu controle direto.',
        ],
        title: '5. Canais externos e limitações',
      },
      {
        paragraphs: [
          'O tratamento de dados relacionado a esta página segue a Política de privacidade e a Política de cookies publicadas pelo Cognix.',
          'Estes termos podem ser atualizados a qualquer momento. A versão mais recente publicada nesta tela passa a valer a partir da sua disponibilização.',
        ],
        title: '6. Privacidade e atualizações',
      },
    ],
    summary:
      'Regras de acesso e uso da landing page do Cognix, incluindo uso permitido, propriedade intelectual e atualização de informações.',
    title: 'Termos de uso',
    updatedAtLabel: 'Data de vigência: 10/04/2024',
  },
}