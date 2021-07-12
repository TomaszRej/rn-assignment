import React from 'react';
import {render} from '@testing-library/react-native';
import ListOfItems from '../../../src/components/ListOfItems/ListOfItems';

describe('ListOfItems', () => {
  const testItems = ['test-1', 'test-2', 'test-3'];

  describe('ListOfItems props', () => {
    it('should render correct number of elements in list', () => {
      const {getByText} = render(<ListOfItems items={testItems} />);

      expect.assertions(testItems.length);

      testItems.forEach((item, index) => {
        expect(getByText(`${index + 1}. ${item}`)).toBeTruthy();
      });
    });
  });
});
