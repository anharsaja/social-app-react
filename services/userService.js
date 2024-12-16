import { supabase } from "../lib/subapase"


export const getUserData = async (userId) => {
    try {
        const {data, error} = await supabase
        .from('users');
    } catch(error) {
        console.log('get error', error);
        return {success: false, msg: error.message};
    } 
}