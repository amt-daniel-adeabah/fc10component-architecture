import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import AppRoutes from "./router/AppRoutes";

function App() {
  const clientId = "130388850010-8h448ss7maoebp8cuus250t0cukmc9rs.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AppRoutes />
    </GoogleOAuthProvider>
  );
}

export default App;
