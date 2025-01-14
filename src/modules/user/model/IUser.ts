import { IPost } from '../../post/model/IPost';
import { ITodo } from '../../todo/model/ITodo';

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: number;
    lng: number;
  };
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
  posts: IPost[];
  todos: ITodo[];
}
