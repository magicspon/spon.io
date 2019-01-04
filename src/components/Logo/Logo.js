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
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div>
      Hello Logo!
    </div>
  )
}

Logo.defaultProps = {}
Logo.propTypes = {}

export default Logo
