import MainContentStyled from './MainContent.styled';
import { Logo } from '../../components/index.js';
import { TitleStyled } from '../../shared/ui-elements';
import { Link } from '../../shared/utilities/index.js';
import { MenuStyled } from '../../shared/containers';

function MainContent() {
  return (
    <MainContentStyled>
      <MainContentStyled.Grid>
        <Logo />
        <TitleStyled colorOption="primary">
          Latest Projects
        </TitleStyled>

        <MenuStyled>
          <MenuStyled.List isVertical>

            <MenuStyled.Item hoverColor="primary">
              <Link
                location="https://github.com/renatolinsdigital/bank-api-node"
                label="Node.js REST API" isOpeningInNewTab
              />
            </MenuStyled.Item >

            <MenuStyled.Item hoverColor="primary">
              <Link
                location="https://github.com/renatolinsdigital/vanilla-js-spa"
                label="Vanilla Javascript SPA" isOpeningInNewTab
              />
            </MenuStyled.Item >

            <MenuStyled.Item hoverColor="primary">
              <Link
                location="https://github.com/renatolinsdigital/dweeb-fight-react"
                label="RPG fighting mini-game" isOpeningInNewTab
              />
            </MenuStyled.Item >

          </MenuStyled.List>
        </MenuStyled>

        <TitleStyled colorOption="secondary">
          Recent activity
        </TitleStyled>

        <MenuStyled>
          <MenuStyled.List isVertical>

            <MenuStyled.Item hoverColor="secondary">
              <Link
                location="https://www.linkedin.com/pulse/styled-components-em-projetos-baseados-react-web-vs-mobile-lins"
                label="Styled components thoughts" isOpeningInNewTab
              />
            </MenuStyled.Item >

            <MenuStyled.Item hoverColor="secondary">
              <Link
                location="https://whimsical.com/fullstack-javascript-developer-by-renato-lins-QP6S7CS2Var5G9wzBCg2jF"
                label="Fullstack Roadmap" isOpeningInNewTab
              />
            </MenuStyled.Item >

          </MenuStyled.List>
        </MenuStyled>

      </MainContentStyled.Grid>
    </MainContentStyled>
  )
}

export default MainContent;
