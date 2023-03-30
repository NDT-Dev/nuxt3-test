
const getPost = () => {
    return fetch(`https://fakestoreapi.com/products`)
    .then(res => res.json())
    .then(posts => console.log(posts))
}