import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AlbumModel } from "../Model/AlbumModel";
import { APIService } from "../Service/APIService";
import { toast } from "react-toastify";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function User() {
  const { albumId } = useParams();
  const [albums,setAlbums] = useState<AlbumModel[]>([]);
  const navigator = useNavigate();

  const columns: GridColDef[] = [
    { field: "no", headerName: "No", width: 120,
      renderCell: (params)=>{
        return(<span>{params.id}</span>)
      }  
  },
    { field: "title", headerName: "Title", width: 700 },
    {
      field: "link",
      headerName: "Link",
      width: 50,
      renderCell: (params) => {
        return <OpenInNewIcon onClick={()=>navigator(`/album/${params.row.id}`) } />;
      },
    },
  ]

  useEffect(()=>{
    new APIService().getAlbums(`${albumId}`)
    .then((albums)=> setAlbums(albums))
    .catch((error) => toast.error('Albums were not fetched'))
  },[])

  return (
    <div className="px-6">
      <h1 className="text-2xl mb-2 font-thin text-opacity-65">Albums</h1>
      <DataGrid
          rows={albums}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
    </div>
  );
}
