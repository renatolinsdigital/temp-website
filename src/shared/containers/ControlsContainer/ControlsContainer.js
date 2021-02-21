import ControlsContainerStyled from './ControlsContainer.styled.js';

function ControlsContainer({ children, isVertical }) {
  return (
    <ControlsContainerStyled isVertical={isVertical}>
      {children}
    </ControlsContainerStyled>
  )
}

export default ControlsContainer;
