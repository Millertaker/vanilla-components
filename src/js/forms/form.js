
const Form = (selector, doc) => {
  let element;
  let _document;
  let ajaxUrl;
  let method;

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

  const initForm = (selector) => {
    element = _document.querySelector(`.${selector}`);
    ajaxUrl = element.getAttribute("ajax-url");
    method = element.getAttribute("method");
  };

  const init = (cb) => {
    _document = doc;
    initForm(selector, _document);

    if(element.getAttribute("ajax-enabled") === "true"){
      setupEventAjaxSubmit(cb)
    }
  };

  return {
    init,
    element
  }
}

export default Form;


