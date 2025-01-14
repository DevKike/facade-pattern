import { IAlbum } from '../../album/model/IAlbum';

export interface IPhoto {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: IAlbum['id'];
}
