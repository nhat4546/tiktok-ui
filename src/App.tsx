import React from "react";
import { privateRoutes } from "routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    </div>
  );
}

export default App;
