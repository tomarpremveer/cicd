import { render, screen } from '@testing-library/react';
import {ModalWrapper} from './App';
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("TaskForm Component", () => {

 test("component is rendered", () => {
    render(<ModalWrapper />);

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
 });

 test("on button click, modal should be visible", async () => {
    render (<ModalWrapper />);
    const user = userEvent.setup();

    const toggleButton = screen.getByTestId("open-button");
    await user.click(toggleButton);

    const modal = screen.queryByTestId('modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveAttribute('role', 'dialog')
    expect(modal).toHaveAttribute('aria-modal', 'true')
 });

 test("on click of close button, modal disappers", async () => {
    render (<ModalWrapper />);
    const user = userEvent.setup();

    const toggleButton = screen.getByTestId("open-button");
    await user.click(toggleButton);

    const modal = screen.queryByTestId('modal');
    expect(modal).toBeInTheDocument();

    const closeButton = screen.getByTestId('close-button');
    await user.click(closeButton);
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

 })
});
