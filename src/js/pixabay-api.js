export const fetchPhotosByQuery = searchedQuery => {
    return fetch(`https://pixabay.com/api/?${searchedQuery}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }

        return response.json();
    })
}