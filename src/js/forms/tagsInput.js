import Input from './input';

const TagsInput = function(config){



  let factory = Object.create(Input(config));

  return factory;
}


export default TagsInput;