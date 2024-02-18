import axios from "axios";
import { PhotoModel } from "../Model/PhotoModel";
import { AlbumModel } from "../Model/AlbumModel";
import { UserModel } from "../Model/UserModel";

export class APIService{
    private baseURL = 'https://jsonplaceholder.typicode.com'


    public async getUsers(): Promise<UserModel[]>{
        try{
            const res = await axios.get(
                `${this.baseURL}/users`
              );
            return res.data;
        }catch(error){
            throw error;
        }
        
    }

    public async getAlbumsList(): Promise<AlbumModel[]>{
        try{
            const res = await axios.get(
                `${this.baseURL}/albums`
              );
            return res.data;
        }catch(error){
            throw error;
        }
        
    }

    public async getAlbumPhotos(id: string): Promise<PhotoModel[]>{
        try{
            const res = await axios.get(
                `${this.baseURL}/albums/${id}/photos`
              );
            return res.data;
        }catch(error){
            throw error;
        }
        
    }

    public async getAlbums(albumId: string): Promise<AlbumModel[]>{
        try{
            const res = await axios.get(
                `${this.baseURL}/users/${albumId}/albums`
              );
            return res.data;
        }catch(error){
            throw error;
        }
        
    }

    public async getUserPhotos(id: string): Promise<PhotoModel>{
        try{
            const res = await axios.get(
                `${this.baseURL}/photos/${id}`
              );
            return res.data;
        }catch(error){
            throw error;
        }
        
    }

    public async editPhotos(id: string, photo:PhotoModel): Promise<PhotoModel>{
        try{
            const res = await axios.put(
                `${this.baseURL}/photos/${id}`,
                photo
              );
            return res.data;
        }catch(error){
            throw error;
        }
        
    }


}