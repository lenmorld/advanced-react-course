class StateApi {
    constructor(rawData) {
      // this.rawData = rawData;
      this.data = {
        articles: this.mapIntoObject(rawData.articles),
        authors: this.mapIntoObject(rawData.authors),
      };

      this.lookupAuthor = this.lookupAuthor.bind(this);
      this.getState = this.getState.bind(this);
    }
  
    mapIntoObject(arr) {
      const result = arr.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      }, {});
  
      // console.log(result);
      return result;
    }

    // lookupAuthor = () => {}    // if class-properties are enabled
    lookupAuthor(authorId) {
      return this.data.authors[authorId];
    }
  
    getState() {
      return this.data;
    }
  }
  
  export default StateApi;
  