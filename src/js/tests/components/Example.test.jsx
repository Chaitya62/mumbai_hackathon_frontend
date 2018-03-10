import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils'
import $ from 'jquery/dist/jquery.min.js';

import Example from 'Components/Example';

describe('Example', () => {
  it('should exits', () => {
    expect(Example).toExist();
  });

});
