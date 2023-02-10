import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Insurance from './components/insurance';
import ArticleClickBtn from './components/articleBtn';

function App() {
  return (
    <Router>
     <Routes>
      <Route exact path='/' element={<Insurance />} />
      <Route exact path='/ArticleBtn' element={<ArticleClickBtn />} />
     </Routes>
    </Router>
   
  );
}

export default App;
