// class Counter {
//   constructor(initialCount = 0) {
//     this.count = initialCount;
//     this.addButton = document.querySelector(".addButton");
//     this.subtractButton = document.querySelector(".subtractButton");
//     this.resetButton = document.querySelector(".resetButton");
//     this.countEl = document.querySelector(".count");
//     this.initialCount = initialCount;
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//     this.reset = this.reset.bind(this);
//     this.addButton.addEventListener("click", this.increment);
//     this.subtractButton.addEventListener("click", this.decrement);
//     this.resetButton.addEventListener("click", this.reset);
//     this.render();
//   }

//   destroy() {
//     this.addButton.removeEventListener("click", this.increment);
//   }

//   increment() {
//     this.count += 1;
//     this.render();
//   }

//   decrement() {
//     this.count -= 1;
//     this.render();
//   }

//   reset() {
//     this.count = this.initialCount;
//     this.render();
//   }

//   render() {
//     this.countEl.innerText = this.count;
//   }
// }

// const count1 = new Counter();
// const destroyEl = document.querySelector(".destroyButton");
// destroyEl.addEventListener("click", () => {
//   count1.destroy();
// });


function addOne(count){
    return count + 1;
}

function minusOne(count){
    return count - 1;
}

function resetBackToInitial(initialCount){
    return initialCount;
}

function render(el, count){
    el.innerText = count
}

function startCounter(initialCount = 0){
    let count = initialCount;
    const addButton = document.querySelector('.addButton');
    const subtractButton = document.querySelector('.subtractButton');
    const resetButton = document.querySelector('.resetButton');
    const countEl = document.querySelector('.count');
    function increment() {
        const newValue = addOne(count);
        render(countEl, newValue);
        count = newValue
    }
    function decrement(){
        const newValue = minusOne(count);
        render(countEl, newValue);
        count = newValue;
    }
    function reset(){
        const newValue = resetBackToInitial(initialCount);
        render(countEl, newValue);
        count = newValue;
    }
    addButton.addEventListener('click', increment);
    subtractButton.addEventListener('click', decrement);
    resetButton.addEventListener('click', reset);

    render(countEl, count);
    return function destroy(){
        addButton.removeEventListener('click', increment);
        subtractButton.removeEventListener('click', decrement);
        resetButton.removeEventListener('click', reset);
    }
}

const destroy = startCounter();

const destroyEl = document.querySelector('.destroyButton');
destroyEl.addEventListener('click', () => {
    destroy();
})
