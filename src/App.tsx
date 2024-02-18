import "./App.css";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Index from "./Pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Album from "./Pages/Album";
import Photo from "./Pages/Photo";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import { AlbumContext } from "./Type/AlbumContext";
import { ProtectedRoute } from "./Components/Auth/Auth";
import { AuthService } from "./Service/AuthService";

export const AlbumZ = React.createContext<AlbumContext|null>(null);
function App() {

  const [isLoggedin,setisLoggedin] = useState<boolean>(new AuthService().isLoggedIn());
  const [showLoginDialog,setshowLoginDialog] = useState<boolean>(false);

  const toggleIsLoggedin = (state: boolean)=>{
    setisLoggedin(state)
  }

  const toggleShowLoginDialog = ()=>{
    setshowLoginDialog(!showLoginDialog)
  }

  let globalContext: AlbumContext = {
    isLoggedin: isLoggedin,
    showLoginDialog: showLoginDialog,
    toggleIsLoggedin,
    toggleShowLoginDialog
  }
  return (
    <AlbumZ.Provider value={globalContext}>
      <div className="App">
          <BrowserRouter>
            <Nav />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Routes>
              <Route index element={<Index />} />
              <Route path="/home" element={ <ProtectedRoute><Home/></ProtectedRoute>} />
              <Route path="/user/:albumId" element={<ProtectedRoute> <User /></ProtectedRoute>} />
              <Route path="/album/:id" element={<ProtectedRoute> <Album /> </ProtectedRoute>} />
              <Route path="/photo/:id" element={<ProtectedRoute><Photo /></ProtectedRoute>} />        
            </Routes>
            <Footer />
          </BrowserRouter>
      </div>
    </AlbumZ.Provider>
  );
}

export default App;
