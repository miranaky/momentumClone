const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function hanledClick(){
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }
    else{
        title.classList.remove(CLICKED_CLASS);
    }
    */
   title.classList.toggle(CLICKED_CLASS);

}

function init(){
    title.addEventListener("click",hanledClick);
}

init()