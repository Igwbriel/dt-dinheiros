import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styleComponents' {
  export interface DefaultTheme extends ThemeType {}
}
