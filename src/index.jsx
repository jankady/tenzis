import {createRoot} from "react-dom/client"
import App from "./App.jsx"

const container = document.getElementById("root");
console.log(document.body.innerHTML);

createRoot(container).render(<App/>);
