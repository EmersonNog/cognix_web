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
      'Regras para acesso e uso da landing page do Cognix, seus materiais institucionais e canais oficiais.',
    sections: [
      {
        title: '1. Sobre esta página',
        paragraphs: [
          'Estes termos regulam o acesso e o uso da landing page do Cognix, incluindo materiais institucionais, recursos visuais, informações sobre produto e links para canais oficiais.',
          'Ao continuar navegando, você reconhece que utiliza esta página para fins informativos e concorda com as regras descritas aqui.',
        ],
      },
      {
        title: '2. Uso permitido',
        paragraphs: [
          'O uso do Cognix deve respeitar a legislação aplicável e os limites técnicos e comerciais do projeto.',
        ],
        bullets: [
          'Usar o site de forma lícita e compatível com sua finalidade institucional e informativa.',
          'Não tentar copiar, desmontar, automatizar, raspar ou explorar tecnicamente a página sem autorização.',
          'Não praticar atos que comprometam segurança, desempenho, reputação ou disponibilidade do ambiente.',
        ],
      },
      {
        title: '3. Propriedade intelectual',
        paragraphs: [
          'Marca, identidade visual, textos, layout, mockups, imagens, código e demais elementos da landing page pertencem ao Cognix ou são utilizados com autorização.',
          'Nenhum material pode ser reproduzido, redistribuído ou reutilizado comercialmente sem permissão prévia e expressa.',
        ],
      },
      {
        title: '4. Conteúdo e disponibilidade',
        paragraphs: [
          'O Cognix está em evolução e pode alterar descrições, recursos, cronogramas, telas, promessas de lançamento e disponibilidade da experiência sem aviso prévio.',
          'A página e seus conteúdos são apresentados conforme disponibilidade, sem garantia de funcionamento ininterrupto ou de permanência integral de cada elemento publicado.',
        ],
      },
      {
        title: '5. Canais externos e limitações',
        paragraphs: [
          'Esta landing page pode direcionar o usuário para canais e plataformas de terceiros, como o Instagram oficial do Cognix. O uso dessas plataformas segue as regras e políticas dos respectivos provedores.',
          'O Cognix não se responsabiliza por indisponibilidade, alterações externas ou práticas de terceiros fora do seu controle direto.',
        ],
      },
      {
        title: '6. Privacidade e atualizações',
        paragraphs: [
          'O tratamento de dados relacionado a esta página segue a Política de privacidade e a Política de cookies publicadas pelo Cognix.',
          'Estes termos podem ser atualizados a qualquer momento. A versão mais recente publicada nesta tela passa a valer a partir da sua disponibilização.',
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
