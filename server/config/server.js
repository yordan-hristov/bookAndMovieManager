const serverConfig = {
    development: {
        PORT: 5000,
        DB_CONNECTION: 'mongodb://localhost:27017/bookAndMovieManager',
        CLIENT_HOST: 'http://localhost:3000'
    },
    production: {
        PORT: process.env.PORT,
        DB_CONNECTION: 'mongodb+srv://yordan11:GRIfxj9zYl5M6IBn@bookandmoviemanager.kdqnj.mongodb.net/bookAndMovieManager?retryWrites=true&w=majority',
        CLIENT_HOST: 'http://localhost:3000'
    }
    
};

export default serverConfig[process.env.NODE_ENV.trim()];