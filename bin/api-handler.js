'use strict';
var request = require('request');
var qs = require('querystring');

exports.retrieveFromApi = function (characterName) {

    var post_url = 'http://stapi.co/api/v1/rest/character/search';
    var post_qs = { name: characterName };

    var get_url = 'http://stapi.co/api/v1/rest/character';

    request.post({ url: post_url, qs: post_qs }, (error, response, body) => {
        var api_response = JSON.parse(body);
        //The API returns a list of characters and this must be handled in this codes next versions
        if (undefined !== api_response.characters[0]) {
            var uid = api_response.characters[0].uid;
            var get_qs = { uid: uid };

            request.get({ url: get_url, qs: get_qs }, (error, response, body) => {
                var get_response = JSON.parse(body);
                if (undefined !== get_response.character.characterSpecies[0]) {
                    var species = get_response.character.characterSpecies[0].name;
                    console.log(species);
                }
            });
        }
    });

};


