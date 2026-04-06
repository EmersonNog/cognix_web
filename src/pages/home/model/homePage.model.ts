export type AccentTone = 'teal' | 'orange' | 'slate'

export interface NavigationItem {
  label: string
  href: string
}

export interface HeroAction {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

export interface HeroMetric {
  value: string
  label: string
  detail: string
}

export interface Capability {
  id: string
  label: string
  title: string
  description: string
  points: string[]
  artifacts: string[]
  outcome: string
  accent: AccentTone
}

export interface DeviceProfile {
  name: string
  breakpoint: string
  summary: string
  details: string[]
  layout: 'stack' | 'split' | 'grid'
}

export interface ModuleCard {
  title: string
  description: string
  tag: string
  accent: AccentTone
}

export interface DeliveryStep {
  title: string
  description: string
}

export interface HomePageModel {
  brand: {
    name: string
    tagline: string
  }
  navigation: NavigationItem[]
  hero: {
    eyebrow: string
    title: string
    description: string
    imageAlt: string
    actions: HeroAction[]
  }
  metrics: HeroMetric[]
  architectureNote: {
    title: string
    body: string
  }
  capabilities: Capability[]
  deviceProfiles: DeviceProfile[]
  modules: ModuleCard[]
  deliverySteps: DeliveryStep[]
  footerNote: string
}

export const homePageModel: HomePageModel = {
  brand: {
    name: 'Cognix HUB',
    tagline: 'React + TypeScript com MVC pronto para crescer.',
  },
  navigation: [
    { label: 'Arquitetura', href: '#arquitetura' },
    { label: 'Responsivo', href: '#responsivo' },
    { label: 'Modulos', href: '#modulos' },
    { label: 'Entrega', href: '#entrega' },
  ],
  hero: {
    eyebrow: 'Front-end organizado por camadas',
    title: 'A Cognix HUB agora parte de uma base MVC, responsiva e preparada para evolucao.',
    description:
      'O projeto saiu de um App quebrado e passou a ter uma fundacao clara: model centraliza contratos, controller orquestra estados e a view cuida da experiencia em mobile, tablet e desktop.',
    imageAlt: 'Ilustracao abstrata da interface Cognix HUB.',
    actions: [
      { label: 'Ver arquitetura', href: '#arquitetura', variant: 'primary' },
      { label: 'Explorar responsividade', href: '#responsivo', variant: 'secondary' },
    ],
  },
  metrics: [
    {
      value: '3',
      label: 'Camadas principais',
      detail: 'Model, Controller e View separados desde a raiz do app.',
    },
    {
      value: '100%',
      label: 'Layout fluido',
      detail: 'Blocos reorganizados com foco em mobile, tablet e desktop.',
    },
    {
      value: '1',
      label: 'Fonte de verdade',
      detail: 'Conteudo tipado no model, sem misturar texto com markup.',
    },
  ],
  architectureNote: {
    title: 'O controller virou o ponto de orquestracao da home.',
    body:
      'Ele decide qual bloco esta ativo, conecta os dados do model e entrega para a view apenas o que ela precisa renderizar. Assim, a interface fica mais simples de manter e pronta para receber API ou roteamento depois.',
  },
  capabilities: [
    {
      id: 'model',
      label: 'Model',
      title: 'Dados, textos e contratos ficam concentrados em um unico lugar.',
      description:
        'A home passa a nascer de um model tipado, o que facilita trocar mock por API, organizar CMS e manter consistencia entre secoes.',
      points: [
        'Tipos deixam explicito o formato de cada secao da interface.',
        'Conteudo institucional e cards vivem fora da renderizacao.',
        'A migracao para dados reais pode acontecer sem reescrever a view.',
      ],
      artifacts: [
        'Contratos de navegacao, hero, modulos e cards responsivos.',
        'Fonte unica para textos da pagina.',
        'Separacao clara entre dados e apresentacao.',
      ],
      outcome: 'Ideal para evoluir o projeto por dominios, sem espalhar conteudo e tipos pelo JSX.',
      accent: 'teal',
    },
    {
      id: 'controller',
      label: 'Controller',
      title: 'Estado e comportamento ficam fora do markup principal.',
      description:
        'O controller controla a secao destacada e prepara a view para crescer com filtros, integracoes e eventos sem poluir o App.',
      points: [
        'O App ficou reduzido a um shell simples.',
        'Estados de interface podem crescer sem acoplar layout e logica.',
        'A camada fica pronta para tratar chamadas assincronas no proximo passo.',
      ],
      artifacts: [
        'Selecao da arquitetura ativa.',
        'Composicao entre model e view em um ponto unico.',
        'Espaco natural para regras de negocio da home.',
      ],
      outcome: 'Bom para quando a pagina ganhar dados externos, analytics, filtros ou fluxos guiados.',
      accent: 'orange',
    },
    {
      id: 'view',
      label: 'View',
      title: 'A interface virou uma camada focada em experiencia e responsividade.',
      description:
        'A view ficou livre para trabalhar composicao, hierarquia visual e adaptacao por breakpoint sem carregar responsabilidade de negocio.',
      points: [
        'Grade mobile first com reorganizacao progressiva por viewport.',
        'Cards e secoes com variacao clara entre celular, tablet e desktop.',
        'Estilo visual mais marcante, com profundidade e ritmo entre blocos.',
      ],
      artifacts: [
        'Hero principal com visual de produto.',
        'Secoes especializadas por device.',
        'CTA final preparado para os proximos incrementos.',
      ],
      outcome: 'A interface pode continuar evoluindo sem sacrificar clareza de codigo.',
      accent: 'slate',
    },
  ],
  deviceProfiles: [
    {
      name: 'Mobile',
      breakpoint: 'ate 767px',
      summary: 'Leitura vertical, botoes amplos e foco total nas acoes principais.',
      details: [
        'Header simplificado com CTA acessivel.',
        'Cards empilhados para leitura rapida.',
        'Espacamentos calibrados para toque e polegar.',
      ],
      layout: 'stack',
    },
    {
      name: 'Tablet',
      breakpoint: '768px a 1023px',
      summary: 'Mais contexto por dobra, mantendo respiro e navegacao leve.',
      details: [
        'Grades de duas colunas em secoes centrais.',
        'Cards com maior densidade sem perder clareza.',
        'Hero equilibrado entre imagem e argumentos.',
      ],
      layout: 'split',
    },
    {
      name: 'Desktop',
      breakpoint: '1024px+',
      summary: 'Composicao expandida, storytelling visual e apoio para modulos futuros.',
      details: [
        'Layout assimetrico para destacar o produto.',
        'Painel lateral com informacoes complementares.',
        'Mais area util para dashboards, rotas e observabilidade.',
      ],
      layout: 'grid',
    },
  ],
  modules: [
    {
      title: 'Home institucional',
      description: 'Landing principal com narrativa clara, CTA e argumentos de arquitetura.',
      tag: 'View pronta',
      accent: 'teal',
    },
    {
      title: 'Camada de controle',
      description: 'Ponto central para estados, filtros, integracoes e futuras regras de negocio.',
      tag: 'Controller pronto',
      accent: 'orange',
    },
    {
      title: 'Base de dados local',
      description: 'Model tipado servindo conteudo e contratos para toda a experiencia.',
      tag: 'Model pronto',
      accent: 'slate',
    },
  ],
  deliverySteps: [
    {
      title: '1. Modelar',
      description: 'Definir contratos, mover conteudo para o model e preparar o terreno para API.',
    },
    {
      title: '2. Controlar',
      description: 'Orquestrar estados e interacoes em controllers especificos por pagina ou fluxo.',
    },
    {
      title: '3. Escalar',
      description: 'Adicionar rotas, dashboards reais e servicos sem desmontar a interface existente.',
    },
  ],
  footerNote:
    'A estrutura ja suporta a proxima etapa: conectar rotas reais, servicos e modulos adicionais mantendo a separacao por camadas.',
}
