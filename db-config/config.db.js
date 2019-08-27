const _config = {
    host: process.env.HOST,
    user: process.env.USER,
    prot: process.env.PORT,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

module.exports = {
    configDB: _config
}