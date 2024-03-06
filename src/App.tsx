import { Main } from "./pages/Main"
import { DataProvider } from "./context/dataContext"


function App() {
  return (
    <>
    <DataProvider>
      <Main />
    </DataProvider>
    </>
    
  )
}

export default App
