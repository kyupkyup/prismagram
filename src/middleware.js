
export const isAuthenticated = request =>{
    if(!request.user){
        throw Error('you need to login to perform this action');
    }
    return;
}