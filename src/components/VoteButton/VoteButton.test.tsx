import React from 'react';
import {Image} from 'react-native';
import {act, render, fireEvent} from '@testing-library/react-native';

import VoteButton from './VoteButton';

describe('VoteButton', () => {
  it('renders a vote button with heart icon', () => {
    const callback = jest.fn();

    const tree = render(<VoteButton variant={'heart'} onPress={callback} />);
    expect(tree).toMatchSnapshot();
  });

  it('fires click event for a hear button', async () => {
    const callback = jest.fn();

    const {getByTestId} = render(
      <VoteButton variant="heart" onPress={callback} />,
    );

    expect(callback).toBeCalledTimes(0);
    await act(() => fireEvent.press(getByTestId('vote-button')));
    expect(callback).toBeCalledTimes(1);
  });
});
