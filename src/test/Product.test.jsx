import { vi,  describe, it, expect } from "vitest"
import {render, screen} from "@testing-library/react"
import { Product } from "../components/product/Product"
import userEvent from "@testing-library/user-event";

describe("product component", () => {
  it("matches snapshot", () => {

    const addToCart = vi.fn();

    const {container} = render(<Product image="" title="" category="" price={1} addToCart={addToCart} id={1}/>);

    expect(container).toMatchSnapshot();
  });

  it("button calls addToCart function"),async () => {
    const addToCart =  vi.fn();

    const  user= userEvent.setup;
    render(<Product addToCart={addToCart}/>);
 
    let button  = screen.getByRole("button");

    await user.click(button);

    


  }
});
