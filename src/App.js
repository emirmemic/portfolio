import './App.css';
import HomePage from "./pages/home-page/HomePage"
import OMeniPage from "./pages/o-meni-page/OMeniPage"
import ProjektiPage from "./pages/projekti-page/ProjektiPage"
import KontaktPage from "./pages/kontakt-page/KontaktPage"
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
   <div className="main-app-wrapper">
     <Router>
          <Route exact path="/" component={HomePage}></Route> 
          <Route exact path="/oMeni" component={OMeniPage}></Route>  
          <Route exact path="/projekti" component={ProjektiPage}></Route>
          <Route exact path="/kontakt" component={KontaktPage}></Route>
      </Router>
   </div>
  );
}

export default App;
