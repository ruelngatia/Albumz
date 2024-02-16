import { Address } from "./AddressModel";
import { AlbumModel } from "./AlbumModel";

export interface UserModel{
    id: number;
    name: String;
    username: String;
    email: String;
    address: Address
    phone: String;
    website: String;
    albums: AlbumModel[];
    albumCount: number;
}