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


    element.forEach( (item, index) => {
      config.isRequired = config.isRequired || {};
      config.datatype = config.datatype || {};
      config.isRequired[index] = item.getAttribute('required-field');
      config.datatype[index] = datatype = item.getAttribute('required-type');
    })

    console.log(config);
  }

  const setupKeyUpListener = (cb) => {
    console.log(element);

    element.onkeyup = (e) => {

      //validate entries
      validateEntry()
    }
  }

  const validateEntry = () => {
    let result = true;

    if(datatype == 'text')
      result = result && validateNonEmpty();
    if(datatype == 'email')
      result = result && validateEmail();

    console.log(result);
  }

  const validateNonEmpty = () => {
    return element.value.length > 0;
  }

  const validateEmail = ()=> {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(element.value);
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
    fieldCorrectFormat
  };
}

export default Input;