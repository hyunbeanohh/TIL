import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Nav from './components/Nav';
import LoginPage from './components/pages/LoginPage';
import SearchPage from './components/pages/SearchPage';
import DetailPages from './components/pages/DetailPages';

const Layout = () =>{
  return(
    <div>
      <Nav/>

      <Outlet/>
    </div>
  )
}


function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<LoginPage/>}/>
          <Route path='main' element={<MainPage/>}/>
          <Route path=':movieId' element={<DetailPages/>}/>
          <Route path='search' element={<SearchPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;