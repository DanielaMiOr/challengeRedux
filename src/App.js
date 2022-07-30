import Header from './components/Header';
import './App.css';
import Nav from './components/Nav';
import ContainerProducts from './components/ContainerProducts';
import UseColumns from './components/UseColumns';


function App() {
  return (
   <>
   <div className="containerPrincipal"> 
     <Nav/>
   <Header/>
   <ContainerProducts/>
   {/* <UseColumns/> */}
   </div>
   </>
  );
}

export default App;
