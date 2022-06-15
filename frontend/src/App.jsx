import debug from "debug";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { atom } from "jotai";

const log = debug("simon:frontend:App");
export const userAtom = atom({})

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="holidays" element={<Main />} />
            <Route path="holidays/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
