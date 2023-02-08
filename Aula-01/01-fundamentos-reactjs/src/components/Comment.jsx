import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


export function Comment(props) {
    ////// State Variables
    const [likeCount, setLikeCount] = useState(0);

    ////// Handler Functions 
    function handleDeleteComment() {
        props.onDeleteComment(props.content);
    }

    function handleLikeComment(e) {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={ styles.comment }>
            <Avatar hasBorder={false} src={ props.src }/>

            <div className={ styles.commentBox }>
                <div className={ styles.commentContent }>
                    <header>
                        <div className={ styles.authorAndTime }>
                            <strong>Alexandre</strong>
                            <time title='11 de maio ás 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={ handleDeleteComment } title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button onClick={ handleLikeComment }>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{ likeCount }</span> 
                    </button>
                </footer>
            </div>
        </div>
    )
}