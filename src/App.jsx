import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

// Components

function App() {
  // State
  const [theme, setTheme] = useState("dark");

  // Handlers
  const enableDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Layout enableDarkMode={enableDarkMode} />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
