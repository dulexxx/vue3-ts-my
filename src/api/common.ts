/*
公共請求
*/
import https from './axios'
interface ResponseData<T = any> {
    status: number;
    msg: string;
    data: T
}
// export const gitUesInfo<ResponseData<{

// }>> = () => {
//     return https({
//         method:'get',
//         url:'login/info'
//     })
// }
export const gitUesInfo = () => {
    return https.get<ResponseData<{
        login_logo: string;
        logo_rectangle: string;
        logo_square: string;
        slide: []
    }>>('/admin/login/info')
}