import React,{useState,useEffect} from 'react'
import View from './component/View';

const getDatafromLS=()=>{
   const data=sessionStorage.getItem('books');
   if(data){
    return JSON.parse(data);
     
   }
   else{
    return[]
   }

}
export const App = () => {

  const [books, setbooks]=useState([]);
  const [id,setID]=useState('');
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const [amount,setAmount]=useState('');

  const handleAddBookSubmit=(e)=>{
    e.preventDefault();

    let book={
      id,
      title,
      author,
      amount
    }
    setbooks([...books,book]);
    setID('');
    setTitle('');
    setAuthor('');
    setAmount('');

  }
const deleteBook=(id)=> {
  const filterBooks=books.filter((element,index)=>{
    return element.id !==id
  })
  setbooks(filterBooks)
}

  useEffect(()=> {
      sessionStorage.setItem('books',JSON.stringify(books));
  },[books])
  return (
    
    <div className='wrapper'> 
      <h1 id='lib'>BOOK LIBRARY <hr /></h1>
      <h4 id='hide'> book <table></table></h4>
      <div className="main">
        <div className="form-container">
          <form autoComplete='off' className='form-group'onSubmit={handleAddBookSubmit} action="">
          <label htmlFor="">ID </label>
            <input type='number' className='form-control' required onChange={(e)=>setID(e.target.value)} value={id} /> 
            <br />
            <label htmlFor="">Title </label>
            <input type="text" className='form-control' required onChange={(e)=>setTitle(e.target.value)} value={title} /> 
            <br />
            <label htmlFor="">Author </label>
            <input type="text" className='form-control' required onChange={(e)=>setAuthor(e.target.value)} value={author} /> 
            <br />
            <label htmlFor="">Amount </label>
            <input type='number' className='form-control' required onChange={(e)=>setAmount(e.target.value)} value={amount} /> 
            <br />
            <button type='submit' className='btn btn-success btm-md' > Add</button>
          </form>
        </div>
        <div className="view-container">
          {books.length>0 && <>
            <div className="table-responsive">
              <table className='table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Amount</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View books={books} deleteBook={deleteBook }/>
                </tbody>
              </table>
            </div>
          
          </> }
          {books.length<1 && <div>no books yet</div>}
        </div>
      </div>
    </div>
  )
}

export default App
