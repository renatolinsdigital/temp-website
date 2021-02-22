import AppFooterStyled from './AppFooter.styled.js';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AndroidIcon from '@material-ui/icons/Android';
import { MenuStyled } from '../../shared/containers';
import { Link } from '../../shared/utilities';

function AppFooter() {
  return (
    <AppFooterStyled>
      <MenuStyled>
        <MenuStyled.List>

          <MenuStyled.Item hasIcon>
            <Link
              location="https://github.com/renatolinsdigital"
              isOpeningInNewTab
            >
              <GitHubIcon fontSize="small" />
            </Link>
          </MenuStyled.Item >

          <MenuStyled.Item hasIcon>
            <Link
              location="https://www.linkedin.com/in/renatolinsdigital"
              isOpeningInNewTab
            >
              <LinkedInIcon />
            </Link>
          </MenuStyled.Item >

          <MenuStyled.Item hasIcon>
            <Link
              location="."
            >
              <AndroidIcon />
            </Link>
          </MenuStyled.Item >

        </MenuStyled.List>
      </ MenuStyled>

    </AppFooterStyled >
  )
}

export default AppFooter;