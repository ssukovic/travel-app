import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  CreatorForm,
  DetailedPostView,
  HomePage,
  TravelTipForm,
  SearchResults,
} from "./views";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="creator-form" element={<CreatorForm />} />
          <Route path="detailed-post-view" element={<DetailedPostView />} />
          <Route path="travel-tip-form" element={<TravelTipForm />} />
          <Route path="no-search-results" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
