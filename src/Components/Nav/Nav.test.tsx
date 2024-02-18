import { render } from "@testing-library/react";
import Nav from "./Nav";
import { AlbumZ } from "../../App";
import { AlbumContext } from "../../Type/AlbumContext";


test('Login and register button is not visible when user is logged in', () => {
    const globalContext: AlbumContext = {
        isLoggedin: false,
        showLoginDialod: false,
        toggleIsLoggedin: ()=> {} ,
        toggleShowLoginDialod: ()=> {}
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
        showLoginDialod: false,
        toggleIsLoggedin: ()=> {} ,
        toggleShowLoginDialod: ()=> {}
      }
    const{getByTestId} = render(
        <AlbumZ.Provider value={globalContext}>
            <Nav />
        </AlbumZ.Provider>
    );
    const buttons = getByTestId("user-profile");
    expect(buttons).toBeInTheDocument()
  });