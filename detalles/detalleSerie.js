const contenido = [
    {
       nombre:"Cobra Kai",
       temporadas: 7,
       capitulosPorTemporada:{
        1:7,
        2:10,
        3:4,
        4:10,
        5:6,
        6:10,
        7:9
       },
       genero: "Comedia",
       critica: "Excelente",
       actores: [
        {
            nombre:"Ralph Macchio, ",
            wikipediaUrl: "https://es.wikipedia.org/wiki/Ralph_Macchio"
        },
        {
            nombre:"William Zabka",
            wikipediaUrl: "https://es.wikipedia.org/wiki/William_Zabka"
        }
       ],
       youtubeVideo:"https://www.youtube.com/embed/E1oFbI8Ic08",
       resumen:`Electrizante continuación de Karate Kid, explorando rivalidades renovadas
              entre Daniel LaRusso y Johnny Lawrence,
              fusionando acción, nostalgia y redención.`
    },
        {
       nombre:"Halo",
       temporadas: 7,
        capitulosPorTemporada:{
        1:7,
        2:10,
        3:4,
        4:10,
        5:6,
        6:10,
        7:9
       },
       genero: "Ciencia ficción",
       critica: "Excelente",
       actores: [
        {
            nombre:"Pablo Schreiber.",
            wikipediaUrl: "https://es.wikipedia.org/wiki/Pablo_Schreiber"
        },
       ],
       youtubeVideo:"https://youtu.be/5mcO5WiBmxM?si=fFqtyh1mrOvxsEM3",
       resumen:`Una de las franquicias más populares del mundo de los videojuegos. La historia se centra en un
              conflicto interestelar entre los humanos y alienígenas guiados por profetas obsesionados con una antigua
              especie conocida como los Forerunners.`
    },
     {
       nombre:"Stranger Things",
       temporadas: 7,
       genero: "Ficción",
       capitulosPorTemporada:{
        1:7,
        2:10,
        3:4,
        4:10,
        5:6,
        6:10,
        7:9
       },
       critica: "Excelente",
       actores: [
        {
            nombre:"Millie Bobby Brown",
            wikipediaUrl: "https://es.wikipedia.org/wiki/Millie_Bobby_Brown"
        },
       ],
       youtubeVideo:"https://www.youtube.com/embed/x7Yq9MJUqjY",
       resumen:`Emocionante serie sobre un grupo de amigos en los años 80 que enfrenta
              fenómenos sobrenaturales mientras buscan a un
              amigo desaparecido, tejiendo nostalgia, misterio y amistad.`
    },
    {
       nombre:"Vikings",
       temporadas: 9,
       genero: "Aventura",
       critica: "Excelente",
       capitulosPorTemporada:{
        1:7,
        2:10,
        3:4,
        4:10,
        5:6,
        6:10,
        7:9,
        8:22,
        9:20
       },
       actores: [
        {
            nombre:"Travis Fimmel,",
            wikipediaUrl: "https://es.wikipedia.org/wiki/Travis_Fimmel"
        },
        {
            nombre:"Katheryn Winnick.",
            wikipediaUrl: "https://es.wikipedia.org/wiki/Katheryn_Winnick"
        }
       ],
       youtubeVideo:"https://www.youtube.com/embed/9GgxinPwAGc",
       resumen:`Vikingos: Intrigante saga de guerreros nórdicos que explora conquistas, honor
              y mitología entre batallas brutales y
              alianzas complejas.`
    },
    {
       nombre:"Breaking Bad",
       temporadas: 6,
       genero: "Drama",
       critica: "Excelente",
       capitulosPorTemporada:{
        1:7,
        2:10,
        3:4,
        4:10,
        5:6,
        6:10,
       },
       actores: [
        {
            nombre:"Bryan Cranston,",
            wikipediaUrl: "https://es.wikipedia.org/wiki/Bryan_Cranston"
        },
        {
            nombre:"Aaron Paul.",
            wikipediaUrl: "https://es.wikipedia.org/wiki/Aaron_Paul"
        }
       ],
       youtubeVideo:"https://www.youtube.com/embed/HhesaQXLuRY",
       resumen:`Intenso drama sobre un profesor de química que se convierte en
                            narcotraficante, explorando la moralidad y las
                            consecuencias de sus acciones.`
    }
]

const contenidoSimilar = [
    {
        href:"?name=Cobra Kai",
        imgSrc:"../fotos-peliculas/cobra-kai.jpg",
        alt:"Cobra kai"
    },
        {
        href:"?name=Halo",
        imgSrc:"https://img.asmedia.epimg.net/resizer/v2/6PXBCBWCGRO2HI7NANOQVLNXA4.jpg?auth=528802000750e1c6bc05a5ce80b4c17f52e3018e2c7a4ca0213ca0b1479f67c6&width=1472&height=828&smart=true",
        alt:"halo"
    },
            {
        href:"?name=Stranger Things",
        imgSrc:"../fotos-peliculas/Stranger_Things.png",
        alt:"Stranger Things"
    },
                {
        href:"?name=Vikings",
        imgSrc:"../fotos-peliculas/vikings.webp",
        alt:"Vikings"
    },{
        href:"?name=Breaking Bad",
        imgSrc:"../fotos-peliculas/breaking_bad.jpg",
        alt:"Breaking Bad"
    }
]

document.addEventListener("DOMContentLoaded", function() {
    var query = window.location.search;
    var urlParams = new URLSearchParams(query);
    var peliNombre = urlParams.get('name');

   mostrarDetalle(peliNombre)
   mostrarContenidoSimilar()
   completarTemporadas(peliNombre)

});

const miBotonL = document.getElementById('left-btn');
const miBotonR = document.getElementById('right-btn');


miBotonL.addEventListener('click', function() {
    const ulSimContent = document.getElementById("similar-content")

    ulSimContent.style.transform = `translateX(${0}%)`
});

miBotonR.addEventListener('click', function() {
    // alert('¡Has hecho clic en el botón!');
    const ulSimContent = document.getElementById("similar-content")

    ulSimContent.style.transform = `translateX(-${50}%)`
});

    const optionTemporadas = document.getElementById('option-temporadas')




function mostrarDetalle(name){
 for(let i = 0; i < contenido.length; i++){
        if(name === contenido[i].nombre){
        const iframe = document.getElementById("iframe-trailer")
        const titulo = document.getElementById("titulo")
        // const temporadas = document.getElementById("temporadas")
        const genero = document.getElementById("genero")
        const critica = document.getElementById("critica")
        const resumen = document.getElementById("resumen")
        const actoresDiv = document.getElementById("actores")
        iframe.src = contenido[i].youtubeVideo
        titulo.textContent = "Titulo: " + contenido[i].nombre
        // temporadas.textContent = "Temporadas: " + contenido[i].temporadas
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

function completarTemporadas(nombrePeli){
    let serie;
for(let i = 0; i < contenido.length; i++){
    if(contenido[i].nombre === nombrePeli){
        serie = contenido[i]
    }
}
const selectTemporadas = document.getElementById("selectTemporadas")
let i = 1;
while(serie.temporadas >= i){
    const option = document.createElement('option')
    option.textContent = i;
    option.id = "option-temporadas"
    selectTemporadas.appendChild(option)
    // option.addEventListener('click', function(){
    // console.log("123")
    // })
    i++;
}

selectTemporadas.addEventListener('change', function() {
        const temporadaSeleccionada = selectTemporadas.value;
        console.log(`Seleccionaste la temporada ${temporadaSeleccionada}`);
        completarCapitulos(serie,temporadaSeleccionada)
        // Aquí puedes hacer lo que necesites con la temporada seleccionada
    });
}

function completarCapitulos(serie, temporada){
const selectCapitulos = document.getElementById("selectCapitulos")
selectCapitulos.innerHTML = ""
let i = 1;
const capitulos = serie.capitulosPorTemporada[temporada]
while(capitulos >= i){
    const option = document.createElement('option')
    option.textContent = i;
    option.id = "option-capitulos"
    selectCapitulos.appendChild(option)
    i++;
}
}
