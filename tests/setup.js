import { cleanup } from "@testing-library/vue";
import matchers from '@testing-library/jest-dom/matchers';
import {expect, afterEach} from 'vitest';
import { toBeInTheDocument } from '@testing-library/jest-dom';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
