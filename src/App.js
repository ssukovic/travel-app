import React from "react";

import { HashRouter, Route, Routes } from "react-router-dom";

import {
  CreatorForm,
  DetailedPostView,
  PostList,
  HomePage,
  TravelTipForm,
} from "./views";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="creator-form" element={<CreatorForm />} />
          <Route path="detailed-post-view" element={<DetailedPostView />} />
          <Route path="post-list" element={<PostList />} />
          <Route path="travel-tip-form" element={<TravelTipForm />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
