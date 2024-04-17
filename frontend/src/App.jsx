import { Route, Routes } from 'react-router-dom';
import Alldoc from './Alldoc';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import MoreDetails from './MoreDetails';

function App() {
  return (
    <div className="App">
      <section><Header/></section>
<section>
        
        <Routes>
          <Route path='/' element={<Alldoc/>}/>
          <Route path='view/id' element={<MoreDetails/>}/>
        </Routes>
  
</section>     <section> <Footer/></section>
    </div>
  );
}

export default App;
