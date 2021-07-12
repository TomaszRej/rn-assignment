import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native';
import Title from '../../../src/components/title/Title';

describe('Title', () => {
  let component: RenderAPI;
  const text = 'testText';

  beforeEach(() => {
    component = render(<Title>{text}</Title>);
  });

  describe('Title snapshot', () => {
    it('should render correct snapshot for archivedListItem', () => {
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Title props', () => {
    it('should render with correct text', () => {
      const {getByText} = component;
      expect(getByText(text)).toBeTruthy();
    });
  });
});
