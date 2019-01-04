import React from 'react'
import { 
  array, 
  object,  
  bool,  
  func,  
  number,  
  string,  
  symbol,  
  node,  
  element,
  shape
} from 'prop-types'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <div>
      Hello Nav!
    </div>
  )
}

Nav.defaultProps = {}
Nav.propTypes = {}

export default Nav
