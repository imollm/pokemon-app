import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Search from './Search';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='search' element={<Search />}/>
        </Routes>
    )
}

export default Router;