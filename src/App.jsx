import { useState, useEffect } from 'react' // Import Suspense?
import Card from './Card'
import Modal from './Modal'
import Axios from 'axios' // Move to component ???
import './App.css'

function App() {
  const [people, setPeople] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [currentPerson, setCurrentPerson] = useState({})

  useEffect(() => {
    Axios.get('https://swapi.dev/api/people/')
      .then( res => {
        const peopleArray = res.data.results.map(p => {
          p.imageId = Math.round((Math.random() * 100) / 1.15) // Create a number less than 90
          return p
        })
        setPeople(peopleArray)
        setIsLoading(false)
        console.log('people', peopleArray)
      })
      .catch(error => console.log(error))
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
          ? <div>Loading...</div>
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

// Stretch Goal: In addition to pagination, we’d also like the React developer to implement searching and filtering. 
// To search, the user should enter a character name (partial or complete) and have all matching results returned. 
// For filtration, the user should be able to select either the homeworld, film, or species of any character and see results. 
// Don’t forget to combine the search with filters.
// 
// Stretch Goal: Add an integration test for testing the modal opens with the correct person’s information.
