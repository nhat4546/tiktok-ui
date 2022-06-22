import { Header } from "components/common";
import "./OnlyHeader.scss";
function OnlyHeader({ children }: OnlyHeaderProps) {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
}

export default OnlyHeader;

interface OnlyHeaderProps {
  children: JSX.Element | JSX.Element[];
}
