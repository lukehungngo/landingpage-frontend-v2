import * as constant from './constant'
export const PostEmail = ({email, cb}) => {
    type: constant.POST_EMAIL,
    payload: {
        email,
        cb
    }
}