function displayCharacter(character) {
    let charactersContainer = document.querySelector('.characterContainer');

    let characterCard = document.createElement('div');
    characterCard.className = 'c-card';
    characterCard.setAttribute('data-id', character.id);

    let characterImage = document.createElement('img');
    characterImage.src = character.img;
    characterImage.alt = character.name;
    characterImage.onclick = function() {
        console.log(`Clicked on ${character.name}`);
    };
    characterCard.appendChild(characterImage);

    [character.name, character.id, character.status].forEach(text => {
        let paragraph = document.createElement('p');
        paragraph.textContent = text;
        characterCard.appendChild(paragraph);
    });

    charactersContainer.appendChild(characterCard);
}

function displayAllCharacters() {
    characters.results.forEach(character => {
        displayCharacter({
            id: character.id,
            name: character.name,
            img: character.img,
            status: character.status
        });
    });
}

displayAllCharacters();
