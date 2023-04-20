import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./OrganizationLoginLogout.css";

const OrganizationLoginLogout = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="organization-login-logout">
      {!isAuthenticated && (
        <button className="login-btn" onClick={() => loginWithRedirect()}>
          Log in
        </button>
      )}
      {isAuthenticated && (
        <button className="logout-btn" onClick={() => logout()}>
          Log out
        </button>
      )}
    </div>
  );
};

export default OrganizationLoginLogout;
