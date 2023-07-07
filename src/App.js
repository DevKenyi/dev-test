import { AuthProvider } from "./components/AuthProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
