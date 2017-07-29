"use strict";
/**
 * 数据库没有就先进行构造出JSON数据返回给视图层（View）
 *
 * */
module.exports= {
    getHeadInfo:function () {
        var imgList = [
            "src/static/img/small/i16.png",
        ];
        return imgList;
    },
    getFuLiInfo:function () {
        var imgList = [
            "src/static/img/small/w02.png",
            "src/static/img/small/w03.png"
        ];
        return imgList;
    },
    getSetInfo:function () {
    	var imgList =[
    	 "src/static/img/small/w05.png",
    	 "src/static/img/small/w06.png",
    	 "src/static/img/small/w07.png",
    	 "src/static/img/small/w08.png"
    	];
    	 return imgList;
    }
}