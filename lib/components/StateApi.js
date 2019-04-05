class StateApi {
	constructor(rawData) {
		// this.rawData = rawData;
		this.data = {
			articles: this.mapIntoObject(rawData.articles),
			authors: this.mapIntoObject(rawData.authors) 
		};
	}
 
	mapIntoObject(arr) {
	  const result = arr.reduce((acc, curr) => {
		 acc[curr.id] = curr;
		 return acc;
		}, {});
		
		return result;
	}

	articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
	}
	
	lookupAuthor = (authorId) => { 
		return this.data.authors[authorId];
	}
 
	// getArticles() {
	//   return this.mapIntoObject(this.rawData.articles);
	// }
 
	// getAuthors() {
	//   return this.mapIntoObject(this.rawData.authors);
	// }

	getState() {
		return this.data;

		// reduces the compotation every time, since it's intialized before
		// return {
		// 	articles: this.getArticles(),
		// 	authors: this.getAuthors(),
		// }
	}
 }
 
 export default StateApi;