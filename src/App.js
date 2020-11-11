import { Home } from './pages';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Home></Home>
            </Router>
        </div>
    );
}

export default App;
