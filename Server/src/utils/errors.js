module.exports = (res, error) => {
    const { response } = error;

    if (response){
        const { status, data } = response;
        const statusCode = status || 404;
        const errrorMessage = data.error || "No existe el personaje";
        
        res.status(statusCode).send(errrorMessage)
    } else {
        res.status(500).send('Internal Server Error')
    }
}