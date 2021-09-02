import { GistsList } from '../GistsList';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockStore } from '../../../store/mockStore';

describe('', () => {
    it('matches snapshot with no article', () => {
        const comp = render(
            <Provider store={mockStore}>
                <GistsList />
            </Provider>
        );
        expect(comp).toMatchSnapshot();
        // const actions = mockStore.getActions();
        // const lastAction = actions[actions.length - 1];
        // expect(lastAction).toEqual(getApiData());
    });
});