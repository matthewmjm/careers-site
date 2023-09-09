import { render, screen } from '@testing-library/vue'
import toBeInTheDocument from '@testing-library/jest-dom';
import queryByText from '@testing-library/jest-dom';

import SubNav from '@/components/Navigation/SubNav.vue'
import { describe, expect } from 'vitest';

describe('SubNav', () => {
  describe('when user is on jobs page', () => {
    it('displays jobs count', () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          }
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });

      const jobCount = screen.getByText('1653');

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on jobs page", () => {
    it("does not display jobs count", () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          }
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });

      const jobCount = screen.queryByText("1653");

      expect(jobCount).toBeInTheDocument();
    });
  });

});