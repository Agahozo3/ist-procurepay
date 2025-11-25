import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import StaffDashboard from "./pages/StaffDashboard";
import RequestForm from "./pages/RequestForm";
import RequestList from "./pages/RequestList";
import RequestDetail from "./pages/RequestDetail";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import ApproverDashboard from "./pages/ApproverDashboard";
import FinanceDashboard from "./pages/FinanceDashboard";
import ApproverPendingRequests from "./pages/ApproverPendingRequests";
import RequestApproval from "./pages/RequestApproval";
import ApproverReviewedRequests from "./pages/ApproverReviewedRequests";
import EditRequest from "./pages/EditRequest";
import ViewRequest from "./pages/ViewRequest";
import ValidateReceipt from "./pages/ValidateReceipt";
import UploadReceipts from "./pages/UploadFile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="staff/dashboard" element={<StaffDashboard />} />
        <Route path="/request/new" element={<RequestForm />} />
        <Route path="/request/edit/:id" element={<EditRequest/>} />
        <Route path="/request/view/:id" element={<ViewRequest />} />
        <Route path="/approver/dashboard" element={<ApproverDashboard />} />
        <Route path="/approver/pending-requests" element={<ApproverPendingRequests/>} />
        <Route path="/approver/request-approval" element={<RequestApproval/>} />
        <Route path="/approver/reviewed-request" element={<ApproverReviewedRequests/>} />
        <Route path="/finance/dashboard" element={<FinanceDashboard />} />
        <Route path="/finance/validate-receipt" element={<ValidateReceipt />} />
        <Route path="/finance/upload-receipt" element={<UploadReceipts />} />
        <Route path="/requests" element={<RequestList />} />
        <Route path="/requests/:id" element={<RequestDetail />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;

