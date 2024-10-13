import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import NotFoundPage from "./screens/NotFoundPage";
import TYTScreen from "./screens/TYTScreen";
import AYTScreen from "./screens/AYTScreen";
import DILScreen from "./screens/DILScreen";
import ALESScreen from "./screens/ALESScreen";
import MSUScreen from "./screens/MSUScreen";
import { GoHome } from "react-icons/go";
import YDTScreen from "./screens/ALES_2";
import ALES_2 from "./screens/ALES_2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/exam/tyt"
          element={<TYTScreen title="TYT" home={<GoHome size={45} />} />}
        />
        <Route
          path="/exam/ayt"
          element={<AYTScreen title="AYT" home={<GoHome size={45} />} />}
        />
        <Route
          path="/exam/dil"
          element={<DILScreen title="DIL" home={<GoHome size={45} />} />}
        />
        <Route
          path="/exam/ales-1"
          element={<ALESScreen title="ALES-1" home={<GoHome size={45} />} />}
        />
        <Route
          path="/exam/ales-2"
          element={<ALES_2 title="ALES-2" home={<GoHome size={45} />} />}
        />
        <Route
          path="/exam/msu"
          element={<MSUScreen title="MSU" home={<GoHome size={45} />} />}
        />
        <Route path="*" element={<NotFoundPage  home={<GoHome size={45} />} />} />
      </Routes>
    </Router>
  );
}

export default App;
