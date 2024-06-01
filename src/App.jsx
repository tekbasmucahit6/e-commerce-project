import {BrowserRouter as Router , Routes ,Route} from "react-router-dom"
import Main from "./pages/Main"
import SingleProduct from "./pages/SingleProduct"
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
