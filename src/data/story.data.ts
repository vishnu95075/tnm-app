export interface Story {
  id: number;
  username: string;
  avatar: string;
  image: string;
  type: string;
  viewed: boolean;
}


export const stories: Story[] = [
  {
    id: 1,
    username: "john",
    avatar: "https://i.pravatar.cc/150?img=1",
    image: "https://picsum.photos/600/900?random=1",
    type: "image",

    viewed: true,
  },
  {
    id: 2,
    username: "emma",
    avatar: "https://i.pravatar.cc/150?img=2",
    image: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "video",
    viewed: false,
  },
  {
    id: 3,
    username: "alex",
    avatar: "https://i.pravatar.cc/150?img=3",
    image: "https://picsum.photos/600/900?random=3",
    type: "image",
    viewed: true,
  },
  {
    id: 4,
    username: "olivia",
    avatar: "https://i.pravatar.cc/150?img=4",
    image: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    type: "video",
    viewed: false,
  },
  {
    id: 5,
    username: "liam",
    avatar: "https://i.pravatar.cc/150?img=5",
    image: "https://picsum.photos/600/900?random=5",
    type: "image",
    viewed: false,
  },
  {
    id: 6,
    username: "oliviasda",
    avatar: "https://i.pravatar.cc/150?img=6",
    image: "https://picsum.photos/600/900?random=6",
    type: "image",
    viewed: false,
  },
  {
    id: 7,
    username: "liamsd",
    avatar: "https://i.pravatar.cc/150?img=7",
    image: "https://picsum.photos/600/900?random=7",
    type: "image",
    viewed: false,
  },
  {
    id: 8,
    username: "oliviaasd",
    avatar: "https://i.pravatar.cc/150?img=8",
    image: "https://picsum.photos/600/900?random=8",
    type: "image",
    viewed: false,
  },
  {
    id: 9,
    username: "liascm",
    avatar: "https://i.pravatar.cc/150?img=9",
    image: "https://picsum.photos/600/900?random=9",
    type: "image",
    viewed: false,
  },
];