import { AppContainerStyled, AppHeader, MainContent } from '../components/index.js';

export default function Home() {
  return (
    <AppContainerStyled>
      <AppHeader />
      <MainContent />
      <footer>Footer content</footer>
    </AppContainerStyled>
  )
}
