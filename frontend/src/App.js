import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./components/pages/Home";

import { Layout } from "./components/pages/Layout";
import { EmailVerification } from "./components/registration/auth/EmailVerification";
import { Login } from "./components/registration/auth/Login";
import { PasswordReset } from "./components/registration/auth/PasswordReset";
import { PasswordResetConfirm } from "./components/registration/auth/PasswordResetConfirm";
import { Register } from "./components/registration/auth/Register";
import { ResendEmailVerification } from "./components/registration/auth/ResendEmailVerification";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/accounts/confirm-email/:key" element={<EmailVerification />} />
          <Route path="/accounts/resend-email-verification" element={<ResendEmailVerification />} />
          <Route path="/accounts/password/reset" element={<PasswordReset />} />
          <Route path="/accounts/password/reset/key/:key" element={<PasswordResetConfirm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
