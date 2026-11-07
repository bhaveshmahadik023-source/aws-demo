import express from 'express'

const app = new express();
const port=3000;
app.listen(port ,()=>{
    console.log('server is running on http://hocalhost:${port}')
})

app.get("/get_costomer",(re,res)=>{
    console.log("const reach");
    res.send("get const data");
}
)
app.get("/get_api",(re,res)=>{
    console.log("const reach");
    res.send("get bhavesh data");
}
)

app.get("/get_api4",(re,res)=>{
    console.log("const reach");
    res.send("get bhavesh data");
}
)

app.get("/get_api5",(re,res)=>{
    console.log("const reach");
    res.send("get bhavesh mahadik data");
}
)