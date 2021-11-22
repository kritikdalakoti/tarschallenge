const express=require('express')
const app=express()

const port = process.env.PORT || 5000;
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`app listening on port ${port}!`))