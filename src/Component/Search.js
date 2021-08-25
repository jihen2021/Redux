import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../Actions/Actions'

function Search() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    return (
        <div>


<form onSubmit={
    (e)=>{dispatch(search(title))
    e.preventDefault();
   }}>
      <TextField id="standard-basic" label="Find Todo" onChange={
          (e)=>setTitle(e.target.value)}/>
      
    </form>
            
        </div>
    )
}

export default Search
