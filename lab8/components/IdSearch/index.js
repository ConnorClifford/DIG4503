class IdSearch extends React.Component {

    IdSearchFormSubmit = () => {

        // Get the input's value
        let idSearch = document.querySelector('#idSearch').value;

        // Look for pokemon based on the id
        fetch("/api/pokemon/id/" + idSearch)
        .then((res) => { return res.json() })
        .then((processed) => {
            // Call the callback function given to the class component
            this.props.callback(processed);
        });

    }

    render() {
        return(
            <div>
                <h2>Search for Pokemon by their Id:</h2>
                <input 
                    type="text" 
                    id="idSearch" 
                />
                <button onClick={this.IdSearchFormSubmit}>Search by Id</button>

            </div>
        );
    }

}

export default IdSearch;