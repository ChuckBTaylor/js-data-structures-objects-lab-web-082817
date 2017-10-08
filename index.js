// Write your solution in this file!

const driver = {name: 'driver'};

function updateDriverWithKeyAndValue(obj, key, value){
  let new_driver = Object.assign({},obj, {[key]: value})
  return new_driver
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromDriverByKey(obj, key){
  let new_driver = Object.assign({},obj)
  delete new_driver[key]
  return new_driver
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key]
  return obj
}
