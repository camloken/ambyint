import React from 'react'
import moment from 'moment'

function Modal({ currentPerson, closeModal }) {
  const { name, created, gender, height, mass, films, birth_year, homeDetails, imageId } = currentPerson

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
          <div className='list-item'><b>Home World:</b> {homeDetails.name}</div>
          <div className='list-item'><b>Terrain:</b> {homeDetails.terrain}</div>
          <div className='list-item'><b>Climate:</b> {homeDetails.climate}</div>
          <div className='list-item'><b>Residents:</b> {homeDetails.residents.length}</div>
        </div>
      </div>
    </div>
  )
}
export default Modal

