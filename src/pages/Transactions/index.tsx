import { Header } from '../../components/Header'
import { Summary } from '../../components/summary'
import {
  PriceHiglights,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHiglights variant="income">R$ 12.000,00</PriceHiglights>
              </td>
              <td>Venda</td>
              <td>10/10/2023</td>
            </tr>

            <tr>
              <td width="50%">Curso Ignite</td>
              <td>
                <PriceHiglights variant="outcome">- R$ 2.000,00</PriceHiglights>
              </td>
              <td>Curso</td>
              <td>12/10/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
