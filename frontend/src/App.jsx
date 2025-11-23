import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RequestForm from "./pages/RequestForm";
import RequestList from "./pages/RequestList";
import RequestDetail from "./pages/RequestDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/request/new" element={<RequestForm />} />
        <Route path="/requests" element={<RequestList />} />
        <Route path="/requests/:id" element={<RequestDetail />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;


