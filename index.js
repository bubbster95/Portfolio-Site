const objArr = {
    disco: [
        ['DiscoDancer', 
        'assets/DiscoDanceSprite5.png',
        'This is a dancing guy',
        'gif of guy dancing'
        ],
        ['Disco Dancer Two',
        'assets/DiscoDanceSprite5.png',
        'This is a dancing guy again',
        'gif of guy dancing'
        ],
        ['Disco Dancer Three',
        'assets/DiscoDanceSprite5.png',
        'This is a dancing guy again again',
        'gif of guy dancing'
        ]
    ],
    scroll: [
        ['Scroll Image',
        'assets/DiscoDanceSprite5.png',
        'This is a dancing guy again',
        'gif of guy dancing'
        ]
    ],
    turner: [
        ['Turner Image',
        'assets/DiscoDanceSprite5.png',
        'This is a dancing guy again again',
        'gif of guy dancing'
        ]
    ],
    portfolio: [
        ['Portfolio Image',
        'assets/DiscoDanceSprite5.png',
        'This is a dancing guy again again',
        'gif of guy dancing'
        ]
    ]
};

populatePanels = () => {
    let panels = document.getElementsByClassName('panel')
    for (i = 0; i < panels.length; i++) {
        let thisPanel = panels[i];

        // Close Button
        let closePanel = document.createElement('BUTTON')
        closePanel.className = 'closePanel';
        closePanel.innerHTML = 'X';
        thisPanel.appendChild(closePanel)
        //Slide
        // Previous Slide
        let prev = document.createElement('BUTTON')
        prev.className = 'prev';
        prev.innerHTML = '&#10094';
        prev.addEventListener('click', previousSlide)
        thisPanel.appendChild(prev)
        //Next Slide
        let next = document.createElement('BUTTON')
        next.className = 'next';
        next.innerHTML = '&#10095';
        next.addEventListener('click', nextSlide)
        thisPanel.appendChild(next)

        let thisObjectId = thisPanel.id.slice(0, thisPanel.id.match(/[\\-]/).index);
        let thisObject = objArr[thisObjectId]
        for (j = 0; j < thisObject.length; j++) {
            // Ad Slide
            let slide = document.createElement('DIV');
            slide.className = 'slide-container';
            thisPanel.appendChild(slide);
            // Add Title
            let title = document.createElement('P');
            title.className = 'image-title';
            title.innerHTML = thisObject[j][0];
            slide.appendChild(title);
            // Add Images
            let image = document.createElement('IMG');
            image.className = 'img';
            image.alt = thisObject[j][3];
            image.src = thisObject[j][1];
            slide.appendChild(image);
            //Add Description
            let text = document.createElement('P');
            text.className = 'description';
            text.innerHTML = thisObject[j][2];
            slide.appendChild(text);
        // console.log('j:', j, thisObject[j])
        }

    }
}

previousSlide = () => {

}

nextSlide = () => {

}




popUp = (e) => {
    let panel = document.getElementById(e.target.id.slice(0, -7) + "-panel");
    panel.style.display = 'block';
}

closePopUp = (e) => e.target.parentNode.style.display = 'none';

addEvents = () => {
    let array = document.getElementsByClassName('container')
    let xButtons = document.getElementsByClassName('closePanel')
    for (i = 0; i < array.length; i++) {
        let top = array[i].childNodes[1];
        let bottom = array[i].childNodes[3];
        let xButton = xButtons[i];
        if (xButton) {
            xButton.addEventListener('click', closePopUp);
        }
        top.addEventListener('mouseover', swap);
        bottom.addEventListener('mouseout', swapBack);
        bottom.addEventListener('click', popUp);
    }
}

swap = (e) => {
    let top = document.getElementById(e.target.id);
    let bottom = document.getElementById(e.target.id + '-button');
    top.style.display = 'none';
    bottom.style.display = 'block';
}

swapBack = (e) => {
    let bottom = document.getElementById(e.target.id);
    let top = document.getElementById(e.target.id.slice(0, -7));
    top.style.display = 'block';
    bottom.style.display = 'none';
}
