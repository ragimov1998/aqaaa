import { useRoutes } from 'react-router-dom';
import './App.css';
import { routes } from './routes';
import Header from './componenets/Header';
import Footer from './componenets/Footer';


function App() {
const router=useRoutes(routes)
  return (
    <div className='All' style={localStorage.getItem("darklight")==="dark"?({background:"rgb(137 129 129)",color:"#a11723"}):({background:""})}>
    <Header></Header>
    {router}
    <Footer></Footer>
   
    </div>
  )

}

export default App;
