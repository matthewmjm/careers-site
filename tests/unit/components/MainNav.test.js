import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import toBeInTheDocument from '@testing-library/jest-dom';

import MainNav from '@/components/MainNav.vue'
import { expect } from 'vitest';

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav);
    const companyName = screen.getByText('FacePlace Careers');
    expect(companyName).toBeInTheDocument();
  }); 

  it('displays menu items for navigation', () => {
    render(MainNav);
    screen.getAllByRole("listitem")
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent);
    expect(navigationMenuTexts).toEqual(["Teams", "Locations", "Benefits", "Jobs", "Students"])
  });

  describe("When the user logs in", () => {
    it("displays user profile picture", async () => {
      render(MainNav);

      let profileImage = screen.queryByRole("img", {
        name: /user profile picture/i,
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", { 
        name: /sign in/i,
      });
      await userEvent.click(loginButton);

      profileImage = screen.getByRole("img", {
        name: /user profile picture/i,
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});