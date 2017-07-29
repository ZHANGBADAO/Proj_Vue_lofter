"use strict";
/**
 * 数据库没有就先进行构造出JSON数据返回给视图层（View）
 *
 * */
export default {


    getFooter_img: function () {
        var imgList = [
            "src/static/img/small/i3.png",
            "src/static/img/small/i4.png",
            "src/static/img/small/i5.png",
            "src/static/img/small/i6.png",
            "src/static/img/small/i7.png",


        ];
        return imgList;
    }

}