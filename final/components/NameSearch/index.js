import styles from '../Styles.module.css'


class NameSearch extends React.Component {

    NameSearchFormSubmit = () => {

        // Get the input's value
        let nameSearch = document.querySelector('#nameSearch').value;
        nameSearch = nameSearch.charAt(0).toUpperCase() + nameSearch.slice(1);


        // Look for pokemon based on the id
        fetch("http://localhost:3000/api/pokemon/name/" + nameSearch)
        .then((res) => { return res.json() })
        .then((processed) => {
            console.log(processed);
            // Call the callback function given to the class component
            this.props.callback(processed);
        });

    }

    render() {
        return(
            <div className={styles.input}>
                <h2>Search for Pokemon by their Name:</h2>
                <input 
                    type="text" 
                    id="nameSearch" 
                />
                <button onClick={this.NameSearchFormSubmit}>Search by Name</button>

            </div>
        );
    }

}

export default NameSearch;