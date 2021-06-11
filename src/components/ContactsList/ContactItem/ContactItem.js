import React from 'react'

const ContactItem = ({ contacts, onDeleteClick  }) => (
  contacts.map(({id,name, number}) => {
      return (
        <li key={id}>{name}:{number}
          <button onClick={()=>onDeleteClick(id)} type='button'>Delete</button>
        </li>

      )
    })
    
)

export default ContactItem;