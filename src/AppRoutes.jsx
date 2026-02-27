import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AuditBooking from './components/AuditBooking';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/audit" element={<AuditBooking />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;  // THIS LINE IS SUPER IMPORTANT!