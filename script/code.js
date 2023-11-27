document.querySelector('[data-btn]').addEventListener('click', 
function addUp() {
    const myNums = [12, 51, 65, 30, 25, 18];
    
    let sum = 0;
    
    myNums.forEach( num => {
      sum += num;
    })
    // console.log(sum);
    document.querySelector('[data-output]').textContent = sum;
});
