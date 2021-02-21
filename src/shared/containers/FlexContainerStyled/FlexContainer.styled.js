import styled from 'styled-components';
import FlexContainer from '../FlexContainer/FlexContainer.js';

const FlexContainerStyled = styled.div(props => {
  const { isVertical, hasNoDefaultPadding, paddingTop,
    hasNoMainAxisAlignments, hasNoCrossAxisAlignments,
    hasNoDefaultSelfCentralization, flexEnd } = props;
  const defaultCentralization = flexEnd ? 'flex-end' : 'center';

  return {
    ...FlexContainer,

    flexDirection: isVertical ? 'column' : 'row',
    padding: hasNoDefaultPadding ? '0' : '0 15px',
    paddingTop: paddingTop ? `${paddingTop}px` : '0',
    justifyContent: hasNoMainAxisAlignments ? 'flex-start' : defaultCentralization,
    alignItems: hasNoCrossAxisAlignments ? 'flex-start' : defaultCentralization,
    margin: hasNoDefaultSelfCentralization ? '0' : '0 auto'
  };
});

export default FlexContainerStyled;