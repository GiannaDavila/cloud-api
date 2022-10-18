import Functions from "firebase-functions"
import express from "express"

const app = express()

app.get('/test', (req,res) => res.send('Our first cloud API works, MF!'))

export const api = Functions.https.onRequest(app)
