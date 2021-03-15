import React from "react";
import LanguageSelector from "./LanguageSelector";
import { mount } from "enzyme";

describe("LanguageSelector", () => {
    it(">>> Should render the dropdown", () => {
     
        const wrapper = mount(<LanguageSelector />);
        expect(wrapper.find("#language-selector").exists()).toBeTruthy();
      });

});