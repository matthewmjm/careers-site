import { render, screen } from '@testing-library/vue'
import toBeInTheDocument from '@testing-library/jest-dom';
import queryByText from '@testing-library/jest-dom';

import TheHeadline from '@/components/TheHeadline.vue'
import { describe, expect, vi } from 'vitest';
import {nextTick} from "vue";

describe("TheHeadLine", () => {
  describe("Vitest playground", () => {
    it("tracks whether it has been called", () => {
      const mockFunction = vi.fn();
      mockFunction(1, 2);
      expect(mockFunction).toHaveBeenCalledWith(1, 2);
    })
  })
  it("displays introductory action verb", () => {
    vi.useFakeTimers();
    render(TheHeadline);

    const actionPhrase = screen.getByRole("heading", {
      name: /build for everyone/i,
    });
    expect(actionPhrase).toBeInTheDocument();
    vi.useRealTimers();
  });
  it("changes action verb at a consistent interval", () => {
    vi.useFakeTimers();
    const mock = vi.fn();
    vi.stubGlobal("setInterval", mock);

    render(TheHeadline);

    expect(mock).toHaveBeenCalled();
    vi.useRealTimers();
  });

  it("swaps action verb after interval", async () => {
    vi.useFakeTimers();
    render(TheHeadline);
    vi.advanceTimersToNextTimer();

    await nextTick();
    const actionPhrase = screen.getByRole("heading", {
      name: /create for everyone/i,
    });
    expect(actionPhrase).toBeInTheDocument();
    vi.useRealTimers();
  });

  it("removes interval when component is unmounted", () => {
    vi.useFakeTimers();
    const clearInterval = vi.fn();
    vi.stubGlobal("clearInterval", clearInterval);

    const { unmount } = render(TheHeadline);
    unmount();

    expect(clearInterval).toHaveBeenCalled();
    vi.unstubAllGlobals();
    vi.useRealTimers();
  });
})