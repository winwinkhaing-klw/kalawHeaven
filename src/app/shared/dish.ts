import { Comment } from '../shared/Comment';
export class Dish {
    id: number | undefined;
    name!: string;
    image: string| undefined;
    category: string| undefined;
    featured: boolean| undefined;
    label: string| undefined;
    price: string| undefined;
    description: string| undefined;
    comments: Comment[] = [];
}