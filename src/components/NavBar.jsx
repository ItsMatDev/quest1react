    import PropTypes from "prop-types";

    function NavBar({ pokemonIndex, setPokemonIndex, pokemonList}) {

        NavBar.propTypes = {
            pokemonIndex: PropTypes.number.isRequired,
            setPokemonIndex: PropTypes.func.isRequired,
            pokemonList: PropTypes.arrayOf(
                PropTypes.shape({
                name: PropTypes.string.isRequired,
                imgSrc: PropTypes.string,
                })),
        }

        const handleClickMore = () => {
            setPokemonIndex(pokemonIndex + 1)
          }
        
          const handleClickLess = () => {
            setPokemonIndex(pokemonIndex - 1)
          }
    
        return (
        <div className="navbar">
            {pokemonIndex > 0 ? <button onClick={handleClickLess}>Précèdant</button> : null}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickMore}>Suivant</button> : null}
        </div>
        );
    }
    

    export default NavBar;