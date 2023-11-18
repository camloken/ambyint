import React from 'react' // Import Suspense?

function Card({ person, openModal }) {
  const { name, gender, height, imageId } = person

  return (
    <div className='card' onClick={() => openModal(name)}>
      <img src={`https://picsum.photos/id/${imageId}/200`} />
      <div className='list-item'><b>Name:</b> {name}</div>
      <div className='list-item'><b>Gender:</b> {gender}</div>
      <div className='list-item'><b>Height:</b> {height} cm</div>
    </div>
  )
}

export default Card