import React from 'react';
import { mount, shallow } from 'enzyme';

import Foo from '../Foo.jsx';

const setup = (props) => {
  return mount(<Foo {...props} />);
};

describe('<Foo/>', function () {
  it('renders', function () {
    const wrapper = setup({});
    expect(wrapper.exists()).toBe(true);
  });
});
