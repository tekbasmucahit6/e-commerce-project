import React from 'react'
import Footer from "../components/Footer.jsx"
import Header from '../components/Header.jsx'
function SuperLayouts({Content}) {
  return (
    <div>
        <Header />
        <Content />
        <Footer />
    </div>
  )
}

export default SuperLayouts