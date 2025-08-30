import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {
  return (
  <>
  <Navbar />
  <Routes>

    <Route>
      path ="/" element ={<><Hero /></>}
    </Route>
  </Routes>
  <Footer />
  </>
  )
}

export default App
