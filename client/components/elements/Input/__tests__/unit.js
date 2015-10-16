import test from 'tape';
import React from 'react/addons';
import Input from '../Input.jsx';

const TestUtils = React.addons.TestUtils;
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
    component._store.props.placeholder,
    placeholderText,
    'Accepts standard `input` element attributes as properties'
  );
});
