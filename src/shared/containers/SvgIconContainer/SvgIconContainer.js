import React from 'react';
import SvgIconContainerStyled from './SvgIconContainer.styled.js';

function SvgIconContainer(props) {
  const {
    children,
    size,
    id,
    width,
    height,
    rotate
  } = props;

  const elementSize = size ? String(size) : '24';
  
  return (
    <SvgIconContainerStyled
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${elementSize} ${elementSize}`}
      width={width || elementSize}
      height={height || elementSize}
      id={id}
      rotate={rotate}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      {children}
    </SvgIconContainerStyled>
  );
}

export default SvgIconContainer;
