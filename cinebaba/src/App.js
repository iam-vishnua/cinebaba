import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies/Movies';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Moviepage from './pages/Moviepage';



function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/movie",
      element: <Moviepage/>,
    }

  ]);
  return (
    <>
    <Header/>
    <RouterProvider router={router} />
    
    
    <Footer/>
    
    
    
    </>
  );
}

export default App;
