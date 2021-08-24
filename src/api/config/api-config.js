var APIConfig = {
    development: 'https://localhost:44311/'
}

export default APIConfig[process.env.NODE_ENV];