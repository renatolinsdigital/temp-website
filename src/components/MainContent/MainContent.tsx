import { Logo } from 'components';
import {
  BoxStyled, TitleStyled, MenuStyled, Link,
} from 'shared/components';

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
                    location="https://github.com/renatolinsdigital/game-with-class-components"
                    label="RPG Game with React and class components"
                    isOpeningInNewTab
                  />
                </MenuStyled.Item>
              </>
            </MenuStyled.List>
          </MenuStyled>

          <TitleStyled colorOption="secondary">
            Latest docs created
          </TitleStyled>

          <MenuStyled>
            <MenuStyled.List isVertical>
              <>
                <MenuStyled.Item hoverColor="secondary">
                  <Link
                    hoverColor="secondary"
                    location="https://whimsical.com/react-flow-of-data-LwGBJDmLRjFJAC4eq8CsYR"
                    label="Flow of data inside React applications"
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
