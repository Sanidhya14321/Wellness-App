import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Videos from "./pages/Videos"
import About from "./pages/About"
import Articles from "./pages/Articles"
import Contact from "./pages/Contact"
import Aiexercises from "./pages/Aiexercises"; // Import the new AI Exercises page
import Signup from "./pages/Signup"
import { ThemeProvider } from "./contexts/ThemeContext"
import Login from "./pages/Login"

function App() {
  return (
 <Router>
 <ThemeProvider>
 <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100">
 <Navigation />
 <AnimatePresence mode="wait">
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/videos" element={<Videos />} />
 <Route path="/about" element={<About />} />
 <Route path="/articles" element={<Articles />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/aiexercises" element={<Aiexercises />} /> {/* Add the AI Exercises route */}
 <Route path="/signup" element={<Signup />} />
 <Route path="/login" element={<Login />} />
 </Routes>
 </AnimatePresence>
 </div>
 </ThemeProvider>
 </Router>
 );
}

export default App;
