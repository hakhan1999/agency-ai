import React, { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  return (
    <div className="dark:bg-black relative">
      <Header theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
