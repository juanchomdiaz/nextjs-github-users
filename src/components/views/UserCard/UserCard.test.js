import React from "react";
import UserCard from "./UserCard";
import UsersContext from "@context/users/UsersContext";
import { mount } from "enzyme";


function renderUserCard(value, userVal) {
  return mount(
      <UsersContext.Provider value={{ isReady: value }}>
        <UserCard user={userVal} />
      </UsersContext.Provider>
  );
}

const fakeUser = {
    login: "mojombo",
    id: 1,
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
    public_repos: 62,
    public_gists: 62,
    followers: 22389,
    following: 11,
};

describe("UserCard", () => {
    it(">>> Should render the card with the user picture", () => {
        const wrapper = renderUserCard(true, fakeUser);
        setTimeout(() => {
          expect(wrapper.find(".rounded-circle").exists()).toBeTruthy();
        }, 3000)
      });

    it(">>> Should render the card skeleton", () => {
        const wrapper = renderUserCard(false, fakeUser);
        setTimeout(() => {
          expect(wrapper.find(".react-loading-skeleton").exists()).toBeTruthy();
        }, 2000)
      });
});


