import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PhotoModel } from "../Model/PhotoModel";
import EditIcon from "@mui/icons-material/Edit";
import { APIService } from "../Service/APIService";
import { toast } from "react-toastify";

export default function Photo() {
  const { id } = useParams();
  const [photo, setPhoto] = useState<PhotoModel>({
    albumId: 0,
    id: 0,
    title: "",
    url: "",
    thumbnailUrl: "",
  });
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    new APIService()
      .getUserPhotos(`${id}`)
      .then((res) => setPhoto(res))
      .catch((error) => toast.error("Image was not found"));
  }, []);

  const handleEdit = async () => {

    new APIService()
      .editPhotos(`${id}`,photo)
      .then((res) => {
        setPhoto(res);
        setEdit(!edit);
        toast.success("Update image");
      })
      .catch((error) => toast.error("photo was not update"));

  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let photograph: PhotoModel = { ...photo, title: e.target.value };
    setPhoto(photograph);
  };

  return (
    <section className="flex items-center justify-center flex-col">
      <div className="my-3">
        <img src={photo?.url} />
        <div className="mt-4">
          {edit ? (
            <div>
              <span className="text-purple text-2xl font-medium">Title: </span>
              <span className="w-full mt-2 text-2xl pl-2">{photo?.title}</span>
              <EditIcon color="action" onClick={() => setEdit(!edit)} />
            </div>
          ) : (
            <div className="flex flex-row gap-3">
              <label className="text-purple text-2xl">Title: </label>
              <input
                value={photo?.title}
                type="text"
                className="border w-2/3 rounded px-2 py-1 text-xl"
                placeholder="Enter new title"
                onChange={inputChange}
              />
              <button
                className="ml-auto bg-purple text-white font-bold px-3 py-1 rounded-md"
                onClick={handleEdit}
              >
                done
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
