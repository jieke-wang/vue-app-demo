export default [
    {
        path: '/info',
        name: 'Info',
        meta: {
            isShow: true,
            title: '个人中心',
            icon: 'el-icon-remove-outline'
        },
        component: function () {
            return import(/* webpackChunkName: "info" */ '../views/info.vue')
        }
    },
    {
        path: '/password',
        name: 'Password',
        meta: {
            isShow: true,
            title: '修改密码',
            icon: 'el-icon-minus'
        },
        component: function () {
            return import(/* webpackChunkName: "password" */ '../views/password.vue')
        }
    },
    {
        path: '/user',
        name: 'User',
        meta: {
            isShow: true,
            title: '用户详情',
            icon: 'el-icon-video-camera-solid'
        },
        component: function () {
            return import(/* webpackChunkName: "password" */ '../views/user.vue')
        }
    },
    {
        path: '/userList',
        name: 'UserList',
        meta: {
            isShow: true,
            title: '用户列表',
            icon: 'el-icon-video-camera-solid'
        },
        component: function () {
            return import(/* webpackChunkName: "password" */ '../views/userList.vue')
        }
    }
]