# Image Search Abstraction Layer
## Functionality:
* pass a search string, get image URLs, alt text and page urls
* paginate through responses by adding an 'offset' query parameter to URL
* get list of most recently submitted search strings

## URL Examples:
#### Search:
``https://desolate-wildwood-72698.herokuapp.com/api/imagesearch/cheese%20stick``
#### Search + Pagination:
``https://desolate-wildwood-72698.herokuapp.com/api/imagesearch/cheese%20stick?offset=8``
#### Recent Searches:
``https://desolate-wildwood-72698.herokuapp.com/api/latest/imagesearch``
