import { useContext } from "react";
import logo from "../../assets/logo.png";
import { AlbumZ } from "../../App";
import { Avatar } from "@mui/material";
import { toast } from "react-toastify";

export default function Nav() {
  const context = useContext(AlbumZ);

  const toggleLoginInfo = ()=>{
    context?.toggleShowLoginDialog();
    toast.info("Sign in with google for easier use");
  }

  return (
    <div data-testid="nav-bar" className="flex items-center flex-wrap px-2 sticky top-0 bg-white z-50">
      <img src={logo} alt="logo" className="w-28" />
      {context?.isLoggedin ? (
        <Avatar data-testid="user-profile" className="ml-auto" src="/broken-image.jpg" />
      ) : (
        <>
          <button 
            id="btn-login"
            className="ml-auto px-3 py-1 rounded-lg border border-purple text-purple hover:bg-purple hover:text-white h-fit"
            onClick={() => context?.toggleShowLoginDialog()}
          >
            Login
          </button>
          <button id="btn-register" className="ml-2 rounded-lg bg-purple px-3 py-1 text-white h-fit hover:bg-hoverPurple"
          onClick={toggleLoginInfo}>
            Register
          </button>
        </>
      )}
    </div>
  );
}
