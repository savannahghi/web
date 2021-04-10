import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import preloadAll from 'jest-next-dynamic';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import * as StringConstants from '../../components/constants/app_strings';

import Work from '../../components/Work';

let wrapped = mount(<Work />);

test('Work Component', async () => {
    await preloadAll();

    const { getByText } = render(<Work />);

    const lazyContent = await waitFor(() => getByText(StringConstants.ourWorkContent));
    expect(lazyContent).toBeInTheDocument();
});

describe('Work Component', () => {
    it('should match snapshot', () => {
        expect(wrapped).toMatchSnapshot();
    });

    it('map marker exists and shows popup', () => {
        act(() => {
            const component = shallow(<Work />);
            expect(component.find('button')).toHaveLength(8);
            component.find('button').at(0).simulate('click').first;
        });
    });
});
