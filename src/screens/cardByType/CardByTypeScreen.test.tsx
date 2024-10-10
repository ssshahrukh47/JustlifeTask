import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import CardByTypeScreen from './CardByTypeScreen';
import useFetch from '../../hooks/useFetch';
import { goBack } from '../../core/navigation/NavigationServices';

// Mocking dependencies
jest.mock('../../hooks/useFetch');
jest.mock('../../core/navigation/NavigationServices', () => ({
    goBack: jest.fn(),
}));

describe('CardByTypeScreen', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('shows loading state', () => {
        useFetch.mockReturnValue({ data: null, isLoading: true, error: null });
        const { getByTestId } = render(<CardByTypeScreen route={{ params: { type: 'Type1' } }} />);
        expect(getByTestId('loader')).toBeTruthy();
    });

    it('shows error message', () => {
        useFetch.mockReturnValue({ data: null, isLoading: false, error: 'Network Error' });
        const { getByText } = render(<CardByTypeScreen route={{ params: { type: 'Type1' } }} />);
        expect(getByText(/error: network error/i)).toBeTruthy();
    });

    it('renders cards', async () => {
        useFetch.mockReturnValue({
            data: { 'Type1': [{ cardId: '1', name: 'Card 1' }, { cardId: '2', name: 'Card 2' }] },
            isLoading: false,
            error: null,
        });
        const { getByText } = render(<CardByTypeScreen route={{ params: { type: 'Type1' } }} />);
        await waitFor(() => {
            expect(getByText('Card 1')).toBeTruthy();
            expect(getByText('Card 2')).toBeTruthy();
        });
    });

    it('navigates back on back button press', async () => {
        useFetch.mockReturnValue({
            data: { 'Type1': [] },
            isLoading: false,
            error: null,
        });
        const { getByText } = render(<CardByTypeScreen route={{ params: { type: 'Type1' } }} />);
        await waitFor(() => expect(getByText('Back')).toBeTruthy());
        fireEvent.press(getByText('Back'));
        expect(goBack).toHaveBeenCalled();
    });

    it('renders empty state when no cards are available', async () => {
        useFetch.mockReturnValue({
            data: { 'Type1': [] },
            isLoading: false,
            error: null,
        });
        const { getByText } = render(<CardByTypeScreen route={{ params: { type: 'Type1' } }} />);
        await waitFor(() => {
            expect(getByText(/no data found/i)).toBeTruthy();
        });
    });
});
