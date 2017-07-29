"use strict";
/**
 * 数据库没有就先进行构造出JSON数据返回给视图层（View）
 *
 * */
module.exports= {
    getBoxInfo:function () {
        var imgList = [
//          1
            "src/static/img/small/x01.png",
            "src/static/img/small/x02.png",
//          2
            "src/static/img/small/x03.png",
            "src/static/img/small/x04.png",
            "src/static/img/small/x05.png",
            "src/static/img/small/x06.png",
            "src/static/img/small/x09.png",
//          3
     "      src/static/img/small/g01.png",
            "src/static/img/small/g02.png",
            ];
        return imgList;
    }
}