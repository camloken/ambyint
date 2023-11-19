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

//   useEffect(() => {
//     axios.get('https://swapi.dev/api/people/')
//       .then( res => {
//         const peopleArray = res.data.results
//         peopleArray.map(p => {
//           p.imageId = Math.floor((Math.random() * 100) / 1.15) // Create a number less than 90
//           axios.get(p.homeworld).then( res2 => {
//             p.homeDetails = res2.data
//             // p.home.terrain = res2.data.terrain
//             // p.home.climate = res2.data.climate
//             // p.home.pop = res2.data.pop
//           })
//           .catch(error => console.log(error))
//           .finally(() => setIsLoading(false))
//           return p
//         })
//         setPeople(peopleArray)
//         console.log('people', peopleArray)
//       })
//       .catch(error => console.log(error))
// 
//   },[])

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

// Stretch Goal: In addition to pagination, we’d also like the React developer to implement searching and filtering. 
// To search, the user should enter a character name (partial or complete) and have all matching results returned. 
// For filtration, the user should be able to select either the homeworld, film, or species of any character and see results. 
// Don’t forget to combine the search with filters.
// 
// Stretch Goal: Add an integration test for testing the modal opens with the correct person’s information.
