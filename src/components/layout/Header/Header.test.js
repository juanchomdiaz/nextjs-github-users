import Header from "./Header";
import { shallow } from "enzyme";


describe("Header", () => {
  it(">>> Should render the brand logo", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(".logo").exists()).toBeTruthy();
  });

  it(">>> Should render the brand name", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(".brand-name").text()).toBe("Github Users");
  });

});