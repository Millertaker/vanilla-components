import {Form} from './../../build/webcomponents';

((_document) => {

  Form('example-form-component-js', _document).init(function(e, data){
    console.log(data);
  });

})(document)