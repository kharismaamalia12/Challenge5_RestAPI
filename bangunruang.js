const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors())

app.post("/kubus", (req,res) => {
    let sisi = Number(req.body.sisi)

    let volume = Math.pow(sisi,3)
    let luas_permukaan = 6 * Math.pow(sisi,2)

    let response = {
        sisi : sisi,
        volume : volume,
        luas_permukaan : luas_permukaan
    }
    res.json(response)
})

app.post("/balok", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    
    let volume2 = panjang * lebar * tinggi;
    let luas_permukaan2 = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
    
    let response = {
        panjang : panjang,
        lebar : lebar,
        tinggi : tinggi,
        volume2 : volume2,
        luas_permukaan2 : luas_permukaan2
    }
    res.json(response)
})

app.post("/bola", (req,res) => {
    let jari_jari = Number(req.body.jari_jari)

    let volume3 = 4/3 * 3.14 * Math.pow(jari_jari,3);
    let luas_permukaan3 = 4 * 3.14 * Math.pow(jari_jari,2);

    let response = {
        jari_jari : jari_jari,
        volume3 : volume3,
        luas_permukaan3 : luas_permukaan3
    }
    res.json(response)
})

app.post("/kerucut", (req,res) => {
    let jari2 = Number(req.body.jari2)
    let tinggi = Number(req.body.tinggi)
    let s = Number(req.body.s)

    let volume = 1/3 * 3.14 * Math.pow(jari2,2) * tinggi;
    let luas_permukaan = (3.14 * Math.pow(jari2,2)) + (3.14 * jari2 * s)

    let response = {
        jari2 : jari2,
        tinggi : tinggi,
        s : s,
        volume : volume,
        luas_permukaan : luas_permukaan
    }
    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})