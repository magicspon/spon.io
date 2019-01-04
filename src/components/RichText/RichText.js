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
import styles from './RichText.module.css'

const RichText = () => {
  return (
    <div>
      Hello RichText!
    </div>
  )
}

RichText.defaultProps = {}
RichText.propTypes = {}

export default RichText
