const fs = require('fs');

// Gets the API notes already in the db file
module.exports = (app) => {
  app.get('/api/notes', (req, res) => {
      fs.readFile('./db/db.json', (err, data) => {
          if (err) throw err;
          notesList = JSON.parse(data);
          res.send(notesList);
      });
  });

  // Posts new notes to the JSON db file
  app.post('/api/notes', (req, res) => {
      const userNotes = req.body;

      fs.readFile('./db/db.json', (err, data) => {
          if (err) throw err;
          notesList = JSON.parse(data);
          notesList.push(userNotes);
          notesList.forEach((item, i) => {
              item.id = i + 1;
              return notesList;
          });
          console.log(notesList);

          fs.writeFile('./db/db.json', JSON.stringify(notesList), (err, data) => {
              if (err) throw err;
          });
      });
      res.status(200).send();
  });

  // Deletes existing notes from JSON db file
  app.delete("/api/notes/:id", (req, res) => {
    var noteID = req.params.id;

    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      notesList = JSON.parse(data);
      
      // Checks each ID to see if it matches the one selected by the user, then removes that note and reassigns the IDs
      for(let i = 0; i < notesList.length; i++) {
        if (notesList[i].id === Number(noteID)) {
          notesList.splice([i], 1);
        }
      }

      // Shifts the note objects and gives updated IDs
      notesList.forEach((item, i) => {
        item.id = i + 1;
      });

      console.log(notesList);

      fs.writeFile('./db/db.json', JSON.stringify(notesList), (err, data) => {
        if (err) throw err;
      });
  
    res.status(204).send();

  });
  });

  
};
