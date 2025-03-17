// /components/DarkModeToggle.tsx
import React from "react";

const DarkModeToggle: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  return (
    <button onClick={toggleTheme} style={{ marginTop: "1rem" }}>
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
