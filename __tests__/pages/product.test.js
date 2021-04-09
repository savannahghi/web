import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { getPage } from 'next-page-tester';
import Products from '../../pages/products';

describe('ProductsPage', () => {
    it('renders compnent tree correctly', () => {
        const tree = renderer.create(<Products />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders all components', () => {
        act(() => {
            render(<Products />);
        });

        // assert that:
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
        expect(screen.getByText('Healthcare governance')).toBeInTheDocument();
    });

    it('should render empty title', async () => {
        act(() => {
            render(<Products />);
        });

        await waitFor(() => {
            expect(document.title).toEqual('');
        });
    });
});

describe('Products page', () => {
    it('navigates to Home page', async () => {
        const { render } = await getPage({
            route: '/products'
        });

        render();
        expect(screen.getByText('Healthcare governance')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Home'));
        await screen.findByText('Our Story');
    });
});
