# Web Automation testing practice using Cypress

Web Automation testing using Cypress on the Demo WebApp at http://kasirdemo.belajarqa.com/ created by [ajikamaludin](https://github.com/ajikamaludin/) as a self-learning tool for QA automation.

Test Cases : [Test Cases KasirAja](https://docs.google.com/spreadsheets/d/1FVLqMlqrBJUXilU1D6FwE5rRL7ci-jN0/edit?usp=drive_link&ouid=115443319904666580506&rtpof=true&sd=true)

Bug Reporting : [Bug Reporting KasirAja](https://docs.google.com/document/d/1eVjr2vbFWP5WzJaRdOgFWrQ5RkisDtWl/edit?usp=drive_link&ouid=115443319904666580506&rtpof=true&sd=true)


## Initialize

```sh
npm init
``` 

Install cypress

```sh
npm install cypress
```
## Running tests (requires npm@5.2.0 or greater)

- Cypress App 
  ```sh
  npx cypress open
  ``` 
- Command Line
  - run all tests headlessly.
    ```
    npx cypress run
    ```
  - Running with spesific spec
    ```
    npx cypress run --spec .\path\to\file.js
    ```    

