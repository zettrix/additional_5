module.exports = function check(str, bracketsConfig) {
    var set = [];
    var cloneStr = str;
    var strLength = str.length;
  
    if(str.length%2 !== 0){
        return false;
    } else{
        for(var i = 0; i < bracketsConfig.length; i++){
            set[i] = bracketsConfig[i][0] + bracketsConfig[i][1];
        }
       for(var i = 0; i < cloneStr.length; i++){
            for(var j = 0; j < set.length; j++){
                str = str.split(set[j]).join('');
                strLength = str.length;
            }
            if(strLength == 0) break;
       }
       if(strLength == 0){
           return true;
       }
    }
    return false;
}
