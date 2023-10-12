import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/summary'
import { SearchForm } from './Components/SearchForm'
import {
  PriceHiglights,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createAt: string
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((Transaction) => {
              return (
                <tr key={Transaction.id}>
                  <td width="50%">{Transaction.description}</td>
                  <td>
                    <PriceHiglights variant={Transaction.type}>
                      {Transaction.price}
                    </PriceHiglights>
                  </td>
                  <td>{Transaction.category}</td>
                  <td>{Transaction.createAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
