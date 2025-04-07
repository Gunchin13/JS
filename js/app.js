
 
//  let a =[0,2,4,5,7,-1,-4,-5,-20,-6,-100,-98,-12]

//  let negativeNumbers = a.filter(num => num<0).sort((x, y)=>x-y)
//  console.log(negativeNumbers);
//  class Person{
//     constructor(age,){
//         this.age = age;
//     }
//  }
//  let guncin = new Person (24)
//  console.log (guncin.age)
//  Person.prototype.getFullYear =function(){
//     console.log(2025-this.age,)

//  }

//  guncin.getFullYear()

//  class User{
//     constructor(name, surname){
//         this.name=name;
//         this.surname=surname;
//         }
     
    
//  }
//  let aynur =new User("guncin","savzixanova")
//  console.log (aynur)
//  User.prototype.getfullDate =function(){
//      console.log()



// let str="lamiye"
// let newstr ="";
// for(let i=0; i<str.length; i++){
//     if(str[i]==="a"){
//         console.log(str.toUpperCase())
//     }
// }

// let str = "lamiye";
// let newStr = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a" || str[i] === "i" || str[i] === "e") {
//         newStr += str[i].toUpperCase();
//     } else {
//         newStr += str[i];
//     }
// }

// console.log(newStr); 


class Heyvan {
    constructor(ad, yas) {
      this.ad = ad;
      this.yas = yas;
    }
  
    melumat() {
      if (this.ad.toLowerCase() === 'lion') {
        return 'Şir həmişə şirdir!';
      } 
    }
  }
  const heyvan1 = new Heyvan('Lion',);
console.log(heyvan1.melumat());



class Kategoriya {
    constructor(tip) {
      this.tip = tip;
    }
  
    olke() {
      if (this.tip === 'vəhşi') {
        return 'Afrika';
      } else if (this.tip === 'ev') {
        return 'Azərbaycan';
      } else {
        return 'Bilinmir';
      }
    }
  }
  const kateqoriya1 = new Kategoriya('vəhşi');
console.log(kateqoriya1.olke());
  
const kateqoriya2 = new Kategoriya('ev');
console.log(kateqoriya2.olke()); 