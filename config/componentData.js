module.exports = /* eslint-disable */ [{"name":"A5Hello","description":"Display an Hello - Very usefull!","props":{"message":{"type":{"name":"string"},"required":true,"description":"Message to display","defaultValue":{"value":"'A5Sys'","computed":false}}},"code":"import React, {PropTypes} from 'react'\r\n\r\n/**\r\n * Display an Hello - Very usefull!\r\n */\r\nconst A5Hello = ({ message }) => { \r\n\r\n  return (\r\n    <div className='a5-hello'>\r\n         <h3>Hello {message}</h3>\r\n    </div>\r\n  )\r\n}\r\n\r\nA5Hello.propTypes = {\r\n  /**\r\n   * Message to display\r\n   */\r\n    message: PropTypes.string.isRequired\r\n}\r\n\r\nA5Hello.defaultProps = { \r\n  message: 'A5Sys'\r\n}\r\nexport default A5Hello\r\n","examples":[{"name":"Example1","description":"","code":"import React from 'react'\r\nimport A5Hello from 'ps-react/A5Hello'\r\n\r\nexport default function Example1 () {\r\n    return <A5Hello message=\"Test\"/>\r\n}\r\n"}]},{"name":"EyeIcon","description":"SVG Eye Icon","code":"import React from 'react'\r\n\r\n/** SVG Eye Icon */\r\nfunction EyeIcon() {\r\n  // Attribution: Fabián Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg\r\n  return (\r\n    <svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\r\n      <g transform=\"matrix(.02146 0 0 .02146 1 1)\" fill=\"#4d4d4d\">\r\n        <path d=\"m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1\" />\r\n        <circle cx=\"466.08\" cy=\"466.02\" r=\"134.5\" />\r\n      </g>\r\n    </svg>\r\n  )\r\n}\r\n\r\nexport default EyeIcon\r\n","examples":[{"name":"Example","description":"EyeIcon icon","code":"import React from 'react'\r\nimport EyeIcon from 'ps-react/EyeIcon'\r\n\r\n/**\r\n* EyeIcon icon\r\n*/\r\nexport default function Example () {\r\n    return <EyeIcon />\r\n}"}]},{"name":"Label","description":"Display a label with the standard markup of the company","props":{"label":{"type":{"name":"string"},"required":false,"description":"Label Text"},"required":{"type":{"name":"bool"},"required":false,"description":"Display asterisk after the label if true"},"htmlFor":{"type":{"name":"string"},"required":true,"description":"HTML ID for associated input"}},"code":"import React from 'react'\r\nimport PropTypes from 'prop-types'\r\n\r\n/**\r\n * Display a label with the standard markup of the company \r\n */\r\nfunction Label ({htmlFor, label, required})  {\r\n    return (\r\n        <label>\r\n            {label} {required && <span style={{color: 'red'}}>*</span> }\r\n        </label>\r\n        )\r\n}\r\n    \r\nLabel.propTypes = {\r\n\r\n    /**\r\n     * Label Text\r\n     */\r\n    label: PropTypes.string.required,\r\n    \r\n    /**\r\n     * Display asterisk after the label if true\r\n     */\r\n    required: PropTypes.bool,\r\n\r\n    /**\r\n     * HTML ID for associated input\r\n     */\r\n    htmlFor: PropTypes.string.isRequired\r\n}            \r\n\r\nexport default Label\r\n    ","examples":[{"name":"Example","description":"Label for required field","code":"import React from 'react'\r\nimport Label from 'ps-react/Label'\r\n\r\n/**\r\n* Label for required field \r\n*/\r\nexport default function Example () {\r\n    return <Label htmlFor=\"test\" label=\"test\" required />\r\n}"}]},{"name":"ProgressBar","description":"","props":{"percent":{"type":{"name":"number"},"required":true,"description":"Percent of the progress"},"width":{"type":{"name":"number"},"required":true,"description":"Bar width"},"height":{"type":{"name":"number"},"required":false,"description":"Bar height","defaultValue":{"value":"5","computed":false}}},"code":"import React, { PropTypes } from 'react'\r\n\r\nclass ProgressBar extends React.Component {\r\n    getColor = (percent) => {\r\n        if (this.props.percent === 100) return 'green'\r\n        return this.props.percent > 50 ? 'lightgreen' : 'red'\r\n    }\r\n\r\n    getWidthAsPercentOfTotalWidth = () => {\r\n        return parseInt(this.props.width * (this.props.percent / 100), 10)\r\n    }\r\n\r\n    render () {\r\n        const {percent, width, height} = this.props\r\n        return(\r\n            <div style={{border: 'solid 1px lightgray', width}}>\r\n                <div style={{\r\n                    width: this.getWidthAsPercentOfTotalWidth(),\r\n                    height,\r\n                    backgroundColor: this.getColor(percent)\r\n                }}></div>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nProgressBar.propTypes = {\r\n    /**\r\n     * Percent of the progress  \r\n     */\r\n    percent: PropTypes.number.isRequired,\r\n\r\n    /**\r\n     * Bar width \r\n     */\r\n    width: PropTypes.number.isRequired,\r\n\r\n    /**\r\n     * Bar height\r\n     */\r\n    height: PropTypes.number\r\n}\r\n\r\nProgressBar.defaultProps = {\r\n    height: 5\r\n}\r\n\r\nexport default ProgressBar\r\n","examples":[{"name":"Example100percent","description":"100% progress & height set at 40px","code":"import React from 'react'\r\nimport ProgressBar from 'ps-react/ProgressBar'\r\n\r\n/**\r\n* 100% progress & height set at 40px\r\n*/\r\nexport default function Example () {\r\n    return <ProgressBar percent={100} width={250} height={40}/>\r\n}"},{"name":"Example10Percent","description":"10% progress","code":"import React from 'react'\r\nimport ProgressBar from 'ps-react/ProgressBar'\r\n\r\n/**\r\n * 10% progress\r\n */\r\nexport default function Example () {\r\n    return <ProgressBar percent={10} width={250} />\r\n}\r\n"},{"name":"Example70percent","description":"70% progress","code":"import React from 'react'\r\nimport ProgressBar from 'ps-react/ProgressBar'\r\n\r\n/**\r\n* 70% progress\r\n*/\r\nexport default function Example () {\r\n    return <ProgressBar percent={70} width={250}/>\r\n}"}]}]