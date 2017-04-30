import common from '../common';
const options = common.options;
const assert = common.assert;
import chai from 'chai';
import {JSDOM} from 'jsdom';


import Input from '../../src/js/forms/input'

describe('Input component test', () => {
  it('Should exists as object', () => {

    let inputDOMMarkup =
    `<div class="form-component__form-row">
      <label class="col-lg-4 col-md-4 col-sm-12 col-xs-12">Name</label>
      <input class="form-control text-input-component text-input-component-js" type="text" name="name">
    </div>`;

    const dom = new JSDOM(`<!DOCTYPE html><body>${inputDOMMarkup}</body>`);
    let input = Input({selector: 'text-input-component-js', document: dom.window.document});

    assert.equal(typeof input,  'object', 'the returned value is a Object');
  });

  it('Should be validated as email', () => {
    let inputDOMMarkup =
    `<html><body><div class="form-component__form-row">
      <label class="col-lg-4 col-md-4 col-sm-12 col-xs-12">Name</label>
      <input class="form-control text-input-component text-input-component-js" required-type="email" required-field="true" type="text" name="name">
    </div></body></html>`;

    const dom = new JSDOM(`<!DOCTYPE html><body>${inputDOMMarkup}</body>`);

    //setting some content on input field
    dom.window.document.querySelector('.text-input-component-js').value = 'millerigac@hotmail.com';

    let notEmptyInput = Input({selector: 'text-input-component-js', document: dom.window.document});

    assert.equal(notEmptyInput.element[0].getAttribute('required-result'), 'true', 'The content has setted as email');
  });

  it('Should be validated as not email', () => {
    let inputDOMMarkup =
    `<html><body><div class="form-component__form-row">
      <label class="col-lg-4 col-md-4 col-sm-12 col-xs-12">Name</label>
      <input class="form-control text-input-component text-input-component-js" required-type="email" required-field="true" type="text" name="name">
    </div></body></html>`;

    const dom = new JSDOM(`<!DOCTYPE html><body>${inputDOMMarkup}</body>`);

    //setting some content on input field
    dom.window.document.querySelector('.text-input-component-js').value = 'im a cat';

    let notEmptyInput = Input({selector: 'text-input-component-js', document: dom.window.document});

    assert.equal(notEmptyInput.element[0].getAttribute('required-result'), 'false', 'The content has setted as email');
  });
});

