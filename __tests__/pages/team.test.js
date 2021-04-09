import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { getPage } from 'next-page-tester';
import Team from '../../pages/team';

describe('TeamPage', () => {
    it('renders compnent tree correctly', () => {
        const tree = renderer.create(<Team />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders all components', () => {
        act(() => {
            render(<Team />);
        });

        // assert that:
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
        expect(
            screen.getByText(
                'Our belief is that by strengthening African healthcare systems so as to make them more resilient to the triple transition, we will be able to change and impact on the lives of our fellow Africans in the next decade…'
            )
        ).toBeInTheDocument();
    });

    it('should render empty title', async () => {
        act(() => {
            render(<Team />);
        });

        await waitFor(() => {
            expect(document.title).toEqual('');
        });
    });
});

describe('Team page', () => {
    it('navigates to Home page', async () => {
        const { render } = await getPage({
            route: '/team'
        });

        render();
        expect(
            screen.getByText(
                'Our belief is that by strengthening African healthcare systems so as to make them more resilient to the triple transition, we will be able to change and impact on the lives of our fellow Africans in the next decade…'
            )
        ).toBeInTheDocument();

        fireEvent.click(screen.getByText('Home'));
        await screen.findByText('Our Story');
    });
});
