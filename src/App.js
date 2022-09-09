import logo from './logo.svg';
import './App.css';
import './Components/CartWidget'
import CartWidget from './Components/CartWidget';
import './Navbar/'

function App() {
  return (
    <div className="App">
      <header style={style.container}>
        <p>
        <code>Meraki: Productos personalizados</code> 
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <nav>
        </nav> 
        <ItemListContainer greeting={"¡Hola!"} />
        </a>
      </header>
    </div>
  );
}
const style = {
  container:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  links:{
    padding: 10,
  }
}
export default App;