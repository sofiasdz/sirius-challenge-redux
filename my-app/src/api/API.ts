export const request = (options: any,message:string) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        ) .catch(err =>{
            if(message) alert(message)
            else{
                alert("API error")
            }
            }

        );

};