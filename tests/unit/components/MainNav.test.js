import { render, screen } from '@testing-library/vue'
import { toBeInTheDocument } from '@testing-library/jest-dom';

import MainNav from '@/components/MainNav.vue'

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
  })
});