export const exerciseOptions ={
	method: 'GET',
	hostname: 'exercisedb.p.rapidapi.com',
	headers: {
		'x-rapidapi-key':process.env.REACT_APP_RAPID_API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};


export const youtubeOptions = {
	method: 'GET',
	hostname: 'youtube-search-and-download.p.rapidapi.com',
	headers: {
		'x-rapidapi-key':'8d12417938msh2b029b58fbd4a47p11d908jsn049b99be79d3',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
	const res = await fetch(url, options);
	const data = await res.json();
  
	return data;
};