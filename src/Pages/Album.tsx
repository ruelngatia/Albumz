import {
  IconButton,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PhotoModel } from "../Model/PhotoModel";
import { APIService } from "../Service/APIService";
import { toast } from "react-toastify";

export default function User() {
  const { id } = useParams();
  const [photos, setPhotos] = useState<PhotoModel[]>([]);
  const navigator = useNavigate();

  useEffect(() => {
    new APIService().getAlbumPhotos(`${id}`)
    .then((res)=> setPhotos(res))
    .catch((error)=> (toast.error("Some error occured")));
  }, []);

  return (
    <div className="px-6">
      <h1 className="text-2xl mb-2 font-thin text-opacity-65">Photos </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {photos.map((item) => (
          <ImageListItem key={item.id} onClick={()=>navigator(`/photo/${item.id}`)}>
            <img
              srcSet={`${item.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.url}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                ></IconButton>
              }
            />
          </ImageListItem>
        ))}
      </div>
    </div>
  );
}
