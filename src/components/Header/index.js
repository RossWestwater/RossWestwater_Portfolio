import React from 'react';
import Nav from '../Navigation';


function Header(props) {
  return (
    <header>
      <h1>Ross Westwater</h1>
      <Nav page={props.page} changePage={props.changePage}/>
    </header>
  )
}

export default Header