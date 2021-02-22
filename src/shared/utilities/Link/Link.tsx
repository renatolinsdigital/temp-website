
import { AnchorStyled } from '../';
import LinkProps from './Link.model';

function Link({ location, label, isOpeningInNewTab }: LinkProps) {
  return (
    <AnchorStyled
      href={`${location}`}
      target={isOpeningInNewTab ? '_blank' : '_self'}>
      {label}
    </AnchorStyled>
  )
}

export default Link;
