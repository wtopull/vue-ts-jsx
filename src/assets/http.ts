import Vue from 'vue';
import router from '@/router';
import axios from 'axios';
import qs from 'qs';
import { Toast } from 'vant';


// 设置默认请求头
axios.defaults.headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
};
axios.defaults.baseURL = "https://35666j.com/index.php/";
// 请求超时的时间限制
axios.defaults.timeout = 20000;

// 开始设置请求 发起的拦截处理
axios.interceptors.request.use((config: any) => {
    return config;
}, (error: any) => {
    return Promise.reject(error);
});

// 请求到结果的拦截处理
axios.interceptors.response.use((config: any) => {
    // 返回请求正确的结果
    if (config.data.errorcode === 700) {
        router.push({ path: '/login' });  // 进入登陆页面
    }
    return config.data;
}, (error: any) => {
    return Promise.reject(error);
});
// post方法，绑定到vue实例上面的 $post
Vue.prototype.$post = (url: any, params: any) => {
    console.log(params.loading);
    if (params.loading) {
        Toast.loading({
            message: '加载中...',
            forbidClick: true,
            loadingType: 'spinner',
        });
    }
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params)).then((res: any) => {
            Toast.clear();
            resolve(res);
        }).catch((err: any) => {
            reject(err);
        });
    });
};
// get方法，绑定到vue实例上面的 $get
Vue.prototype.$get = (url: any, params: any) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: params }).then((res: any) => {
            resolve(res);
        }).catch((err: any) => {
            reject(err);
        });
    });
};