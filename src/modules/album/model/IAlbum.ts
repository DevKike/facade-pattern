import { IUser } from '../../user/model/IUser';

export interface IAlbum {
  id: number;
  title: string;
  userId: IUser['id'];
}
