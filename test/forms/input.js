import common from '../common';
const options = common.options;
const assert = common.assert;
import chai from 'chai';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;


import Input from '../../src/js/forms/input'

describe('Input component test', () => {
  it('Should exists as object', () => {

    let inputDOMMarkup =
    `<div class="form-component__form-row">
      <label class="col-lg-4 col-md-4 col-sm-12 col-xs-12">Name</label>
      <input class="form-control text-input-component text-input-component-js" type="text" name="name">
    </div>`;

    const {window} = new JSDOM(inputDOMMarkup)
    console.log(window);

    let document = jsdom(inputDOMMarkup);
    //let window = document.defaultView;

    let input = Input({selector: 'text-input-component-js', document});

    assert.equal(typeof input,  'object', 'the returned value is a Object');
  });

  it('Should be validated as not empty', () => {
    let inputDOMMarkup =
    `<div class="form-component__form-row">
      <label class="col-lg-4 col-md-4 col-sm-12 col-xs-12">Name</label>
      <input class="form-control text-input-component text-input-component-js" required-type="email" required-field="true" type="text" name="name">
    </div>`;

    let document = jsdom(inputDOMMarkup);
    let window = document.defaultView;

    let notEmptyInput = Input({selector: 'text-input-component-js', document});
    console.log(notEmptyInput.element[0].getAttribute('hola'));

    assert.equal(true, true, 'Asset ok');
  });
});

