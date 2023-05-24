import { useRoutes } from 'react-router-dom';
import './App.css';
import { routes } from './routes';
import Header from './componenets/Header';
import Footer from './componenets/Footer';


function App() {
const router=useRoutes(routes)
  return (
    <>
    <Header></Header>
    {router}
    <Footer></Footer>
   
    </>
  )

}

export default App;
