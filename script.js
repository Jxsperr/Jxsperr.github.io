// Kanye Rest API-Call
async function getApiResponse() {
    const response = await fetch('https://api.kanye.rest');
    const myJson = await response.json();
    console.log(myJson);
    document.querySelector('#kanyeRestApiText').textContent = myJson.quote;                                                                                                                                                                                                                        ;
}

getApiResponse();

function reloadQuote() {
    getApiResponse();
}
