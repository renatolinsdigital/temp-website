import React from 'react';
import { AnchorStyled } from '../';
import LinkProps from './Link.model';

function Link({ location, label, isOpeningInNewTab, hoverColor, children }: LinkProps) {
  return (
    <AnchorStyled
      href={`${location}`}
      hoverColor={hoverColor}
      target={isOpeningInNewTab ? '_blank' : '_self'}>
      {label}
      {children}
    </AnchorStyled>
  );
}

export default Link;
