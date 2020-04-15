// Import dependencies
import * as React from 'react'

// Import interfaces
import { VisibilityFiltersInterface } from './../interfaces'

// TodoList component
const VisibilityFilters = (props: VisibilityFiltersInterface) => {
  return (
    <div className="visibility-filter">
        <span className="filter fitler-active" onClick={() => props.handleVisibilityFilter('all')}>all</span>
        <span className="filter" onClick={() => props.handleVisibilityFilter('open')}>open</span>
        <span className="filter" onClick={() => props.handleVisibilityFilter('done')}>done</span>
    </div>
  )
}
export default VisibilityFilters
