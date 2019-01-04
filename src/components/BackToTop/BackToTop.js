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
import styles from './BackToTop.module.css'

const BackToTop = () => {
  return (
    <div>
      Hello BackToTop!
    </div>
  )
}

BackToTop.defaultProps = {}
BackToTop.propTypes = {}

export default BackToTop
