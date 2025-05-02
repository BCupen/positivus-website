import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white font-body md:px-[100px] md:pt-[60px] px-4 pt-4">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
