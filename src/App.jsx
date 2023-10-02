import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import NotFound from './components/NotFound';

const App = () => {



  return (
    <div className="container mx-auto md:p-6 sm:p-5 p-2 w-full min-h-screen  bg-gray-200">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:pageId" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div >

  )
}

export default App