import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationComponent from './Components/NavComponent';
import MenuOverview from './Pages/MenuOverview';
import MenuDetail from './Pages/MenuDetail'

function App() {
  return (
    <>  
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
        />

        <nav>
            <NavigationComponent />
        </nav>

        <Routes>
          <Route index element={<MenuOverview />} />
          <Route path="menudetail/:token" element={<MenuDetail />} />
        </Routes>
    </>
  );
}

export default App;
