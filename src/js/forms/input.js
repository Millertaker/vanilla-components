const Input = (config) => {
  let element;
  let _document;
  let errorBaseMessage = "Input Component error: ";
  let isFieldEmpty = true;
  let fieldCorrectFormat = false;
  let emptyFieldMessage;


  const initElement = () => {
    _document = config.document;
    config.element = element = _document.querySelectorAll(`.${config.selector}`);

    element.forEach((item, index) => {
      config[index] = {};
      config[index].isRequired = config[index].isRequired || {};
      config[index].datatype = config[index].datatype || {};
      config[index].isRequired = item.getAttribute('required-field');
      config[index].datatype = item.getAttribute('required-type');

      item.getAttribute('required-field') === "true" && validateEntry(item, index) ?
        item.setAttribute('required-result',  true) :
        item.setAttribute('required-result',  false);
    })
  }

  const setupKeyUpListener = (cb) => {
    element.forEach((item, i) => {
      item.onkeyup = (e) => {
        item.setAttribute('required-result',  validateEntry(item, i));
      }
    });

    cb ? cb() : null;
  }

  const validateEntry = (item, index) => {
    let result;
    let datatype = typeof index === 'number' ? config[index].datatype : null ;

    if(datatype == 'text'){
      return validateNonEmpty(item);
    }
    if(datatype == 'email'){
      return validateEmail(item);
    }

    return false;
  }

  const validateNonEmpty = (e) => {
    return e.value.length > 0;
  }

  const validateEmail = (e)=> {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(e.value);
  }

  const validateDate = () => {

  }

  const validatePassword = () => {

  }

  const validateNumber = () => {

  }

  initElement();

  return {
    setupKeyUpListener,
    errorBaseMessage,
    emptyFieldMessage,
    isFieldEmpty,
    fieldCorrectFormat,
    element
  };
}

export default Input;