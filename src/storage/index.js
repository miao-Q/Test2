/**
 * storage封装
 */
const STORAGE_KEY = 'mall';
export default{
    //存储值
    setItem(key,value,moudle_name){
        if(moudle_name){
            let val = this.getItem(moudle_name);
            val[key] = value;
            this.setItem(moudle_name,val);
        }else{
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
        
        }
    },
    //获取值，获取某一模块下面属性的username
    getItem(key,moudle_name){   
        if(moudle_name){     //如果模块名称岑仔
            let val = this.getItem(moudle_name);    //返回object
            if(val) return val[key];
        } 
        return this.getStorage()[key];


    },
    //获取整个数据
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)||'{}');
    },
    //清空某个方法
    clear(key,moudle_name){
        let val = this.getStorage();
        if(moudle_name){
            delete val[moudle_name][key];
        }else{
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
    }
}