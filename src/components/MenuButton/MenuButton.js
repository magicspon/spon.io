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
import styles from './MenuButton.module.css'

const MenuButton = () => {
  return (
    <div>
      Hello MenuButton!
    </div>
  )
}

MenuButton.defaultProps = {}
MenuButton.propTypes = {}

export default MenuButton
