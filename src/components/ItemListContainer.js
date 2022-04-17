import React from 'react';

const ItemListContainer = (props) => {
  return (
    <>
        <h1>¡Hola {props.name}!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra nunc sit amet risus sodales, facilisis porta dolor finibus. Pellentesque convallis id orci ac mattis. Fusce fermentum dui in neque vestibulum, quis mattis orci auctor. Morbi semper dolor sapien, quis iaculis libero tempus a. Quisque at sapien dolor. Curabitur vitae laoreet tortor. Morbi et est placerat, finibus turpis et, sollicitudin risus. Aenean fermentum rhoncus est vel ultricies. Aenean vel augue lobortis augue dignissim bibendum id quis massa. Fusce fringilla tempus viverra.</p>
    </>
  )
}

export default ItemListContainer;