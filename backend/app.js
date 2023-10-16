import dotenv from 'dotenv'
import cors from 'cors'
import conn from 'db.js'

const app = express()
const port = 5000

app.use(express.json())

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.get("/get", async (req, res) => {
  const attemptQuery = "SELECT * FROM account;"
  conn.query(attemptQuery,(err,data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

// app.post("/register", async(req, res) => {
//   const {email, password, name} = req.body
//   const attemptRegister = await register(email, password, name)
//   res.status(201).send(attemptRegister)
// })

// app.get("/user/:userId", async(req,res) => {
//   const userId = req.params.userId
//   const getUser = await getAccount(userId)
//   res.send(getUser)
// })

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something Broke!')
}) 
  

app.get('/', (req, res) => {
  res.send('Hello from Express!');
})

// Server Controller
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})