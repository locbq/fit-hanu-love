import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "./layout";
import { HomePage } from "./pages";
import paths from "./router/router.paths";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={paths.PATH_BASE} element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
