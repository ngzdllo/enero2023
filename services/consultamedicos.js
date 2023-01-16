export async function consultarMedicos(){
    //Consumiendo API
    //1. Conocer la dirección del API
    //API o Servicio
    let url="https://apigestorapp.vercel.app/gestionapp/especialistas"
    //2. Configurar a qué voy al API
    //Configurando la request o petición
    let petición={
        method:"GET",
        
    }
    //3. Consumir
    //Traer los datos del API
    let respuesta=await fetch(url,petición)
    let medicos=await respuesta.json()
    return(medicos)
}