import { AuthProvider } from "./components/AuthProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import Appointments from "./components/Appointments";
import DoctorRegistration from "./components/doctor/DoctorRegistration";
import DoctorsList from "./components/doctor/DoctorsList";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/dashboard"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
            <Route
              path="/appointments"
              element={
                <Layout>
                  <Appointments />
                </Layout>
              }
            />
            <Route
              path="/registration-doctor"
              element={<DoctorRegistration />}
            />
            <Route
              path="/doctors-list"
              element={
                <Layout>
                  <DoctorsList />
                </Layout>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
