const Input = (config) => {
  let element;
  let _document;

  const initElement = () => {
    config.element = element = config.document.querySelector(`.${config.selector}`);
  }

  const setupListeners = (cb) => {

  }

  const setupKeyUpListener =() => {

  }

  const init = (cb) => {
    _document = config.document;
    initElement();

    if(element.getAttribute('required') === 'true' && cb != undefined){
      setupListeners(cb);
    }
  };

  init();

  return {
    init
  };
}

export default Input;