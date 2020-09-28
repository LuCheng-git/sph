import Mock from 'mockjs'
import  banners from './json/banners.json'
import floors from './json/floors.json'

Mock.mock("/mock/banners",{
    code:200,
    data:banners
})

Mock.mock("/mock/floors",{
    code:200,
    data:floors
})