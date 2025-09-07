import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
// import Detail from './pages/Detail';



// Simple auth provider
export default function AppRouter() {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch("https://ipinfo.io/json?token=36213d3c1747b8")
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(location);

  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} /> */}
      {/* <Route path="/detail/:id" element={<Detail />} /> */}
      <Route path="/" element={<Home location={location} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}