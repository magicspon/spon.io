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

const Heading = () => {
  return (
    <div>
      Hello Heading!
    </div>
  )
}

Heading.defaultProps = {}
Heading.propTypes = {}

export default Heading
