import { IUser } from '../../../user/model/IUser';
import { IJsonPlaceHolderService } from '../interface/IJsonPlaceholderService';

export class JsonPlaceholderFacade {
  constructor(
    private readonly _jsonPlaceholderService: IJsonPlaceHolderService
  ) {}

  async getUser(userId: number): Promise<IUser | null> {
    let allUsers = this._jsonPlaceholderService.getUsers();
    const currentUser = (await allUsers).find((user) => user.id === userId);
    let allPosts = await this._jsonPlaceholderService.getPosts();
    let allTodos = await this._jsonPlaceholderService.getTodos();

    if (currentUser) {
      currentUser.posts = allPosts.filter((post) => post.userId === userId);
      currentUser.todos = allTodos.filter((todo) => todo.userId === userId);
      return currentUser;
    } else {
      return null;
    }
  }
}
