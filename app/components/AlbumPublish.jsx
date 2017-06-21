import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/AlbumPublish.css';
import $ from 'jquery';

const genealogy=['亲情相册','日记','大学生活','黄山游记'];

class AlbumPublish extends React.Component{
    constructor(props){
        super(props);
        this.state={
            AlbumPublishTitleState:'发表文章',
            selectStatus:false,
            volumeNumber:'亲情相册',
            albumPublishTitleLength:0,
            albumPublishCover:false,
            publishPicInitState:false,
            AlbumAddState:false,
            albumEditState:false
        };
    }

    componentDidMount(){

    }

    handleAlbumPublishTitleClick(e){
        this.setState({AlbumPublishTitleState:e.target.text});
    }

    handleToggleSelect(){
        this.setState({selectStatus: !this.state.selectStatus});
    }

    handleChangeOption(e){
        this.setState({volumeNumber: e.target.id});
        this.setState({selectStatus: !this.state.selectStatus});
    }

    handleInputChange(e){
        this.setState({albumPublishTitleLength: e.target.value.length});
    }

    handleCoverShow(){
        this.setState({albumPublishCover: !this.state.albumPublishCover});
    }
    handleCoverHide(){
        this.setState({albumPublishCover: !this.state.albumPublishCover});
    }

    handlePublishPicInitHide(){
        this.setState({publishPicInitState: !this.state.publishPicInitState});
    }

    handleAddAlbumClose(){
        this.setState({AlbumAddState: !this.state.AlbumAddState});
    }

    handleAlbumEdit(){
        this.setState({albumEditState: !this.state.albumEditState});
    }

	render(){
	    return (
            <div className={style.albumPublishBox}>
                <div className={style.albumPublishTitleBox}>
                    <a className={this.state.AlbumPublishTitleState == '发表文章' ? style.highLight :null} onClick={(e) => this.handleAlbumPublishTitleClick(e)}>发表文章</a>
                    <a className={this.state.AlbumPublishTitleState == '新建相册' ? style.highLight :null} onClick={(e) => this.handleAlbumPublishTitleClick(e)}>新建相册</a>
                    <a className={this.state.AlbumPublishTitleState == '专辑' ? style.highLight :null} onClick={(e) => this.handleAlbumPublishTitleClick(e)}>专辑</a>
                </div>
            {/*发表文章*/}
                {
                    this.state.AlbumPublishTitleState == '发表文章' ? 
                        <div className={style.publishArticleBox}>
                            <form className={style.publishArticleForm}>
                                <div className={style.articleTitleInput}>
                                    <input type="text" name="" placeholder="标题(0-50字)" maxLength="50" onChange={(e)=>this.handleInputChange(e)} />
                                    <span>{this.state.albumPublishTitleLength}/50</span>
                                </div>
                                <div className={style.articleContentInput}>
                                    <textarea></textarea>
                                </div>
                                <div className={style.articleSelect}>
                                    <label className={style.label}>封面</label>
                                    <label className={style.checkbox}><input type="radio" name="cover" checked={this.state.albumPublishCover} onClick={(e)=>this.handleCoverShow(e)} /><i>✓</i>设置封面</label>
                                    <label className={style.checkbox}><input type="radio" name="cover" checked={!this.state.albumPublishCover} onClick={(e)=>this.handleCoverHide(e)} /><i>✓</i>自动</label>
                                </div>
                                {
                                    !this.state.albumPublishCover ? null :
                                        <div className={style.uploadCoverBox}>
                                            <i className="fa fa-plus"></i>
                                        </div>
                                }
                                <div className={style.articleSelect}>
                                    <label className={style.label}>是否精选</label>
                                    <label className={style.checkbox}><input type="radio" name="choice" checked /><i>✓</i>是</label>
                                    <label className={style.checkbox}><input type="radio" name="choice" /><i>✓</i>否</label>
                                </div>
                                <div className={style.articleSelect}>
                                    <label className={style.label}>专辑</label>
                                    <ul className="select">
                                        <li className="show" onClick={(e) => this.handleToggleSelect(e)}>
                                            {this.state.volumeNumber}
                                        </li>
                                        {
                                            !this.state.selectStatus ? null:
                                            <li>
                                                <ul className="option">
                                                {
                                                    genealogy.map((text,index) => {
                                                        return <li key={index} id={text} onClick={(e) => this.handleChangeOption(e)}>{text}</li>
                                                    })
                                                }
                                                </ul>
                                            </li>
                                        }
                                    </ul>
                                </div>
                                <div className={style.articleSelect}>
                                    <label className={style.label}>谁可以看</label>
                                    <label className={style.checkbox}><input type="radio" name="publish" checked /><i>✓</i>公开所有用户可见</label>
                                </div>
                                <div className={style.articleSelect}>
                                    <label className={style.label}>位置</label>
                                    <input type="text" name="address" />
                                </div>
                                <div className={style.articleSelect}>
                                    <label className={style.label}>时间</label>
                                    <input type="text" name="publishTime" id="publishTime" />
                                </div>
                                <div className={style.articleSelect}>
                                    <a className={style.btn}>发表</a>
                                    <a className={style.btn+' '+style.disabled}>客户端预览</a>
                                </div>
                            </form>
                        </div> :null
                }
            {/*新建相册*/}
                {
                    this.state.AlbumPublishTitleState == '新建相册' ? 
                        <div className={style.publishArticleBox}>
                            <form className={style.publishArticleForm}>
                            {
                                this.state.publishPicInitState ? null :
                                    <div className={style.publishPicInitBox}>
                                        <img src="./images/newPicAlbum.png" />
                                        <a className={style.btn+' '+style.addPic} onClick={(e)=>this.handlePublishPicInitHide(e)}>添加照片</a>
                                    </div>
                            }
                            {
                                !this.state.publishPicInitState ? null :
                                <div className={style.publishPicListBox}>
                                    <div className={style.picListBox}>
                                        <img src="./images/loginBg.png" />
                                        <textarea value="图片说明（不超过200字）"></textarea>
                                        <i className="fa fa-image"></i>
                                        <i className="fa fa-trash"></i>
                                        <i className="fa fa-navicon"></i>
                                    </div>
                                    <a className={style.btn+' '+style.addPic}>添加照片</a>
                                </div>
                            }
                                <div className={style.albumTitleInput}>
                                    <label className={style.label}>标题</label>
                                    <input type="text" name="" maxLength="50" onChange={(e)=>this.handleInputChange(e)} />
                                    <span>{this.state.albumPublishTitleLength}/50</span>
                                </div>
                                <div className={style.articleSelect}>
                                    <label className={style.label}>封面</label>
                                    <label className={style.checkbox}><input type="radio" name="cover" checked={this.state.albumPublishCover} onClick={(e)=>this.handleCoverShow(e)} /><i>✓</i>设置封面</label>
                                    <label className={style.checkbox}><input type="radio" name="cover" checked={!this.state.albumPublishCover} onClick={(e)=>this.handleCoverHide(e)} /><i>✓</i>自动</label>
                                </div>
                                {
                                    !this.state.albumPublishCover ? null :
                                        <div className={style.uploadCoverBox}>
                                            <i className="fa fa-plus"></i>
                                        </div>
                                }
                                <div className={style.articleSelect}>
                                    <label className={style.label}>是否精选</label>
                                    <label className={style.checkbox}><input type="radio" name="choice" checked /><i>✓</i>是</label>
                                    <label className={style.checkbox}><input type="radio" name="choice" /><i>✓</i>否</label>
                                </div>
                                <div className={style.articleSelect}>
                                    <label className={style.label}>专辑</label>
                                    <ul className="select">
                                        <li className="show" onClick={(e) => this.handleToggleSelect(e)}>
                                            {this.state.volumeNumber}
                                        </li>
                                        {
                                            !this.state.selectStatus ? null:
                                            <li>
                                                <ul className="option">
                                                {
                                                    genealogy.map((text,index) => {
                                                        return <li key={index} id={text} onClick={(e) => this.handleChangeOption(e)}>{text}</li>
                                                    })
                                                }
                                                </ul>
                                            </li>
                                        }
                                    </ul>
                                </div>
                                <div className={style.articleSelect}>
                                    <label className={style.label}>谁可以看</label>
                                    <label className={style.checkbox}><input type="radio" name="publish" checked /><i>✓</i>公开所有用户可见</label>
                                </div>
                                <div className={style.articleSelect}>
                                    <label className={style.label}>位置</label>
                                    <input type="text" name="address" />
                                </div>
                                <div className={style.articleSelect}>
                                    <label className={style.label}>时间</label>
                                    <input type="text" name="publishTime" id="publishTime" />
                                </div>
                                <div className={style.articleSelect}>
                                    <a className={style.btn}>发表</a>
                                    <a className={style.btn+' '+style.disabled}>客户端预览</a>
                                </div>
                            </form>
                        </div> :null
                }
            {/*专辑*/}
                {
                    this.state.AlbumPublishTitleState == '专辑' ? 
                        <div className={style.publishAlbumBox}>
                            <div className={style.publishAlbumListBox}>
                                <img src="./images/loginBg.png" />
                                <p>亲情相册</p>
                                <span>相册文章数：64</span>
                                <label>默认</label>
                            </div>
                            <div className={style.publishAlbumListBox}>
                                <img src="./images/loginBg.png" />
                                <p>微习惯</p>
                                <span>相册文章数：64</span>
                                <label>默认</label>
                            </div>
                            <div className={style.publishAlbumListBox}>
                                <img src="./images/loginBg.png" />
                                {
                                    this.state.albumEditState ? 
                                    <form className={style.albumEditForm}>
                                        <div className={style.albumEditInput}>
                                            <label>专辑名称</label>
                                            <input type="text" value="大学生活" />
                                        </div>
                                        <div className={style.albumEditInput+' '+style.last}>
                                            <label>分类</label>
                                            <ul className="select">
                                                <li className="show" onClick={(e) => this.handleToggleSelect(e)}>{this.state.volumeNumber}</li>
                                                {
                                                    !this.state.selectStatus ? null:
                                                    <li>
                                                        <ul className="option">
                                                        {
                                                            genealogy.map((text,index) => {
                                                                return <li key={index} id={text} onClick={(e) => this.handleChangeOption(e)}>{text}</li>
                                                            })
                                                        }
                                                        </ul>
                                                    </li>
                                                }
                                            </ul>
                                        </div>
                                        <a className={style.albumEditBtn} onClick={(e)=>this.handleAlbumEdit(e)}>保存</a>
                                    </form>
                                    : 
                                    <div>
                                        <p>大学生活</p>
                                        <span>相册文章数：64</span>
                                        <span>分类：大学生活</span>
                                    </div>
                                }
                                <div className={style.albumListActionBox}>
                                    {
                                        this.state.albumEditState ? null : <i className="fa fa-edit" onClick={(e)=>this.handleAlbumEdit(e)}></i>
                                    }
                                    <i className="fa fa-trash"></i>
                                </div>
                            </div>
                            <a className={style.btn+' '+style.addAlbum} onClick={(e)=>this.handleAddAlbumClose(e)}>添加</a>
                        </div> :null
                }
            {/*专辑添加*/}
                {
                    this.state.AlbumAddState ? 
                        <div className={style.addAlbumBoxBg}>
                            <div className={style.addAlbumBox}>
                                <span>专辑添加<i className="fa fa-close" onClick={(e)=>this.handleAddAlbumClose(e)}></i></span>
                                <form className={style.addAlbumForm}>
                                    <div className={style.addAlbumInput}>
                                        <label>专辑名称</label>
                                        <input type="text" />
                                    </div>
                                    <div className={style.addAlbumInput}>
                                        <label>分类</label>
                                        <ul className="select">
                                            <li className="show" onClick={(e) => this.handleToggleSelect(e)}>
                                                {this.state.volumeNumber}
                                            </li>
                                            {
                                                !this.state.selectStatus ? null:
                                                <li>
                                                    <ul className="option">
                                                    {
                                                        genealogy.map((text,index) => {
                                                            return <li key={index} id={text} onClick={(e) => this.handleChangeOption(e)}>{text}</li>
                                                        })
                                                    }
                                                    </ul>
                                                </li>
                                            }
                                        </ul>
                                    </div>
                                    <div className={style.btnBox}>
                                        <a className={style.btn}>确定</a>
                                        <a className={style.btn+' '+style.disabled}>取消</a>
                                    </div>
                                </form>
                            </div>
                        </div> :null
                }
            </div>
	    )
	}
}

//导出组件
export default AlbumPublish;