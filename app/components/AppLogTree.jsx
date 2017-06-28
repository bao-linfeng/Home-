import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/AppLogTree.css';

class AppLogTree extends React.Component{
    constructor(props){
        super(props);
        this.state={
            version:'',
            description:'',
            platform:'android',
            versionError:false,
            descriptionError:false,
            newLog:false
        };
    }

    handleChange(field,valid,e){
        let value=e.target.value;
        this.setState({[field]:value});

        switch(field){
            case 'version':{
                value ? this.setState({[valid]:true}) : this.setState({[valid]:false});
                break;
            }
            case 'description':{
                value ? this.setState({[valid]:true}) : this.setState({[valid]:false});
                break;
            }
        }
    }

    handleClick(){
        this.setState({newLog:!this.state.newLog});
    }

	render(){
        const disabled=(this.state.versionError && this.state.descriptionError);
	    return (
            <div className={style.AppLogTreeBox}>
                <a className={style.publishLog} onClick={(e)=>this.handleClick(e)}>发布日志</a>
                <div className={style.right}>
                    <div className={style.appLogTreeLeavesBox}>
                        <span></span>
                        <label></label>
                        <div className={style.appLogDetailsBox}>
                            <p><label>版本号:</label>1.0.0</p>
                            <p><label>发布时间:</label>2017.6.28</p>
                            <p><label>发布内容:</label>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.appLogTreeLeavesBox}>
                        <span></span>
                        <label></label>
                        <div className={style.appLogDetailsBox}>
                            <p><label>版本号:</label>1.0.1</p>
                            <p><label>发布时间:</label>2017.6.28</p>
                            <p><label>发布内容:</label>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.appLogTreeLeavesBox}>
                        <span></span>
                        <label></label>
                        <div className={style.appLogDetailsBox}>
                            <p><label>版本号:</label>1.0.2</p>
                            <p><label>发布时间:</label>2017.6.28</p>
                            <p><label>发布内容:</label>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.appLogTreeLeavesBox}>
                        <span></span>
                        <label></label>
                        <div className={style.appLogDetailsBox}>
                            <p><label>版本号:</label>1.0.3</p>
                            <p><label>发布时间:</label>2017.6.28</p>
                            <p><label>发布内容:</label>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.appLogTreeLeavesBox}>
                        <span></span>
                        <label></label>
                        <div className={style.appLogDetailsBox}>
                            <p><label>版本号:</label>1.0.0</p>
                            <p><label>发布时间:</label>2017.6.28</p>
                            <p><label>发布内容:</label>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.appLogTreeLeavesBox}>
                        <span></span>
                        <label></label>
                        <div className={style.appLogDetailsBox}>
                            <p><label>版本号:</label>1.0.1</p>
                            <p><label>发布时间:</label>2017.6.28</p>
                            <p><label>发布内容:</label>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.appLogTreeLeavesBox}>
                        <span></span>
                        <label></label>
                        <div className={style.appLogDetailsBox}>
                            <p><label>版本号:</label>1.0.2</p>
                            <p><label>发布时间:</label>2017.6.28</p>
                            <p><label>发布内容:</label>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.appLogTreeLeavesBox}>
                        <span></span>
                        <label></label>
                        <div className={style.appLogDetailsBox}>
                            <p><label>版本号:</label>1.0.3</p>
                            <p><label>发布时间:</label>2017.6.28</p>
                            <p><label>发布内容:</label>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                                <span>1.bug修改</span>
                            </p>
                        </div>
                    </div>
                </div>
                {
                    !this.state.newLog ? null :
                    <div className={style.publishNewLogBoxBg}>
                        <form className={style.publishNewLogBox}>
                            <p>发布日志<i className='fa fa-close' onClick={(e)=>this.handleClick(e)}></i></p>
                            <div className={style.inputGroup+' '+(this.state.versionError ? '' : style.required)}>
                                <label>版本号</label>
                                <input type="text" value={this.state.version} onChange={(e)=>this.handleChange('version','versionError',e)} />
                            </div>
                            <div className={style.inputGroup+' '+(this.state.descriptionError ? '' : style.required)}>
                                <label>版本描述</label>
                                <input type="text" value={this.state.description} onChange={(e)=>this.handleChange('description','descriptionError',e)} />
                            </div>
                            <div className={style.inputGroup}>
                                <label>平台</label>
                                <select value={this.state.platform} onChange={(e)=>this.handleChange('platform','',e)}>
                                    <option>android</option>
                                    <option>apple</option>
                                </select>
                            </div>
                            <a className={style.btn+' '+(disabled ? '' : style.disabled)}>新建</a>
                        </form>
                    </div>
                }
            </div>
	    )
	}
}

//导出组件
export default AppLogTree;