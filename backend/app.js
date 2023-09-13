import express from 'express'
import {login, register, getAccount} from './db.js'

const app = express()

app.use(express.json())

app.get("/login", async (req, res) => {
  const attemtptLogin = await login()
  res.send(attemtptLogin)
})

app.post("/register", async(req, res) => {
  const {email, password, name} = req.body
  const attemptRegister = await register(email, password, name)
  res.status(201).send(attemptRegister)
})

app.get("/user/:userId", async(req,res) => {
  const userId = req.params.userId
  const getUser = await getAccount(userId)
  res.send(getUser)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something Broke!')
  }) 
  

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})