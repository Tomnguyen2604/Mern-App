import { INIT_STATE } from "../../constant";
import { getPosts } from "../actions";

export default function postsReducer(state = INIT_STATE.posts, action){
    switch(action.type){
        case getPosts.getPostRequest():
            break;
        default:
            return state;
    }
}