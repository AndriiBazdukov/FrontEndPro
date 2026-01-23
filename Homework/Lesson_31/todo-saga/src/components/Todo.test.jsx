import { screen, fireEvent, waitFor } from '@testing-library/react';
import Todo from './Todo';
import { renderWithStore } from '../test-utils';

describe('TODO App', () => {
  beforeEach(() => {
    renderWithStore(<Todo />, {
      preloadedState: {
        todos: [
          { id: 1, text: 'Learn React' },
          { id: 2, text: 'Learn Redux' }
        ]
      }
    });
  });

  test('Page has TODO title', () => {
    //Assert
    expect(screen.getByText(/todo/i)).toBeInTheDocument();
  });

  test('User can type letters and numbers into input', () => {
    //Arrange
    const input = screen.getByPlaceholderText(/enter todo/i);

    // Act
    fireEvent.change(input, { target: { value: 'Todo 123' } });

    //Assert
    expect(input.value).toBe('Todo 123');
  });

  test('User gets error when clicking Add without text', () => {
    //Act
    fireEvent.click(screen.getByText(/add/i));

    //Assert
    expect(
      screen.getByText(/todo text is required/i)
    ).toBeInTheDocument();
  });

  test('User can add new todo', async () => {
    //Arrange
    const input = screen.getByPlaceholderText(/enter todo/i);

    //Act
    fireEvent.change(input, { target: { value: 'Learn Jest' } });
    fireEvent.click(screen.getByText(/add/i));

    //Assert
    await waitFor(() => {
      expect(screen.getByText('Learn Jest')).toBeInTheDocument();
    });
  });

  test('User can edit todo', async () => {
    //Act
    await waitFor(() => {
      fireEvent.click(screen.getAllByText(/edit/i)[0]);
    });

    const input = screen.getByDisplayValue('Learn React');
    fireEvent.change(input, { target: { value: 'Learn Jest' } });
    fireEvent.click(screen.getByText(/save/i));

    //Assert
    await waitFor(() => {
      expect(screen.getByText('Learn Jest')).toBeInTheDocument();
    });
  });

  test('User can delete todo', async () => {
    //Act
    await waitFor(() => {
      fireEvent.click(screen.getAllByText(/delete/i)[0]);
    });

    // Assert
    await waitFor(() => {
      expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });
  });

  test('User can clear todo list', async () => {
    //Act
    fireEvent.click(screen.getByText(/clear/i));

    //Assert
    await waitFor(() => {
      expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
      expect(screen.queryByText('Learn Redux')).not.toBeInTheDocument();
    });
  });
});
