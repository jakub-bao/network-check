import * as React from 'react'
import { OptionsObject, SnackbarKey, SnackbarMessage, withSnackbar} from "notistack";
import { ReactText } from "react";

interface Props{
  intervalMs: number,
  getData: (url:string)=>Promise<any>
}

class NetworkCheck extends React.Component<{
  enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;
  closeSnackbar: (key?: SnackbarKey) => void;
  intervalMs: number,
  getData: (url:string)=>Promise<any>
},{}>{
  constructor(props:any) {
    super(props);
    if (this.props.intervalMs) setInterval(this.checkNetwork, this.props.intervalMs);
  }
  isOfflineMessage:ReactText|null;
  checkNetwork = ()=>{
    this.props.getData('/me?fields=id').then(()=>{
        if (this.isOfflineMessage) {
          this.props.closeSnackbar(this.isOfflineMessage);
          this.isOfflineMessage = null;
          this.props.enqueueSnackbar(`You're back online`, {variant:'success'});
        }
      }).catch(()=>{
        if (!this.isOfflineMessage) this.isOfflineMessage = this.props.enqueueSnackbar(`You're now offline`, {variant:'error', persist: true});
      })
  }
  render(){
    return null;
  }
}

export default withSnackbar(NetworkCheck) as any as React.ElementType<Props>;
