Marks & Competition -34:47:12
Description

You have the marks of students in the form of an array, where arr[i] represents the marks of the ith student.

Since you are a curious kid, you want to find all the marks that are not smaller than those on its right side in the array.


Input
Input Format :

The first line of input will contain a single integer n denoting the number of students.

The next line will contain n space separated integers representing the marks of students.



Constraints :

1 <= n <= 1000000

0 <= arr[i] <= 10000


Output
Output all the integers separated in the array from left to right that are not smaller than those on its right side.


Sample Input 1 

6
16 17 4 3 5 2
Sample Output 1

17 5 2
Hint

Output Explanation :

17, 5 and 2 are three integers present in the list which has no integers greater than it to its right (all the integers present in right of it)
___________________________________________________________________>
input=input.trim().split("\n")
let length = +input[0];
let arr = input[1].trim().split(" ").map(Number);
fString(length,arr);
}
  function fString(length,arr){
     let st=[]
     for(let i=length-1;i>=0;i--){
          if(st.length>0&&arr[i]>=st[st.length-1]){
             st.push(arr[i])
          }
          else if(st.length===0){
              st.push(arr[i])
          }

     
      }
     console.log(st.reverse().join(" "))
     
  }