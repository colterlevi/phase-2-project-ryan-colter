import Titles from './Titles.json'
import { useState } from 'react'
const Decks = () => {
    const [deck, setDeck] = useState(Titles)
    return(
        <div>
            {
                deck.map((deck) => {
                    return(
                        <div>
                            <h1>{deck.Title}</h1>
                            <h2>{deck.Category}</h2>
                            <h3>{deck.Bio}</h3>
                            <img src={deck.Images}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Decks