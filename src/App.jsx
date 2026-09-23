import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, Project, Contact } from './pages';

import Navbar from './components/Navbar';

const App = () => {
    return (
        <main className="min-h-screen bg-slate-300/20 h-full">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Project />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router >
        </main>
    );
}

export default App;