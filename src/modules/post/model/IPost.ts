import { IUser } from '../../user/model/IUser';

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: IUser['id'];
}
