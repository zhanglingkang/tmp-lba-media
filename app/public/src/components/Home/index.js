var React = require('react')
var ReactDOM = require('react-dom')
class Home extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    static defaultProps = {}
    state = {}

    render() {
        return (
            <div>我是home</div>
        )
    }


}
module.exports = Home