import React from 'react'

const Helmart = (props) => {
  document.title = 'Rent Car Service -' + props.tiitle
  return (
    <div className='w-100'>
      {props.children}
    </div>
  )
}

export default Helmart
