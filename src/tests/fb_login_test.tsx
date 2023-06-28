import { cleanup, fireEvent, render } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
    const { queryByLabelText, getByLabelText } = render(
        <App />,
    );

    expect(queryByLabelText(/off/i)).toBeTruthy();

    fireEvent.click(getByLabelText(/off/i));

    expect(queryByLabelText(/on/i)).toBeTruthy();
});
