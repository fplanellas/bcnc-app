import { players } from "../data/players"
import { PlayerCard } from "./PlayerCard"

export const PlayerList = () => {
    
    return (
        <div className='card-container'>
            {
                players.map( players => (
                    <PlayerCard 
                        key={ players.player.id}
                        { ...players}
                    />
                ))
            }
        </div>
    )
   

}

