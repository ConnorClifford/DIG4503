import styles from '../Styles.module.css'

class AlphaSearch extends React.Component {

    AlphaSearchFormSubmit = () => {

        // Get the input's value
        let alphaSearch = document.querySelector('#alphaSearch').value;

        // Look for pokemon based on the generation
        fetch("/api/pokemon/alpha/" + alphaSearch)
        .then((res) => { return res.json() })
        .then((processed) => {
            //console.log(processed);
            //Call the callback function given to the class component
            this.props.callback(processed);
        });

    }

    render() {
        return(
            <div className={styles.input}>
                <h2>Search for Pokemon Alphabetically:</h2>

                    <select id="alphaSearch">
                        <option value="az">A - Z</option>
                        <option value="za">Z - A</option>
                    </select>

                <button onClick={this.AlphaSearchFormSubmit}>Search Alphabetically</button>
            </div>
        );
    }

}

export default AlphaSearch;