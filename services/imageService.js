import { decode } from 'base64-arraybuffer';
import * as FileSystem from 'expo-file-system';
import { supabase } from '../lib/subapase';


export const getUserImageSrc = imagePath => {
    if (imagePath) {
        return { uri: imagePath };
    } else {
        return require('../assets/images/defaultUser.png');
    }
}

export const uplaodFile = async (folderName, fileUri, isImage = true) => {
    try {
        let fileName = getFilePath(folderName, isImage);
        const fileBase64 = await FileSystem.readAsStringAsync(fileUri, {
            encoding: FileSystem.EncodingType.Base64
        });
        let iamgeData = decode(fileBase64); // array buffer
        let { data, error } = await supabase
            .storage
            .from('uploads')
            .upload(fileName, iamgeData, {
                cacheControl: '3600',
                upsert: false,
                contentType: isImage ? 'image/*' : 'video/*'
            });
        if (error) {
            console.log('file upload error: ', error);
            return { success: false, msg: 'could not upload media' };
        }

        // console.log('data: ', data);
        return {success: true, data: data.path};


    } catch (error) {
        console.log('file upload error: ', error);
        return { success: false, msg: 'could not upload media' };
    }
}

export const getFilePath = (folderName, isImage) => {
    return `/${folderName}/${(new Date()).getTime()}${isImage ? '.png' : '.mp4'}`
}