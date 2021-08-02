export default class NasaApiGov {
    _baseApi = "https://images-api.nasa.gov/";

    getSearch = (searchString) => {
        const {_baseApi} = this;
        return fetch(`${_baseApi}search?q=${searchString}&page=1&media_type=image`)
            .then(response => response.json())
            .then(({collection}) =>
                Promise.all(collection.items.map(item => {
                        if (item?.href)
                            return fetch(item.href)
                                .then(response => response.json())
                                .then(list => list.slice(1, -1))
                                .then(uris => ({
                                        data:item.data[0],
                                        image: {
                                            original: uris[0],
                                            thumbnail: uris[uris.length - 1]
                                        }
                                    }
                                ));
                        else
                            return new Promise(resolve => resolve('no image'));
                    }
                )))
            .catch(err => err);
    }
}