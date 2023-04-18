import Footer from './components/Footer';
import MainImage from './components/MainImage';
import Nav from './components/Nav';
import Router from './components/Router';

const App: React.FC = () => {
    return (
        <>
            <Nav />
            <div className='container py-10'>
                <MainImage />
                <Router />
            </div>
            <Footer />
        </>
    );
}

export default App;
