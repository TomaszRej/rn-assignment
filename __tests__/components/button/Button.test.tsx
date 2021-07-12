import React from 'react';
import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import Button from '../../../src/components/button/Button';

import Title from '../../../src/components/title/Title';

describe('Button', () => {
  let component: RenderAPI;
  const title = 'testTitle';
  const onPress = jest.fn();

  beforeEach(() => {
    component = render(<Button title={title} onPress={onPress} />);
  });

  describe('Button snapshot', () => {
    it('should render correct button', () => {
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Button props', () => {
    it('should render with correct text', () => {
      const {getByText} = component;
      expect(getByText(title)).toBeTruthy();
    });

    it('should render with correct text', () => {
      const {getByText} = component;

      const button = getByText(title);
      fireEvent.press(button);
      expect(onPress).toBeCalled();
    });
  });
});
