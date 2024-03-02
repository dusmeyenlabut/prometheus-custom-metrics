const check_url = async (url: string) => {
    let response: number = 0;
    try {
        await fetch(url)
        .then(res => {
            if(res.status == 200){
                response = 1;
            }
        })
        .catch(err => {
            console.log(err);
        })
        return response;
    } catch (error) {
        console.log(error);
        return response;
    }

}
export { check_url };