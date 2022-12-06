import {Titles} from '../Titles'
import { useState } from 'react'
const Decks = ({setCategory, category}) => {
    const [deck, setDeck] = useState(Titles)
    console.log(category)
    console.log(Titles)
    return(
        <div>
        {
            deck.map((deck) => {
                return(
                    <div onClick={()=> {setCategory(deck.Category)}}>
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