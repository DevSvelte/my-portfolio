function changeColor(el){
    el.style.color='yellow';
}
function removeColor(el){
    el.style.color='white';
}

export let observer;
export let setObserver = () => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                switch(entry.target.id){
                    case 'hero':
                        changeColor(menuLinks[0]);
                        break;
                    case 'about':
                        changeColor(menuLinks[1]);
                        break;
                    case 'tools':
                        changeColor(menuLinks[2]);
                        break;
                    case 'projects':
                        changeColor(menuLinks[3]);
                        break;
                    case 'contact':
                        changeColor(menuLinks[4]);
                        break;
                }
            } else {
                switch(entry.target.id){
                    case 'hero':
                        removeColor(menuLinks[0]);
                        break;
                    case 'about':
                        removeColor(menuLinks[1]);
                        break;
                    case 'tools':
                        removeColor(menuLinks[2]);
                        break;
                    case 'projects':
                        removeColor(menuLinks[3]);
                        break;
                    case 'contact':
                        removeColor(menuLinks[4]);
                        break;
                }
            }
        });
    }, {
        threshold: 0.5
    });
}
export let menuLinks = [];
