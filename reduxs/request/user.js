import service from './index'

export const getUser = () =>{
    return service.get("https://jsonplaceholder.typicode.com/users")
}