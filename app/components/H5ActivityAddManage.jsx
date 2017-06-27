import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/H5ActivityManage.css';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class H5ActivityAddManage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfoState:false,
            H5AddStartDate:moment(),
            h5ActivityTitle:'',
            h5ActivityContent:'',
            h5ActivityKey:'',
            h5ActivityKeyValue:'',
            h5ActivityTitleValid:false,
            h5ActivityContentValid:false,
            h5ActivityKeyValid:false,
            h5ActivityKeyValueValid:false,
            disabled:false
        };
    }

    handleH5AddDateChange(date) {
        this.setState({H5AddStartDate: date});
    }

    handleH5ActivityTitleChange(e){
        this.setState({h5ActivityTitle: e.target.value});
        let value=e.target.value;
        if(value.length == 0){
            this.setState({h5ActivityTitleValid: false});
        }else if(value.length > 10){
            this.setState({h5ActivityTitleValid: false});
        }else{
            this.setState({h5ActivityTitleValid: true});
        }
    }

    handleH5ActivityContentChange(e){
        this.setState({h5ActivityContent: e.target.value});
        let value=e.target.value;
        if(value.length == 0){
            this.setState({h5ActivityContentValid: false});
        }else{
            this.setState({h5ActivityContentValid: true});
        }
    }

    handleH5ActivityKeyChange(e){
        this.setState({h5ActivityManageKey: e.target.value});
        let value=e.target.value;
        if(value.length == 0){
            this.setState({h5ActivityKeyValid: false});
        }else{
            this.setState({h5ActivityKeyValid: true});
        }
    }

    handleH5ActivityValueChange(e){
        this.setState({h5ActivityManageValue: e.target.value});
        let value=e.target.value;
        if(value.length == 0){
            this.setState({h5ActivityKeyValueValid: false});
        }else{
            this.setState({h5ActivityKeyValueValid: true});
        }
    }

    handleh5ActivityChangeValid(field,valid,e){
        let value=e.target.value;
        this.setState({[field]: value});

        switch(field){
            case 'h5ActivityTitle':{
                if(value.length == 0){
                    this.setState({[valid]: false});
                }else if(value.length > 10){
                    this.setState({[valid]: false});
                }else{
                    this.setState({[valid]: true});
                }
                break;
            }
            case 'h5ActivityContent':{
                if(value.length == 0){
                    this.setState({[valid]: false});
                }else{
                    this.setState({[valid]: true});
                }
                break;
            }
            case 'h5ActivityKey':{
                if(value.length == 0){
                    this.setState({[valid]: false});
                }else{
                    this.setState({[valid]: true});
                }
                break;
            }
            case 'h5ActivityKeyValue':{
                if(value.length == 0){
                    this.setState({[valid]: false});
                }else{
                    this.setState({[valid]: true});
                }
                break;
            }
        }
    }

    handleh5ActivitySubmit(e){
        e.preventDefault();
    }

	render(){
        const disabled=(this.state.h5ActivityTitleValid && this.state.h5ActivityContentValid && this.state.h5ActivityKeyValid && this.state.h5ActivityKeyValueValid);
	    return (
            <div className={style.h5ActivityManageBox}>
                <div className={style.h5ActivityTitleManageBox}>
                    <Link to="/h5ActivityManage">全部H5活动</Link>
                    <Link to="/h5ActivityAddManage" className={style.active}>添加H5活动</Link>
                </div>
                <form className={style.h5ActivityAddBox} onSubmit={(e)=>this.handleh5ActivitySubmit(e)}>
                    <div className={style.h5ActivityAddInputGroup+' '+(this.state.h5ActivityTitleValid ? '' : style.required)}>
                        <label htmlFor="h5ActivityTitle">页面标题</label>
                        <input type="text" name="h5ActivityTitle" ref="h5ActivityTitle" value={this.state.h5ActivityTitle} placeholder="请输入内容" onChange={(e)=>this.handleh5ActivityChangeValid('h5ActivityTitle','h5ActivityTitleValid',e)} />
                    </div>
                    <div className={style.h5ActivityAddInputGroup+' '+(this.state.h5ActivityContentValid ? '' : style.required)}>
                        <label htmlFor="h5ActivityContent">页面内容</label>
                        <textarea name="h5ActivityContent" ref="h5ActivityContent" value={this.state.h5ActivityContent} onChange={(e)=>this.handleh5ActivityChangeValid('h5ActivityContent','h5ActivityContentValid',e)}></textarea>
                    </div>
                    <div className={style.h5ActivityAddInputGroup+' '+(this.state.H5AddStartDate ? '' : style.required)}>
                        <label htmlFor="H5AddStartDate">创建时间</label>
                        <DatePicker name="H5AddStartDate" dateFormat="YYYY/MM/DD HH:mm:ss" selected={this.state.H5AddStartDate} className={style.datePicker} />
                    </div>
                    <div className={style.h5ActivityAddInputGroup+' '+style.h5ActivityAddInputGroupS+' '+(this.state.h5ActivityKeyValid ? '' : style.required)}>
                        <label htmlFor="h5ActivityKey">配置键</label>
                        <input type="text" name="h5ActivityKey" ref="h5ActivityKey" value={this.state.h5ActivityKey} placeholder="请输入内容" onChange={(e)=>this.handleh5ActivityChangeValid('h5ActivityKey','h5ActivityKeyValid',e)} />
                    </div>
                    <div className={style.h5ActivityAddInputGroup+' '+style.h5ActivityAddInputGroupS+' '+(this.state.h5ActivityKeyValueValid ? '' : style.required)}>
                        <label htmlFor="h5ActivityKeyValue">配置值</label>
                        <input type="text" name="h5ActivityKeyValue" ref="h5ActivityKeyValue" value={this.state.h5ActivityKeyValue} placeholder="请输入内容" onChange={(e)=>this.handleh5ActivityChangeValid('h5ActivityKeyValue','h5ActivityKeyValueValid',e)} />
                    </div>
                    <input type='submit' className={style.btn+' '+(disabled ? '' : style.disabled)} value="保存" />
                </form>
            </div>
	    )
	}
}

//导出组件
export default H5ActivityAddManage;