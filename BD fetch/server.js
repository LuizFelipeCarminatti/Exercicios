let port = 8080
let express = require('express')
let app = express()

app.use(express.static('.'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/formulario', (res, req) => {
    res.send({
        ...req.body,
        id: 0
    })
})

app.listen(port, () => console.log('Executando...'))