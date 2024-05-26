import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component with navigation, footer, and main content", () => {
  render(<App />);

  // Check if the navigation bar is rendered
  const navigationBar = screen.getByRole("navigation");
  expect(navigationBar).toBeInTheDocument();

  // Check for presence of footer
  const footer = screen.getByRole("contentinfo");
  expect(footer).toBeInTheDocument();

  // Check if specific link texts are present
  const homeLink = screen.getByText("Home");
  expect(homeLink).toBeInTheDocument();

  const menuLink = screen.getByText("Menu");
  expect(menuLink).toBeInTheDocument();

  const contactLink = screen.getByText("Contact");
  expect(contactLink).toBeInTheDocument();

  const loginLink = screen.getByText("Login");
  expect(loginLink).toBeInTheDocument();

  // Assuming there's a unique button text to check for
  const checkMenuButton = screen.getByText("Check out the Menu!");
  expect(checkMenuButton).toBeInTheDocument();
});
