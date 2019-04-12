class StateApi {
	constructor(rawData) {
		this.data = {
			articles: this.mapIntoObject(rawData.articles),
			authors: this.mapIntoObject(rawData.authors),
			appSearchTerm: ''
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

	getState() {
		return this.data;
	}
 }
 
 export default StateApi;