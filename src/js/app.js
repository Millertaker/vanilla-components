import * as Forms from './components/forms/form';

let WebComponents = () => {
  console.log('le init');
  let components = {}

  let init = () => {
    components.Forms = Forms;
  }

  return {
    components,
    init
  }
};


export default WebComponents;

