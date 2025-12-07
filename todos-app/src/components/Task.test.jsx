import { render, screen } from "@testing-library/react";
import Task from "./Task";
import { beforeEach, describe, expect, it, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";


describe('Task', () => {
    const mockTask = vi.mockObject({
        id: 1,
        summary: 'go fishing',
        checked: false,
        editing: false,

    });

    const mockUpdateTask = vi.fn(() => 0);
    const mockDeleteTask = vi.fn(() => 0);
    let user = null;

    beforeEach(() => {
        // @ts-ignore
        render(<Task task={mockTask} updateTask={mockUpdateTask} deleteTask={mockDeleteTask} />);
        user = userEvent.setup();
    })

    it('displays task summary by default', () => {
        // @ts-ignore
        expect(screen.getAllByRole('heading', { level: 4 }))
    });

    // @ts-ignore
    it('can trigger edits', async () => {
        await user.click(screen.getByTestId('editor'));
        expect(mockUpdateTask).toHaveBeenCalled();
    })

    // @ts-ignore
    test('can trigger delete', async () => {
        user.click(screen.getByTestId('trash'));
        expect(mockUpdateTask).toHaveBeenCalled();
    })


});