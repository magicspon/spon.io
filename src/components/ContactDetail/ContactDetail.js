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
import styles from './ContactDetail.module.css'

const ContactDetail = () => {
  return (
    <div>
      Hello ContactDetail!
    </div>
  )
}

ContactDetail.defaultProps = {}
ContactDetail.propTypes = {}

export default ContactDetail
