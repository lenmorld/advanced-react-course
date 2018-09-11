class StateApi {
    constructor(rawData) {
      // this.rawData = rawData;
      this.data = {
        articles: this.mapIntoObject(rawData.articles),
        authors: this.mapIntoObject(rawData.authors),
      };
    }
  
    mapIntoObject(arr) {
      const result = arr.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      }, {});
  
      // console.log(result);
      return result;
    }
  
    // getArticles() {
    //   return this.mapIntoObject(this.rawData.articles);
    // }
  
    // getAuthors() {
    //   return this.mapIntoObject(this.rawData.authors);
    // }

    // now cached in constructor
    getState() {
      return this.data;
    }
  }
  
  export default StateApi;
  