import NotificationButton from "./components/NotificationButton"
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="card-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
