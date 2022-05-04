import React from 'react';

function Nav(props) {
  const clickHandler = (e) => {
    props.changePage(e.target.getAttribute('name'))
  }


  return (
  <nav>
    <ul className='flex-row'>
      <li style={props.page === 'about' ? {background: "rgb(132, 169, 192)", borderTopRightRadius:'15px', borderTopLeftRadius:'15px' }: {}} name='about' onClick={clickHandler}>About me</li>
      <li style={props.page === 'portfolio' ? {background: "rgb(132, 169, 192)", borderTopRightRadius:'15px', borderTopLeftRadius:'15px'}: {}} name='portfolio' onClick={clickHandler}>Portfolio</li>
      <li style={props.page === 'contact' ? {background: "rgb(132, 169, 192)", borderTopRightRadius:'15px', borderTopLeftRadius:'15px'}: {}} name='contact' onClick={clickHandler}>Contact</li>
      <li style={props.page === 'resume' ? {background: "rgb(132, 169, 192)", borderTopRightRadius:'15px', borderTopLeftRadius:'15px'}: {}} name='resume' onClick={clickHandler}>Resume</li>
    </ul>
  </nav>
)}

export default Nav