import React from 'react'
import './Search.css'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';


export default function Search(props) {
  return (
    <div className={props.blur?'grid-container':'grid-container'+" "+'blur-background'}>
        <SearchTwoToneIcon className='searchicon'></SearchTwoToneIcon>
        <input placeholder='Search' onChange={props.change} value={props.search} type="text" />
    </div>
  )
}
