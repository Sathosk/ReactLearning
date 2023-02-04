import { Post } from './Post'
import { Header } from './components/Header'
import './global.css';

function App() {
    return (
        <div>
            <Header />
            <Post author="Joao" content="testetestesteste" />
        </div>
    )
}

export default App 