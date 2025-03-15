class DropdownBtn {
    constructor(){
        document.querySelector('.dropdown-btn').addEventListener('click',this.showDropDown)
    }

    showDropDown(){
        console.log(document.querySelector('.nav'))
        document.querySelector('.nav').classList.toggle('hide');
    }
}

const dropdown = new DropdownBtn();