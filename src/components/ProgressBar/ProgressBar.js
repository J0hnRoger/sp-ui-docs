import React, { PropTypes } from 'react'

class ProgressBar extends React.Component {
    getColor = (percent) => {
        if (this.props.percent === 100) return 'green'
        return this.props.percent > 50 ? 'lightgreen' : 'red'
    }

    getWidthAsPercentOfTotalWidth = () => {
        return parseInt(this.props.width * (this.props.percent / 100), 10)
    }

    render () {
        const {percent, width, height} = this.props
        return(
            <div style={{border: 'solid 1px lightgray', width}}>
                <div style={{
                    width: this.getWidthAsPercentOfTotalWidth(),
                    height,
                    backgroundColor: this.getColor(percent)
                }}></div>
            </div>
        )
    }
}

ProgressBar.propTypes = {
    /**
     * Percent of the progress  
     */
    percent: PropTypes.number.isRequired,

    /**
     * Bar width 
     */
    width: PropTypes.number.isRequired,

    /**
     * Bar height
     */
    height: PropTypes.number
}

ProgressBar.defaultProps = {
    height: 5
}

export default ProgressBar
