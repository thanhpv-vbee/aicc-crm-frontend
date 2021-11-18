import React from 'react';
import { shallow } from 'enzyme';

import Login from '@src/pages/Login';

describe('App component', () => {
  it('show the comment box component', () => {
    // Arrange
    const wrapped = shallow(<Login />);
    // Actions
    // Assert
    // Unmount
    wrapped.unmount;
  });
});
