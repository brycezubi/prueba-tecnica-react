export const getDatos = async () => {
  try {
    const url = `https://catfact.ninja/fact`;
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Response("Error al conectar la url");
    const {fact} = await respuesta.json();
    return fact
  } catch (error) {
    console.error(error);
  }
};