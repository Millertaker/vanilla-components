
const setupFormElementEvents = (config, _document) => {
  let formSelector = `.${config.formSelector}`;
  let inputSelector = `${formSelector} .${config.inputSelector}`;
  let submitButton = `${formSelector} .${config.submitSelector}`;

  return {
    setupOnClickSubmit: (cb) => { _document.querySelector(submitButton).onclick = cb },
    setupOnKeyPress: (cb) => { _document.querySelector(inputSelector).onkeyup = cb },
    formSelector: _document.querySelector(formSelector)
  };
}

const configSearchBar = (config, _document) => {
  return Object.assign(
    {},
    setupFormElementEvents(config, _document)
  );
}


export {setupFormElementEvents , configSearchBar}


