import {render, screen} from '@testing-library/vue'
import ActionButton from '@/components/Shared/ActionButton.vue'
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom';
// import { describe } from 'vitest'

describe('ActionButton', () => {
  it('displays the button text', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: "primary",
      }
    })
    const button = screen.getByRole('button', {
      name: /click me/i
    });
    expect(button).toBeInTheDocument();
  });
  it('applies one of two styles to button', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: "primary",
      }
    });
    const button = screen.getByRole('button', {
      name: /click me/i
    });
    expect(button).toHaveClass("primary");
  });
});