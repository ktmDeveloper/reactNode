export default class StateApi{
    constructor(rawData){
        this.data = {
            articles:this.mapIntoObject(rawData.articles),
            authors:this.mapIntoObject(rawData.authors)
        };
    }
    mapIntoObject(arr){ 
        return arr.reduce(function(acc, cur) { //use reduce to change from list of array to objects
                    acc[cur.id] = cur;
                    return acc;
                }, {}); 
    }
    lookupAuthor = (authorId) => this.data.authors[authorId];
    getState = () => this.data;
}