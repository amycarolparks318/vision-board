// @ts-nocheck
import { render, screen } from "@testing-library/react";
import { describe, expect, it, test, vi } from "vitest";
import List from "./List";
import userEvent from "@testing-library/user-event";

describe('List', () => {
    const user = userEvent.setup();

    const mockList = vi.mockObject({
        id: crypto.randomUUID(),
        name: 'Vacation',
        tasks: [],
        image: `src/assets/images/1.png`,
        date: new Date(),
    });

        const mockTask = vi.mockObject({
        id: 1,
        summary: 'go fishing',
        editing: false,
        complete: false,
    });


    const mockUpdateList = vi.fn(() => 0);

    it('displays list name by default', () => {
        // @ts-ignore
        render(<List list={mockList} />);
        expect(screen.getByRole('heading', { level: 3 }).textContent).toMatch('Vacation');
    });


        test('can create multiple new tasks to list object', async () => {
        render(<List list={mockList} updateList={mockUpdateList} tasks={mockTask} />);
        const input = screen.getByPlaceholderText(/Enter Task Description/);
        await user.type(input, 'Milk');
        expect(input).toHaveValue('Milk');
        await user.click(screen.getByRole('button', { name: /Add Task/i }));
        expect(mockUpdateList).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({
            tasks: expect.arrayContaining([expect.objectContaining({ summary: 'Milk' })])
        }));

        await user.type(input, mockTask.summary);
        expect(input).toHaveValue('go fishing');
        await user.click(screen.getByRole('button', { name: /Add Task/i }));
        expect(mockUpdateList).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({
            tasks: expect.arrayContaining([expect.objectContaining({ summary: 'go fishing' })])
        }));
    });

});