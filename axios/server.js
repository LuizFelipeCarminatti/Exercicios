const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.listen(8080, () => {
    console.log('Executando...')
})