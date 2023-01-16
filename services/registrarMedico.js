export async function registrarMedico(medico){

    let url="https://apigestorapp.vercel.app/gestionapp/especialistas"

    let petición={
        method:"POST",
        body:JSON.stringify(medico)
    }

    let respuesta=await fetch(url,petición)
    let respuestaOK=await respuesta.json()

}