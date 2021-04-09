import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { getPage } from 'next-page-tester';
import Home from '../../pages/index';

describe('Homepage', () => {
    it('renders compnent tree correctly', () => {
        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders all components', () => {
        act(() => {
            render(<Home />);
        });

        // assert that:
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
        expect(
            screen.getByText('1.2 BN Africans lack access to quality healthcare.')
        ).toBeInTheDocument();
        expect(screen.getByText('Our Story')).toBeInTheDocument();
        expect(screen.getByText('We’re on a mission to make')).toBeInTheDocument();
        expect(screen.getByText('Why')).toBeInTheDocument();
        expect(screen.getByText('Our Work')).toBeInTheDocument();
        expect(
            screen.getByText(
                'We are local. We design solutions based on our understanding of healthcare delivery in Africa and emerging markets'
            )
        ).toBeInTheDocument();
    });

    it('should render empty title', async () => {
        act(() => {
            render(<Home />);
        });

        await waitFor(() => {
            expect(document.title).toEqual('');
        });
    });
});

describe('Home page', () => {
    it('renders Home page', async () => {
        const { render } = await getPage({
            route: '/'
        });

        render();
        expect(screen.getByText('Our Story')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Teams'));
        await screen.findByText('Dr. Riro Matiko');
    });
});
