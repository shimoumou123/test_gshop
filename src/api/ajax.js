import axios from "axios";

export default function(url,data={},type='GET'){

    return new promise(function(resolve,reject){
        
        let promise 
        if(type==='GET'){
            let dataStr = ''
            Object.keys(data).forEach(key =>{
                dataStr += key + '=' + data[key] +'&'
            })

            if(dataStr !== ''){
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                url = url + '?' +dataStr
            }
            promise = axios.get(url)
        }else{
            promise = axios.post(url,data)
        }
        promise.then(
            value =>{
                // resolve(value.data)
                console.log(value)
            },
            error =>{
                // reject(error)
                console.log(error)
            }
        )
        
    })

}