import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import MainContent from "./MainContent";

// function AuthenticatedRoute({ children }) {
//   const authContext = useAuth();

//   if (authContext.isAuthenticated) return children;

//   return <Navigate to="/" />;
// }

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Header />
        <MainContent />
        {/* <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />

          <Route path="/welcome/:username" element={<WelcomeComponent />} />

          <Route path="/logout" element={<LogoutComponent />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}
