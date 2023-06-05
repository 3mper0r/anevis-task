import Login from './pages/Login'
import "./App.css"
import Books from './components/Books'

function App() {

  // const search = new URLSearchParams({
  //   action: 'query'
  // })

  return (
    <>
    <div className="wrapper">
      <Login/>
      
    </div>
    <main className=''>

      <Books/>
    </main>
    </>
  )
}

export default App
