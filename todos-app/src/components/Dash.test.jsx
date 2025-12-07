// @ts-nocheck
import { render, screen } from "@testing-library/react";
import Dash from "./Dash";
import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";

describe('Dash', () => {
  const user = userEvent.setup();
  
  // @ts-ignore
  test('clear', async () => {
    render(<Dash />);
    await user.clear(screen.getByPlaceholderText(/Add new list/));
    expect(screen.getByPlaceholderText(/Add new list/)).toHaveValue('');
  });

  test('type into input field and add list names to screen', async () => {
    render(<Dash />);
    const input = screen.getByPlaceholderText(/Add new list/);
    await user.type(input, 'Groceries');
    expect(input).toHaveValue('Groceries');
    await user.click(screen.getByRole('button', { name: /Add List/i }));
    expect(screen.getByRole('heading', { level: 3 }).textContent).toBe('Groceries');

    await user.type(input, 'Clothes');
    expect(input).toHaveValue('Clothes');
    await user.click(screen.getByRole('button', { name: /Add List/i }));
    expect(screen.getAllByRole('heading', {level: 3}))
    
  });



});

