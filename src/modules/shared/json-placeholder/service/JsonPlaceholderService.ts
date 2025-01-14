import axios from 'axios';
import { IAlbum } from '../../../album/model/IAlbum';
import { IComment } from '../../../comment/model/IComment';
import { IPhoto } from '../../../photo/model/IPhoto';
import { ITodo } from '../../../todo/model/ITodo';
import { IUser } from '../../../user/model/IUser';
import { IPost } from '../../../post/model/IPost';
import { IJsonPlaceHolderService } from '../interface/IJsonPlaceholderService';

export class JsonPlaceholderService implements IJsonPlaceHolderService {
  private _baseUrl: string = 'https://jsonplaceholder.typicode.com';

  private _endpoints = {
    albums: `${this._baseUrl}/albums`,
    comments: `${this._baseUrl}/comments`,
    photos: `${this._baseUrl}/photos`,
    posts: `${this._baseUrl}/posts`,
    todos: `${this._baseUrl}/todos`,
    users: `${this._baseUrl}/users`,
  };

  private async _getEntity<T>(url: string): Promise<T[]> {
    return await axios.get(url).then((response) => response.data);
  }

  async getAlbums(): Promise<IAlbum[]> {
    return await this._getEntity<IAlbum>(this._endpoints.albums);
  }

  async getComments(): Promise<IComment[]> {
    return await this._getEntity<IComment>(this._endpoints.comments);
  }

  async getPhotos(): Promise<IPhoto[]> {
    return await this._getEntity<IPhoto>(this._endpoints.photos);
  }

  async getPosts(): Promise<IPost[]> {
    return await this._getEntity<IPost>(this._endpoints.posts);
  }

  async getTodos(): Promise<ITodo[]> {
    return await this._getEntity<ITodo>(this._endpoints.todos);
  }

  async getUsers(): Promise<IUser[]> {
    return await this._getEntity<IUser>(this._endpoints.users);
  }
}
