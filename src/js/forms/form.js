
const Form = (selector, doc) => {
  let formSelector;
  let _document = doc;
  let ajaxUrl;
  let method;

  const setupEventAjaxSubmit = (cb) => {
    formSelector.onsubmit = (e) => {
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

  const initForm = (selector) => {
    formSelector = _document.querySelector(`.${selector}`);
    ajaxUrl = formSelector.getAttribute("ajax-url");
    method = formSelector.getAttribute("method");
  };

  const init = (cb) => {
    initForm(selector, _document);

    if(formSelector.getAttribute("ajax-enabled") === "true"){
      setupEventAjaxSubmit(cb)
    }
  };

  return {
    init,
    formSelector
  }
}

export default Form;


