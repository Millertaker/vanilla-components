import common from '../common';
const options = common.options;
const assert = common.assert;
import chai from 'chai';
import {JSDOM} from 'jsdom';
import * as htmlMocks from '../mocks/html';

import Input from '../../src/js/forms/input';
import DataGenerator from '../../src/js/globals/common';

describe('Input component test', () => {
  it('Should exists as object', () => {

    let inputDOMMarkup = htmlMocks.textInput;
    const dom = new JSDOM(`<!DOCTYPE html><body>${inputDOMMarkup}</body>`);

    dom.window.document.DataGenerator = DataGenerator.getInstance();
    let input = Input({selector: 'text-input-component-js', document: dom.window.document});

    assert.equal(typeof input,  'object', 'the returned value is a Object');
  });

  it('Should be validated as email', () => {
    let inputDOMMarkup = htmlMocks.textEmailInput

    const dom = new JSDOM(`<!DOCTYPE html><body>${inputDOMMarkup}</body>`);
    dom.window.document.DataGenerator = DataGenerator.getInstance();

    //setting some content on input field
    dom.window.document.querySelector('.text-input-component-js').value = 'millerigac@hotmail.com';

    let emailInput = Input({selector: 'text-input-component-js', document: dom.window.document});

    assert.equal(emailInput.element[0].getAttribute('required-result'), 'true', 'The content has setted as email');
  });

  it('Should be validated as not email', () => {
    let inputDOMMarkup = htmlMocks.nonEmtyInput;


    const dom = new JSDOM(`<!DOCTYPE html><body>${inputDOMMarkup}</body>`);
    dom.window.document.DataGenerator = DataGenerator.getInstance();

    //setting some content on input field
    dom.window.document.querySelector('.text-input-component-js').value = 'im a cat';

    let notEmailInput = Input({selector: 'text-input-component-js', document: dom.window.document});

    assert.equal(notEmailInput.element[0].getAttribute('required-result'), 'false', 'The content has setted as email');
  });

  it('Should have a keyup event set', () => {
    let inputDOMMarkup = htmlMocks.setUpKeyEventInput;

    const dom = new JSDOM(`<!DOCTYPE html><body>${inputDOMMarkup}</body>`);
    dom.window.document.DataGenerator = DataGenerator.getInstance();
    let document = dom.window.document;

    let input = Input({
      selector: 'text-input-component-js',
      document,
      onKeyup: (e) => {}
    });

    assert.isFunction(document.querySelector('.text-input-component-js').onkeyup, 'The key up event is handled');
  });
});

