import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = [{"error": "Could not find name."}];

    let pokemon = [];
    pokemon.push(getPokemon.getPokemonByName(req.query.name));
    console.log(pokemon);

    if(pokemon[0] !== null) {
        result = pokemon;
    }
    console.log(result);

    res.json(result);

}