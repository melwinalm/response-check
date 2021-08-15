
export function Type(value){
  if(typeof value === undefined){
    return "undefined";
  }
  else if(value == null){
    return "null";
  }
  else if(typeof value === "string" || value instanceof String){
    return "string";
  }
  else if(typeof value === "number" || value instanceof Number){
    return "number";
  }
  else if(typeof value === "boolean" || value instanceof Boolean){
    return "boolean";
  }
  else if(Array.isArray(value)){
    return "array";
  }
  else if(typeof value === "object"){
    return "object";
  }
}