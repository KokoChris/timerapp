var React = require('react');

var Clock = React.createClass({
    getDefaultProps: function () {
        return { totalSeconds: 0 };
    },
    formatSeconds(totalSeconds = 0) {
        var seconds = totalSeconds % 60;
        var minutes = Math.floor(totalSeconds / 60);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return minutes + ':' + seconds;
    },
    propTypes: {
        totalSeconds: React.PropTypes.number
    },
    render() {
        var { totalSeconds } = this.props;
        return (
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>)
    }
});

module.exports = Clock;