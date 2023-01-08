import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { PATH_DASHBOARD, PATH_HOME } from "./constants/urls";
import WithSideMenuBar from "./middlewares/WithSideMenuBar";
import NotFound404 from "./pages/NotFound404";

function App() {
  return (
    <div className={`bg-[#f7f7f7] text-[#383838] duration-75`}>
      <Router>
        <Routes>
          {/* public routes */}
          <Route path={PATH_HOME} element={<WithSideMenuBar />}>
            <Route path={PATH_DASHBOARD} element={<Dashboard />} />
            <Route path={PATH_HOME} element={<Dashboard />} />
            <Route path="*" element={<NotFound404 />} />
          </Route>
          {/* 404 not found page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
