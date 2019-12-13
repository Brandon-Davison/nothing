const React = require('react')
const ms = require('pretty-ms')

class TimerTrigger extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
      }

      tick() {
        this.setState(prevState => ({
          seconds: prevState.seconds + 1
        }));
      }

      componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

      render() {

        return (
          <div>
            {/*Seconds: {this.state.seconds}*/}
            {survey}
          </div>
        );
      }
}

export default TimerTrigger;