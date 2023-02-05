import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';


function App() {
    return (
        <div>
            <Header />
            
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post 
                        author="Tiago" 
                        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ratione ea earum aliquam quos aliquid! Qui, nesciunt perspiciatis eligendi earum iusto unde assumenda. Officia voluptatibus voluptates incidunt quas." 
                    />
                    <Post 
                        author="Tiago" 
                        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ratione ea earum aliquam quos aliquid! Qui, nesciunt perspiciatis eligendi earum iusto unde assumenda. Officia voluptatibus voluptates incidunt quas." 
                    />
                </main>
            </div>
        </div>
    )
}


export default App 