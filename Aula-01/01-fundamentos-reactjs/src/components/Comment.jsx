import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment(props) {
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

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span> 
                    </button>
                </footer>
            </div>
        </div>
    )
}