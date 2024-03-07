import { Main } from "./pages/Main"
import { DataProvider } from "./context/dataContext"
import {BrowserRouter as Roteador, Routes, Route} from "react-router-dom"
import Maps from "./pages/Maps"
import { Overview } from "./pages/Overview"

function App() {
  return (
    <>
    <DataProvider>
      <Roteador>
        <Routes>
          <Route path="/table" element={<Main />} />
          <Route path="/map" element={<Maps />} />
          <Route path="/" element={<Overview />} />
        </Routes>
      </Roteador>
    </DataProvider>
    </>
    
  )
}

export default App
