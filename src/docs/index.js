import {Form} from './../../build/webcomponents';
import {TextInput} from './../../build/webcomponents';
import {TagsInput} from './../../build/webcomponents';
import {DataGenerator} from './../../build/webcomponents';

document.DataGenerator =  DataGenerator.getInstance();

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
    'document': d,
    'onKeyup': (e) => {
      console.log('key up!!', e);
    }
  });


  /*
  *
  * Tags input documentation
  */
  let TagsInputElement = TagsInput({
    'selector': 'tags-input-component-js',
    'document': d
  });
  TagsInputElement.onKeyup((e) => {

  });

})(document)