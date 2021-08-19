import axios from 'axios';
import * as ResponseCheck from './../app.js';

function AxiosGet() {
  axios.get('https://api.github.com/users/melwinalm/repos')
    .then(response => {
      return response.data;
    })
    .then(data => {
      let flag = ResponseCheck.Validate(data, {
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
      });

      console.log(flag);
    })
    .catch(error => {
      console.error(error);
    })
}

AxiosGet();