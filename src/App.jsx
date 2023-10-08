import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import NotFound from './components/NotFound';

const App = () => {


  return (
    <div className="container mx-auto bg-gray-200">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:pageParam" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div >

  )
}

export default App