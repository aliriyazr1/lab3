const express = require('express')
const app = new express()
const port = 3000

app.listen(port, () => {
    console.log('Sample app listening at https://localhost:$(port')
})