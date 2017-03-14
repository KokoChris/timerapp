var React = require('react');
var Clock = require('./Clock');

class Countdown extends React.Component {
    render() {
        return <Clock totalSeconds={129}/>
    }
}

module.exports = Countdown;