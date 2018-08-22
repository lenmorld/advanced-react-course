class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(arr) {
    const result = arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});

    // console.log(result);
    return result;
  }

  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }

  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;
