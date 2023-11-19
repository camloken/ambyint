import { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'

function Modal({ currentPerson, closeModal }) {
  const { name, created, gender, height, mass, films, birth_year, homeworld, imageId } = currentPerson
  const [homeDetails, setHomeDetails] = useState(false)

  function spinner() {
    return (
      <div className='spinner-wrapper small'>
        <svg class="spinner" viewBox="0 0 50 50">
          <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
      </div>
    )
  }

  useEffect(() => {
    axios.get(homeworld)
      .then(res => setHomeDetails(res.data))
      .catch(err => console.log(err))
  },[])

  return (
    <div className='modal-background'>
      <div className='modal'>
        <div className='close-btn' onClick={() => closeModal()}>X</div>
        <img src={`https://picsum.photos/id/${imageId}/200`} />
        <div className='modal-details'>
          <div className='modal-title'>{name}</div>
          <div className='list-item'><b>Gender:</b> {gender}</div>
          <div className='list-item'><b>Height:</b> {height / 100} m</div>
          <div className='list-item'><b>Weight:</b> {mass} kg</div>
          <div className='list-item'><b>Date Created:</b> {moment(created).format('ddd MM, yyyy')}</div>
          <div className='list-item'><b>Number of Films:</b> {films.length}</div>
          <div className='list-item'><b>Birth Year:</b> {birth_year}</div>
          <div className='list-item'><b>Home World:</b> {homeDetails?.name ? homeDetails.name : spinner()}</div>
          <div className='list-item'><b>Terrain:</b> {homeDetails?.terrain ? homeDetails.terrain : spinner()}</div>
          <div className='list-item'><b>Climate:</b> {homeDetails?.climate ? homeDetails.climate : spinner()}</div>
          <div className='list-item'><b>Residents:</b> {homeDetails?.residents ? homeDetails.residents.length : spinner()}</div>
        </div>
      </div>
    </div>
  )
}
export default Modal

