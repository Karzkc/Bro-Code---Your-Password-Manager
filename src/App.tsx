import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Passwords from './components/Passwords';
import Footer from './components/Footer';
import Backgorund from "./components/Backgorund";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Backgorund/><Home /><Footer /></>
    },
    {
      path: "/passwords",
      element: <><Navbar /><Backgorund /><Passwords /><Footer /></>
    },
    {
      path: "/about",
      element: <><Navbar /><Backgorund /><About /><Footer /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Backgorund /><Contact /><Footer /></>
    }

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
