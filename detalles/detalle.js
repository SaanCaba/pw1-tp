const contenido = [
    {
       nombre:"Planeta de los simios",
       duracion: "1 Horas 57 minutos",
       genero: "Drama",
       critica: "Excelente",
       actores: [
        {
            nombre:"Andy Serkis",
            wikipediaUrl: "https://es.wikipedia.org/wiki/Andy_Serkis"
        }
       ],
       youtubeVideo:"https://www.youtube.com/embed/raYE6Ild7a4",
       resumen:"Sumérgete en la épica saga de El Planeta de los Simios. Explora la luchaentre humanos y simios por el dominio del planeta. Vuelve a la página de inicio para más contenido sobre esta emocionante historia."
    },
        {
       nombre:"Shrek",
       duracion: "2 Horas 5 minutos",
       genero: "Animada",
       critica: "Excelente",
       actores: [
        {
            nombre:"Hayden Christensen",
            wikipediaUrl: "https://es.wikipedia.org/wiki/Hayden_Christensen"
        }
       ],
       youtubeVideo:"https://www.youtube.com/embed/CwXOrWvPBPk",
       resumen:`"Shrek" es una película animada que sigue las aventuras de un ogro solitario
              que se embarca
              en una misión para rescatar
              su pantano de criaturas de cuento de hadas. Con su humor irreverente y su mensaje sobre la
              aceptación de uno mismo,
              "Shrek" se convirtió en un clásico moderno de la animación.`
    },
            {
       nombre:"Star Wars",
       duracion: "3 Horas 25 minutos",
       genero: "Ficción",
       critica: "Excelente",
       actores: [
        {
            nombre:"Hayden Christensen, ",
            wikipediaUrl: "https://es.wikipedia.org/wiki/Hayden_Christensen"
        },
        {
            nombre:"Natalie Portman",
            wikipediaUrl: "https://es.wikipedia.org/wiki/Natalie_Portman"
        }
       ],
       youtubeVideo:"https://www.youtube.com/embed/sGbxmsDFVnE",
       resumen:`Explora el universo de Star Wars. Descubre más sobre la saga galáctica más
              famosa. Dirígete a la página de la película
              para sumergirte aún más`
    },
    {
       nombre:"Titanic",
       duracion: "2 Horas 25 minutos",
       genero: "Ficción",
       critica: "Excelente",
       actores: [
        {
            nombre:"Leonardo DiCaprio, ",
            wikipediaUrl: "https://es.wikipedia.org/wiki/Hayden_Christensen"
        },
        {
            nombre:"Kate Winslet",
            wikipediaUrl: "https://es.wikipedia.org/wiki/Kate_Winslet"
        }
       ],
       youtubeVideo:"https://www.youtube.com/embed/tA_qMdzvCvk",
       resumen:`"Titanic" es un épico drama romántico que narra el trágico hundimiento del
              famoso transatlántico. Ambientada en 1912, la
              película entrelaza una emotiva historia de amor con la tragedia histórica, ofreciendo una
              experiencia cinematográfica
              inolvidable.`
    },
]

const contenidoSimilar = [
    {
        href:"?name=Shrek",
        imgSrc:"../fotos-peliculas/shrek.webp",
        alt:"Shrek movie"
    },
        {
        href:"?name=Titanic",
        imgSrc:"../fotos-peliculas/titanic.webp",
        alt:"titanic movie"
    },
            {
        href:"?name=Star Wars",
        imgSrc:"../fotos-peliculas/star-wars.jpg",
        alt:"star-wars movie"
    },
                {
        href:"?name=Planeta de los simios",
        imgSrc:"../fotos-peliculas/simios.jpg",
        alt:"Planeta de los simios movie"
    }
]

document.addEventListener("DOMContentLoaded", function() {
    var query = window.location.search;
    var urlParams = new URLSearchParams(query);
    var peliNombre = urlParams.get('name');

   mostrarDetalle(peliNombre)
   mostrarContenidoSimilar()



    
});

function mostrarDetalle(name){
 for(let i = 0; i < contenido.length; i++){
        if(name === contenido[i].nombre){
        const iframe = document.getElementById("iframe-trailer")
        const titulo = document.getElementById("titulo")
        const duracion = document.getElementById("duracion")
        const genero = document.getElementById("genero")
        const critica = document.getElementById("critica")
        const resumen = document.getElementById("resumen")
        const actoresDiv = document.getElementById("actores")
        iframe.src = contenido[i].youtubeVideo
        titulo.textContent = "Titulo: " + contenido[i].nombre
        duracion.textContent = "Duración: " + contenido[i].duracion
        genero.textContent = "Género: " + contenido[i].genero
        critica.textContent = "Crítica: " + contenido[i].critica
        resumen.textContent = contenido[i].resumen

        const h3Actores = document.createElement("h3");
    
        h3Actores.innerHTML = "Actores";

        actoresDiv.appendChild(h3Actores)

        for(let j = 0; j < contenido[i].actores.length ; j++){
            const aWikiActor = document.createElement("a")
            aWikiActor.href = contenido[i].actores[j].wikipediaUrl;
            aWikiActor.textContent =  contenido[i].actores[j].nombre;
            aWikiActor.target = "_blank"
            actoresDiv.appendChild(aWikiActor)
        }

        const aYoutubeTrailer = document.createElement("a")
        aYoutubeTrailer.href = contenido[i].youtubeVideo;
        aYoutubeTrailer.target = "_blank"
        const aButton = document.createElement("button")
        aButton.textContent = "Comenzar"
        aButton.classList.add("button-start")
        aYoutubeTrailer.appendChild(aButton)

        const sectionInfo = document.getElementById("section-info")
        sectionInfo.appendChild(aYoutubeTrailer)
        }



    }
}

function mostrarContenidoSimilar(){
   const contenidoSimilarUl = document.getElementById("similar-content")

   for(let i = 0; i < contenidoSimilar.length; i++){
    const li = document.createElement("li")
    const aTag = document.createElement("a")
    aTag.href = contenidoSimilar[i].href;
    const img = document.createElement("img")
    img.src = contenidoSimilar[i].imgSrc
    img.alt = contenidoSimilar[i].alt

    aTag.appendChild(img)
    li.appendChild(aTag)

    contenidoSimilarUl.appendChild(li)
   }
}

