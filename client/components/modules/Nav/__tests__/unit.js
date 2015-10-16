import test from 'tape';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Nav from '../Nav.jsx';

const shallowRenderer = TestUtils.createRenderer();

test('Nav', assert => {
  assert.plan(4);

  let component;

  const navItems = [
    {title: 'Test Item 1', path: '/test-item-1'},
    {title: 'Test Item 2', path: '/test-item-2'},
  ];

  shallowRenderer.render(<Nav items={navItems} />);
  component = shallowRenderer.getRenderOutput();

  assert.equal(
    component.type,
    'ul',
    'Readers as a `ul` element'
  );

  assert.equal(
    component.props.children.length,
    navItems.length,
    'Renders a list of nav items as links'
  );

  const navItem1 = navItems[0];
  const navItem1Rendered = component.props.children[0].props.children.props;

  assert.equal(
    navItem1.title,
    navItem1Rendered.children,
    `Renders a nav item's text as the link text`
  );
  assert.equal(
    navItem1.path,
    navItem1Rendered.to,
    `Renders a nav item's path as the link location`
  );
});
