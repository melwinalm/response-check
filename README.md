# response-check

A library to validate JSON data based on a given data structure.

## Installation

```shell
npm install response-check
```

## Usage

```js
import * as ResponseCheck from 'response-check';

// Define the JSON structure of your data
let responseStructure = {
  type: "array",
  structure: {
    type: "object",
    structure: {
      "id": { type: "number" },
      "node_id": { type: "string" },
      "name": { type: "string" },
      "full_name": { type: "string" },
      "owner": {
        type: "object",
        structure: {
          "login": { type: "string" },
          "url": { type: "string" },
        }
      }
    }
  }
};

axios.get('https://api.github.com/users/{username}/repos')
  .then(response => {
    return response.data;
  })
  .then(data => {
    // Use the Validate method to validate the data
    let flag = ResponseCheck.Validate(data, responseStructure);
    console.log(flag);
  })
  .catch(error => {
    console.error(error);
  });
```