import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Insurance from './components/insurance-card/insurance';
import ArticleClickBtn from './components/insurance-card/articleBtn';
import Dependable from './components/choose-iciciLombard/dependable';
import Feedback from './components/choose-iciciLombard/feedback';
import TakeCareReadMore from './components/choose-iciciLombard/takecare-readmore';

function App() {
  return (
    <Router>
     <Routes>
      <Route exact path='/' element={<Dependable />}  />
      {/* <Route exact path='/' element={<Insurance />} /> */}
      <Route exact path='/ArticleBtn' element={<ArticleClickBtn />} />
      <Route exact path='/feedback' element={<Feedback />} />
      <Route exact path='/Takecare-readmore' element={<TakeCareReadMore />}  />
     </Routes>
    </Router>
   
  );
}

export default App;
