import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Website from "./pages/Website";
import { Suspense, useState } from "react";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import Deals from "./pages/Deals";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from 'react-query/devtools';
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property/Property";
import UserDetailContext from "./Context/UserDetailsContext";
import Bookings from "./pages/Bookings/Bookings";
import Favorites from "./pages/Favorites/Favorites";
import ListPage from "./pages/List/ListPage";
import { listPageLoader } from "./utils/loaders";

function App() {

  const queryClient = new QueryClient()
  const [userDetails, setUserDetails] = useState({
    favorites: [],
    bookings: [],
    token: null
    
  })

  return (
    <UserDetailContext.Provider value={{userDetails, setUserDetails}}>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Suspense fallback={<div>Loading....</div>} />
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Website />} />
            <Route path="/deals" element={<Deals />}>
              <Route index element={<Properties />} />
              <Route path=":propertyId" element={<Property />} />
            </Route>
            <Route path="/listings" element={<ListPage />} loader={listPageLoader} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
