import AlphaSearch from '../components/AlphaSearch';
import styles from './Styles.module.css'
import Navigation from '../components/Navigation'


class App extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        "table": []
      };
  
    }
  
    setResultsTable = (processed) => {
      return(
        this.setState({"table": processed})
        )
    }
  
    setBackgroundColor(type){
        if(type == "Normal"){
          return(styles.normal);
        }
        else if(type == "Fighting"){
          return(styles.fighting);
        }
        else if(type == "Flying"){
          return(styles.flying);
        }
        else if(type == "Poison"){
          return(styles.poison);
        }
        else if(type == "Ground"){
          return(styles.ground);
        }
        else if(type == "Rock"){
          return(styles.rock);
        }
        else if(type == "Bug"){
          return(styles.bug);
        }
        else if(type == "Ghost"){
          return(styles.ghost);
        }
        else if(type == "Steel"){
          return(styles.steel);
        }
        else if(type == "Fire"){
          return(styles.fire);
        }
        else if(type == "Water"){
          return(styles.water);
        }
        else if(type == "Grass"){
          return(styles.grass);
        }
        else if(type == "Electric"){
          return(styles.electric);
        }
        else if(type == "Psychic"){
          return(styles.psychic);
        }
        else if(type == "Ice"){
          return(styles.ice);
        }
        else if(type == "Dragon"){
          return(styles.dragon);
        }
        else if(type == "Dark"){
          return(styles.dark);
        }
        else if(type == "Fairy"){
          return(styles.fairy);
        }
      }
    
      createResultsTable() {

        document.body.style = 'background: #E7FFFA;';

    
        return (
          <table className={styles.tableResponse}>
            <tbody>
              {
                this.state.table.map((entry, index) => {

                    if(entry.error){

                        return(
                            <tr key={index}>Error! Sorry, we couldn't find a result.</tr>
                            )
                    }

                    else{
                        return(
                            <tr key={index} className = {this.setBackgroundColor(entry.typeList[0])}>
                            <td className={styles.data}>Id: {entry.id}</td>
                            <td className={styles.data}>Name: {entry.name}</td>
                            <td className={styles.data}>Type: {entry.typeList[0]} {entry.typeList[1]}</td>
                            </tr>
                        );
                    }
                })
              }
            </tbody>
          </table>
        )
      }
  
    render() {
      return (
        <div>
          <Navigation />
          <div>
            <AlphaSearch callback={this.setResultsTable} />
            {this.createResultsTable()}
          </div>
        </div>
      );
    }
    
  }
  
  export default App;
  
