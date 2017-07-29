"use strict";
/**
 * 数据库没有就先进行构造出JSON数据返回给视图层（View）
 *
 * */
module.exports= {
    //获取头部和广告位的图片
    getHeaderImg: function () {
        var imgList = ["src/static/img/small/i1.png",];
        return imgList;
    },
    getWoDeImg: function () {
        var imgList = [
            "src/static/img/small/d01.png",
            "src/static/img/small/d02.png",
            "src/static/img/small/d03.png",
            "src/static/img/small/d04.png",
            "src/static/img/small/d05.png",
        ];
        return imgList;
    },


}