/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function PokemonCard ({ pokemon }) {
         return (
            <figure>
            {pokemon.imgSrc ? (
              <img src={pokemon.imgSrc} alt={`pokemon ${pokemon.name}`} />
            ) : (
              <p>???</p>
            )}
            <figcaption>{pokemon.name}</figcaption>
          </figure>
         )
        }



export default PokemonCard