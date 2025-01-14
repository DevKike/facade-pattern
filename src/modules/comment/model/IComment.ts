import { IPost } from '../../post/model/IPost';

export interface IComment {
  id: number;
  name: string;
  body: string;
  email: string;
  postId: IPost['id'];
}
