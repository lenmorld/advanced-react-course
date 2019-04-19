class StateApi {
	constructor(rawData) {
		this.data = {
			articles: this.mapIntoObject(rawData.articles),
			authors: this.mapIntoObject(rawData.authors),
			appSearchTerm: ''
		};

		this.subscriptions = {};
		this.lastSubsriptionId = 0;
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

	subscribe = (cb) => {
		this.lastSubsriptionId++;
		this.subscriptions[this.lastSubsriptionId] = cb;
		return this.lastSubsriptionId;
	}

	unsubscribe = (subscriptionId) => {
		delete this.subscriptions[subscriptionId];
	}

	notifySubscribers = () => {
		Object.values(this.subscriptions).forEach((cb) => cb())
	}


	mergeWithState = (stateChange) => {
		this.data = {
			...this.data,
			...stateChange
		}

		this.notifySubscribers();
	}

	setSearchTerm = (appSearchTerm) => {
		// this.data.appSearchTerm = appSearchTerm;

		this.mergeWithState({
			appSearchTerm
		});
	}
 }
 
 export default StateApi;