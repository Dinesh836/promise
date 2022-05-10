const posts=[
    {title:'post one ' , body:'this is post one ' , createdAt:new Date().getTime()},
    {title:'post two ' , body:'this is post two ' , createdAt:new Date().getTime()}

];
function getPost(){
    clearInterval(intervalId);
    intervalId=setInterval( () =>{
         let output = '';
         posts.forEach( (post) => {
             output+=`<li>${post.title}- last updated ${(new Date() - post.createdAt)/1000- seconds ago}</li>`;
             } );
           document.body.innerHTML=output;
        } , 1000);
}
function delete(){
    retrun new Promise( (resolve , reject) => {
        setTimeout(() => {
            post.pop(post);

            const error=false;
            if(!error){
                resolve();
            }else {
                reject('Error:  Array is empty now')
            }
        }, 1000);

    })
}

function createPost(post){
    return new Promise ( (resolve , reject) => {
        setTimeout( () => {
            posts.push(post);

            const error=false;
            if(!error){
               resolve();
            }else {
               reject('Error: something went wrong');      
            }
         } , 2000)
    })
}
delete().then(getPost).catch(err=>console.log(err));
delete().then(getPost).catch(err=>console.log(err));
delete().then(getPost).catch(err=>console.log(err));

//Promise.all

const Promise1=peomise.resolve("Hello World");
const promise2=15;
const prmoise3=new promise((resolve , reject) => 
setTimeout(resolve , 2000 , "Goodbye")
);
const updateLastUserActivityTime=new promise(  )
promise.all(Promise1 , promise2 , promise3).then(values => console.log(v
