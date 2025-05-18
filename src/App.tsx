import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./pages";

const App = () => {
     return (
          <div className="font-body mx-auto max-w-[1440px] bg-white px-4 pt-2 md:px-[100px] md:pt-[30px]">
               <Header />

               <Routes>
                    <Route path="/" element={<Home />} />
               </Routes>
          </div>
     );
};

export default App;
