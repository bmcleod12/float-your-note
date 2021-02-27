# Note Taker

## Description
Express.js app to keep track of to-dos, take notes, and write yourself reminders.

## Features
* `GET *` should return the `index.html` file.

## Known Issues and Future Enhancements
This section covers known issues with the application, which will be revisited and fixed in a future release.

### Un-Clickable List Items
* This project began with starter code, including the index.js file which renders the page to the browser.
* The code is written so only the text of the note title is clickable, as opposed to clicking anywhere in the row of a given note and having it render on the right.
* This issue is confusing to a user because the cursor becomes a pointer over the entire list item, as opposed to only over the text to help the user know where to click.

### Un-Editable Notes
* After selecting a previously-created note, there is no way to make changes to it - it must be deleted and recreated.

### Inability to Create New Notes
* After selecting a previously-created note, then attempting to write a new note, the right panel locks the user out from further editing and the page must be completely refreshed to create a new note. 

### Missing Hover-Over Text for Icons
* There is no hover-over text to clarify what the icons will do once clicked.

### Inability to Format Text
* When writing the note, there is no rich text editor available to add in bullet points, tables, etc.


## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.


## License

MIT License

Copyright (c) 2021 KU Coding Bootcamp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

