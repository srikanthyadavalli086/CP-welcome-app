import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onSubscribeButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState}))
  }

  render() {
    const {isSubscribed} = this.state
    const text = isSubscribed ? 'Subscribe' : 'Subscribed'

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thankyou! Happy Learning</p>
        <button
          onClick={this.onSubscribeButton}
          className="button"
          type="button"
        >
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome
