import { describe, it, expect } from "vitest"
import {render} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import {HomePage} from "../components/homepage/HomePage"

describe("HomePage component", () => {
  it("matches snapshot", () => {
   const {container} = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  })
})