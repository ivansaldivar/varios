  function duplicate(array){
    var largo = array.length * 2;
    var arrayduplicado = [];
    var j = 0;
    for(i=0;i<=largo-1;i++){
      if(j > (array.length-1)) j = 0;

      arrayduplicado[i]=array[j];
      j++;
    }
    return arrayduplicado;
  }

  console.log(duplicate([1,2,3,4,5]));
