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

const Header = () => {
  return (
    <div>
      Hello Header!
    </div>
  )
}

Header.defaultProps = {}
Header.propTypes = {}

export default Header
