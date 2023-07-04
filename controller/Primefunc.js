
//first method to find prime number betwen given range(id_1) 

  export const prime1 = (a,b) =>{
   const arr1=[];
   let i ,j , flag
   for(i=a;i<=b;i++)
   {
    if(i==1 ||i<=0)
    continue;
    flag = 1
    for(j=2;j<=i/2;++j)
    {
     if(i%j==0)
    {
       flag = 0;
       break; 
    }
   }
   if(flag==1)
   {
       arr1.push(i)
   }
   } 
   const size = arr1.length
   return {array:arr1,size:size} //here funtion is returnig an object
   
}


 
//Second method to find prime number betwwen given range(id_2)

export const prime2 = (a,b) =>{
  const arr2 = []
  let i, j, flag;
  if(a<=2){
      a = 2;
      if(b>=2){
          arr2.push(a);
          a++;
      }
  }
  if(a%2==0){
      a++;
    }
      for(i=a;i<=b;i=i+2){
          flag=1;

          for(j=2;j*j<=i;++j){
              if(i%j==0){
                  flag=0;
                  break;
              }
          }
          if (flag==1){
              if(i==1)continue;
              else
              arr2.push(i);
          }
      }
      const size = arr2.length
      return {array:arr2,size:size} //here funtion is returnig an object
}


//Third method to find prime number betwwen given range(id_3)

export const prime3 = (a,b)=>{
  const arr3 =[];
  if(b<0){
    const x = 0;
    return {array:arr3,size:x};
  }
  
  else{
  let prime = new Array(b+1)
  for(let i=2;i<=b;i++){
      prime[i]=true;
  }
  for(let j=2;j<=b;j++){
      if(prime[j]==true){
          if(j>=a){
              arr3.push(j);
          }
          for(let k=j*j;k<=b;k=k+j){
              prime[k]=false
          }
      }
  }
  const size = arr3.length
  return {array:arr3,size:size} //here funtion is returnig an object
}
}


//fourth method to find prime number between given range(id_4)

export const prime4 = (a,b) =>{
  const arr4 =[]
  for(let i=a;i<=b;i++){
      let isprime =1;
   if (i==2 || i==3){
      isprime=1;
    }
    else if(i<=1 ||i%2==0 ||i%3==0){
      isprime=0;
    }
    for(let j=5;j*j<=i;j=j+6){
      if(i%j==0|| i%(j+2)==0){
          isprime=0;
      }
    }
    if(isprime==1){
      arr4.push(i);
    }
  }
  const size = arr4.length
  return {array:arr4,size:size} //here funtion is returnig an object
}


//Fifth method to find prime number between given range(id_5)

export const prime5 = (a,b)=>{
  const arr5 =[]
  for(let i=a;i<=b;i++){
      if(i>1){
          let ip=1
          for(let j=2;j<i;j++){
              if(i%j==0){
                ip=0;
                break;
              }
          }
          if(ip==1){
              arr5.push(i);
          }
      }
  }
  const size = arr5.length
  return {array:arr5,size:size} //here funtion is returnig an object
}