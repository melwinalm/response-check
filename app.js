import { Type } from './utils.js';

export function Validate(data, structure) {
  try {
    let structuretype = structure.type;
    let datatype = Type(data);

    if(structuretype !== datatype){
      return false;
    }
    else if(structuretype === "undefined" || structuretype === "null" || structuretype === "string" || structuretype === "number" || structuretype === "boolean"){
      return true;
    }
    else if(structuretype === "array") {
      let flag = true;
      let newStructure = structure.structure;

      for(let i = 0; i < data.length; i++){
        flag = Validate(data[i], newStructure);
        
        if(flag === false){
          break;
        }
      }

      return flag;
    }
    else if(structuretype === "object"){
      let flag = true;
      let newStructure = structure.structure;

      let _keys = Object.keys(newStructure);

      for(let i = 0; i < _keys.length; i++){
        let _key = _keys[i];

        // Validate if the key provided in the structure exists in the object data
        if(!data[_key]){
          flag = false;
        }
        else{
          flag = Validate(data[_key], newStructure[_key]);
        }

        if(flag === false){
          break;
        }
      }

      return flag;
    }
    else {
      throw "Invalid type provided in structure";
    }
  }
  catch (error) {
    console.log(error);
  }
}