import { Titles } from '../../Titles'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Decks = ({ setCategory }) => {
    const [deck, setDeck] = useState(Titles)
    return (
        <div className="decks">
            {
                deck.map((deck) => {
                    return (
                        <Link className="gamecards" to="/game">
                        <div className={`deck-${deck.Category}`} onClick={() => { setCategory(deck.Category) }}>
                            <h1>{deck.Title}</h1>
                            <h3>{deck.Bio}</h3>
                            <img src={deck.Images} />
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Decks