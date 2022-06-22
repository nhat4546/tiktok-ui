
import "./GlobalStyle.scss";
function GlobalStyles({ children }: GlobalStylesProps) {
  return children;
}

export default GlobalStyles;

interface GlobalStylesProps {
  children: JSX.Element;
}
