import React from "react"
import OrbitPage from "./pages/test-orbit"
import { OrbitProvider } from "./common/context/Orbit"

function App() {
  return (
    <>
      <OrbitProvider>
        <OrbitPage />
      </OrbitProvider>
    </>
  )
}

export default App
