import { getByText, render } from "@testing-library/react";
import { AlbumZ } from "../../App";
import { AlbumContext } from "../../Type/AlbumContext";
import { ProtectedRoute } from "./Auth";


test('User is redirected to new page if has logged in', () => {
    const globalContext: AlbumContext = {
        isLoggedin: true,
        showLoginDialog: false,
        toggleIsLoggedin: ()=> {} ,
        toggleShowLoginDialog: ()=> {}
      }
    const{getByTestId} = render(
        <AlbumZ.Provider value={globalContext}>
            <ProtectedRoute>
                <div data-testid='child'>Child component</div>
            </ProtectedRoute>e
        </AlbumZ.Provider>
    );
    const buttons = getByTestId("child");
    expect(buttons).toBeInTheDocument()
  });