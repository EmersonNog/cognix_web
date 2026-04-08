import type { FocusCardItem } from '@/components/ui/focus-cards'

export const OVERVIEW_SPLINE_SCENE =
  'https://prod.spline.design/5wl0cCXiWAkSsu-T/scene.splinecode'
export const OVERVIEW_SPLINE_CONTROLS_DELAY_MS = 8000

export const overviewSectionPills = [
  'SEMANA ORGANIZADA',
  'REVISAO GUIADA',
  'PROGRESSO VISIVEL',
  'FOCO NO QUE IMPORTA',
] as const

export const overviewCards: FocusCardItem[] = [
  {
    label: 'PLANO DE ESTUDO',
    badge: '01',
    title: 'Veja sua semana com clareza.',
    description:
      'Defina tempo, turno e ritmo para montar uma semana organizada sem depender de improviso.',
    className:
      'bg-[linear-gradient(180deg,rgba(20,31,56,0.92)_0%,rgba(10,20,43,0.88)_100%)]',
    decorationClassName:
      'bg-[radial-gradient(circle_at_18%_20%,rgba(163,166,255,0.22)_0%,rgba(163,166,255,0)_36%),radial-gradient(circle_at_82%_80%,rgba(96,99,238,0.14)_0%,rgba(96,99,238,0)_30%)]',
  },
  {
    label: 'MAPAS MENTAIS',
    badge: '02',
    title: 'Revise com ajuda da inteligencia artificial.',
    description:
      'A IA gera mapas mentais e aponta onde voce precisa estudar mais para revisar com mais direcao.',
    className:
      'bg-[linear-gradient(180deg,rgba(18,28,52,0.92)_0%,rgba(8,18,39,0.9)_100%)]',
    decorationClassName:
      'bg-[radial-gradient(circle_at_78%_18%,rgba(163,166,255,0.24)_0%,rgba(163,166,255,0)_34%),radial-gradient(circle_at_20%_82%,rgba(96,99,238,0.14)_0%,rgba(96,99,238,0)_30%)]',
  },
  {
    label: 'SEU DESEMPENHO',
    badge: '03',
    title: 'Entenda como voce esta indo.',
    description:
      'Acompanhe seus resultados e descubra o que precisa de mais atencao na rotina.',
    className:
      'bg-[linear-gradient(180deg,rgba(17,27,49,0.92)_0%,rgba(7,15,34,0.9)_100%)]',
    decorationClassName:
      'bg-[radial-gradient(circle_at_50%_24%,rgba(163,166,255,0.22)_0%,rgba(163,166,255,0)_30%),radial-gradient(circle_at_12%_78%,rgba(96,99,238,0.14)_0%,rgba(96,99,238,0)_28%)]',
  },
]

export const overviewInactiveCardClassName = 'scale-[0.985] blur-[5px] saturate-10'
