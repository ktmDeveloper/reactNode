export default class StateApi{
    constructor(rawData){
        this.data = {
            articles:this.mapIntoObject(rawData.articles),
            authors:this.mapIntoObject(rawData.authors),
            searchTerm: ''
        };
        this.subscription = {};
        this.lastSubscriptionId = 100;
    }
    mapIntoObject(arr){ 
        return arr.reduce(function(acc, cur) { //use reduce to change from list of array to objects
                    acc[cur.id] = cur;
                    return acc;
                }, {}); 
    }
    lookupAuthor = (authorId) => this.data.authors[authorId];
    getState = () => this.data;
    subscribe = (cb) => {
        this.lastSubscriptionId++;
        this.subscription[this.lastSubscriptionId] = cb;
        return this.lastSubscriptionId;
    }
    unsubscribe = (subscriptionId) => {
        delete this.subscription[subscriptionId];
    }
    notifySubscribers = () => {
        Object.values(this.subscription).forEach((cb) => cb());
    }
    setSearchTerm = (searchTerm) => {
        this.data.searchTerm = searchTerm;
        this.notifySubscribers();
    }
}