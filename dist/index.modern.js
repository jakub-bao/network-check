import { Component } from 'react';
import { withSnackbar } from 'notistack';

class NetworkCheck extends Component {
  constructor(props) {
    super(props);

    this.checkNetwork = () => {
      this.props.getData('/me?fields=id').then(() => {
        if (this.isOfflineMessage) {
          this.props.closeSnackbar(this.isOfflineMessage);
          this.isOfflineMessage = null;
          this.props.enqueueSnackbar(`You're back online`, {
            variant: 'success'
          });
        }
      }).catch(() => {
        if (!this.isOfflineMessage) this.isOfflineMessage = this.props.enqueueSnackbar(`You're now offline`, {
          variant: 'error',
          persist: true
        });
      });
    };

    if (this.props.intervalMs) setInterval(this.checkNetwork, this.props.intervalMs);
  }

  render() {
    return null;
  }

}

var index = withSnackbar(NetworkCheck);

export default index;
//# sourceMappingURL=index.modern.js.map
