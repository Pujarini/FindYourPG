import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ListingPage from "./pages/ListingPage";
import PgList from "./pages/Pg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="pgList" element={<ListingPage />} />
        <Route path="/pglist/:pgId" element={<PgList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
