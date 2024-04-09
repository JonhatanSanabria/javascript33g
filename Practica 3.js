const miLibro = {
  titulo: "El Principito",
  autor: "Antoine de Saint-Exupéry",
  editorial: "Alfaguara",
  añoPublicacion: 1943
}

function mostrarInfo(libro){
    console.log("Este libro es", libro.titulo, "escrito por", libro.autor);
    console.log("Fue publicado en el año", libro.añoPublicacion, "por la editorial", libro.editorial); 
}

mostrarInfo(miLibro)
