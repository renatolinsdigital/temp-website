import {
  AppContainerStyled, AppHeader,
  MainContent, AppFooter
} from '../components/index.js';

export default function Home() {
  return (
    <AppContainerStyled>
      <AppHeader />
      <MainContent />
      <AppFooter />
    </AppContainerStyled>
  )
}
