import bcrypt from 'bcrypt'

const password = 'Password1'


const hash = await bcrypt.hash(password, 10)


console.log({
    password,
    hash
}); 