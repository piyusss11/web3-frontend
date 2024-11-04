// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App"
import appStore from "./utils/appStore";
import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")!).render(

    <Provider store={appStore}>
      <App />
      <Toaster/>
    </Provider>
  
);
