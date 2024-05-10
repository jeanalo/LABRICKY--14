const container = document.getElementById("main-container");

async function getCharacters() {
    
        // Obtener los datos de la API de Rick and Morty
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();

        const charactersData = data.results; // Obtener la lista de personajes desde los resultados de la respuesta
        
        // Convertir cada elemento JSON en un objeto Character utilizando la función parseJsonToCharacter
        var characters = charactersData.map(parseJsonToCharacter);
        
        // Renderizar todos los personajes en la página HTML
        renderAllCharacters(characters);
}

function parseJsonToCharacter(element) {
    // Crear un nuevo objeto Character a partir del elemento JSON
    const character = new Character(
        element.name,
        element.image, 
        element.species,
        element.location.name
    );
    return character;
}

function renderAllCharacters(characters) {
    // Renderizar cada personaje en el contenedor principal
    characters.forEach(character => {
        container.innerHTML += character.toHtml();
    });
}

// Obtener y renderizar los personajes al cargar la página
getCharacters();


