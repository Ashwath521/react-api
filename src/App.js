import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
const SignUp = lazy(() => import("./Component/SignUp/SignUp"));
const Error = lazy(() => import("./Component/Error/Error"));
const SignIn = lazy(() => import("./Component/SignIn/SingIn"));
const DashBoard = lazy(() => import("./Component/DashBoard/DashBoard"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <h1 className="min-h-screen flex justify-center items-center ">
            Loading.....
          </h1>
        }
      >
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
