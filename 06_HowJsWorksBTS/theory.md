1. javascript execution context means how will js gonna run or execute our program , there are 3 execution contexts that are made to execute our programs called as Global execution contest & functional execution contest , also there is another called as eval execution context but we dont need to understand it now
now, global execution context is made first &  wherever it is made it get allocated to the variable this

2. every environment like bun, deno, browsers, node has different-different execution context

3. since we know js is single threaded so, every program is executed in single thread ie.., one by one

<!-- How Js execute the code -->
4. js execute our code in 2 phases called as memory creation phase(only memory gets allocatd in this phase) & Execution phase

5. now, step:1 --> jo bhi code run karana ho wo global environment or global execution se run hota he & use sabse pehle allocate kia jata he this ke ander

6. step:2 ---> its an Memory Creation Phase & yaha saare variable jo bas memory rakha jata he 

7. step:3 ---> finally its an execution phase
(jitni baar functions execute hote he utni baar new executional context bante he means ab add function ke lie phirse memory aur execution phase hoga)
sab hone ke baad result return ho jata he gloabal execution he
function ka kaam hojane ke baad wo turant delete bhi hojata he
look at images for further information 


<!-- Call Stack : look at video at 6:15:09 -->
1. one() ko lia execute kai call stack me phir use call stack se bahar nikal dia

2. jab ek ke ander ek call ho raha ho, 
eg.., one() ke ander two() ko call kai he and two() ke ander three() ko , toh kaam hone ke baaad pehle three() phir two() aur phir one() baahr nikalta he ie..., last in first out concept 


NOTE : Revision Videos
1. Complete Ciding : https://www.youtube.com/watch?v=UXWBl77dq3A

2. Chai aur Code :  https://www.youtube.com/watch?v=ByhtOgF6uYM
