import React from 'react'
import PropTypes from 'prop-types'

const TravisRow = ({ props }) => {
  return (
    <li className='travis-row'>
        <a href="#">
            <div className="travis-row__first-block">Kanban</div>
        </a>
    </li>
  )
}

TravisRow.propTypes = {
  props: PropTypes.array.isRequired
}

export default TravisRow
