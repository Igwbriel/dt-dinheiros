import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/summary'
import { SearchForm } from './Components/SearchForm'
import {
  PriceHiglights,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

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
                      {Transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(Transaction.price)}
                    </PriceHiglights>
                  </td>
                  <td>{Transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(Transaction.createAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
