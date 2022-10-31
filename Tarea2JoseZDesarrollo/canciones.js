const express = require('express');
const router = express.Router();
const app = express(); 
const path = require('path');



router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/lista.html'));
}); 

router.post('/', (req, res) => {
  res.send('Pagina principal de Post Canciones' );
}); 

router.put('/', (req, res) => {
  res.send('Pagina principal de Put Canciones' );
}); 

router.delete('/', (req, res) => {
  res.send('Pagina principal de Delete Canciones' );
});

router.get("/descarga", (req, res) => { 
  var name = req.query.name;
  res.download(
    path.join(__dirname, "public", name),
    name,
    (err) => {
      if (err) console.log("Ocurrio un error en la descarga.");
      else console.log("Descarga exitosa.");
    }
  );
});

module.exports = router;
