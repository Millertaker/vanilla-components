import {Form} from './../../build/webcomponents';
import {TextInput} from './../../build/webcomponents';



((d) => {

  /*
  *
  * Form documentation
  */
  Form({
      'selector': 'form-component-js',
      'document': d
    }).init(function(e, data){
    alert('Form was submited');
    });

  TextInput({
      'selector': 'text-input-component-js',
      'document': d
    });

})(document)