//getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

//if user presses any key and release
inputBox.onkeyup  = (e)=>{
    let userData = e.target.value; //user entered data
    let emptyArray =  [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            //filtering array values and user char to lowercase and return only those
            //words/sentences which starts with user entered word
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>' + data + '</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active"); //show autocompltete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for(let i = 0; i<allList.length; i++){
            //adding onclick attribute in all Li tag
            allList[i].setAttribute("onclick", "select(this)");
        }

    }
    else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
    
}

function select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;  //passing the user selected list tem data in textField

}


function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData =  '<li>' + userValue + '</li>';

    } else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
