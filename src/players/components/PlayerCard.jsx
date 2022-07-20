
export const PlayerCard = ({
   player,
   stats,
}) => {

    const playerImageUrl=`./assets/players/${player.name.first}.png`;

    const findAppearances = (appearances) => {
        return appearances.name === 'appearances'
      }
    const foundApparearances = stats.find(findAppearances);

    const findGoals = (goals) => {
        return goals.name === 'goals'
      }
    const foundGoals = stats.find(findGoals);

    const findGoalAssist = (goalAssist) => {
        return goalAssist.name === 'goal_assist'
      }

    const foundGoalAssits = stats.find(findGoalAssist);

    
    const spriteLogo = player.currentTeam.shortName;
    const spriteLogoClassName = spriteLogo.replaceAll(' ','');

    return (
        <div className='card'>           
            <div className=''>
                <img src={playerImageUrl} className='' alt={player.name.first}/>
            </div>
            <div className='stats-container'>
                <div className='team-logo'>
                    <div className={spriteLogoClassName}></div>
                </div>

                <div className=''>
                    <h3><span>{player.name.first}</span><span>{player.name.last}</span></h3>
                </div>
                <div className=''>
                    <h4>{player.info.positionInfo}</h4>
                </div>
                
                {
                    foundApparearances && 
                    <div className='like-definition-list'>
                        <div className='first-position'>
                            {foundApparearances && foundApparearances.name}
                        </div>
                        <div className='last-position'>
                            {foundApparearances && foundApparearances.value}
                        </div>
                    </div>
                }
                {
                    foundGoals && 
                    <div className='like-definition-list'>
                        <div className='first-position'>
                            {foundGoals.name}
                        </div>
                        <div className='last-position'>
                            {foundGoals.value}
                        </div>
                    </div>
                }
                {
                    foundGoalAssits && 
                    <div className='like-definition-list'>
                        <div className='first-position'>
                            {foundGoalAssits && 'assists'}
                        </div>
                        <div className='last-position'>
                            {foundGoalAssits && foundGoalAssits.value}
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}

