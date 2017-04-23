const Input = (config) => {
  'use strict';
  let element;
  let _document;

  console.log(config);
  console.log(this);

  const initElement = () => {
    let element = _document.querySelector(`.${config.selector}`);
    config.element = element;
  }

  const init = () => {
    _document = config.document;
    initElement();
  };

  init();

  return {
    init,
    config,
    element
  };
}

export default Input;