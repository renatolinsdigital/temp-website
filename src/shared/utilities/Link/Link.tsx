
import { AnchorStyled } from '../';
import LinkProps from './Link.model';

function Link({ location, label, isOpeningInNewTab, children }: LinkProps) {
  return (
    <AnchorStyled
      href={`${location}`}
      target={isOpeningInNewTab ? '_blank' : '_self'}>
      {label}
      {children}
    </AnchorStyled>
  )
}

export default Link;
