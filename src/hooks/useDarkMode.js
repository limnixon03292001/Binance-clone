import { useState, useEffect, useMemo } from "react";

const useDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.body;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    },[theme, colorTheme]);

    return [colorTheme, setTheme];

};

export default useDarkMode;
