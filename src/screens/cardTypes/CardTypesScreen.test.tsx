import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CardTypesScreen from './CardTypesScreen';
import useFetch from '../../hooks/useFetch';
import { navigate } from '../../core/navigation/NavigationServices';
import Strings from '../../res/strings/Strings';

jest.mock('../../hooks/useFetch');
jest.mock('../../core/navigation/NavigationServices', () => ({
    navigate: jest.fn(),
}));

describe('CardTypesScreen', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('shows loading state', () => {
        useFetch.mockReturnValue({ data: null, isLoading: true, error: null });
        const { getByTestId } = render(<CardTypesScreen />);
        expect(getByTestId('loader')).toBeTruthy();
    });

    it('shows error message', () => {
        useFetch.mockReturnValue({ data: null, isLoading: false, error: 'Network Error' });
        const { getByText } = render(<CardTypesScreen />);
        expect(getByText(/error: network error/i)).toBeTruthy();
    });

    it('renders card types', async () => {
        useFetch.mockReturnValue({
            data: { Type1: [{ id: 1 }], Type2: [{ id: 2 }] },
            isLoading: false,
            error: null,
        });
        const { getByText } = render(<CardTypesScreen />);
        await waitFor(() => {
            expect(getByText('Type1')).toBeTruthy();
            expect(getByText('Type2')).toBeTruthy();
        });
    });

    it('filters card types', async () => {
        useFetch.mockReturnValue({
            data: { Type1: [{ id: 1 }], Type2: [{ id: 2 }] },
            isLoading: false,
            error: null,
        });
        const { getByPlaceholderText, getByText } = render(<CardTypesScreen />);
        await waitFor(() => expect(getByText('Type1')).toBeTruthy());
        fireEvent.changeText(getByPlaceholderText(Strings.SEARCH_CARD_TYPES), 'Type1');
        expect(getByText('Type1')).toBeTruthy();
        expect(() => getByText('Type2')).toThrow(); // Type2 should not be rendered
    });

    it('navigates on card press', async () => {
        useFetch.mockReturnValue({
            data: { Type1: [{ id: 1 }] },
            isLoading: false,
            error: null,
        });
        const { getByText } = render(<CardTypesScreen />);
        await waitFor(() => expect(getByText('Type1')).toBeTruthy());
        fireEvent.press(getByText('Type1'));
        expect(navigate).toHaveBeenCalledWith('CardByTypeScreen', { type: 'Type1' });
    });
});
