import apiAxios from "./ApiServer"
import mockAxios from "./MockServer"

//每一个函数对应着一个api
export const getBaseCategoryList = () => apiAxios.get("/product/getBaseCategoryList")
export const getBanners =() => mockAxios.get('/banners')
export const getFloors = () => mockAxios.get('/floors')