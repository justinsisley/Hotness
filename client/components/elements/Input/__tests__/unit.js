import test from 'tape';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Input from '../Input.jsx';

const shallowRenderer = TestUtils.createRenderer();

test('Input', assert => {
  assert.plan(2);

  let component;

  const placeholderText = 'test placeholder text';
  shallowRenderer.render(<Input placeholder={placeholderText} />);
  component = shallowRenderer.getRenderOutput();

  assert.equal(
    component.type,
    'input',
    'Renders as an `input` element'
  );

  assert.equal(
    component.props.placeholder,
    placeholderText,
    'Accepts standard `input` element attributes as properties'
  );
});
