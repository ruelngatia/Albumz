import { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { AlbumZ } from "../../App";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { toast } from "react-toastify";
import { AuthService } from "../../Service/AuthService";

export default function Nav() {
  const context = useContext(AlbumZ);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    context?.toggleIsLoggedin(); 
    new AuthService().removeLoginToken()  
    handleClose();
  };

  const toggleLoginInfo = ()=>{
    context?.toggleShowLoginDialog();
    toast.info("Sign in with google for easier use");
  }

  return (
    <div data-testid="nav-bar" className="flex items-center flex-wrap px-2 sticky top-0 bg-white z-50">
      <img src={logo} alt="logo" className="w-28" />
      {context?.isLoggedin ? (
        <div className="ml-auto">
          <Avatar data-testid="user-profile" src="/broken-image.jpg" onClick={handleClick} />
          <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
        </div>
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
