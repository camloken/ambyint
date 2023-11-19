import { useState, useEffect } from 'react'
import Card from './Card'
import Modal from './Modal'
import axios from 'axios'
import './App.css'

function App() {
  const [people, setPeople] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [currentPerson, setCurrentPerson] = useState({})

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        const characters = res.data.results
        characters.map(char => {
          char.imageId = Math.floor((Math.random() * 100) / 1.15)
        })
        setPeople(characters)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  function openModal(name) {
    const person = people.find(p => p.name == name)
    setCurrentPerson(person)
    setShowModal(true)
  }

  function closeModal() {
    setCurrentPerson({})
    setShowModal(false)
  }

  return (
    <>
      <h1>Star Wars Characters</h1>
        {isLoading 
          ? <div className='spinner-wrapper'>
              <svg class="spinner" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
              </svg>
            </div>
          : <div className="card-wrap"> {
              people.map( person => {
              return <Card key={`person${person.name}`} person={person} openModal={openModal} />
            })}
            </div>
        }
        {showModal && <Modal currentPerson={currentPerson} closeModal={closeModal} />}
    </>
  )
}

export default App
