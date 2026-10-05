import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import { useCards } from './context/CardContext';

function App() {

  const {cards, error, loading} = useCards()

  if(loading){
    return <h1>Loading...........!</h1>
  }

  if(error){
    return <h1>Error: {error}</h1>
  }


  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className='text-3xl mb-10'>List of the Cards are............</h2>
      <div className="grid grid-cols-3 gap-5">

        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.body}
          />
        ))}

      </div>

    </div>
  )
}

export default App
