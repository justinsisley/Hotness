import test from 'tape';
import React from 'react/addons';
import Button from '../Button.jsx';

const TestUtils = React.addons.TestUtils;
const shallowRenderer = TestUtils.createRenderer();

test('Button', assert => {
  assert.plan(3);

  let component;

  const buttonText = 'test button text';
  const buttonName = 'test name attribute';

  shallowRenderer.render(
    <Button name={buttonName}>{buttonText}</Button>
  );
  component = shallowRenderer.getRenderOutput();

  assert.equal(
    component.type,
    'button',
    'Renders as a `button` element'
  );

  assert.equal(
    component._store.props.children,
    buttonText,
    'Renders button text'
  );

  assert.equal(
    component._store.props.name,
    buttonName,
    'Accepts standard `button` element attributes as properties'
  );
});
