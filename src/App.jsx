import '../src/index.css'

function App() {

  return (
    <div className="App bg-[#101010] h-screen max-w-full text-slate-50 flex">
      <div className="h-screen w-2/5 bg-[url('./assets/pablo.jpg')] bg-contain bg-no-repeat">
      </div>
      <section className="flex flex-col content">
        <h1 className="text-6xl font-bold sans text-slate-50">
          Calor<span className="text-lime-500">ini</span>
        </h1>
        <h3 className="sans">
          Build your best body with simple, protein-packed recipes from around the web
        </h3>
        <div className="flex-row">
          <button className="rounded-2xl bg-pink-900 w-20 h-8 font-semibold">
            Sign Up
          </button>
          <button className="rounded-2xl border-slate-50 border-2 w-20 h-8 font-semibold">
            Log In
          </button>
        </div>
      </section>
    </div>
  )
}

export default App
