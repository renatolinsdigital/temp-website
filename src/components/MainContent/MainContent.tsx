import { Logo } from 'components';
import { TitleStyled, MenuStyled } from 'shared/ui-elements';
import { Link } from 'shared/utilities';
import { BoxStyled } from 'shared/containers';

function MainContent() {
  return (
    <BoxStyled
      id="main-content-container"
      paddingTop={10}
      paddingBottom={30}
      isVertical
    >
      <BoxStyled
        isVertical
        maxWidth={220}
      >
        <>
          <BoxStyled
            id="logo-container"
            isStretched={false}
            marginBottom={40}
          >
            <Logo />
          </BoxStyled>
          <TitleStyled colorOption="primary">
            Latest Projects
          </TitleStyled>

          <MenuStyled hasNoMainAxisAlignment>
            <MenuStyled.List isVertical>
              <>

                <MenuStyled.Item hoverColor="primary">
                  <Link
                    hoverColor="primary"
                    location="https://github.com/renatolinsdigital/bank-api-node"
                    label="Node.js REST API"
                    isOpeningInNewTab
                  />
                </MenuStyled.Item>

                <MenuStyled.Item hoverColor="primary">
                  <Link
                    hoverColor="primary"
                    location="https://github.com/renatolinsdigital/vanilla-js-spa"
                    label="Vanilla Javascript SPA"
                    isOpeningInNewTab
                  />
                </MenuStyled.Item>

                <MenuStyled.Item hoverColor="primary">
                  <Link
                    hoverColor="primary"
                    location="https://github.com/renatolinsdigital/dweeb-fight-react"
                    label="RPG fighting mini-game"
                    isOpeningInNewTab
                  />
                </MenuStyled.Item>
              </>
            </MenuStyled.List>
          </MenuStyled>

          <TitleStyled colorOption="secondary">
            Recent activity
          </TitleStyled>

          <MenuStyled>
            <MenuStyled.List isVertical>
              <>
                <MenuStyled.Item hoverColor="secondary">
                  <Link
                    hoverColor="secondary"
                    location="https://www.linkedin.com/pulse/styled-components-em-projetos-baseados-react-web-vs-mobile-lins"
                    label="Styled components thoughts"
                    isOpeningInNewTab
                  />
                </MenuStyled.Item>

                <MenuStyled.Item hoverColor="secondary">
                  <Link
                    hoverColor="secondary"
                    location="https://whimsical.com/fullstack-javascript-developer-by-renato-lins-QP6S7CS2Var5G9wzBCg2jF"
                    label="Fullstack Roadmap"
                    isOpeningInNewTab
                  />
                </MenuStyled.Item>
              </>
            </MenuStyled.List>
          </MenuStyled>
        </>
      </BoxStyled>
    </BoxStyled>
  );
}

export default MainContent;
