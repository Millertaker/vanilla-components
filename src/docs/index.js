import {Form} from './../../build/webcomponents';
import {TextInput} from './../../build/webcomponents';
import {TagsInput} from './../../build/webcomponents';

((d) => {
  /*
  *
  * Form documentation
  */
  let myform = Form({ 'selector': 'form-component-js', 'document': d });
  myform.setupEventAjaxSubmit((e, response) => {console.log(e)} );

  /*
  *
  * Text input documentation
  */
  let TextInputElements = TextInput({
    'selector': 'text-input-component-js',
    'document': d
  });
  TextInputElements.setupKeyUpListener();

  /*
  *
  * Tags input documentation
  */
  let TagsInputElement = TagsInput({
    'selector': 'tags-input-component-js',
    'document': d
  });
  TagsInputElement.setupKeyUpListener();

})(document)