import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CardList from './CardList';

describe('CardList', () => {
    it('renders title and card count', () => {
        const { getByText } = render(<CardList title="Card Type 1" cardCount={5} />);
        expect(getByText('Card Type 1')).toBeTruthy();
        expect(getByText('5 cards')).toBeTruthy();
    });

    it('calls onPress when pressed', () => {
        const mockOnPress = jest.fn();
        const { getByTestId } = render(<CardList title="Card Type 1" onPress={mockOnPress} />);
        fireEvent.press(getByTestId('card-list'));
        expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('renders without card count', () => {
        const { getByText } = render(<CardList title="Card Type 1" />);
        expect(getByText('Card Type 1')).toBeTruthy();
        expect(() => getByText('cards')).toThrow(); // No card count should be displayed
    });
});
