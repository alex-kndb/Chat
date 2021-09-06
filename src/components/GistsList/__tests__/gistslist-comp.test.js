import { GistsList } from '../GistsList';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockStore, mockStoreError, mockStoreLoading } from '../../../store/mockStore';

describe('articles test', () => {
    it('matches snapshot with no articles', () => {
        const comp = render(
            <Provider store={mockStore}>
                <GistsList />
            </Provider>
        );
        expect(comp).toMatchSnapshot();
    });
    it("shows error message on request error", () => {
        const comp = render(
            <Provider store={mockStoreError}>
                <GistsList />
            </Provider>
        );
        const error = comp.getByText('No article');
        expect(error).toBeDefined();
    });
    it("shows button on request error", () => {
        const comp = render(
            <Provider store={mockStoreError}>
                <GistsList />
            </Provider>
        );
        const button = comp.getByRole('button', { name: 'Try again' });
        expect(button).toBeDefined();
    });
    it("shows progress on request loading", () => {
        const comp = render(
            <Provider store={mockStoreLoading}>
                <GistsList />
            </Provider>
        );
        const loading = comp.getByRole('loading');
        expect(loading).toBeDefined();
    });

});