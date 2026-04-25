import type { FooterColumn } from '@/app/model/landing-types'

export const footerColumns: FooterColumn[] = [
  {
    title: 'Produto',
    links: [
      { href: '/#solucao', label: 'Como funciona' },
      { href: '/#beneficios', label: 'Benefícios' },
      { href: '/#planos', label: 'Planos' },
      { href: '/#faq', label: 'Perguntas' },
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
    title: 'Legal',
    links: [
      { href: '/termos-de-uso', label: 'Termos de uso' },
      { href: '/politica-de-privacidade', label: 'Privacidade' },
      { href: '/politica-de-cookies', label: 'Cookies' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { href: 'https://www.instagram.com/cognix_hub/', label: 'Instagram' },
      { href: '/contato', label: 'Email' },
    ],
  },
]
