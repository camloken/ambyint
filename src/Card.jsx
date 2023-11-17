import React from 'react' // Import Suspense?
import PropTypes from "prop-types";

function Card({ person, openModal }) {
  const { name, gender, height, imageId, url } = person
  console.log(imageId)
  return (
    <div className='card' onClick={() => openModal(name)}>
      <img src={`https://picsum.photos/id/${imageId}/200`} />
      <div className='list-item'><b>Name:</b> {name}</div>
      <div className='list-item'><b>Gender:</b> {gender}</div>
      <div className='list-item'><b>Height:</b> {height} cm</div>
    </div>
  )
}

 Card.propTypes = {
   name: PropTypes.string
 }


export default Card