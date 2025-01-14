import { IAlbum } from '../../../album/model/IAlbum';
import { IComment } from '../../../comment/model/IComment';
import { IPhoto } from '../../../photo/model/IPhoto';
import { IPost } from '../../../post/model/IPost';
import { ITodo } from '../../../todo/model/ITodo';
import { IUser } from '../../../user/model/IUser';

export interface IJsonPlaceHolderService {
  getAlbums(): Promise<IAlbum[]>;
  getComments(): Promise<IComment[]>;
  getPhotos(): Promise<IPhoto[]>;
  getPosts(): Promise<IPost[]>;
  getTodos(): Promise<ITodo[]>;
  getUsers(): Promise<IUser[]>;
}
