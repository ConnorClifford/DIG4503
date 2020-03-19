import IdSearch from '../components/IdSearch';
import NameSearch from '../components/NameSearch';


class App extends React.Component {


  displayValue = (processed) => {
    return(
      <h3>{processed}</h3>
    )
  }


  render() {
    return (
      <div>
        <IdSearch callback={this.displayValue} />
        <NameSearch callback={this.displayValue} />
      </div>
    );
  }
  
}

export default App;
