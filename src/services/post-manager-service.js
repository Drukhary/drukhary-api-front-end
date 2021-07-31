import FuturePost from "../utils/post";

const SECOND = 10000000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;


export default class PostManagerService {
    getGroups = () => {
        return [
            {name: "vectorianstvo"},
            {name: "solarrider"},
            {name: "sectanstvo"},
            {name: "what a hell is happening"},
            {name: "drukhary"},
            {name: "warhammer40K"}
        ];
    }
    getTimers = () => {
        const date = new Date();
        return [`${date.getHours()}:${date.getMinutes()}`]
    }
    getPosts = () => {
        const post1= new FuturePost();
        post1.friends_only=0;
        post1.owner_id=0;
        post1.message='text ';
        post1.publish_date=0;
        post1.images = [
            {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        }
        ];
        const post2={...post1};
        post2.images=[        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
            {
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },];
        return [
            post2,
            post1
        ];
    }
    getImages = () => [
        // {
        //     src: 'https://picsum.photos/id/1018/250/150/',
        //     title: 'image title',
        //     description: 'image description'
        // },
        // {
        //     src: 'https://picsum.photos/id/1015/250/150/',
        //     title: 'image title',
        //     description: 'image description'
        // },
        // {
        //     src: 'https://picsum.photos/id/1019/250/150/',
        //     title: 'image title',
        //     description: 'image description'
        // },
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];



}