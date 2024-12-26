const express = require('express') //Express to import
require('dotenv').config() //dotenv ko import

//!Yo mathi ko savai import files haru matra ho
const app = express()
// const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/yugesh',(req,res)=>{
    res.send("Instagram username: yugeshpoudel45")
})

app.get('/info',(req,res)=>{
    res.send("<h1>K xa khabar</h1>")
})


//!Yesari nai API create hudo raixa
app.get('/github', (req,res) => {
    res.json(githubJson)
})

// app.listen(port, () => {
//     console.log(`Mero app is listening on port ${port}`)
// })

// app.listen(process.env.PORT, () => {
//     console.log(`Mero app is listening on port ${process.env.PORT}`)
// })


const githubJson = {
    "login": "yugeshpoudel45",
    "id": 104973762,
    "node_id": "U_kgDOBkHFwg",
    "avatar_url": "https://avatars.githubusercontent.com/u/104973762?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/yugeshpoudel45",
    "html_url": "https://github.com/yugeshpoudel45",
    "followers_url": "https://api.github.com/users/yugeshpoudel45/followers",
    "following_url": "https://api.github.com/users/yugeshpoudel45/following{/other_user}",
    "gists_url": "https://api.github.com/users/yugeshpoudel45/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/yugeshpoudel45/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/yugeshpoudel45/subscriptions",
    "organizations_url": "https://api.github.com/users/yugeshpoudel45/orgs",
    "repos_url": "https://api.github.com/users/yugeshpoudel45/repos",
    "events_url": "https://api.github.com/users/yugeshpoudel45/events{/privacy}",
    "received_events_url": "https://api.github.com/users/yugeshpoudel45/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Yugesh Poudel",
    "company": null,
    "blog": "",
    "location": "Kathmandu,Nepal",
    "email": null,
    "hireable": true,
    "bio": "Just playing with codes.",
    "twitter_username": null,
    "public_repos": 13,
    "public_gists": 0,
    "followers": 10,
    "following": 54,
    "created_at": "2022-05-05T08:04:45Z",
    "updated_at": "2024-05-03T03:09:03Z"
}