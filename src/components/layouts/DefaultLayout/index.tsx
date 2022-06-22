
import { Header, Sitebar } from "components/common";
import "./DefaultLayout.scss";
function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sitebar />
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;

interface DefaultLayoutProps {
  children: JSX.Element | JSX.Element[];
}
