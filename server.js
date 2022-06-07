const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const player = {
    'son heung min':{
        'Country': 'South Korea',
        'League': 'EPL',
        'Team': 'Tottenham Hotspurs',
        'Position': 'LF',
        'Dominant foot': 'Right',
        'Specialty': 'Goal accuracy',
        'age': 29
    },
    'mohamed salah':{
        'Country': 'Egypt',
        'League': 'EPL',
        'Team': 'Liverpool FC',
        'Position': 'RF',
        'Dominant foot': 'Right',
        'Specialty': 'Dribble',
        'age': 29
    },
    'unknown':{
        'Country': 'unknown',
        'League': 'unknown',
        'Team': 'unknown',
        'Position': 'unknown',
        'Dominant foot': 'unknown',
        'Specialty': 'unknown',
        'age': 0
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res)=>{
    res.json(player)
})

app.get('/api/:name', (req, res)=>{
    const playerName = req.params.name.toLowerCase()
    if(player[playerName]){
        res.json(player[playerName])
    }else{
        res.json(player['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`This server is running on PORT ${PORT}! Better go catch it!`)
})