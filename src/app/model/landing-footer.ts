import type { FooterColumn } from '@/app/model/landing-types'

export const footerColumns: FooterColumn[] = [
  {
    title: 'Produto',
    links: [
      { href: '#solucao', label: 'Como funciona' },
      { href: '#beneficios', label: 'Benefícios' },
      { href: '#planos', label: 'Planos' },
      { href: '#faq', label: 'Perguntas' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { href: '#', label: 'Banco de questões' },
      { href: '#', label: 'Simulados' },
      { href: '#', label: 'Redação com IA' },
      { href: '#', label: 'Flashcards' },
      { href: '#', label: 'Multiplayer' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { href: '#', label: 'Sobre' },
      { href: '#', label: 'Contato' },
      { href: '#', label: 'Termos de uso' },
      { href: '#', label: 'Privacidade' },
    ],
  },
]
