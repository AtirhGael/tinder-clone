import React, { useEffect, useState } from 'react'
import './TinterCard.css'
import TinderCard from 'react-tinder-card'
import axios from './Axios'

function TinderCards() {
    const [people,setPeople] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('/tinder/card')
            setPeople(req.data)
        }
    fetchData();
    },[])
    console.log(people);
    //brackets mean when the code inside should run only once
    const onSwipe = (direction,) => {
        console.log('You swiped: ' + direction)
      
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')

      }
  return (
    <div className='tinderCards'>
        <div className='tinderCard_cardContainer'>
            {people.map((person)=>{
                return(
                    <TinderCard 
                    className='swipe'
                    onSwipe={onSwipe}
                    onCardLeftScreen={() => onCardLeftScreen(person.name)} 
                    preventSwipe={['right', 'left']}>
                    <div 
                    className='card'
                    style={{backgroundImage:`url(${person.imgUrl})`,resize:'inherit' }}
                    >
                    <h3>
                        {person.name}
                    </h3>
                    </div>
                    </TinderCard>
                )
            })}
        </div>
    </div>
  )
}

export default TinderCards