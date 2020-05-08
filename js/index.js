
const fs = require('fs');
const url = require('fs');
const http = require('fs');
const path = require('fs');
const Terser = require('terser');
const sass = require('node-sass');
const uglifycss = require('uglifycss');


/* function search */
function search() {
$.ajax({
    url: `https://api.deezer.com/search?q=eminem&output=jsonp`,
    dataType: "jsonp",
    })
    .then((result) => {
        console.log("Résultat :", result.data);

    const tracks = result.data;
    //const requestUrl = `https://api.deezer.com/search?q=eminem&output=jsonp`;
    //localStorage.setItem(result,requestUrl);

    if (tracks === undefined || tracks.length <= 0) {
        return Promise.reject('Désolé, il n y a aucun résultat pour cette recherche.')
    } 
    else {
        $('.show-results').empty();
        displayResults(tracks);
    }
    })
    // Error management 
    .catch(err => {
        $('.show-results').append('Désolé, il n y a aucun résultat pour cette recherche.');
    })
}
/* show favorite */
function showFavorite(){

    $.ajax({
        url: `https://api.deezer.com/search?q=eminem&output=jsonp`,
        dataType: "jsonp",
        })
        .then((result) => {
            console.log("Résultat :", result.data);
            const favorites = result.data;
            $('.show-favorties').empty();
            displayResults(favorites);
            if (favorites.length <= 0) {
                $('.favorites').append(`Aucun favoris dans votre liste.`);
            }
        })
}

/* Add favorite */
function addFavorite(track){
    favorites.push(track);
    localStorage.setItem(localS_id, JSON.stringify(favorites));
    $(`.addTrack-${track.id}`).append(`<input type="submit" value="retirer des favoris" id="add-${track.id}" class=""`);
}

/* Delete favorite */
function deleteFavorite(track){
    favorites.push(track);
    localStorage.setItem(localS_id, JSON.stringify(favorites));
    $(`.addTrack-${track.id} input`).remove();
}

