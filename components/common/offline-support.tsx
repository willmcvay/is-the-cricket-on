import { PureComponent } from 'react'

class OfflineSupport extends PureComponent {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => console.log('SERVICE WORKER REGISTERED'))
        .catch(err => console.dir(err))
    }
  }

  render() {
    return null
  }
}

export default OfflineSupport
