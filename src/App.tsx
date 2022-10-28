import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./layout";
import appRoutes from "@router/router.routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {appRoutes.map((route) => (
            <Route key={route.name} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
