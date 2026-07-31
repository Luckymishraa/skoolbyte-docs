import { useRoutes } from "react-router-dom";
import { routes } from "./router/routes.jsx";

// import "./App.css";

export default function App() {
  const element = useRoutes(routes); // converts our route config array into the matched element tree
  return element;
}
