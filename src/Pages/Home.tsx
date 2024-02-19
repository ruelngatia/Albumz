import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { UserModel } from "../Model/UserModel";
import { AlbumModel } from "../Model/AlbumModel";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useNavigate } from "react-router-dom";
import { APIService } from "../Service/APIService";
import { toast } from "react-toastify";
import Loader from "../Components/Loader/Loader";

export default function Home() {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigator = useNavigate();

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "username", headerName: "Username", width: 210 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 200 },
    { field: "albumCount", headerName: "Albums", width: 120 },
    {
      field: "link",
      headerName: "Link",
      width: 50,
      renderCell: (params) => {
        return (
          <span>
            <OpenInNewIcon
              sx={{ "&:hover": { cursor: "grab" } }}
              onClick={() => navigator(`/user/${params.row.id}`)}
            />
          </span>
        );
      },
    },
  ];

  useEffect(() => {
    new APIService()
      .getUsers()
      .then((res) => setUsers(res))
      .then(() => {
        new APIService()
          .getAlbumsList()
          .then((res) => setAlbums(res))
          .catch((error) => toast.error("Album was not found"));
      })
      .catch((error) => toast.error("Users were not found"))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const mapAlbumz = (users: UserModel[], albums: AlbumModel[]) => {
      const updatedUsers = users.map((user) => {
        const filteredAlbums = albums.filter(
          (album) => album.userId === user.id
        );
        return {
          ...user,
          albums: filteredAlbums,
          albumCount: filteredAlbums.length,
        };
      });
      setUsers(updatedUsers);
    };

    mapAlbumz(users, albums);
  }, [albums]);

  return (
    <div className="px-4 pt-3 mb:px-10 bg-greyUser pb-4 flex flex-col items-center">
      <h1 className="text-2xl font-thin text-opacity-65 w-11/12 lg:w-5/6">
        Users
      </h1>
      <div className="bg-white rounded-xl shadow-xl mt-2 w-11/12 lg:w-5/6">
        {isLoading ? (
          <Loader />
        ) : (
          <DataGrid
            rows={users}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        )}
      </div>
    </div>
  );
}
