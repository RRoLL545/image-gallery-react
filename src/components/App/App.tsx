import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import './App.css'

const App = () => {
  return (
    <>
      <Header />
        <main className='main-content'>
          <h2 className='cards-list-heading'>Your images list</h2>
          <div className='image-cards-list'>images list</div>
          <button>+</button>
        </main>
      <Footer />
    </>
  )
}

export default App;