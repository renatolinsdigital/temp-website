interface FlexContainerProps {
  isVertical?: boolean;
  hasNotMainAxisAlignment?: boolean;
  hasNotCrossAxisAlignment?: boolean;
  maxWidth?: number;
  mainAxisAlignment?: "start" | "center" | "end";
  crossAxisAlignment?: "start" | "center" | "end";
}

export default FlexContainerProps;