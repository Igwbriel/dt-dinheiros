import { HeaaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <NewTransactionButton> Nova transação </NewTransactionButton>
      </HeaderContent>
    </HeaaderContainer>
  )
}
