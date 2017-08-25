(function(window,document,undefine){
  var ang = window.ang || (window.ang={});
  function bootstrap(){
    console.log("boot");
  };
  function isFunction(value){return typeof value === 'function';}
  function isWindow(obj) {
  return obj && obj.document && obj.location && obj.alert && obj.setInterval;
}
  function forEach(obj, iterator, context) {
    console.log(obj);
    console.log(iterator);
  var key;
  if (obj) {
    console.log(isFunction(obj));
    if (isFunction(obj)) {
      for (key in obj) {
        // Need to check if hasOwnProperty exists,
        // as on IE8 the result of querySelectorAll is an object without a hasOwnProperty function
        if (key != 'prototype' && key != 'length' && key != 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {
          iterator.call(context, obj[key], key);
        }
      }
    }  else {
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator.call(context, obj[key], key);
        }
      }
    }
  }
  return obj;
}


  function extend(dst) {
    console.log(dst);
    console.log(arguments);
    var h = dst.$$hashKey;
    forEach(arguments, function(obj) {
      console.log(arguments);
      if (obj !== dst) {
        forEach(obj, function(value, key) {
          dst[key] = value;
        });
      }
    });

    //setHashKey(dst,h);
    return dst;
  }



  function publishAPI(ang){
    
    extend(ang,{
      'bootstrap': bootstrap,
      'callbacks': {counter: 0}
    });
  }
 


  publishAPI(ang);
ang.bootstrap();
})(window,document)