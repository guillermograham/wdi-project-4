/* global describe it */

// coverage - then show index.html in browser to see test status (put coverage in .gitignore)

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DecksForm from '../../../src/components/decks/DecksForm';

describe('DecksForm tests', () => {
  it('should render one input field and one select', done => {

    // copy state of the classical component and paste it in for a template:
    const props = {
      deck: {
        name: '',
        language: '',
        cards: []
      },
      newCard: {
        question: '',
        answer: ''
      },
      errors: {}
    };

    // using the spread operator means we do not have to write out each of the props (eg. title="", image="" etc)
    const wrapper = shallow(<DecksForm {...props} />);

    // ('.input' for a class of input)
    expect(wrapper.find('input').length).to.equal(1);
    // expecting to find one select
    expect(wrapper.find('select').length).to.equal(1);

    // done() to move on to next tests (if there are any)
    done();
  });




  it('should populate the form with prop values', done => {
    const props = {
      deck: {
        name: 'name',
        language: 'language',
        cards: []
      },
      newCard: {
        question: '',
        answer: ''
      },
      errors: {}
    };

    const wrapper = shallow(<DecksForm {...props} />);

    // there should only be one element with the value attribute of title
    expect(wrapper.find({ value: 'name'}).length).to.equal(1);
    expect(wrapper.find({ value: 'language'}).length).to.equal(1);

    done();
  });




  it('should correctly display errors', done => {
    const props = {
      deck: {
        name: '',
        language: '',
        cards: []
      },
      newCard: {
        question: '',
        answer: ''
      },
      errors: {
        name: 'Please provide a name',
        language: 'Please state the language'
      }
    };

    const wrapper = shallow(<DecksForm {...props} />);
    expect(wrapper.find('.error').length).to.equal(2);

    done();
  });
});
