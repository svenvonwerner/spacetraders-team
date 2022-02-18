import LoginPage from './LoginPage.js';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('LoginPage', () => {
  it('renders a hidden paragraph, a headline , a input and a button', () => {
    render(<LoginPage />);

    // const allFormElements = screen.getByRole('');
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    const heading = screen.getByRole('heading');
    // const paragraph = screen.getByText(/user/i);
    

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Username e.g.');
    expect(input).toHaveAttribute('id', 'username');
    expect(button).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    // expect(paragraph).not.toBeInTheDocument();
  });

  it('Click on Button submits the input value to the spacetraders api', () => {
    const handleLogin = jest.fn();
    render(<LoginPage onLogin={handleLogin} />);

    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button');
    // const paragraph = screen.getByRole('paragraph');

    userEvent.type(input, 'Hennifant');
    userEvent.click(submitButton);

    expect(handleLogin).toHaveBeenCalledWith(
      'Hennifant'
    );
  })

    it('does not submit form if the input is empty', () => {
      const handleSubmit = jest.fn();
      render(<LoginPage onSubmit={handleSubmit} />);
      
      const input = screen.getByRole('textbox');
      const submitButton = screen.getByRole('button');

      userEvent.type(input, '');
      userEvent.click(submitButton);

      expect(handleSubmit).not.toHaveBeenCalled();
    });
  });

