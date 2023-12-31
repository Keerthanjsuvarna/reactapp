import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({books,deleteBook}) => {
  return books.map(book=>( <tr key={book.id}>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.author}</td>
    <td>{book.amount}</td>
    <td className='delete-btn'onClick={()=>deleteBook(book.id)} >
        <Icon icon={trash}/>
    </td>
  </tr>))
}

export default View
