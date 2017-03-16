var React = require('react');
var Clock = require('./Clock');
var Controls = require('./Controls');
var CountdownForm = require('./CountdownForm');

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            timerStatus: 'stopped'
        };
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({ count: 0 });
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    }
    startTimer() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            let newCount = this.state.count + 1;
            this.setState({ count: newCount })
        }, 1000)
    }
    handleStatusChange(newStatus) {
        this.setState({ timerStatus: newStatus })
    }
    render() {
        var { count, timerStatus } = this.state;
        var renderControlArea = () => {
            return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
        };
        return (
            <div>
                <Clock totalSeconds={count} />
                {renderControlArea()}
            </div>
        )
    }
}

module.exports = Timer;