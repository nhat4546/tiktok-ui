import React from "react";
import { privateRoutes } from "routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "components/common";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {privateRoutes.map((route, index) => {
            const Page = route.element;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </BrowserRouter>
      <Button
        onClick={() => {
          alert("nidso");
        }}
        outline
      >
        <h1>button</h1>
      </Button>
    </div>
  );
}

export default App;
