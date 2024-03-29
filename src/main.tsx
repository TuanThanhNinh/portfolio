// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import GlobalStyles from "./Components/GlobalStyles/GlobalStyles.component.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <GlobalStyles>
        <App />
    </GlobalStyles>
);
