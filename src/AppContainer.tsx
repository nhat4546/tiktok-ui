import React from "react";

function AppContainer({ children }: AppContainerProps) {
  return children;
}

export default AppContainer;

interface AppContainerProps {
  children: JSX.Element;
}
