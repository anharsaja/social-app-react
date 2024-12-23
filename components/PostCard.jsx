import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import Avatar from './Avatar'
import moment from 'moment'
import Icon from '../assets/icons'
import RenderHTML from 'react-native-render-html'

const PostCard = ({
    item,
    currentUser,
    router,
    hasShadow = true,
}) => {
    // console.log('post items: ', item);

    const shadowStyles = {
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 1
    }

    const openPostDetails = () => {
        // later
    }

    const createdAt = moment(item?.created_at).format('MMM D');
    
    return (
        <View style={[styles.container, hasShadow && shadowStyles]}>
            <View style={styles.header}>
                {/* user info and post time */}
                <View style={styles.userInfo}>
                    <Avatar
                        size={hp(4.5)}
                        uri={item?.user?.image}
                        rounded={theme.radius.md}
                    />
                    <View style={{gap: 2}}>
                        <Text style={styles.username}>{item?.user?.name}</Text>
                        <Text style={styles.postTime}>{createdAt}</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={openPostDetails}>
                    <Icon name="threeDotsHorizontal" size={hp(3.4)} strokeWidth={3} color={theme.colors.text}/>
                </TouchableOpacity>
            </View>

            {/* post body and media */}
            <View style={styles.content}>
                <View style={styles.postBody}>
                    {
                        item?.body && (
                            <RenderHTML
                                contentWidth={wp(100)}
                                source={{html: item?.body}}
                            />
                        )
                    }
                </View>
            </View>
        </View>
    )
}

export default PostCard

const styles = StyleSheet.create({
    container: {
        gap: 10,
        marginBottom: 15,
        borderRadius: theme.radius.xxl*1.1,
        borderCurve: 'continuous',
        padding: 10,
        paddingVertical: 12,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: theme.colors.gray,
        shadowColor: '#000'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    username: {
        fontSize: hp(1.7),
        color: theme.colors.textDark,
        fontWeight: theme.fonts.medium
    },
    postTime: {
        fontSize: hp(1.4),
        color: theme.colors.textLight,
        fontWeight: theme.fonts.medium
    },
    content: {
        gap: 10,
        // marginBottom: 10
    },
    postMedia : {
        height: hp(40),
        width: '100%',
        borderRadius: theme.radius.xl,
        borderCurve: 'continuous'
    },
    postBody: {
        marginLeft: 5
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    footerButton: {
        marginLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18
    },
    count: {
        color: theme.colors.text,
        fontSize: hp(1.8)
    }
})