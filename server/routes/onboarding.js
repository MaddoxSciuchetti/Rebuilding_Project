import express from "express"
import pool from "../db.js"


const onboarding_router = express.Router()


onboarding_router.post("/postData", async (req, res) => {
    const name = req.body.name
    const onboarding = 'onboarding'
    console.log(name)
    
    // const create_form = 'INSERT INTO employee_forms (user_id, form_type) VALUES ( (SELECT id FROM users ORDER BY id DESC LIMIT 1) , $1)'
    // const create_form = 'INSERT INTO employee_forms (user_id, form_type) VALUES (SELECT MAX(id) from users, $1)'

    const creating_user = 
    'WITH getval(id) as (INSERT INTO users (name) VALUES ($1) RETURNING id) INSERT INTO employee_forms (user_id, form_type) VALUES((SELECT id from getval),  $2);' 


    pool.query(creating_user, [name, onboarding], async (err, result) => {
        if(err) {
            res.send(err)
            console.log(err)
        } else{
            console.log(result)
        }
    })

    // pool.query(create_form, [onboarding], async (err, result) => {
    //     if(err) {

    //         console.log(err)
    //     } else{
    //         console.log(result)
    //     }
    // })

    // pool.query(create_form, async (err, result) => {
    //     if(err) {
    //         res.send(err)
    //         console.log(err)
    //     } else{
    //         console.log(result)
    //     }
    // })
})






export default onboarding_router;


