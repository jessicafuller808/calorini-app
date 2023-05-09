import '../src/index.css'

function App() {

  return (
    <div className="App bg-[#101010] h-auto max-w-full text-slate-50 flex">
        <div className="h-screen w-6/12 bg-[url('./assets/pablo.jpg')] bg-cover bg-no-repeat bg-center">
        </div>
        <section className="w-3/12 flex flex-col justify-center items-end">
          <h1 className="text-9xl font-bold sans text-slate-50 mb-4">
            Calor<span className="text-lime-500">ini</span>
          </h1>
          <h2 className="serif text-2xl text-right mb-6">
            Build your best body with <span className='italic'>simple</span> protein-packed recipes from around the web
          </h2>
          <div className="flex-row w-80 justify-end">
            <button className="py-2 px-4 rounded-full bg-pink-900 w-32 h-12 font-semibold text-xl">
              Sign Up
            </button>
            <button className="py-2 px-4 rounded-full border-slate-50 border-2 w-32 h-12 font-semibold text-xl ml-4">
              Log In
            </button>
          </div>
        </section>
    </div>
  )
}

export default App
