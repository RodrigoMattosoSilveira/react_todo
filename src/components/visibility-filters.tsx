// Import dependencies
import * as React from 'react';

import { VISIBILITY_TYPES } from '../reference/visibility-types';

// Import interfaces
import { VisibilityFiltersInterface } from './../interfaces'

function computeClassNames (myVisibilityFilter: string, propVisibilityFilter: string ): string {
    console.log('test');
    let classNames = 'filter';
    if (myVisibilityFilter === propVisibilityFilter) {
        classNames += ', filter-active';
    }
    return classNames;
}

// TodoList component
const VisibilityFilters = (props: VisibilityFiltersInterface) => {
  return (
    <div className="visibility-filter">
        <span className={computeClassNames(VISIBILITY_TYPES.ALL, props.visibilityFilter)} onClick={() => props.handleVisibilityFilter(VISIBILITY_TYPES.ALL)}>{VISIBILITY_TYPES.ALL}</span>
        <span className={computeClassNames(VISIBILITY_TYPES.OPEN, props.visibilityFilter)} onClick={() => props.handleVisibilityFilter(VISIBILITY_TYPES.OPEN)}>{VISIBILITY_TYPES.OPEN}</span>
        <span className={computeClassNames(VISIBILITY_TYPES.DONE, props.visibilityFilter)} onClick={() => props.handleVisibilityFilter(VISIBILITY_TYPES.DONE)}>{VISIBILITY_TYPES.DONE}</span>
    </div>
  )
}
export default VisibilityFilters
