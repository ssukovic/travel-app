import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  CreatorForm,
  DetailedPostView,
  HomePage,
  TravelTipForm,
} from "./views";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="creator-form" element={<CreatorForm />} />
          <Route path="detailed-post-view" element={<DetailedPostView />} />
          <Route path="travel-tip-form" element={<TravelTipForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
