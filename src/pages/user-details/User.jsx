import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function User() {
  const [user, setUser] = useState({});
  const location = useLocation();

  useEffect(() => {
    setUser(location?.state?.user);
  }, []);
  return (
    <div className="d-flex text-white flex-column justify-content-center align-items-center">
      <h1>User Information</h1>
      <section className="border border-primary d-flex flex-column">
        <span>
          <strong>Name:</strong> {user?.name}
        </span>
        <span>
          <strong>Email:</strong> {user?.email}
        </span>
        <span>
          <strong>Password:</strong> {user?.password}
        </span>
      </section>
    </div>
  );
}
