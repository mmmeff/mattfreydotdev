const darkColors: Colors = {
    background: "#252525",
    textColor: "rgba(255,255,255,0.9)",
    lineColor: "rgba(255,255,255,0.5)",
    linkColor: "#84CBE1",
    primary: "#1185F9",
    secondary: "#D52FA8"
};

const lightColors: Colors = {
    background: "#FCFCFC",
    textColor: "rgba(0,0,0,0.8)",
    linkColor: "#1185F9",
    lineColor: "rgba(0,0,0,0.5)",
    primary: "#9EB9D4",
    secondary: "#D52FA8"
};

export const getTheme: (mode: "light" | "dark") => Theme = mode => ({
    colors: {
        ...(mode === "light" ? lightColors : {}),
        ...(mode === "dark" ? darkColors : {})
    } as Colors,
    lineSizes: {
        thinnn: "0.065rem",
        thinn: "0.15rem",
        thin: "0.25rem",
        thic: "0.5rem",
        thicc: "1rem",
        thiccc: "1.5rem"
    }
});

export default getTheme;
