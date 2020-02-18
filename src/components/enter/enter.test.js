import { shallow } from "enzyme";
import React from "react";
import Enter from "./enter.component";

it("expect to render Enter component", () => {
  expect(shallow(<Enter />).debug()).toMatchSnapshot();
});
