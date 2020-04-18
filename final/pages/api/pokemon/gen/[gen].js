import pokemon from 'json-pokemon';

export default (req, res) => {

    let result = [{"error": "Error. Try putting in a different number, 1-7"}];

    // let pokemon = getPokemon.filter.type(req.query.type);

        if (req.query.gen == 1){
            for(let i=0; i<pokemon.length; i++){
                if(pokemon[i].id <= 151){
                    result.push(pokemon[i])
                }
            }
        }
        else if(req.query.gen == 2){
            for(let i=0; i<pokemon.length; i++){
                if(pokemon[i].id > 151 && pokemon[i].id <= 251){
                    result.push(pokemon[i])
                }
            }
        }
        else if(req.query.gen == 3){
            for(let i=0; i<pokemon.length; i++){
                if(pokemon[i].id > 251 && pokemon[i].id <= 386){
                    result.push(pokemon[i])
                }
            }
        }
        else if(req.query.gen == 4){
            for(let i=0; i<pokemon.length; i++){
                if(pokemon[i].id > 386 && pokemon[i].id <= 493){
                    result.push(pokemon[i])
                }
            }
        }
        else if(req.query.gen == 5){
            for(let i=0; i<pokemon.length; i++){
                if(pokemon[i].id > 493 && pokemon[i].id <= 649){
                    result.push(pokemon[i])
                }
            }
        }
        else if(req.query.gen == 6){
            for(let i=0; i<pokemon.length; i++){
                if(pokemon[i].id > 649 && pokemon[i].id <= 721){
                    result.push(pokemon[i])
                }
            }
        }
        else if(req.query.gen == 7){
            for(let i=0; i<pokemon.length; i++){
                if(pokemon[i].id > 721 && pokemon[i].id <= 809){
                    result.push(pokemon[i])
                }
            }
        }


    res.json(result);

}