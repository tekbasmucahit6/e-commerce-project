import {BrowserRouter as Router , Routes ,Route} from "react-router-dom"
import Index from "./pages/IndexPage/Index"
import Details from "./pages/DetailsPage/Details"
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/product/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
