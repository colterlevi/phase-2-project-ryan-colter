import { Titles } from '../../Titles'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// const classNames = require("classnames")

const Decks = ({ setCategory, category }) => {
    const [deck, setDeck] = useState(Titles)
    // console.log(category)
    // console.log(Titles)
    return (
        <div className="decks">
            {
                deck.map((deck) => {
                    return (
                        <Link className="gamecards" to="/game">
                        <div className={`deck-${deck.Category}`} onClick={() => { setCategory(deck.Category) }}>
                            <h1>{deck.Title}</h1>
                            <p>{deck.Bio}</p>
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