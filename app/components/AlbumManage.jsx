import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/AlbumManage.css';

const AlbumManageLookOk = () => (
    <ul className={style.pendingList+' '+style.pendingListStatus}>
        <li className={style.pendingListTitle}>
            <span className={style.choice}>每日精选概要</span>
            <span>用户</span>
            <span>专辑</span>
            <span>标签</span>
            <span>自荐时间</span>
            <span>通过原因</span>
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
            <span>内容精彩</span>
        </li>
    </ul>
);

const AlbumManageLookNo = () => (
    <ul className={style.pendingList+' '+style.pendingListStatus}>
        <li className={style.pendingListTitle}>
            <span className={style.choice}>每日精选概要</span>
            <span>用户</span>
            <span>专辑</span>
            <span>标签</span>
            <span>自荐时间</span>
            <span>失败原因</span>
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
            <span>内容涉黄</span>
        </li>
    </ul>
);

const AlbumManageDetails = () => (
    <div className={style.pendingDetailsBoxbg}>
        <div className={style.pendingDetailsBox}>
            <i className="fa fa-close"></i>
            <h1>花语</h1>
            <p>
                <span>作者：阿呆</span>
                <span>时间：2017-6-13</span>
            </p>
            <div className={style.pendingDetails}>
                《魔兽世界》（World of Warcraft）是由著名游戏公司暴雪娱乐所制作的第一款网络游戏，属于大型多人在线角色扮演游戏。游戏以该公司出品的即时战略游戏《魔兽争霸》的剧情为历史背景，依托魔兽争霸的历史事件和英雄人物，魔兽世界有着完整的历史背景时间线。[1]  玩家在魔兽世界中冒险、完成任务、新的历险、探索未知的世界、征服怪物等。
                2003年《魔兽争霸III：冰封王座》发售之后，暴雪娱乐正式宣布了《魔兽世界》的开发计划（之前已经秘密开发了数年之久）。魔兽世界于2004年在北美公开测试，同年11月23日开始在美国、新西兰、加拿大、澳洲与墨西哥发行。截至2008年底，全球的魔兽世界付费用户已超过1150万人，并成功打进吉尼斯世界纪录大全。2008年4月，魔兽世界在MMORPG市场占有率达62%。[2]  截止2014年01月，全世界创建的账号总数已超过一亿（含试玩版账号），人物角色达到5亿。共有244个国家和地区的人在玩《魔兽世界》，包括南极、巴哈马，圣诞岛，以及托克劳群岛之类。[3] 
                在中国大陆的原代理商为第九城市，2005年3月21日下午开始限量测试，同年6月6日正式商业化运营。2009年6月7日起中国地区运营商变更为网易。[4]  [5] 
                2016年9月1日，魔兽世界7.0版本全球同步上线。
                <img src="./images/loginBg.png" />
                《魔兽世界》（World of Warcraft）是由著名游戏公司暴雪娱乐所制作的第一款网络游戏，属于大型多人在线角色扮演游戏。游戏以该公司出品的即时战略游戏《魔兽争霸》的剧情为历史背景，依托魔兽争霸的历史事件和英雄人物，魔兽世界有着完整的历史背景时间线。[1]  玩家在魔兽世界中冒险、完成任务、新的历险、探索未知的世界、征服怪物等。
                2003年《魔兽争霸III：冰封王座》发售之后，暴雪娱乐正式宣布了《魔兽世界》的开发计划（之前已经秘密开发了数年之久）。魔兽世界于2004年在北美公开测试，同年11月23日开始在美国、新西兰、加拿大、澳洲与墨西哥发行。截至2008年底，全球的魔兽世界付费用户已超过1150万人，并成功打进吉尼斯世界纪录大全。2008年4月，魔兽世界在MMORPG市场占有率达62%。[2]  截止2014年01月，全世界创建的账号总数已超过一亿（含试玩版账号），人物角色达到5亿。共有244个国家和地区的人在玩《魔兽世界》，包括南极、巴哈马，圣诞岛，以及托克劳群岛之类。[3] 
                在中国大陆的原代理商为第九城市，2005年3月21日下午开始限量测试，同年6月6日正式商业化运营。2009年6月7日起中国地区运营商变更为网易。[4]  [5] 
                2016年9月1日，魔兽世界7.0版本全球同步上线。
                <img src="./images/loginBg.png" />
                《魔兽世界》（World of Warcraft）是由著名游戏公司暴雪娱乐所制作的第一款网络游戏，属于大型多人在线角色扮演游戏。游戏以该公司出品的即时战略游戏《魔兽争霸》的剧情为历史背景，依托魔兽争霸的历史事件和英雄人物，魔兽世界有着完整的历史背景时间线。[1]  玩家在魔兽世界中冒险、完成任务、新的历险、探索未知的世界、征服怪物等。
                2003年《魔兽争霸III：冰封王座》发售之后，暴雪娱乐正式宣布了《魔兽世界》的开发计划（之前已经秘密开发了数年之久）。魔兽世界于2004年在北美公开测试，同年11月23日开始在美国、新西兰、加拿大、澳洲与墨西哥发行。截至2008年底，全球的魔兽世界付费用户已超过1150万人，并成功打进吉尼斯世界纪录大全。2008年4月，魔兽世界在MMORPG市场占有率达62%。[2]  截止2014年01月，全世界创建的账号总数已超过一亿（含试玩版账号），人物角色达到5亿。共有244个国家和地区的人在玩《魔兽世界》，包括南极、巴哈马，圣诞岛，以及托克劳群岛之类。[3] 
                在中国大陆的原代理商为第九城市，2005年3月21日下午开始限量测试，同年6月6日正式商业化运营。2009年6月7日起中国地区运营商变更为网易。[4]  [5] 
                2016年9月1日，魔兽世界7.0版本全球同步上线。
                <img src="./images/loginBg.png" />
            </div>
            <a className={style.submit}><i className="fa fa-shield"></i>审核</a>
        </div> 
    </div>
);

class AlbumManageLook extends React.Component{
    constructor(props){
        super(props);
        this.state={
            albumDetailsState:false
        };
    }

    handleShowDetails(){
        this.setState({albumDetailsState:!this.state.albumDetailsState});
    }

    render(){
        return (
            <ul className={style.pendingList}>
                <li className={style.pendingListTitle}>
                    <span className={style.checkBox}><label className="checkbox"><input type="checkbox" /><i>✓</i></label></span>
                    <span className={style.choice}>每日精选概要</span>
                    <span>用户</span>
                    <span>专辑</span>
                    <span>标签</span>
                    <span>自荐时间</span>
                </li>
                <li onClick={(e) => this.handleShowDetails(e)}>
                    <span className={style.checkBox}><label className="checkbox"><input type="checkbox" /><i>✓</i></label></span>
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
        )
    }
}

class AlbumManage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lookState:'全部相册',
            albumDetailsState:false,
            albumLookState:true,
            isChecked:false
        };
    }

    componentDidMount(){}

    handleLook(e){
        this.setState({lookState:e.target.text});
    }

    handleShowDetails(){
        this.setState({albumDetailsState:!this.state.albumDetailsState});
    }

    handleAlbumDetailsHide(){
        this.setState({albumDetailsState:!this.state.albumDetailsState});
    }

    handleLookToggle(){
        this.setState({albumLookState:!this.state.albumLookState});
    }

    handleAlbumLooksHide(){
        this.setState({albumLookState:!this.state.albumLookState});
    }

    handleCheckboxChange(e){
        this.setState({isChecked:e.target.value});
    }

    handleCheckboxClick(e){
        e.stopPropagation();
        this.setState({isChecked:!this.state.isChecked});
    }

	render(){
	    return (
            <div className={style.adminContentBox}>
                <div className={style.pendingStatus}>
                    <a className={this.state.lookState == '全部相册' ? style.highLight :null} onClick={(e) => this.handleLook(e)}>全部相册</a>
                    <a className={this.state.lookState == '我发布的' ? style.highLight :null} onClick={(e) => this.handleLook(e)}>我发布的</a>
                    <a className={this.state.lookState == '精选审核' ? style.highLight :null} onClick={(e) => this.handleLook(e)}>精选审核</a>
                    <a className={this.state.lookState == '精选列表' ? style.highLight :null} onClick={(e) => this.handleLook(e)}>精选列表</a>
                    <a className={this.state.lookState == '自荐失败' ? style.highLight :null} onClick={(e) => this.handleLook(e)}>自荐失败</a>
                    {
                        this.state.lookState == 1 ? <span className={style.btn+' '+style.submit} onClick={(e) => this.handleLookToggle(e)}>审核</span> :null
                    }
                </div>
            {/*相册界面*/}
                {
                    this.state.lookState == '全部相册' ? 
                        <ul className={style.pendingList}>
                            <li className={style.pendingListTitle}>
                                <span className={style.checkBox}><label className="checkbox"><input type="checkbox" onClick={(e)=>this.handleCheckboxClick(e)} /><i>✓</i></label></span>
                                <span className={style.choice}>相册详情</span>
                                <span>用户</span>
                                <span>专辑</span>
                                <span>标签</span>
                                <span>自荐时间</span>
                            </li>
                            <li>
                                <span className={style.checkBox}><label className="checkbox"><input type="checkbox" checked={this.state.isChecked} onClick={(e)=>this.handleCheckboxClick(e)} /><i>✓</i></label></span>
                                <span className={style.choice} onClick={(e) => this.handleShowDetails(e)}>
                                    <img src="./images/loginBg.png" />
                                    <h3>常州一日游</h3>
                                    <p>《魔兽世界》（World of Warcraft）是由著名游戏公司暴雪娱乐所制作的第一款网络游戏，属于大型多人在线角色扮演游戏。游戏以该公司出品的即时战略游戏《魔兽争霸》的剧情为历史背景，依托魔兽争霸的历史事件和英雄人物，魔兽世界有着完整的历史背景时间线。[1]  玩家在魔兽世界中冒险、完成任务、新的历险、探索未知的世界、征服怪物等。</p>
                                </span>
                                <span>阿呆</span>
                                <span>日记</span>
                                <span>亲子、旅行、风景、自拍</span>
                                <span>2017-6-5 15:19</span>
                            </li>
                        </ul> :null
                }
            {/*我发布的*/}
                {
                    this.state.lookState == '我发布的' ? 
                        <ul className={style.pendingList}>
                            <li className={style.pendingListTitle}>
                                <span className={style.checkBox}><label className="checkbox"><input type="checkbox" onClick={(e)=>this.handleCheckboxClick(e)} /><i>✓</i></label></span>
                                <span className={style.choice}>每日精选概要</span>
                                <span>用户</span>
                                <span>专辑</span>
                                <span>标签</span>
                                <span>自荐时间</span>
                            </li>
                            <li>
                                <span className={style.checkBox}><label className="checkbox"><input type="checkbox" checked={this.state.isChecked} onClick={(e)=>this.handleCheckboxClick(e)} /><i>✓</i></label></span>
                                <span className={style.choice} onClick={(e) => this.handleShowDetails(e)}>
                                    <img src="./images/loginBg.png" />
                                    <h3>常州一日游</h3>
                                    <p>《魔兽世界》（World of Warcraft）是由著名游戏公司暴雪娱乐所制作的第一款网络游戏，属于大型多人在线角色扮演游戏。游戏以该公司出品的即时战略游戏《魔兽争霸》的剧情为历史背景，依托魔兽争霸的历史事件和英雄人物，魔兽世界有着完整的历史背景时间线。[1]  玩家在魔兽世界中冒险、完成任务、新的历险、探索未知的世界、征服怪物等。</p>
                                </span>
                                <span>阿呆</span>
                                <span>日记</span>
                                <span>亲子、旅行、风景、自拍</span>
                                <span>2017-6-5 15:19</span>
                            </li>
                        </ul> :null
                }
            {/*相册待审核界面*/}
                {
                    this.state.lookState == '精选审核' ? 
                        <ul className={style.pendingList}>
                            <li className={style.pendingListTitle}>
                                <span className={style.checkBox}><label className="checkbox"><input type="checkbox" onClick={(e)=>this.handleCheckboxClick(e)} /><i>✓</i></label></span>
                                <span className={style.choice}>每日精选概要</span>
                                <span>用户</span>
                                <span>专辑</span>
                                <span>标签</span>
                                <span>自荐时间</span>
                            </li>
                            <li>
                                <span className={style.checkBox}><label className="checkbox"><input type="checkbox" checked={this.state.isChecked} onClick={(e)=>this.handleCheckboxClick(e)} /><i>✓</i></label></span>
                                <span className={style.choice} onClick={(e) => this.handleShowDetails(e)}>
                                    <img src="./images/loginBg.png" />
                                    <h3>常州一日游</h3>
                                    <p>《魔兽世界》（World of Warcraft）是由著名游戏公司暴雪娱乐所制作的第一款网络游戏，属于大型多人在线角色扮演游戏。游戏以该公司出品的即时战略游戏《魔兽争霸》的剧情为历史背景，依托魔兽争霸的历史事件和英雄人物，魔兽世界有着完整的历史背景时间线。[1]  玩家在魔兽世界中冒险、完成任务、新的历险、探索未知的世界、征服怪物等。</p>
                                </span>
                                <span>阿呆</span>
                                <span>日记</span>
                                <span>亲子、旅行、风景、自拍</span>
                                <span>2017-6-5 15:19</span>
                            </li>
                        </ul> :null
                }
            {/*相册审核成功界面*/}
                {
                    this.state.lookState == '精选列表' ? <AlbumManageLookOk /> :null
                }
            {/*相册审核失败界面*/}
                {
                    this.state.lookState == '自荐失败' ? <AlbumManageLookNo /> :null
                }
            {/*相册详情界面*/}
                {
                    !this.state.albumDetailsState ? null : 
                        <div className={style.pendingDetailsBoxbg}>
                            <div className={style.pendingDetailsBox}>
                                <i className="fa fa-close" onClick={(e) => this.handleAlbumDetailsHide(e)}></i>
                                <h1>花语</h1>
                                <p>
                                    <span>作者：阿呆</span>
                                    <span>时间：2017-6-13</span>
                                </p>
                                <div className={style.pendingDetails}>
                                    《魔兽世界》（World of Warcraft）是由著名游戏公司暴雪娱乐所制作的第一款网络游戏，属于大型多人在线角色扮演游戏。游戏以该公司出品的即时战略游戏《魔兽争霸》的剧情为历史背景，依托魔兽争霸的历史事件和英雄人物，魔兽世界有着完整的历史背景时间线。[1]  玩家在魔兽世界中冒险、完成任务、新的历险、探索未知的世界、征服怪物等。
                                    2003年《魔兽争霸III：冰封王座》发售之后，暴雪娱乐正式宣布了《魔兽世界》的开发计划（之前已经秘密开发了数年之久）。魔兽世界于2004年在北美公开测试，同年11月23日开始在美国、新西兰、加拿大、澳洲与墨西哥发行。截至2008年底，全球的魔兽世界付费用户已超过1150万人，并成功打进吉尼斯世界纪录大全。2008年4月，魔兽世界在MMORPG市场占有率达62%。[2]  截止2014年01月，全世界创建的账号总数已超过一亿（含试玩版账号），人物角色达到5亿。共有244个国家和地区的人在玩《魔兽世界》，包括南极、巴哈马，圣诞岛，以及托克劳群岛之类。[3] 
                                    在中国大陆的原代理商为第九城市，2005年3月21日下午开始限量测试，同年6月6日正式商业化运营。2009年6月7日起中国地区运营商变更为网易。[4]  [5] 
                                    2016年9月1日，魔兽世界7.0版本全球同步上线。
                                    <img src="./images/loginBg.png" />
                                    《魔兽世界》（World of Warcraft）是由著名游戏公司暴雪娱乐所制作的第一款网络游戏，属于大型多人在线角色扮演游戏。游戏以该公司出品的即时战略游戏《魔兽争霸》的剧情为历史背景，依托魔兽争霸的历史事件和英雄人物，魔兽世界有着完整的历史背景时间线。[1]  玩家在魔兽世界中冒险、完成任务、新的历险、探索未知的世界、征服怪物等。
                                    2003年《魔兽争霸III：冰封王座》发售之后，暴雪娱乐正式宣布了《魔兽世界》的开发计划（之前已经秘密开发了数年之久）。魔兽世界于2004年在北美公开测试，同年11月23日开始在美国、新西兰、加拿大、澳洲与墨西哥发行。截至2008年底，全球的魔兽世界付费用户已超过1150万人，并成功打进吉尼斯世界纪录大全。2008年4月，魔兽世界在MMORPG市场占有率达62%。[2]  截止2014年01月，全世界创建的账号总数已超过一亿（含试玩版账号），人物角色达到5亿。共有244个国家和地区的人在玩《魔兽世界》，包括南极、巴哈马，圣诞岛，以及托克劳群岛之类。[3] 
                                    在中国大陆的原代理商为第九城市，2005年3月21日下午开始限量测试，同年6月6日正式商业化运营。2009年6月7日起中国地区运营商变更为网易。[4]  [5] 
                                    2016年9月1日，魔兽世界7.0版本全球同步上线。
                                    <img src="./images/loginBg.png" />
                                    《魔兽世界》（World of Warcraft）是由著名游戏公司暴雪娱乐所制作的第一款网络游戏，属于大型多人在线角色扮演游戏。游戏以该公司出品的即时战略游戏《魔兽争霸》的剧情为历史背景，依托魔兽争霸的历史事件和英雄人物，魔兽世界有着完整的历史背景时间线。[1]  玩家在魔兽世界中冒险、完成任务、新的历险、探索未知的世界、征服怪物等。
                                    2003年《魔兽争霸III：冰封王座》发售之后，暴雪娱乐正式宣布了《魔兽世界》的开发计划（之前已经秘密开发了数年之久）。魔兽世界于2004年在北美公开测试，同年11月23日开始在美国、新西兰、加拿大、澳洲与墨西哥发行。截至2008年底，全球的魔兽世界付费用户已超过1150万人，并成功打进吉尼斯世界纪录大全。2008年4月，魔兽世界在MMORPG市场占有率达62%。[2]  截止2014年01月，全世界创建的账号总数已超过一亿（含试玩版账号），人物角色达到5亿。共有244个国家和地区的人在玩《魔兽世界》，包括南极、巴哈马，圣诞岛，以及托克劳群岛之类。[3] 
                                    在中国大陆的原代理商为第九城市，2005年3月21日下午开始限量测试，同年6月6日正式商业化运营。2009年6月7日起中国地区运营商变更为网易。[4]  [5] 
                                    2016年9月1日，魔兽世界7.0版本全球同步上线。
                                    <img src="./images/loginBg.png" />
                                </div>
                                <a className={style.submit} onClick={(e) => this.handleLookToggle(e)}><i className="fa fa-shield"></i>审核</a>
                            </div> 
                        </div>
                }
            {/*相册神而活界面*/}
                {
                    this.state.albumLookState ? null :
                        <div className={style.pengdingLookBoxbg}>
                            <div className={style.pengdingLookBox}>
                                <i className="fa fa-close" onClick={(e) => this.handleAlbumLooksHide(e)}></i>
                                <h3>相册精选审核</h3>
                                <div className="checkbox radio">
                                    <label><input type="radio" name="pending" checked /><i>✓</i>审核通过</label>
                                </div>
                                <div className="checkbox radio">
                                    <label><input type="radio" name="pending" /><i>✓</i>审核失败</label>
                                </div>
                                <input type='text' name='lookCause' className={style.lookCause} placeholder="请输入原因" />
                                <a className={style.submit}>确定</a>
                            </div>
                        </div>
                }
            </div>
	    )
	}
}

//导出组件
export default AlbumManage;