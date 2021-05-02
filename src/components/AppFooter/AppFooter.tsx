/* eslint-disable jsx-a11y/anchor-is-valid */
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AndroidIcon from '@material-ui/icons/Android';
import { BoxStyled } from 'shared/containers';
import { Link } from 'shared/utilities';
import { MenuStyled } from 'shared/ui-elements';

function AppFooter() {
  return (
    <BoxStyled
      paddingTop={30}
      paddingBottom={30}
    >
      <MenuStyled>
        <MenuStyled.List>
          <>
            <MenuStyled.Item hasIcon>
              <Link
                hoverColor="primary"
                location="https://github.com/renatolinsdigital"
                isOpeningInNewTab
              >
                <GitHubIcon fontSize="small" />
              </Link>
            </MenuStyled.Item>

            <MenuStyled.Item hasIcon>
              <Link
                hoverColor="secondary"
                location="https://www.linkedin.com/in/renatolinsdigital"
                isOpeningInNewTab
              >
                <LinkedInIcon />
              </Link>
            </MenuStyled.Item>

            <MenuStyled.Item hasIcon>
              <Link
                hoverColor="tertiary"
                location="."
              >
                <AndroidIcon />
              </Link>
            </MenuStyled.Item>
          </>
        </MenuStyled.List>
      </MenuStyled>
    </BoxStyled>
  );
}

export default AppFooter;
