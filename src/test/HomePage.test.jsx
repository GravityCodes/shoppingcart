import { describe, it, expect } from "vitest"
import {render, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import {HomePage} from "../components/homepage/HomePage"

describe("HomePage component", () => {
  it("renders correct heading", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch("Fordly");
  })
})