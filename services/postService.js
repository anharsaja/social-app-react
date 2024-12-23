import { supabase } from "../lib/subapase";
import { uplaodFile } from "./imageService";

export const createOrUpdatePost = async (post) => {
    try {
        // upload image
        if (post.file && typeof post.file == 'object'){
            let isImage = post?.file?.type == 'image';
            let folderName = isImage? 'postImages':'postVideos';
            let fileResult = await uplaodFile(folderName, post?.file?.uri, isImage);
            if (fileResult.success) post.file = fileResult.data;
            else{
                return fileResult;
            }
        }

        const {data, error} = await supabase
        .from('posts')
        .upsert(post)
        .select()
        .single();

        if (error){
            console.log('createPost error: ', error);
            return {success: false, msg: 'could not created your post'};
        }

        return {success:  true, data: data};
        
    } catch(error){
        console.log('created error: ', error);
        return {success: false, msg: "could not create your post"};
    }
}

export const fetchPosts = async (limit=10) => {
    try {

    } catch(error){
        console.log('created error: ', error);
        return {success: false, msg: "could not fetch the post"};
    }
}