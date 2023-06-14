import { useEffect, useState } from "react";

export function useCatImage ({fact}){
  const [image, setImage] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if (fact.length > 0) {
        const primeraPalabra = fact.split(" ", 1).join(" ");
        const url = `https://cataas.com/cat/says/${primeraPalabra}`;
        const res = await fetch(url);
        setImage(res.url);
      }
    };

    getData();
  }, [fact]);

  return { image }

}