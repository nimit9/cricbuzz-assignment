import HomePage from "./components/HomePage";
import cbuzzLogo from "./asset/cricbuzz.png";

function App() {
    return (
        <div className='container'>
            <div className='header'>
                <img src={cbuzzLogo} className='logo' alt='cricbuzz logo' />
                <h1>Word Search</h1>
            </div>
            <HomePage />
        </div>
    );
}

export default App;
