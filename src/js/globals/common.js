export default (function(){
  let instance;

  const init = function(){

    const newId = function(){
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    const getNewGUID = function(){
      return newId() + newId() + '-' + newId() + '-' + newId() + '-' + newId() + '-' + newId() + newId() + newId();
    }

    return {
      getNewGUID
    }
  }

  const getInstance = function(){
    if(!instance){
      instance = init();
    }

    return instance;
  }
  return {
    getInstance
  }
})();