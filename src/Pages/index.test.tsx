import { render } from "@testing-library/react";
import { AlbumContext } from "../Type/AlbumContext";
import { AlbumZ } from "../App";
import Index from "./Index";
import { useState } from "react";
import { MemoryRouter } from "react-router-dom";

test('Login modal is oppened when show modal flag is true', () => {
    const globalContext: AlbumContext = {
        isLoggedin: false,
        showLoginDialod: true,
        toggleIsLoggedin: ()=> {} ,
        toggleShowLoginDialod: ()=> {}
      }
    const{getByTestId} = render(
        <MemoryRouter>
            <AlbumZ.Provider value={globalContext}>
                <Index/>
            </AlbumZ.Provider>
        </MemoryRouter>
    );
    const component = getByTestId("login-component");
    expect(component).toBeInTheDocument()
  });



  test('Login modal is hidden when user clicks outside modal', () => {

    const [showLoginDialod,setshowLoginDialod] = useState<boolean>(false);

    const globalContext: AlbumContext = {
        isLoggedin: false,
        showLoginDialod: showLoginDialod,
        toggleIsLoggedin: ()=> {} ,
        toggleShowLoginDialod: ()=> {setshowLoginDialod(!showLoginDialod)}
      }
    const{getByTestId} = render(
        <AlbumZ.Provider value={globalContext}>
            <Index/>
        </AlbumZ.Provider>
    );
    const footer = getByTestId("footer");
    footer.click()
    const component = getByTestId("login-component");
    expect(component).toBeInTheDocument()
  });