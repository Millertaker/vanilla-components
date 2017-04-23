import {Form} from './../../build/webcomponents';
import {TextInput} from './../../build/webcomponents';



((d) => {

  /*
  *
  * Form documentation
  */
  let myform = Form({ 'selector': 'form-component-js', 'document': d });
  myform.init();
  myform.setupEventAjaxSubmit((e, response) => {console.log(e)} );

  let myFormNameField = TextInput({ 'selector': 'text-input-component-js', 'document': d });

})(document)