import {Form} from './../../build/webcomponents';
import {TextInput} from './../../build/webcomponents';



((d) => {

  /*
  *
  * Form documentation
  */
  Form({ 'selector': 'form-component-js', 'document': d }).init()((e, response) => {console.log(e)} );
  TextInput({ 'selector': 'text-input-component-js', 'document': d });

})(document)