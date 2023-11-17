import React from 'react' // Import Suspense?
import PropTypes from "prop-types";
import moment from 'moment'

function Modal({ currentPerson, closeModal }) {
  const { name, gender, height, url, imageId } = currentPerson
  const randomId = Math.round((Math.random() * 100) / 1.15) // it seems like there are less than 100 photos
  console.log(randomId)
  return (
    <div className='modal-background'>
      <div className='modal'>
        <div className='close-btn' onClick={() => closeModal()}>X</div>
        <img src={`https://picsum.photos/id/${imageId}/200`} />
        <div className='modal-details'>
          <div className='list-item'><b>Name:</b> {name} as Header</div>
          <div className='list-item'><b>Gender:</b> {gender}</div>
          <div className='list-item'><b>Height:</b> {height / 1000} in meters</div>
          <div className='list-item'>weight convert to Kilo</div>
          <div className='list-item'> date added to api dd-MM-yyyy</div>
          <div className='list-item'>number of films</div>
          <div className='list-item'>birth year</div>
          <div className='list-item'>Fetch Homeworld: name, terrain, climate, and number of residents</div>
        </div>
      </div>
    </div>
  )
}
export default Modal

