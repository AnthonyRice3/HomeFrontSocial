
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Website from "./pages/Website";
import { Suspense } from "react";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import Deals from "./pages/Deals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading....</div>} />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Website />} />
          {/* <Route path="/deals" element={<Deals />}>
            <Route index element={<Properties />} />
          </Route> */}
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
