export interface IPostState {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface IPosts {
  posts: [IPostState] | null
}
