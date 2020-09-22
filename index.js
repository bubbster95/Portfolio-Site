// Panel Content as such: Title, Url, Description, Alt, Destination link.
const objArr = {
    disco: [
        ['Disco Dude', 
        'assets/Thumbnails/disco-dude.gif',
        'This project showcases HTML5, Vanilla JS and CSS. The main goal was to have a character strike a pose every time you tap the screen. To see the github repo for this project click this <a href="https://github.com/bubbster95/DiscoDude" target="_blank">link</a>.',
        'Gif of dude dancing',
        'https://disco-dude.netlify.app'
        ],
        ['Disco Targets',
        'assets/Gallery/DiscoDude/Target.gif',
        'To give players a reason to tap the screen, I introduced targets. Yellow is the most common and takes a life after reaching the character, red takes a life if you hit it, blue slows the game down, and green adds ten points to the score, but speeds the game up.',
        'Gif of four targets',
        'https://disco-dude.netlify.app'
        ],
        ['Disco Stage Set',
        'assets/Gallery/DiscoDude/DiscoFloor.gif',
        'The set was easy because the character was already designed and only needed a dance club. If I were to redesign this stage now, I\'d create it in such a way that allows it to tile seamlessly for larger screen widths.',
        'Gif of a disco floor',
        'https://disco-dude.netlify.app'
        ],
        ['Completed Game',
        'assets/Gallery/DiscoDude/DiscoDudeOnStage.png',
        'Future versions of the game will include other characters, costumes, and stages. My goal is to fine tune the game and make it more enticing and replayable. If you are interested in playing Disco Dude, click the image above or this <a href="https://disco-dude.netlify.app" target="_blank">link</a>.',
        'Screen shot of Disco Dude',
        'https://disco-dude.netlify.app'
        ]
    ],
    turner: [
        ['Turner\'s Calculator',
        'assets/Gallery/turners-calculator/WebVase.png',
        'After accidentally destroying a wooden bowl due to miscalculation in my workshop, I created this program. I built Turner\'s Calculator using HTML5 and JS to design segmented rings for woodworkers. Click the image above to see the app, and if you are interested in viewing the code, this <a href="https://wood-turners-calculator.netlify.app/" target="_blank">link</a> takes you to the github repo.',
        'Screen shot of Turner\'s Calculator web browser layout',
        'https://wood-turners-calculator.netlify.app/'
        ],
        ['Turner\'s Calculator Mobile',
        'assets/Gallery/turners-calculator/VaseMobile.png',
        'The goal was to have a simple ring calculator that works on my phone so I could use it in the shop. Turner\'s calculator was built mobile first allowing for a completely user friendly experience.',
        'Screen shot of Turner\'s Calculator mobile browser layout',
        'https://wood-turners-calculator.netlify.app/'
        ],
        ['Blueprint Table',
        'assets/Gallery/turners-calculator/WebBluePrints.png',
        'After submitting the completed design, Turner\'s Calculator provides a detailed list of all dimensions needed for every trapezoides necessary to build the segmented rings.',
        'Screen shot of blueprints',
        'https://wood-turners-calculator.netlify.app/'
        ],
        ['Print Preview',
        'assets/Gallery/turners-calculator/PrintPreview.png',
        'The last step is to print the blueprints which include the table of measurements as well as trapezoids that can be cut out and used to trace the design.',
        'Screen shot of Trapezoides print preview',
        'https://wood-turners-calculator.netlify.app/'
        ]
    ],
    scroll: [
        ['Infinite Scroll',
        'assets/Gallery/InfiniteScroll/InfiniteScroll.png',
        'This project was my introduction to React using the "Infinite Scroll" prompt provided by Pramp. The goal is to have new avatars appended when scroll height reaches the bottom of the screen. To visit the site click this <a href="https://wills-infinite-scroll.netlify.app/" target="_blank">link</a>, and to read the code visit this <a href="https://github.com/bubbster95/Infinte-Scroll" target="_blank">link</a>.',
        'Screen Shot of Infinite Scroll landng page',
        'https://wills-infinite-scroll.netlify.app/'
        ],
        ['Infinite Profiles',
        'assets/Gallery/InfiniteScroll/Profile 1.png',
        'I used the Adorable Avatars API to easily generate infinite profiles. The avatars are always in the same order rather than being  random.',
        'Screen Shot of Infinite Scroll avatar 1',
        'https://wills-infinite-scroll.netlify.app/'
        ],
        ['Infinite Names and Interests',
        'assets/Gallery/InfiniteScroll/Profile2.png',
        'Inspired by the Adorable Avatar API, I created an object oriented “Name” generator. The names added personality and inspired me to create an object oriented “Likes” generator. ',
        'Screen Shot of Infinite Scroll avatar 2',
        'https://wills-infinite-scroll.netlify.app/'
        ]
    ],
    portfolio: [
        ['Portfolio Page From The Top',
        'assets/Gallery/PortfolioSite/WillStilesSquare.png',
        'This single page site is a work in progress, it serves as an example of my current ability as I refactor the site from time to time.',
        'Portfolio Site Screen Shot'
        ],
        ['Mobile First Portfolo',
        'assets/Gallery/PortfolioSite/MobileFirst.png',
        'This site takes the mobile first approach and is fully responsive.',
        'Mobile portfolio site'
        ],
        ['Responsive Panel Design',
        'assets/Gallery/PortfolioSite/PanelWeb.png',
        'Each responsive panel is dynamically created using an object populated with titles, image urls, descriptions, alt text, and conditionally added href links.',
        'Responsive panel'
        ],
        ['Mobile Panel Design',
        'assets/Gallery/PortfolioSite/MobilePanel.png',
        'Even in mobile, the panels resize their image to fit a max height or width to allow for the largest display possible.',
        'Mobile panel'
        ],
        ['Custom Gifs',
        'assets/Thumbnails/DiscoGif.gif',
        'For the programming tiles, I created custom gifs that convey the core concept of each idea in one glance. I wanted the motion to grab attention but also explain itself.',
        'Disco Dude sillohette gif'
        ],
        ['Logo Gif',
        'assets/Gallery/Animation/WSLogo/WS9.png',
        'The logo posed an interesting problem. My goal was to have full control over the frames in this gif. With JS, I created a .png sequence that goes forward on mouseover and reverse on mouseoff. Moreover, if the user breaks the hover state before the end of the animation it begins reversing from the frame it was on.',
        'WS logo gif'
        ],
        ['Parallaxing Background',
        'assets/Gallery/Background/Moon.png',
        'A parallaxing background of stars, the moon, and earth was the final concept to make my site feel grounded.',
        'Moon image'
        ]
    ],
    motif: [
        ['Food Issue Cover',
        'assets/Gallery/Motif/FoodCover.jpg',
        'Motif Magazine employs me as a freelance designer and Wordpress developer. I designed this Issue of Motif during my time as lead designer. All of these images will take you to an “Id Publish Online magazine”. Keep in mind that this feature produces unfortunate design defects not represented in the final print of each issue.',
        'Motif Food Issue Cover',
        'https://indd.adobe.com/view/9c26a979-cf26-45f9-96a9-9fcfd267d14d'
        ],
        ['Cannabis Issue, Eating Spread',
        'assets/Gallery/Motif/CannabisEating.jpg',
        'The Eating section in Motif, requires a special visual treatment. This page shows a technique I devised to allow more image space and text by making half of the image a screen back. To see more and read the issue click the image above.',
        'Cannabis Issue Eating Spread',
        'https://indd.adobe.com/view/8720e976-0198-4b0b-9893-742b5e699749'
        ],
        ['Tiny Lobster Article',
        'assets/Gallery/Motif/TinyLobster.jpg',
        'While I was the lead designer, each issue had a back page devoted to telling a story using images. In this issue, I wrote an article about creating the cover with a local artist. Read the issue by clicking the image above.',
        'Tiny Lobster back story',
        'https://indd.adobe.com/view/9c26a979-cf26-45f9-96a9-9fcfd267d14d'
        ],
        ['A Taste of Ireland',
        'assets/Gallery/Motif/Centerspread.jpg',
        'For each issue, I designed a unique centerspread graphic spanning two pages. This centerspread focuses on the beauty of Ireland as told by the native Irish author through his photography. View this centerspread by clicking the image above.',
        'Motif Spring guide centerspread',
        'https://indd.adobe.com/view/8a081028-feae-4e76-9c7b-81c4ba0f124a'
        ],
        ['A Taste of Antarctica',
        'assets/Gallery/Motif/AntarcticaSpread.jpg',
        'This centerspread highlights the beauty of Antarctica while supporting the narrative about climate change and its effect on the fragile ecosystem of Antarctica.',
        'Motif Spring guide centerspread',
        'https://indd.adobe.com/view/f4444bf0-704e-4840-88c5-e25f223a1cf7'
        ],
        ['Hot Rods Photo Bash',
        'assets/Gallery/Motif/HotRods.jpg',
        'To close out each issue of Motif I created a photo bash from a folder of provided photos. The challenge with this page was filtering through a couple hundred photos of hot rods from a local car show.',
        'Hot Rod Photo Bash',
        'https://indd.adobe.com/view/81200c61-0434-4e1b-b15d-30dcbc61a7b0'
        ],
        ['Whale Guitar Photo Bash',
        'assets/Gallery/Motif/WhaleGuitar.jpg',
        'This photo bash tells the story of a local piece of art that comes in the form of both a guitar and a whale.  After choosing this hero image it occurred to me how tough it is to silhouette a guitar. With a little time and patience, anything is possible.',
        'Whale Guitar Photo Bash',
        'https://indd.adobe.com/view/f4444bf0-704e-4840-88c5-e25f223a1cf7'
        ]
    ],
    khoo: [
        ['Sunday Khoo Deal',
        'assets/Gallery/Khoo/SundayKhoo.jpg',
        'As the primary designer for Khoo, I am tasked with many types of projects from an 18\'x9\' poster to this table tent.',
        'Sunday Khoo table tent'
        ],
        ['Thirsty Thursday',
        'assets/Gallery/Khoo/ThirstyThursday.jpg',
        'When I collaborated with the bartenders, it usually made for much better table tents. The toughest part of this table tent was silhouetting smooth rounded edges, which I have gotten used to doing since this project. ',
        'Thirsty Thursday table tent'
        ],
        ['Menu PG 2',
        'assets/Gallery/Khoo/DinningMenuGray2.jpg',
        'Khoo wanted a major haul of their entire dining menu. I overcame many challenges during this project, including things like negotiating space for images and text with the owners. The main obstacle with this project was the sheer amount of copy required to fill an entire menu.',
        'Khoo Menu pg 2'
        ],
        ['Lunch Combos',
        'assets/Gallery/Khoo/DinningMenuGray5.jpg',
        'The major obstacle with this page was organizing lunch menus in a clear and concise way. Customers were constantly confused by this page before the redesign. By simplifying explanations and options, this menu saved server’s time.',
        'Khoo Menu pg 5'
        ],
        ['Sushi Page',
        'assets/Gallery/Khoo/DinningMenuGray7.jpg',
        'The goal of this page was to rearrange every type of sushi available in order to fit it on one page.',
        'Khoo Sushi menu'
        ],
        ['Special Drinks',
        'assets/Gallery/Khoo/DrinksGray1.jpg',
        'The specialty drinks page was the first page I created  for Khoo. The main hurdle for this page was silhouetting each drink individually. This eventually became the norm with all Khoo print collateral.',
        'Khoo Special drinks menu'
        ],
        ['Drinks Menu',
        'assets/Gallery/Khoo/DrinksGray2.jpg',
        'The back side of the drinks page was more straightforward. This page displays all available brands in Khoo\'s full bar.',
        'Khoo drinks menu'
        ]
    ],
    ui: [
        ['Friend Finder Login',
        'assets/Gallery/UI/2.jpg',
        'I created Friend Finder with one goal in mind, to make a complete UI.',
        'Friend Finder login'
        ],
        ['Find Friends',
        'assets/Gallery/UI/3.jpg',
        'Flip through a virtual rolodex of friends until you find people with similar interests. I wanted to design an app that emphasizes friendship over romance.',
        'Find Friends page'
        ],
        ['Find Activities',
        'assets/Gallery/UI/4.jpg',
        'This page is a feed of activities to attend. People can post events in hopes of meeting friends in the area.',
        'Friend Finder Feed'
        ],
        ['Your Friends',
        'assets/Gallery/UI/5.jpg',
        'This page is a page for searching through the friends you already have made on the app. You can message them or check up on what they are up to.',
        'Friend Finder Friends Page'
        ],
        ['Friend Finder Flow Chart',
        'assets/Gallery/UI/Flow Chart.jpg',
        'This flowchart shows a full overview of the app. Before designing any of these screens, a pencil and paper version of this flowchart was created.',
        'Friend Finder flow chart'
        ],
        ['Resume Book',
        'assets/Gallery/UI/ResumeBook.png',
        'I created this themed portfolio website to apply for game UI positions. All of the UI elements correspond to the theme of the page they live on.',
        'Resume Book UI'
        ]
    ],
    comics: [
        ['Alienation S1 E3',
        'assets/Gallery/Comics/AlienationS1E3.jpg',
        'While working as the lead designer for Motif, I created a series of comics called "Alienation". This comic, like many others, reflected the hectic Motif environment.',
        'Alienation S1 E3'
        ],
        ['Alienation S1 E5',
        'assets/Gallery/Comics/AlienationS1E5FullMin.jpg',
        'This comic is particularly notable because it involves two recurring comics in Motif. I collaborated with E. (the owner of Nazo Labs) to create this monsterpiece.',
        'Alienation S1 E5'
        ],
        ['Alienation S1 E7',
        'assets/Gallery/Comics/AlienationS1E7.jpg',
        'Motif did have a water cooler, but it was never full of booze. Definitely for the better.',
        'Alienation S1 E7'
        ]
    ],
    animation: [
        ['Disco Dude Character Animation',
        'assets/Gallery/DiscoDude/disco-dude.gif',
        'As a programmer creating a video game, having a background in animation comes in handy. I demonstrated this for my HTML5 game, Disco Dude. Click the gif above to play the game.',
        'Gif of a Disco Dancer',
        'https://disco-dude.netlify.app'
        ],
        ['Venga Phone Animation',
        'assets/Gallery/Animation/Venga Climb.mp4',
        'Venga Climbing needed animations of a phone with their app on it. Using Blender, I created several clips to meet their needs. Watch timestamps 00:10, 1:20, and 1:38 to see the phone fly into action.',
        'Venda Climbing comercial'
        ],
        ['The Ultimate Zackatana',
        'assets/Gallery/Animation/Zakatana.mp4',
        'I used Blender to design and sculpt a Beat Saber game asset for my brother. This animation was presented as a Christmas present reveal. The saber features trail and lighting effects that work in game.',
        'Zackatana trailer'
        ],
        ['Avocado On The Run',
        'assets/Gallery/Animation/AvacadoRun.mp4',
        'As a test animation, I set out to create anything my family asked of me. This Avocado is what was requested and now he is on the lam.',
        'Avacoda Run Cycle'
        ],
        ['2D Portfolio Reel',
        'assets/Gallery/Animation/AnimationReel2018.mp4',
        'This is a reel of my 2D animations pre-2018. A lot of them are unfinished, and now I mostly animate on demand when needed. ',
        '2D portfolio Reel'
        ]
    ],
    website: [
        ['Portfolio Site',
        'assets/Gallery/PortfolioSite/CutsomeGifs.png',
        'I designed the entire website you are on currently. Be sure to check out the programming tiles at the top (there are cute gifs), and the sweet parallax effect.',
        'Portfolio Site'
        ],
        ['Infinite Scroll',
        'assets/Gallery/InfiniteScroll/InfiniteScroll.png',
        'I built this site in response to a Pramp interview question. I used  React.js for a challenging learning experience. To visit the site, click the image above.',
        'Infinite Scroll screen shot',
        'https://wills-infinite-scroll.netlify.app/'
        ],
        ['Comic Complex',
        'assets/Gallery/Comic Complex/about.png',
        'The Comic Complex is a conceptual portfolio representing an ideal place where artists can live and display their art inspired by a local arts program, AS220. To visit the site click the image above.',
        'About page of the Comic Complex',
        'https://comic-complex.netlify.app/#/about'
        ],
        ['Motif Word Press',
        'assets/Gallery/websites/MotifWebsite.png',
        'I spent six months updating and publishing articles on Motif Magazine\'s Wordpress site. Here is a <a href="https://motifri.com/the-tail-of-a-tiny-lobster/" target="_blank">link</a> to one of the pages. I added images to mirror the articles featured in the printed magazine. Additionally, I work for Motif as a freelance web developer helping to create sites for clients.',
        'Screen Grab of the Motif Magazine website',
        'https://motifri.com/the-tail-of-a-tiny-lobster/'
        ],
        ['Wood Turner\'s Calculator',
        'assets/Gallery/turners-calculator/WebVase2.png',
        'I designed this site for woodworkers to calculate segmented rings. The UI is responsive and designed to be mobile first. Follow this <a href="https://wood-turners-calculator.netlify.app/" target="_blank">link</a> to visit this site.',
        'Screen Grab of Turner\'s Calculator',
        'https://wood-turners-calculator.netlify.app/'
        ]
    ]
};
/* End Panel Content */

/* Add content and event listeners to Panels */
populatePanels = () => {
    let panels = document.getElementsByClassName('panel')
    for (i = 0; i < panels.length; i++) {
        let thisPanel = panels[i];

        // Close Button
        let closePanel = document.createElement('BUTTON')
        closePanel.className = 'closePanel';
        closePanel.innerHTML = 'X';
        thisPanel.appendChild(closePanel)
        
        // Previous Slide
        let prev = document.createElement('BUTTON')
        prev.className = 'prev';
        prev.innerHTML = '&#10094';
        prev.addEventListener('click', function() { plusSlide(-1, thisPanel); })
        thisPanel.appendChild(prev)
        //Next Slide
        let next = document.createElement('BUTTON')
        next.className = 'next';
        next.innerHTML = '&#10095';
        next.addEventListener('click', function() { plusSlide(1, thisPanel); });
        thisPanel.appendChild(next)
        // Dot Div
        let dotDiv = document.createElement('DIV');
        dotDiv.className = 'dot-div';
        thisPanel.appendChild(dotDiv);

        let thisObjectId = thisPanel.id.slice(0, thisPanel.id.match(/[\\-]/).index);
        let thisObject = objArr[thisObjectId]
        for (j = 0; j < thisObject.length; j++) {
            // Ad Slide
            let slide = document.createElement('DIV');
            slide.className = 'slide-container';
            slide.id = j;
            thisPanel.appendChild(slide);
            // Add Title
            let title = document.createElement('DIV');
            title.className = 'image-title';
            title.innerHTML = thisObject[j][0];
            slide.appendChild(title);
            if (/(?:\.mp4)/.test(thisObject[j][1])){
                // Add video
                let video = document.createElement('VIDEO');
                video.className = 'video';
                video.controls = true;
                video.type = 'video/mp4'
                video.alt = thisObject[j][3];
                video.src = thisObject[j][1];
                slide.appendChild(video);  
            } else {
                // Add Images
                let image = document.createElement('IMG');
                image.className = 'img';
                image.alt = thisObject[j][3];
                image.src = thisObject[j][1];
                if (thisObject[j][4]) {
                    image.style.cursor = 'pointer';
                    let link = document.createElement('A');
                    link.className = 'img-link';
                    link.href = thisObject[j][4];
                    link.target = '_blank';
                    link.style.gridArea = "image"
                    link.appendChild(image);
                    slide.appendChild(link);
                } else {
                    image.style.gridArea = "image"
                    slide.appendChild(image);
                }
            }
            //Add Dot
            let dot = document.createElement('SPAN');
            dot.className = 'dot';
            dot.addEventListener('click', function() {currentSlide(parseInt(slide.id)+1, thisPanel); });
            dotDiv.appendChild(dot);
            //Add Description
            let text = document.createElement('P');
            text.className = 'description';
            text.innerHTML = thisObject[j][2];
            slide.appendChild(text);

        }
    }
}

/* Panel Controls */
let slideIndex = 1;

plusSlide = (n, panel) => { showSlides(slideIndex += n, panel); }

currentSlide = (n, panel) => { showSlides(slideIndex = n, panel); }

showSlides = (n, panel) => {
    // Change Slides
    let slides = panel.getElementsByClassName("slide-container");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideIndex-1].style.display = "grid";

    // Change Dots
    let dots = panel.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].id = '';
    }
    dots[slideIndex-1].id += "active";
}
/* End Panel Controls */


let tiles = document.getElementsByClassName('tile-top');

popUp = (e) => {
    let panel = document.getElementById(e.target.id.slice(0, -7) + "-panel");
    panel.style.display = 'block';
    slideIndex = 1
    showSlides(1, panel);
}

closePopUp = (e) => {
    e.target.parentNode.style.display = 'none';
}

addEvents = () => {
    let array = document.getElementsByClassName('container')
    let xButtons = document.getElementsByClassName('closePanel')
    let WSLogo = document.querySelector('.header-button')
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
    WSLogo.addEventListener('mouseenter', function() { hoverOver(WSLogo) })
    WSLogo.addEventListener('mouseleave', function() { hoverOut(WSLogo) })
    window.addEventListener('scroll', scrollEvent);
}

scrollEvent = () => {
    let moon = document.querySelector('.moon');
    let moonLight = document.querySelector('.moon-light');
    let trees = document.querySelector('.trees');
    let body = document.getElementsByTagName('BODY')[0];

    let value = window.scrollY;
    let totalHeight = document.body.clientHeight;

    let grow = ((value *.01) + 60 +'%');

    body.style.backgroundSize = ((-value*.005) + 120 +'%'), ((-value *.005) + 120 +'%');
    
    moon.style.transform = 'rotate(' + value*.008 + 'deg)';
    moon.style.backgroundSize = grow, grow;
    moon.style.left = ((value / totalHeight) * 85)  + '%';
    moon.style.bottom = ((value/ totalHeight * 85) - 20 +'%');
    moonLight.style.top = ((-value* 0.008) + 20 +'%');

    trees.style.bottom = ((value* 0.008)- 70 +'%');
}

let frames = 1
let counter;
hoverOver = (WSLogo) => {
    // Stop counting down
    clearInterval(counter);
    // Start counting up
    counter = setInterval(() =>{
        frames++; 
        // Animation complete Stop on frame 9
        if (frames >= 9) {
            clearInterval(counter);
            frames = 9;
            WSLogo.style.backgroundImage = `url('assets/Gallery/Animation/WSLogo/WS9.png')`;
        }
        //Set bg url to current frame
        let url = 'assets/Gallery/Animation/WSLogo/WS' + frames + '.png';
        WSLogo.style.backgroundImage = `url('${url}')`;
    }, 50);
}

hoverOut = (WSLogo) => {
    // Stop counting up
    clearInterval(counter)
    // Start counting down
    counter = setInterval(() => {
        frames--; 
        // Animation complete Stop on frame 1
        if (frames <= 1) {
            clearInterval(counter)
            frames = 1
            WSLogo.style.backgroundImage = `url('assets/Gallery/Animation/WSLogo/WS1.png')`;
        };
        //Set bg url to current frame
        let url = 'assets/Gallery/Animation/WSLogo/WS' + frames + '.png';
        WSLogo.style.backgroundImage = `url('${url}')`;
    }, 50);
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
