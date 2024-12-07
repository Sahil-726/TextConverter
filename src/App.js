// 




import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/Textform.js';
import { useState } from 'react';
import AboutUs from './components/About.js';
import Alert from './components/Alert.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const clicked = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#12243f";
      showAlert("Dark mode is Enabled", "primary");
      document.title = "Textutills Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      document.title = "Textutills Light mode";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      mesg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar title="Textutills" text="About Us" abc={mode} pqr={clicked} />
          <Alert abc={alert} />
          <div className="container my-5">
             <h1 style={{ color: mode === "dark" ? "white" : "black" }}>Text Converter</h1>
             <TextForm label="Enter text here" rrst={mode} mno={showAlert}/>
          </div>
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          <Navbar title="TextConverter" text="About Us" abc={mode} pqr={clicked} />
          <Alert abc={alert} />
          <AboutUs />
        </>
      ),
    },
  ]);
  
  
 
  
  return (
    // <ErrorBoundary>
    <RouterProvider router={router}>
      <>
      <div className="container my-5">
        <h1 style={{ color: mode === "dark" ? "white" : "black" }}>Text Converter</h1>
        <TextForm label="Enter text here" rrst={mode} mno={showAlert} />
      </div>
      </>
    </RouterProvider>
    // </ErrorBoundary>
  );
}

export default App;
