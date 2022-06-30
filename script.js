let cardsDiv = document.querySelector("#cards");
let currentUsername = "";


function getUsername( element ) {
    currentUsername = element.value;
    console.log(currentUsername);
}

function makeCoderCard( data ) {
    let res = `<div class ="card">
                    <img src="${data.avatar_url} alt=${data.login}">
                    <div class="flex-1">
                        <h3>${data.login} - ${data.name}</h3>
                        <p>Location: ${data.location}</p>
                        <p>Repositories: ${data.public_repos}</p>
                    </div>
                </div>`
    return res;
}

async function search() {
    let response = await fetch( "https://api.github.com/users/" +currentUsername );
    let coderData = await response.json();
    // console.log( coderData );
    cardsDiv.innerHTML = makeCoderCard( coderData ) + cardsDiv.innerHTML;

}