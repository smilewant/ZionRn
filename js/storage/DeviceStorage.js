import AsyncStorage from '@react-native-community/async-storage';

export default class DeviceStorage{
    static get(key) {
        // return AsyncStorage.getItem(key).then(
        //     (value) => {
        //         console.log("value : " + value)
        //         const jsonValue = JSON.parse(value);
        //         console.log("jsonValue : " + jsonValue)
        //         return jsonValue;
        //     }
        // )
         
            return AsyncStorage.getItem(
              key,
              (error, result) => {
                  console.log('error : ' + error)
                  console.log('result : ' + result)
                  const jsonValue = JSON.parse(result);
                  console.log('jsonValue : ' + jsonValue)
                  
              }
            ).catch(
                error => console.log(error)
            )
          
 
    }

    static save(key, value) {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    }

    static update(key, value) {
        return DeviceStorage.get(key).then(
            (item) => {
                value = typeof value === 'string' ? value : Object.assign({}, item, value);
                return AsyncStorage.setItem(key, JSON.stringify(value));
            }
        )
    }

    static delete(key) {
        return AsyncStorage.removeItem(key);
    }
}