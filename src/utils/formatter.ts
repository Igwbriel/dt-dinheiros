export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pr-BR', {
  style: 'currency',
  currency: 'BRL',
})
