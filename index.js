// const div = document.querySelector('div');

// //div.style.transform = 'translateX(100px)';

// // const moveX = (element)=>{
// //  setTimeout(()=>{
// //    element.style.transform = `translateX(${100}px)`;
// //    setTimeout(()=>{
// //     element.style.transform = `translateX(${200}px)`;
// //     setTimeout(()=>{
// //       element.style.transform = `translateX(${300}px)`;
// //      },2000);
// //    }, 2000);
// //   }, 2000)
// //  }


// const moveX = (element,x,callback)=>{
//   const windowBoundry = document.body.clientWidth;
//   const sol = element.getBoundingClientRect().left;
//   const sag = element.getBoundingClientRect().right;

//   if (sag + x > windowBoundry){
//     alert("Can not move further !")
//   } else {
//     setTimeout(()=>{
//       element.style.transform = `translateX(${x}px)`;
//       if (callback){callback()}
//      }, 2000)
//     }

//   }


// moveX(div,200, ()=>{
//   moveX(div,400, ()=>{
//     moveX(div,800, ()=>{
//       moveX(div,1000, ()=>{
    
//       });  
//     });
//   });
// });

///



const getAJob = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    const XP = Math.random();
    console.log(`Xp: `, XP);
    if(XP>0.5){
      resolve();
    }else{
      reject();
    } 
  },400)
});

getAJob.then(()=>{
  console.log(`Congragulations!`)
 }
);
getAJob.catch(()=>{
  console.log(`Try Harder!`)
 }
);

