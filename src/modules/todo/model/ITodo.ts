import { IUser } from '../../user/model/IUser';

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  userId: IUser['id'];
  user: IUser;
}
