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

const WorkItem = () => {
  return (
    <div>
      Hello WorkItem!
    </div>
  )
}

WorkItem.defaultProps = {}
WorkItem.propTypes = {}

export default WorkItem
