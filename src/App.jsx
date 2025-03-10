 import HeroPage from "./Pages/HeroPage"
 import { BrowserRouter , Routes,Route} from "react-router-dom"

 
import SignUpPage from "./Pages/SignUpPage"
import LoginPage from "./Pages/LoginPage"


import FeaturesPage from "./Pages/FeaturesPage"
import HowItWorksPage from "./Pages/HowItWorksPage"



function App() {
  return (
    <>
    
    
 <BrowserRouter>
 
  <Routes>
 <Route path="/" element={<HeroPage/>} />
 <Route path="/signup" element={<SignUpPage/>} />
 <Route path="/Login" element={<LoginPage/>} />
 <Route path="/Howitworks" element={<HowItWorksPage/>} />
 <Route path="/Features" element={<FeaturesPage/>} />
  </Routes>
 </BrowserRouter>
 </>
  )
}

export default App
