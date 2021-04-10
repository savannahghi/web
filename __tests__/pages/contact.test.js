import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { shallow } from 'enzyme';
import preloadAll from 'jest-next-dynamic';
import { act } from 'react-dom/test-utils';
import ContactForm from '../../pages/contact';

let wrapper;
let nameInput;
let emailInput;
let messageInput;
let submitButton;

// Create initial props that get passed into the component
const initialProps = {
    location: {
        state: {
            from: {
                pathname: '/contact'
            }
        }
    }
};

// Unit testing
describe('Unit tests', () => {
    // await preloadAll();

    // what to do before each test
    beforeEach(() => {
        // Render the login form component, pass in props. (Shallow method renders the component without its children, good for unit tests.)
        wrapper = shallow(<ContactForm {...initialProps} />);
        nameInput = wrapper.find('#nameInput');
        emailInput = wrapper.find('#emailInput');
        messageInput = wrapper.find('#messageInput');
        submitButton = wrapper.find('#submitButton');
    });

    // what to do after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    // UI Integrity test
    it('should match the snapshot', () => {
        // snapshots are text references of the html of the rendered component.
        expect(wrapper.html()).toMatchSnapshot();
    });

    // name field
    it('should have a name inputs', () => {
        expect(nameInput.length).toEqual(1);
    });

    it('should have the expected props on the name field', () => {
        expect(nameInput.props()).toStrictEqual({
            id: 'nameInput',
            className: 'form-control',
            name: 'name',
            type: 'text'
        });
    });

    // email field
    it('should have an email field', () => {
        expect(emailInput.length).toEqual(1);
    });

    it('should have the expected props on the email field', () => {
        expect(emailInput.props()).toStrictEqual({
            id: 'emailInput',
            className: 'form-control',
            name: 'email',
            type: 'email'
        });
    });

    // message field
    it('should have a message field', () => {
        expect(messageInput.length).toEqual(1);
    });

    it('should have the expected props on the email field', () => {
        expect(messageInput.props()).toStrictEqual({
            id: 'messageInput',
            className: 'form-control',
            name: 'message',
            rows: '4',
            type: 'text'
        });
    });

    // submit button
    it('should have a submit button', () => {
        expect(submitButton.length).toEqual(1);
    });

    it('should have the expected props on the button', () => {
        expect(submitButton.props()).toEqual({
            id: 'submitButton',
            type: 'submit',
            'aria-label': 'Submit Button',
            className: 'btn btn-secondary font-weight-bold text-capitalize mb-4',
            children: 'Submit'
        });
    });
});

// Integrations Testing
describe('Integrations tests', () => {
    beforeEach(() => {
        // Render the login form component, pass in props. (render method renders the component with its children, good for integrations tests, uses react-test-library.)
        const { getByLabelText, getByText } = render(<ContactForm {...initialProps} />);
        nameInput = getByLabelText(/Name/i);
        emailInput = getByLabelText(/Email/i);
        messageInput = getByLabelText(/Message/i);
        submitButton = getByText('Submit');
    });

    afterEach(cleanup);

    it('name text change in onChange event', () => {
        expect(nameInput.value).toBe('');

        fireEvent.change(nameInput, { target: { value: 'John' } });

        expect(nameInput.value).toBe('John');
    });

    it('email text change in onChange event', () => {
        expect(emailInput.value).toBe('');

        fireEvent.change(emailInput, { target: { value: 'support@savannahghi.org' } });

        expect(emailInput.value).toBe('support@savannahghi.org');
    });

    it('message text change in onChange event', () => {
        expect(messageInput.value).toBe('');

        fireEvent.change(messageInput, {
            target: { value: 'This is a test message from Savannah Global Health Web-app' }
        });

        expect(messageInput.value).toBe(
            'This is a test message from Savannah Global Health Web-app'
        );
    });
});

test('Work Component', async () => {
    await preloadAll();

    const { getByText } = render(<ContactForm />);

    const lazyContent = await waitFor(() =>
        getByText('Or Reach Out to Us Via Our Social media handles')
    );
    expect(lazyContent).toBeInTheDocument();
});

describe('test dynamic imports', () => {
    act(() => {
        const component = shallow(<ContactForm />);
        expect(component.find('button')).toHaveLength(5);
        component.find('button').at(0).simulate('click').first;
    });
});
