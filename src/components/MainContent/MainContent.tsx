import MainContentStyled from './MainContent.styled.js';
import { Logo } from '../../components/index.js';
import { TitleStyled } from '../../shared/ui-elements/index.js';
import { AnchorStyled } from '../../shared/utilities/index.js';

function MainContent() {
  return (
    <MainContentStyled>
      <MainContentStyled.Grid>
        <Logo />
        <TitleStyled colorOption={1}>
          Latest Projects
        </TitleStyled>
        <AnchorStyled>Vanilla Javascript SPA</AnchorStyled>
        <AnchorStyled>API with CRUD functionallity</AnchorStyled>
      </MainContentStyled.Grid>
    </MainContentStyled>
  )
}

export default MainContent;
