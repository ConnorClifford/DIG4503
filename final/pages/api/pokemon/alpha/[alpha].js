import pokemon from 'json-pokemon';

export default (req, res) => {

    let result = [{"error": "Error. We couldn't find a result :/"}];

    function compareAscending(a, b) {

        const pokeA = a.name.toUpperCase();
        const pokeB = b.name.toUpperCase();
      
        let comparison = 0;
            if (pokeA > pokeB) {
            comparison = 1;
            } else if (pokeA < pokeB) {
            comparison = -1;
            }
        return comparison;
      }

      function comparedescending(a, b) {

        const pokeA = a.name.toUpperCase();
        const pokeB = b.name.toUpperCase();
      
        let comparison = 0;
            if (pokeA > pokeB) {
            comparison = -1;
            } else if (pokeA < pokeB) {
            comparison = 1;
            }
        return comparison;
      }

      
        if (req.query.alpha == 'az'){
            pokemon.sort(compareAscending);
            result = pokemon;
        }
        else if(req.query.alpha == 'za'){
            pokemon.sort(comparedescending);
            result = pokemon;
        }
      

    res.json(result);

}