/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { getDatos } from "./services";
import { useCatImage } from "./hooks/useCatImage";

function App() {
  const [fact, setFact] = useState([]);
  const {image} = useCatImage({fact})

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async() => {
    const newFact = await getDatos();
    setFact(newFact)
  }, []);


  const handleClick = async()=>{
    const newFact = await getDatos();
    setFact(newFact)
  }

  return (
    <>
      <h1 className="text-4xl text-center text-red-600 my-10 font-semibold">
        Prueba Técnica | React{" "}
      </h1>

      <section className="max-w-5xl w-5/6  mx-auto text-white grid gap-10 xl:grid-cols-2 xl:items-center">
        {fact.length > 0 ? (
          <div>
            <p className="text-xl text-center">"{fact}"</p>
            <button 
              onClick={handleClick}
              className="bg-blue-500 py-1 px-5 text-white rounded-md block mx-auto mt-5"
            >Refrescar</button>
          
          </div>
        ) : (
          <p>Recibiendo Datos</p>
        )}
        {image.length > 0 ? (
          <img className="max-w-sm mx-auto rounded-md" src={image} alt="imagen gatito" />
        ) : (
          <img src="https://libero.cronosmedia.glr.pe/original/2021/06/21/60d111b27c6a231a7b09b0e2.jpg" />
        )}
      </section>
    </>
  );
}

export default App;
