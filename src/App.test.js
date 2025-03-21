import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders SwiftSignet home page", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // ✅ Check if the Navbar appears
  expect(screen.getByText(/SwiftSignet/i)).toBeInTheDocument();

  // ✅ Check if the Home Page loads
  expect(screen.getByText(/Welcome to SwiftSignet/i)).toBeInTheDocument();

  // ✅ Check if the Chatbot appears
  expect(screen.getByText(/Chat with SwiftSignet Bot/i)).toBeInTheDocument();
});
