import $http from './index'

export const getRouterList = () => $http.get('/routerList.json')