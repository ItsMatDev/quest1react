import PropTypes from "prop-types";

    function NavBar({ pokemonList, setPokemonIndex}) {

      const handleClick = (index, name) => {
        setPokemonIndex(index);
        if (name === "pikachu") {
          alert("pika pikachu !!!");
        }
      };

        return  (
          <div className="navbar">
            {pokemonList.map((pokemon, index) => (
              <button key={pokemon.name} name={pokemon.name} onClick={() => handleClick(index, pokemon.name)}>
                {pokemon.name}
              </button>
            ))}
          </div>
        );
      }
    

    export default NavBar;

    NavBar.propTypes = {
      pokemonList: PropTypes.arrayOf(
          PropTypes.shape({
          name: PropTypes.string.isRequired,
          imgSrc: PropTypes.string,
          })),
      setPokemonIndex: PropTypes.func.isRequired,
  }