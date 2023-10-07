import "./index.css";
import Authentication from "./pages/authentication/Authentication";
import { AuthState } from "./state/authentication/AuthState";

function App() {
  const { setFormPage } = AuthState();

  return (
    <>
      <Authentication formHomePage={setFormPage} />
    </>
  );
}

export default App;
