export const categories = [
  { id: 1, name: 'Design e Multimídia' },
  { id: 2, name: 'Programação e TI' },
  { id: 3, name: 'Marketing e Vendas' },
  { id: 4, name: 'Tradução e Conteúdos' },
  { id: 5, name: 'Finanças e Administração' }
]

export function getCategory(id: number) {
  return categories.find(category => category.id === id)
}