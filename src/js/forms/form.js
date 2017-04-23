
const Form = (config) => {
  let element, method, ajaxUrl, ajaxEnabled;

  const setupEventAjaxSubmit = (cb) => {
    element.onsubmit = (e) => {
      e.preventDefault();

      sendData()
        .then((response) => {
          cb(e, response);
        })
        .catch((response) => {
          console.log(response);
        });
    };
  };

  const sendData = () => {
    return new Promise ((resolve, reject) => {
      try{
        let request = new XMLHttpRequest();

        request.open(method, ajaxUrl);
        request.send();

        request.onload = (e) => {
          if (request.status >= 200 && request.status < 300) {
            resolve(request.response);
          } else {
            reject({
              status: request.status,
              statusText: response.statusText
            });
          }
        }
      } catch (error){
        reject({status: error.message});
      }
    });

  };

  const initElement = (selector) => {
    config.element = config.document.querySelector(`.${config.selector}`);

    config.element = element = config.element;
    config.ajaxUrl = ajaxUrl = config.ajaxUrl = element.getAttribute("ajax-url");
    config.method = method = config.method = element.getAttribute("method");
    config.ajaxEnabled = ajaxEnabled = config.ajaxEnabled = element.getAttribute("ajax-enabled");
  };

  const init = (cb) => {
    initElement(config.selector, config.document);

    if(ajaxEnabled === "true"){
      return setupEventAjaxSubmit
    }
  };

  return {
    init,
    config,
    element
  }
}

export default Form;


