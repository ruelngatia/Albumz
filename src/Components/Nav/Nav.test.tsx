import { render } from "@testing-library/react";
import Nav from "./Nav";
import { AlbumZ } from "../../App";
import { AlbumContext } from "../../Type/AlbumContext";


test('Login and register button is not visible when user is logged in', () => {
    const globalContext: AlbumContext = {
        isLoggedin: false,
        showLoginDialog: false,
        toggleIsLoggedin: ()=> {} ,
        toggleShowLoginDialog: ()=> {}
      }
    const{getAllByRole} = render(
        <AlbumZ.Provider value={globalContext}>
            <Nav />
        </AlbumZ.Provider>
    );
    const buttons = getAllByRole("button");
    expect(buttons).toHaveLength(2)
  });

  test('User profile is visible when user is logged in', () => {
    const globalContext: AlbumContext = {
        isLoggedin: true,
        showLoginDialog: false,
        toggleIsLoggedin: ()=> {} ,
        toggleShowLoginDialog: ()=> {}
      }
    const{getByTestId} = render(
        <AlbumZ.Provider value={globalContext}>
            <Nav />
        </AlbumZ.Provider>
    );
    const buttons = getByTestId("user-profile");
    expect(buttons).toBeInTheDocument()
  });