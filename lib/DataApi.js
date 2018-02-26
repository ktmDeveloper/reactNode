export default class DataApi{
    constructor(rawData){
        this.rawData = rawData;
    }
    mapIntoObject(arr){ 
        return arr.reduce(function(acc, cur) { //use reduce to change from list of array to objects
                    acc[cur.id] = cur;
                    return acc;
                }, {}); 
    }
    getArticles(){
        return this.mapIntoObject(this.rawData.articles);
    }

    getAuthors(){
        return this.mapIntoObject(this.rawData.authors);
    }
}