"use strict"
import FaXianConstants from "../constants/FaXianConstants";

/**
 * 说明：该模块是用来提供购物车信息的模块
 * 创建人: henrry
 * 创建日期: 2017/07/22
 */

export default {

    /**
     * 用来获取发现页面的数据
     */
    getFaXianData: function(cb){
        fetch(FaXianConstants.FaXianFetchURL).then((res)=>{
            res.json().then((data)=>{
                cb(data);
            })
        })
    }

}