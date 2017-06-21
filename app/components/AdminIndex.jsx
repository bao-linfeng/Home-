import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/App.css';

class AdminIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:0
        };
    }

	render(){
	    return (
            <div className={style.adminContentBox}>
                <div className={style.adminContentListBox+' '+style.adminContentListEditBox}>
                    <i className="fa fa-edit"></i>
                    <p>发布相册</p>
                </div>
                <div className={style.adminContentListBox}>
                    <span>23</span>
                    <p>新增用户数</p>
                </div>
                <div className={style.adminContentListBox}>
                    <span>1370</span>
                    <p>用户总数</p>
                </div>
                <div className={style.adminContentListBox+' '+style.last}>
                    <span>34566</span>
                    <p>累计相册篇数</p>
                </div>
                <div className={style.NewAlbumListBox}>
                    <div className={style.NewAlbumListTitle}>
                        <span>最新相册</span>
                        <a href="">查看更多&gt;</a>
                    </div>
                    <ul className={style.pendingList} id="pendingList">
                        <li>
                            <span className={style.choice}>相册概要</span>
                            <span>用户</span>
                            <span>专辑</span>
                            <span>分类</span>
                            <span>发布时间</span>
                        </li>
                        <li>
                            <span className={style.choice}>
                                <img src="./images/loginBg.png" />
                                <h3>常州一日游</h3>
                                <p>《魔兽世界》（World of Warcraft）是由著名游戏公司暴雪娱乐所制作的第一款网络游戏，属于大型多人在线角色扮演游戏。游戏以该公司出品的即时战略游戏《魔兽争霸》的剧情为历史背景，依托魔兽争霸的历史事件和英雄人物，魔兽世界有着完整的历史背景时间线。[1]  玩家在魔兽世界中冒险、完成任务、新的历险、探索未知的世界、征服怪物等。</p>
                            </span>
                            <span>阿呆</span>
                            <span>日记</span>
                            <span>亲子、旅行、风景、自拍</span>
                            <span>2017-6-5 15:19</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
	    )
	}
}

//导出组件
export default AdminIndex;