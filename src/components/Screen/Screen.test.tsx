import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {render} from '@testing-library/react-native';

import Screen from './Screen';

describe('Screen', () => {
  it('renders a regular screen', () => {
    const tree = render(
      <SafeAreaProvider>
        <Screen>
          <View />
        </Screen>
      </SafeAreaProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
