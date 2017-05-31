# NodeJS Module examples

## simple-modules
- Directory with several simple modules
- The main script is `scripts.js` and only requires `print-util.js`
- Examples explained in [Lecture 25](https://docs.google.com/presentation/d/12ReR7wEcABB6uYm027hlEisiGfEHFm_dHBlkFTlKf84/edit#slide=id.g22b40c325b_0_722)
- To run:
  - In your terminal, navigate to the `module-examples/simple-modules/` directory
  - Run `$ node scripts.js`
- Try loading the other modules (e.g. `function-module.js`) by changing the `require` statement in `scripts.js`. See [Lecture 25](https://docs.google.com/presentation/d/12ReR7wEcABB6uYm027hlEisiGfEHFm_dHBlkFTlKf84/edit#slide=id.g22b40c325b_0_722) for more details.

## simple-middleware
- Simple server with middleware function that runs on each request
- Example explained in [Lecture 25](https://docs.google.com/presentation/d/12ReR7wEcABB6uYm027hlEisiGfEHFm_dHBlkFTlKf84/edit#slide=id.g22b40c325b_0_722)
- To run:
  - In your terminal, navigate to the `module-examples/simple-middle/` directory
  - Run `$ node scripts.js`
  - Navigate to http://localhost:3000
  - See that the "request to server!" message prints on the terminal every time you make a request
    - Try loading http://localhost:3000/hello/hello/hello for instance
