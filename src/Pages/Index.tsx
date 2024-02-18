import img from "../assets/landing.jpg";
import pin from "../assets/pin.jpg";
import travel from "../assets/travel.png"
import Dialog from '@mui/material/Dialog';
import Login from "../Components/Login/Login";
import { useContext, useState } from "react";
import { AlbumZ } from "../App";

export default function Index() {

  const context = useContext(AlbumZ);

  return (
    <>
      <section
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
        }}
        className="h-[580px] flex flex-col justify-center px-6"
      >
        <h1 className="text-white uppercase text-6xl font-bold mt-10">
          Creating <br /> Shared <br /> Memories
        </h1>
        <br />
        <p className="text-white text-2xl w-3/4 lg:2/3 mt-2">
          {" "}
          Capture and gather photos. Relive cherished moments together.
        </p>
        <button className="float-left bg-white text-purple w-fit mt-8 rounded-2xl font-medium text-xl py-1 px-3">
          Join us
        </button>
      </section>

      <section className="flex md:flex-row flex-col bg-wheat">
        <div className=" w-fit md:w-1/2 flex flex-col justify-center items-center p-12 md:p-28">
          <h2 className="uppercase text-3xl font-bold">Privately Share Photos and Videos</h2>
          <br />
          <p className="text-lg ">
            Craft Your Free Online Album, Keeping Loved Ones Updated and
            Inviting Family and Friends to Share in Your Collective Memories!
          </p>
        </div>
        <div className="w-fit md:w-1/2">
          <img className="p-8" src={pin} alt="pin" />
        </div>
      </section>

      <section className="bg-fadePurple flex justify-around">
        <div className="flex flex-col justify-center w-4/5 md:4/5 mt-20">
          <h2 className="font-bold text-3xl text-white text-center">Design Your Own Photo Book</h2>
          <p className="text-white text-lg text-justify px-0 md:px-10 mt-6">   
            Rediscover cherished moments through our Premium photo book experience.  
            Utilize our distinctive editor to craft a design of unparalleled excellence. 
            Collaborate on creating memorable photo books together!
          </p>
          <img className="m-auto" src={travel} alt="travel" />
        </div>
      </section>
      <Dialog open={context?.showLoginDialog ?? false} onClose={()=>context?.toggleShowLoginDialog()} 
      fullWidth maxWidth='xs'>
        <Login/>
      </Dialog>
    </>
  );
}
