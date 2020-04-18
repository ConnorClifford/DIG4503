import styles from '../Styles.module.css'

class GenSearch extends React.Component {

    GenSearchFormSubmit = () => {

        // Get the input's value
        let genSearch = document.querySelector('#genSearch').value;

        // Look for pokemon based on the generation
        fetch("/api/pokemon/gen/" + genSearch)
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
                <h2>Search for Pokemon by their Generation:</h2>

                <input type="number" id="genSearch" />

                <button onClick={this.GenSearchFormSubmit}>Search by Gen</button>
            </div>
        );
    }

}

export default GenSearch;