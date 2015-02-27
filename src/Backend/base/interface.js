function Interface(){}

Interface.prototype.validateImplementation = function(interfaceName, interface, implementation) {
  var interfaceMethods = []
  for (var method in interface) {
    if(method !== "validateImplementation" && method != "validateInterface") {
      interfaceMethods.push(method);
    }
  }
  
  for(var i in interfaceMethods) {
	var method = interfaceMethods[i];
    if(implementation[method].toString() === interface[method].toString()) {
	  throw "Error: method '" + method + "' not implemented in implementation of '" + interfaceName + "'";      
    }
  }
}

module.exports = Interface;