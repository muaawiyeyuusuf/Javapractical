document.body.innerHTML = '';
document.body.style.cssText = 'margin: 0; padding: 0; font-family: Arial, sans-serif; background: white; color: #333; min-height: 100vh; display: flex; flex-direction: column;';


const nav = document.createElement('nav');
nav.style.cssText = 'background: #2c3e50; padding: 15px 0; position: fixed; width: 100%; top: 0; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.1);';

const navContainer = document.createElement('div');
navContainer.style.cssText = 'max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; position: relative;';

// Logo
const logo = document.createElement('div');
logo.textContent = 'JavaScript DOM';
logo.style.cssText = 'color: white; font-size: 24px; font-weight: bold; cursor: pointer;';




const navLinks = document.createElement('ul');
navLinks.id = 'navLinks';
navLinks.style.cssText = 'display: flex; list-style: none; margin: 0; padding: 0; gap: 25px;';

const pages = ['Home', 'Assignments', 'Contact', 'About'];

pages.forEach(page => {
    const li = document.createElement('li');
    
    const a = document.createElement('a');
    a.textContent = page;
    a.style.cssText = 'color: white; text-decoration: none; font-size: 16px; padding: 10px 15px; border-radius: 4px; transition: all 0.3s; cursor: pointer;';
    
    a.onmouseover = function() {
        this.style.background = '#3498db';
    };
    
    a.onmouseout = function() {
        this.style.background = 'transparent';
    };
    
    a.onclick = function() {
        showPage(page.toLowerCase());
    };
    
    li.appendChild(a);
    navLinks.appendChild(li);
});

const hamburger = document.createElement('button');
hamburger.innerHTML = '☰';
hamburger.id = 'hamburgerBtn';
hamburger.style.cssText = 'display: block; background: #3498db; color: white; border: none; font-size: 24px; cursor: pointer; padding: 10px 15px; border-radius: 4px; transition: all 0.3s;';

hamburger.onmouseover = function() {
    this.style.background = '#2980b9';
};

hamburger.onmouseout = function() {
    this.style.background = '#3498db';
};

const mobileNav = document.createElement('div');
mobileNav.id = 'mobileNav';
mobileNav.style.cssText = 'display: none; position: absolute; top: 60px; right: 20px; background: #2c3e50; padding: 20px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); z-index: 1001; min-width: 200px; border: 2px solid #3498db;';

const mobileNavList = document.createElement('ul');
mobileNavList.style.cssText = 'list-style: none; margin: 0; padding: 0;';

pages.forEach(page => {
    const li = document.createElement('li');
    li.style.cssText = 'margin-bottom: 10px;';
    
    const a = document.createElement('a');
    a.textContent = page;
    a.style.cssText = 'color: white; text-decoration: none; font-size: 16px; padding: 10px 15px; border-radius: 4px; display: block; cursor: pointer; transition: background 0.3s;';
    
    a.onmouseover = function() {
        this.style.background = '#3498db';
    };
    
    a.onmouseout = function() {
        this.style.background = 'transparent';
    };
    
    a.onclick = function() {
        showPage(page.toLowerCase());
        // DON'T hide mobile nav - keep both visible
    };
    
    li.appendChild(a);
    mobileNavList.appendChild(li);
});

mobileNav.appendChild(mobileNavList);

// Hamburger button functionality
hamburger.onclick = function() {
    if (mobileNav.style.display === 'block') {
        mobileNav.style.display = 'none';
    } else {
        mobileNav.style.display = 'block';
    }
};

// Add all elements to nav
navContainer.appendChild(logo);
navContainer.appendChild(navLinks);
navContainer.appendChild(hamburger);
navContainer.appendChild(mobileNav);
nav.appendChild(navContainer);
document.body.appendChild(nav);


const messageDisplay = document.createElement('div');
messageDisplay.id = 'messageDisplay';
messageDisplay.style.cssText = 'position: fixed; top: 100px; right: 20px; width: 350px; background: #f8f9fa; color: #333; padding: 15px; border-radius: 8px; font-family: Arial, sans-serif; font-size: 14px; z-index: 999; max-height: 400px; overflow-y: auto; border: 2px solid #3498db; box-shadow: 0 5px 15px rgba(0,0,0,0.1); display: none;';

const messageTitle = document.createElement('div');
messageTitle.textContent = 'Output Messages:';
messageTitle.style.cssText = 'color: #2c3e50; font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #ddd; padding-bottom: 5px; display: flex; justify-content: space-between; align-items: center;';

const clearMessageBtn = document.createElement('button');
clearMessageBtn.textContent = 'Clear';
clearMessageBtn.style.cssText = 'background: #3498db; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; font-size: 12px;';
clearMessageBtn.onclick = function() {
    messageContent.innerHTML = '';
    messageDisplay.style.display = 'none';
};

messageTitle.appendChild(clearMessageBtn);

const messageContent = document.createElement('div');
messageContent.id = 'messageContent';
messageContent.style.cssText = 'line-height: 1.5;';

messageDisplay.appendChild(messageTitle);
messageDisplay.appendChild(messageContent);
document.body.appendChild(messageDisplay);

// Function to add messages to display (only shows when called)
function addMessage(message) {
    messageDisplay.style.display = 'block';
    const newMessage = document.createElement('div');
    newMessage.textContent = '> ' + message;
    newMessage.style.cssText = 'margin-bottom: 8px; padding: 8px; background: #e8f4fc; border-radius: 4px; border-left: 3px solid #3498db;';
    
    messageContent.appendChild(newMessage);
    messageDisplay.scrollTop = messageDisplay.scrollHeight;
}


const main = document.createElement('main');
main.style.cssText = 'margin-top: 80px; padding: 20px; max-width: 1200px; margin-left: auto; margin-right: auto; flex: 1;';
document.body.appendChild(main);


function showPage(pageName) {
    // Clear main content
    main.innerHTML = '';
    
    // Show selected page
    if (pageName === 'home') showHome();
    else if (pageName === 'assignments') showAssignments();
    else if (pageName === 'contact') showContact();
    else if (pageName === 'about') showAbout();
    
    // DON'T add message when switching pages
}


function showHome() {
    const page = document.createElement('div');
    page.style.cssText = 'position: relative; min-height: 80vh; width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; overflow: hidden; background: #000;';
    
    // ===== FULLSCREEN BACKGROUND SLIDESHOW =====
    
    // Background Container
    const bgContainer = document.createElement('div');
    bgContainer.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; overflow: hidden;';
    
    // Your 3 background images
    const imageUrls = [
        'https://i.pinimg.com/736x/2f/e1/26/2fe12646b80e3b33fae9024a99211f81.jpg',
        'https://i.pinimg.com/736x/ae/83/ff/ae83ffac3ebfd508a9209469fcf4516d.jpg',
        'https://i.pinimg.com/736x/82/51/cd/8251cd1707e52d93fb9d8b3706bae61d.jpg'
    ];
    
    
    const bgImages = [];
    for (let i = 0; i < imageUrls.length; i++) {
        const img = document.createElement('img');
        img.src = imageUrls[i];
        img.alt = `Background Image ${i + 1}`;
        img.style.cssText = `position: absolute; width: 100%; height: 100%; object-fit: cover; top: 0; left: 0; opacity: ${i === 0 ? 1 : 0}; transition: opacity 1.5s ease-in-out; filter: brightness(0.7);`;
        bgContainer.appendChild(img);
        bgImages.push(img);
    }
    
 
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1;';
    bgContainer.appendChild(overlay);
    
    // Image counter indicator
    const counter = document.createElement('div');
    counter.style.cssText = 'position: absolute; bottom: 30px; right: 30px; z-index: 2; display: flex; gap: 10px;';
    
    const dots = [];
    for (let i = 0; i < imageUrls.length; i++) {
        const dot = document.createElement('div');
        dot.style.cssText = `width: 12px; height: 12px; border-radius: 50%; background: ${i === 0 ? '#3498db' : 'rgba(255,255,255,0.3)'}; cursor: pointer; transition: background 0.3s;`;
        dot.onclick = function() {
            currentImage = i;
            updateSlideshow();
        };
        counter.appendChild(dot);
        dots.push(dot);
    }
    bgContainer.appendChild(counter);
    
    // Slideshow logic
    let currentImage = 0;
    
    function updateSlideshow() {
        // Update all images opacity
        bgImages.forEach((img, index) => {
            img.style.opacity = index === currentImage ? '1' : '0';
        });
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.style.background = index === currentImage ? '#3498db' : 'rgba(255,255,255,0.3)';
        });
    }
    
    function nextImage() {
        currentImage = (currentImage + 1) % imageUrls.length;
        updateSlideshow();
    }
    
    // Start slideshow 
    let slideshowInterval = setInterval(nextImage, 4000);
    
    // Pause slideshow on hover
    bgContainer.onmouseenter = function() {
        clearInterval(slideshowInterval);
    };
    
    bgContainer.onmouseleave = function() {
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(nextImage, 4000);
    };
    
    //MAIN CONTENT
    const contentContainer = document.createElement('div');
    contentContainer.style.cssText = 'text-align: center; padding: 60px 50px; background: rgba(255, 255, 255, 0); border-radius: 30px; box-shadow: 0 20px 50px rgba(0,0,0,0.4); max-width: 800px; margin: 20px; position: relative; z-index: 2; backdrop-filter: blur(10px); border: 2px solid rgba(255,255,255,0.2);';
    
    const h1 = document.createElement('h1');
    h1.innerHTML = 'JavaScript <span style="color: #3498db; text-shadow: 1px 1px 3px rgba(0,0,0,0.1);">Final Project</span>';
    h1.style.cssText = 'color: #ffffffff; font-size: 56px; margin-bottom: 25px; font-weight: bold; letter-spacing: 1px;';
    
    const subtitle = document.createElement('p');
    subtitle.innerHTML = 'Interactive Portfolio Website<br><span style="color: #3498db; font-size: 26px; font-weight: bold; display: block; margin-top: 15px;">100% Pure JavaScript - No HTML/CSS Files</span>';
    subtitle.style.cssText = 'color: #ffffffff; font-size: 24px; margin-bottom: 60px; line-height: 1.8;';
    
    //2 BUTTONS 
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.cssText = 'display: flex; gap: 40px; justify-content: center; margin-top: 40px; flex-wrap: wrap;';
    
    // Button 1 - Start with Chapter Examples
    const startBtn1 = document.createElement('button');
    startBtn1.innerHTML = '<div style="font-size: 32px; margin-bottom: 10px;"></div><div style="font-size: 22px; font-weight: bold;">Start with Chapter Examples</div><div style="font-size: 14px; opacity: 0.9; margin-top: 8px;">27 Examples Total</div>';
    startBtn1.style.cssText = 'background: linear-gradient(135deg, #3498db, #2980b9); color: white; border: none; padding: 35px 40px; border-radius: 20px; cursor: pointer; transition: all 0.4s; min-width: 320px; box-shadow: 0 10px 25px rgba(52, 152, 219, 0.5); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px;';
    
    startBtn1.onmouseover = function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
        this.style.boxShadow = '0 20px 40px rgba(52, 152, 219, 0.7)';
        this.style.background = 'linear-gradient(135deg, #2980b9, #3498db)';
    };
    
    startBtn1.onmouseout = function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 25px rgba(52, 152, 219, 0.5)';
        this.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
    };
    
    startBtn1.onclick = function() {
        showPage('assignments');
        // Auto-click first chapter tab
        setTimeout(() => {
            const firstTab = document.querySelector('#chapterContentArea + div button');
            if (firstTab) firstTab.click();
        }, 100);
    };
    
    // Button 2 - Start with Object Examples
    const startBtn2 = document.createElement('button');
    startBtn2.innerHTML = '<div style="font-size: 32px; margin-bottom: 10px;"></div><div style="font-size: 22px; font-weight: bold;">Start with Object Examples</div><div style="font-size: 14px; opacity: 0.9; margin-top: 8px;">Your Provided Code</div>';
    startBtn2.style.cssText = 'background: linear-gradient(135deg, #2c3e50, #1a252f); color: white; border: none; padding: 35px 40px; border-radius: 20px; cursor: pointer; transition: all 0.4s; min-width: 320px; box-shadow: 0 10px 25px rgba(44, 62, 80, 0.5); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px;';
    
    startBtn2.onmouseover = function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
        this.style.boxShadow = '0 20px 40px rgba(44, 62, 80, 0.7)';
        this.style.background = 'linear-gradient(135deg, #1a252f, #2c3e50)';
    };
    
    startBtn2.onmouseout = function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 25px rgba(44, 62, 80, 0.5)';
        this.style.background = 'linear-gradient(135deg, #2c3e50, #1a252f)';
    };
    
    startBtn2.onclick = function() {
        showPage('assignments');
        // Scroll to Part 2 section
        setTimeout(() => {
            const part2Section = document.querySelector('[style*="Part 2: Object Manipulation Examples"]');
            if (part2Section) {
                part2Section.scrollIntoView({ behavior: 'smooth' });
                // Run Part 2 examples
                setTimeout(() => {
                    runPart2Examples();
                }, 500);
            }
        }, 100);
    };
    
    buttonsContainer.appendChild(startBtn1);
    buttonsContainer.appendChild(startBtn2);
    
    // Instruction Text
    const instruction = document.createElement('p');
    instruction.innerHTML = '<strong style="color: #2c3e50; font-size: 20px; display: block; margin-bottom: 15px;">Choose Your Starting Point</strong><span style="color: #666; font-size: 16px; display: block; max-width: 600px; margin: 0 auto; line-height: 1.6;">';
    instruction.style.cssText = 'margin-top: 50px; line-height: 1.6;';
    
    //  CSS ANIMATIONS 
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        @keyframes fadeInUp {
            from { 
                opacity: 0; 
                transform: translateY(40px) scale(0.9); 
            }
            to { 
                opacity: 1; 
                transform: translateY(0) scale(1); 
            }
        }
        
        @keyframes glow {
            0%, 100% { 
                box-shadow: 0 20px 50px rgba(0,0,0,0.4); 
            }
            50% { 
                box-shadow: 0 25px 60px rgba(0,0,0,0.5); 
            }
        }
        
        .fade-in-up {
            animation: fadeInUp 1.2s ease-out;
        }
        
        .content-glow {
            animation: glow 4s infinite ease-in-out;
        }
        
        /* Image transition effect */
        .bg-img-transition {
            transition: opacity 1.5s ease-in-out !important;
        }
        
        /* Responsive design */
        @media (max-width: 1024px) {
            .content-container {
                max-width: 90% !important;
                padding: 40px 30px !important;
            }
            
            .start-button {
                min-width: 280px !important;
                padding: 30px 35px !important;
            }
            
            h1 {
                font-size: 42px !important;
            }
            
            .subtitle {
                font-size: 20px !important;
            }
        }
        
        @media (max-width: 768px) {
            .content-container {
                padding: 30px 20px !important;
                border-radius: 20px !important;
            }
            
            .buttons-container {
                flex-direction: column;
                gap: 25px !important;
            }
            
            .start-button {
                width: 100% !important;
                min-width: auto !important;
            }
            
            h1 {
                font-size: 36px !important;
            }
            
            .subtitle {
                font-size: 18px !important;
                margin-bottom: 40px !important;
            }
            
            .counter {
                bottom: 20px !important;
                right: 20px !important;
            }
            
            .dot {
                width: 10px !important;
                height: 10px !important;
            }
        }
        
        @media (max-width: 480px) {
            h1 {
                font-size: 32px !important;
            }
            
            .subtitle {
                font-size: 16px !important;
            }
            
            .start-button div {
                font-size: 18px !important;
            }
            
            .content-container {
                padding: 25px 15px !important;
            }
        }
    `;
    document.head.appendChild(animationStyles);
    
    
    contentContainer.className = 'fade-in-up content-glow content-container';
    startBtn1.className = 'start-button';
    startBtn2.className = 'start-button';
    counter.className = 'counter';
    dots.forEach(dot => dot.className = 'dot');
    bgImages.forEach(img => img.classList.add('bg-img-transition'));

    contentContainer.appendChild(h1);
    contentContainer.appendChild(subtitle);
    contentContainer.appendChild(buttonsContainer);
    contentContainer.appendChild(instruction);
    
 
    page.appendChild(bgContainer);
    page.appendChild(contentContainer);
    
    main.innerHTML = '';
    main.appendChild(page);
    
    // Clean up interval 
    page.cleanup = function() {
        clearInterval(slideshowInterval);
    };
}
// ============================================
// ASSIGNMENTS PAGE - TWO PARTS
// ============================================
function showAssignments() {
    const page = document.createElement('div');
    
    // PART 1: Chapter Examples Header
    const part1Header = document.createElement('div');
    part1Header.style.cssText = 'background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #ddd;';
    
    const part1Title = document.createElement('h2');
    part1Title.textContent = 'Part 1: Chapter Examples (9 per Chapter)';
    part1Title.style.cssText = 'color: #2c3e50; margin-bottom: 15px;';
    
    const chapterTabs = document.createElement('div');
    chapterTabs.style.cssText = 'display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;';
    
    const chapters = [
        { id: 'ch7', name: 'Chapter 7: Objects', color: '#3498db' },
        { id: 'ch8', name: 'Chapter 8: DOM', color: '#3498db' },
        { id: 'ch9', name: 'Chapter 9: Events', color: '#3498db' }
    ];
    
    const contentArea = document.createElement('div');
    contentArea.id = 'chapterContentArea';
    
    chapters.forEach(chapter => {
        const tabBtn = document.createElement('button');
        tabBtn.textContent = chapter.name;
        tabBtn.style.cssText = `background: ${chapter.color}; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;`;
        
        tabBtn.onclick = function() {
            // Show this chapter's content
            document.querySelectorAll('.chapter-content').forEach(content => {
                content.style.display = 'none';
            });
            document.getElementById(chapter.id + 'Content').style.display = 'block';
            
            // Update active tab
            chapterTabs.querySelectorAll('button').forEach(btn => {
                btn.style.background = '#3498db';
            });
            this.style.background = '#2c3e50';
        };
        
        chapterTabs.appendChild(tabBtn);
    });
    
    part1Header.appendChild(part1Title);
    part1Header.appendChild(chapterTabs);
    page.appendChild(part1Header);
    
    // Create chapter contents (9 examples each)
    createChapter7Examples(contentArea);
    createChapter8Examples(contentArea);
    createChapter9Examples(contentArea);
    
    page.appendChild(contentArea);
    
    // PART 2: 
    const part2Header = document.createElement('div');
    part2Header.style.cssText = 'background: white; padding: 20px; border-radius: 8px; margin-top: 30px; margin-bottom: 20px; border: 1px solid #ddd;';
    
    const part2Title = document.createElement('h2');
    part2Title.textContent = 'Part 2: Object Manipulation Examples';
    part2Title.style.cssText = 'color: #2c3e50; margin-bottom: 15px;';
    
    const runPart2Btn = document.createElement('button');
    runPart2Btn.textContent = 'Run All Part 2 Examples';
    runPart2Btn.style.cssText = 'background: #3498db; color: white; border: none; padding: 12px 25px; border-radius: 4px; cursor: pointer; font-size: 16px;';
    
    runPart2Btn.onclick = function() {
        runPart2Examples();
    };
    
    part2Header.appendChild(part2Title);
    part2Header.appendChild(runPart2Btn);
    page.appendChild(part2Header);
    
    // Part 2 Code Display
    const part2Code = document.createElement('div');
    part2Code.style.cssText = 'background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #ddd;';
    
    const codeTitle = document.createElement('h3');
    codeTitle.textContent = 'Part 2 JavaScript Code:';
    codeTitle.style.cssText = 'color: #2c3e50; margin-bottom: 15px;';
    
    const codeBlock = document.createElement('div');
    codeBlock.textContent = `// 1: House object
let house = {
    owner: "Mr. Muaawiya",
    location: "Hodan, Mogadishu",
    rooms: 5
};

let employee = {
    fullName: "Auub yuusuf alasow",
    position: "Software Developer",
    salary: 1600
};

// 3: Constructor Function
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let car3 = new Car("hoomey", "buruuj V16", 2024);

// 4: Laptop object
let laptop = {
    name: "HP elitebook",
    processor: "Core i7",
    year: 2026
};

// 5: Countries array
let countries = [
    { name: "Somalia", capital: "Mogadishu", population: 17000000 },
    { name: "kenya", capital: "Nairobi", population: 54000000 },
    { name: "Turkey", capital: "Ankara", population: 85000000 },
    { name: "Qatar", capital: "Doha", population: 2900000 }
];

// OBJECT MANIPULATION EXAMPLES
// 1. Change object property
let houseE = { owner: "Mr. Muaawiya", location: "Hodan", rooms: 5 };
houseE.rooms = 6;

// 2. Add new property
let employeeE = { fullName: "Ayuub yuusuf", position: "Developer", salary: 1600 };
employeeE.department = "IT";

// 3. Object method
let person = {
    name: "AYUUB",
    greet: function() {
        return "Hello " + this.name;
    }
};

// 4. Loop examples
// 5. JSON operations
let student = { name: "JAMIILA", age: 22, major: "ICT" };
let studentJSON = JSON.stringify(student);
let studentObj = JSON.parse(studentJSON);`;
    codeBlock.style.cssText = 'background: #f8f9fa; color: #333; padding: 15px; border-radius: 5px; font-family: monospace; font-size: 14px; white-space: pre-wrap; overflow-x: auto; border: 1px solid #ddd;';
    
    part2Code.appendChild(codeTitle);
    part2Code.appendChild(codeBlock);
    page.appendChild(part2Code);
    
    main.appendChild(page);
    
    // Activate first chapter by default
    setTimeout(() => {
        chapterTabs.querySelector('button').click();
    }, 100);
}

// ============================================
// CHAPTER 7 EXAMPLES (9 Examples)
// ============================================
function createChapter7Examples(container) {
    const chapter7 = document.createElement('div');
    chapter7.id = 'ch7Content';
    chapter7.className = 'chapter-content';
    chapter7.style.cssText = 'display: block;';
    
    // Example 1
    chapter7.appendChild(createExample(
        '1. Basic Object Creation',
        `const person = {
    name: "Muawiya",
    age: 25,
    city: "Mogadishu"
};`,
        'Run Example 1',
        function() {
            const person = {
                name: "Muawiya",
                age: 25,
                city: "Mogadishu"
            };
            addMessage('Person Object:');
            addMessage('Name: ' + person.name);
            addMessage('Age: ' + person.age);
            addMessage('City: ' + person.city);
        }
    ));
    
    // Example 2
    chapter7.appendChild(createExample(
        '2. Object with Methods',
        `const calculator = {
    add: function(a, b) {
        return a + b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};`,
        'Run Example 2',
        function() {
            const calculator = {
                add: function(a, b) {
                    return a + b;
                },
                multiply: function(a, b) {
                    return a * b;
                }
            };
            addMessage('Calculator Methods:');
            addMessage('5 + 3 = ' + calculator.add(5, 3));
            addMessage('5 * 3 = ' + calculator.multiply(5, 3));
        }
    ));
    
    // Example 3
    chapter7.appendChild(createExample(
        '3. Constructor Function',
        `function Student(name, id, grade) {
    this.name = name;
    this.id = id;
    this.grade = grade;
    this.getInfo = function() {
        return this.name + " (" + this.id + ")";
    };
}`,
        'Run Example 3',
        function() {
            function Student(name, id, grade) {
                this.name = name;
                this.id = id;
                this.grade = grade;
                this.getInfo = function() {
                    return this.name + " (" + this.id + ")";
                };
            }
            const student1 = new Student("Ali", "S001", "A");
            addMessage('Student Object:');
            addMessage(student1.getInfo());
            addMessage('Grade: ' + student1.grade);
        }
    ));
    
    // Example 4
    chapter7.appendChild(createExample(
        '4. Accessing Object Properties',
        `const book = {
    title: "JavaScript Guide",
    author: "John Smith",
    pages: 350,
    price: 29.99
};`,
        'Run Example 4',
        function() {
            const book = {
                title: "JavaScript Guide",
                author: "John Smith",
                pages: 350,
                price: 29.99
            };
            addMessage('Book Properties:');
            addMessage('Title: ' + book.title);
            addMessage('Author: ' + book.author);
            addMessage('Pages: ' + book.pages);
            addMessage('Price: $' + book.price);
        }
    ));
    
    // Example 5
    chapter7.appendChild(createExample(
        '5. Modifying Object Properties',
        `const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};`,
        'Run Example 5',
        function() {
            const car = {
                brand: "Toyota",
                model: "Camry",
                year: 2020
            };
            addMessage('Original Car: ' + car.brand + ' ' + car.model);
            car.year = 2023;
            car.color = "Blue";
            addMessage('Modified Car:');
            addMessage('Year: ' + car.year);
            addMessage('Color: ' + car.color);
        }
    ));
    
    // Example 6
    chapter7.appendChild(createExample(
        '6. for...in Loop',
        `const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    yellow: "#ffff00"
};`,
        'Run Example 6',
        function() {
            const colors = {
                red: "#ff0000",
                green: "#00ff00",
                blue: "#0000ff",
                yellow: "#ffff00"
            };
            addMessage('Color Object Properties:');
            for (let key in colors) {
                addMessage(key + ': ' + colors[key]);
            }
        }
    ));
    
    // Example 7
    chapter7.appendChild(createExample(
        '7. Object.keys and Object.values',
        `const product = {
    id: 101,
    name: "Laptop",
    price: 999.99,
    inStock: true
};`,
        'Run Example 7',
        function() {
            const product = {
                id: 101,
                name: "Laptop",
                price: 999.99,
                inStock: true
            };
            addMessage('Object.keys: ' + Object.keys(product).join(', '));
            addMessage('Object.values: ' + Object.values(product).join(', '));
        }
    ));
    
    // Example 8
    chapter7.appendChild(createExample(
        '8. JSON Stringify',
        `const user = {
    username: "muawiya",
    email: "muaawiyayuusuf@gmail.com",
    active: true,
    lastLogin: "2023-12-19"
};`,
        'Run Example 8',
        function() {
            const user = {
                username: "muawiya",
                email: "muaawiyayuusuf@gmail.com",
                active: true,
                lastLogin: "2023-12-19"
            };
            const jsonString = JSON.stringify(user);
            addMessage('JSON String:');
            addMessage(jsonString);
        }
    ));
    
    // Example 9
    chapter7.appendChild(createExample(
        '9. JSON Parse',
        `const jsonData = '{"name":"Ahmed","age":30,"city":"Nairobi"}';`,
        'Run Example 9',
        function() {
            const jsonData = '{"name":"Ahmed","age":30,"city":"Nairobi"}';
            const obj = JSON.parse(jsonData);
            addMessage('Parsed Object:');
            addMessage('Name: ' + obj.name);
            addMessage('Age: ' + obj.age);
            addMessage('City: ' + obj.city);
        }
    ));
    
    container.appendChild(chapter7);
}

// ============================================
// CHAPTER 8 EXAMPLES (9 Examples)
// ============================================
function createChapter8Examples(container) {
    const chapter8 = document.createElement('div');
    chapter8.id = 'ch8Content';
    chapter8.className = 'chapter-content';
    chapter8.style.cssText = 'display: none;';
    
    // Example 1
    chapter8.appendChild(createExample(
        '1. getElementById',
        `const element = document.getElementById('demo');
element.textContent = "Text changed";
element.style.color = "blue";`,
        'Run Example 1',
        function() {
            const demoDiv = document.createElement('div');
            demoDiv.id = 'demo';
            demoDiv.textContent = 'Original Text';
            demoDiv.style.cssText = 'padding: 10px; margin: 10px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';
            main.appendChild(demoDiv);
            
            setTimeout(() => {
                const element = document.getElementById('demo');
                element.textContent = "Text changed with JavaScript";
                element.style.color = "#3498db";
                element.style.fontWeight = "bold";
                addMessage('Element modified using getElementById');
            }, 500);
        }
    ));
    
    // Example 2
    chapter8.appendChild(createExample(
        '2. querySelector',
        `const firstDiv = document.querySelector('div');
const firstButton = document.querySelector('button');`,
        'Run Example 2',
        function() {
            addMessage('Total div elements: ' + document.querySelectorAll('div').length);
            addMessage('Total button elements: ' + document.querySelectorAll('button').length);
        }
    ));
    
    // Example 3
    chapter8.appendChild(createExample(
        '3. querySelectorAll',
        `const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(p => {
    p.style.border = "1px solid blue";
});`,
        'Run Example 3',
        function() {
            const demoP1 = document.createElement('p');
            demoP1.textContent = 'Paragraph 1';
            demoP1.style.cssText = 'padding: 10px; margin: 5px 0;';
            
            const demoP2 = document.createElement('p');
            demoP2.textContent = 'Paragraph 2';
            demoP2.style.cssText = 'padding: 10px; margin: 5px 0;';
            
            main.appendChild(demoP1);
            main.appendChild(demoP2);
            
            const allParagraphs = document.querySelectorAll('p');
            allParagraphs.forEach(p => {
                p.style.border = "2px solid #3498db";
                p.style.padding = "10px";
                p.style.borderRadius = "5px";
            });
            
            addMessage('Styled ' + allParagraphs.length + ' paragraph elements');
        }
    ));
    
    // Example 4
    chapter8.appendChild(createExample(
        '4. createElement',
        `const newDiv = document.createElement('div');
newDiv.textContent = "New Element Created";
document.body.appendChild(newDiv);`,
        'Run Example 4',
        function() {
            const newDiv = document.createElement('div');
            newDiv.textContent = "New Element Created with JavaScript";
            newDiv.style.cssText = 'background: #3498db; color: white; padding: 15px; margin: 10px 0; border-radius: 8px; text-align: center;';
            main.appendChild(newDiv);
            addMessage('New element created and added to page');
        }
    ));
    
    // Example 5
    chapter8.appendChild(createExample(
        '5. innerHTML vs textContent',
        `// textContent sets plain text
div1.textContent = "<strong>Text</strong>";
// innerHTML parses HTML
div2.innerHTML = "<strong>HTML</strong>";`,
        'Run Example 5',
        function() {
            const container = document.createElement('div');
            container.style.cssText = 'display: flex; gap: 20px; margin: 15px 0;';
            
            const div1 = document.createElement('div');
            div1.textContent = "<strong>Using textContent</strong>";
            div1.style.cssText = 'flex: 1; padding: 15px; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';
            
            const div2 = document.createElement('div');
            div2.innerHTML = "<strong>Using innerHTML</strong>";
            div2.style.cssText = 'flex: 1; padding: 15px; background: #f8f9fa; border-radius: 5px; border: 1px solid #3498db; color: #3498db;';
            
            container.appendChild(div1);
            container.appendChild(div2);
            main.appendChild(container);
            
            addMessage('Left: textContent shows tags as text');
            addMessage('Right: innerHTML parses HTML tags');
        }
    ));
    
    // Example 6
    chapter8.appendChild(createExample(
        '6. classList Methods',
        `element.classList.add('active');
element.classList.remove('old-class');
element.classList.toggle('hidden');`,
        'Run Example 6',
        function() {
            const demoElement = document.createElement('div');
            demoElement.textContent = 'ClassList Demo';
            demoElement.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 8px; border: 1px solid #ddd; text-align: center;';
            
            main.appendChild(demoElement);
            
            demoElement.classList.add('active');
            addMessage('Added class: active');
            
            setTimeout(() => {
                demoElement.style.background = '#e8f4fc';
                demoElement.style.borderColor = '#3498db';
                addMessage('Changed element style');
            }, 1000);
        }
    ));
    
    // Example 7
    chapter8.appendChild(createExample(
        '7. Style Manipulation',
        `element.style.backgroundColor = "blue";
element.style.color = "white";
element.style.fontSize = "20px";
element.style.padding = "15px";`,
        'Run Example 7',
        function() {
            const styleBox = document.createElement('div');
            styleBox.textContent = "Style Manipulation Example";
            styleBox.style.cssText = 'padding: 15px; margin: 15px 0; background: #f8f9fa; border: 1px solid #ddd; text-align: center; border-radius: 5px;';
            
            main.appendChild(styleBox);
            
            setTimeout(() => {
                styleBox.style.backgroundColor = "#3498db";
                styleBox.style.color = "white";
                styleBox.style.fontSize = "18px";
                styleBox.style.padding = "20px";
                styleBox.style.border = "2px solid #2c3e50";
                addMessage('Styles dynamically changed');
            }, 1000);
        }
    ));
    
    // Example 8
    chapter8.appendChild(createExample(
        '8. Attribute Manipulation',
        `element.setAttribute('id', 'new-id');
element.getAttribute('class');
element.hasAttribute('data-custom');`,
        'Run Example 8',
        function() {
            const attrDemo = document.createElement('div');
            attrDemo.textContent = "Attribute Demo";
            attrDemo.style.cssText = 'padding: 15px; margin: 15px 0; background: #f8f9fa; border: 1px solid #ddd; text-align: center; border-radius: 5px;';
            
            main.appendChild(attrDemo);
            
            attrDemo.setAttribute('id', 'demo-element');
            attrDemo.setAttribute('data-custom', 'custom-value');
            
            addMessage('ID attribute: ' + attrDemo.getAttribute('id'));
            addMessage('Custom attribute: ' + attrDemo.getAttribute('data-custom'));
            addMessage('Has data-custom? ' + attrDemo.hasAttribute('data-custom'));
        }
    ));
    
    // Example 9
    chapter8.appendChild(createExample(
        '9. Remove Element',
        `const element = document.getElementById('to-remove');
element.parentNode.removeChild(element);`,
        'Run Example 9',
        function() {
            const toRemove = document.createElement('div');
            toRemove.id = 'to-remove';
            toRemove.textContent = 'This element will be removed in 2 seconds';
            toRemove.style.cssText = 'padding: 15px; margin: 15px 0; background: #f8f9fa; border: 1px solid #ddd; border-radius: 5px; text-align: center;';
            
            main.appendChild(toRemove);
            
            addMessage('Element created. Will remove in 2 seconds...');
            
            setTimeout(() => {
                if (toRemove.parentNode) {
                    toRemove.parentNode.removeChild(toRemove);
                    addMessage('Element removed successfully');
                }
            }, 2000);
        }
    ));
    
    container.appendChild(chapter8);
}

// ============================================
// CHAPTER 9 EXAMPLES (9 Examples)
// ============================================
function createChapter9Examples(container) {
    const chapter9 = document.createElement('div');
    chapter9.id = 'ch9Content';
    chapter9.className = 'chapter-content';
    chapter9.style.cssText = 'display: none;';
    
    // Example 1
    chapter9.appendChild(createExample(
        '1. Click Event',
        `button.addEventListener('click', function() {
    this.textContent = "Clicked!";
    this.style.background = "blue";
});`,
        'Run Example 1',
        function() {
            const clickBtn = document.createElement('button');
            clickBtn.textContent = "Click Me";
            clickBtn.style.cssText = 'background: #3498db; color: white; border: none; padding: 12px 25px; border-radius: 5px; cursor: pointer; margin: 15px 0;';
            
            clickBtn.addEventListener('click', function() {
                this.textContent = "Clicked!";
                this.style.background = "#2c3e50";
                addMessage('Button click event fired');
            });
            
            main.appendChild(clickBtn);
        }
    ));
    
    // Example 2
    chapter9.appendChild(createExample(
        '2. Mouse Events',
        `element.addEventListener('mouseover', function() {
    this.style.background = "blue";
});
element.addEventListener('mouseout', function() {
    this.style.background = "white";
});`,
        'Run Example 2',
        function() {
            const mouseBox = document.createElement('div');
            mouseBox.textContent = "Hover Over Me";
            mouseBox.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border: 1px solid #ddd; text-align: center; border-radius: 5px; cursor: pointer;';
            
            mouseBox.addEventListener('mouseover', function() {
                this.style.background = "#3498db";
                this.style.color = "white";
                addMessage('Mouse over event');
            });
            
            mouseBox.addEventListener('mouseout', function() {
                this.style.background = "#f8f9fa";
                this.style.color = "#333";
                addMessage('Mouse out event');
            });
            
            main.appendChild(mouseBox);
        }
    ));
    
    // Example 3
    chapter9.appendChild(createExample(
        '3. Keyboard Events',
        `document.addEventListener('keydown', function(e) {
    console.log("Key pressed:", e.key);
});`,
        'Run Example 3',
        function() {
            const keyInfo = document.createElement('div');
            keyInfo.innerHTML = '<div style="margin-bottom: 10px;">Press any key...</div><div id="keyDisplay" style="color: #3498db; font-size: 18px; margin-top: 10px;">-</div>';
            keyInfo.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd; text-align: center;';
            
            main.appendChild(keyInfo);
            
            const keyDisplay = document.getElementById('keyDisplay');
            
            document.addEventListener('keydown', function(e) {
                keyDisplay.textContent = 'Key: ' + e.key + ' (Code: ' + e.code + ')';
                addMessage('Key pressed: ' + e.key);
            });
            
            addMessage('Keyboard events activated. Press any key.');
        }
    ));
    
    // Example 4
    chapter9.appendChild(createExample(
        '4. Input Event',
        `input.addEventListener('input', function(e) {
    console.log("Input value:", e.target.value);
});`,
        'Run Example 4',
        function() {
            const inputDemo = document.createElement('div');
            inputDemo.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';
            
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.placeholder = "Type something...";
            inputField.style.cssText = 'width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; color: #333; box-sizing: border-box;';
            
            const counter = document.createElement('div');
            counter.textContent = "Characters: 0";
            counter.style.cssText = 'color: #3498db; margin-top: 10px;';
            
            inputField.addEventListener('input', function(e) {
                const length = e.target.value.length;
                counter.textContent = "Characters: " + length;
                addMessage('Input changed: "' + e.target.value + '" (' + length + ' chars)');
            });
            
            inputDemo.appendChild(inputField);
            inputDemo.appendChild(counter);
            main.appendChild(inputDemo);
        }
    ));
    
    // Example 5
    chapter9.appendChild(createExample(
        '5. Focus/Blur Events',
        `input.addEventListener('focus', function() {
    this.style.borderColor = "blue";
});
input.addEventListener('blur', function() {
    this.style.borderColor = "gray";
});`,
        'Run Example 5',
        function() {
            const focusDemo = document.createElement('div');
            focusDemo.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';
            
            const focusInput = document.createElement('input');
            focusInput.type = 'text';
            focusInput.placeholder = "Click here to focus, then click away";
            focusInput.style.cssText = 'width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 4px; color: #333; box-sizing: border-box; transition: border-color 0.3s;';
            
            focusInput.addEventListener('focus', function() {
                this.style.borderColor = "#3498db";
                addMessage('Input focused');
            });
            
            focusInput.addEventListener('blur', function() {
                this.style.borderColor = "#ddd";
                addMessage('Input blurred (lost focus)');
            });
            
            focusDemo.appendChild(focusInput);
            main.appendChild(focusDemo);
        }
    ));
    
    // Example 6
    chapter9.appendChild(createExample(
        '6. Form Submit Event',
        `form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("Form submitted");
});`,
        'Run Example 6',
        function() {
            const formDemo = document.createElement('form');
            formDemo.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';
            
            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.placeholder = "Your Name";
            nameInput.style.cssText = 'width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px; color: #333; box-sizing: border-box;';
            
            const submitBtn = document.createElement('button');
            submitBtn.type = 'submit';
            submitBtn.textContent = "Submit";
            submitBtn.style.cssText = 'background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; width: 100%;';
            
            formDemo.addEventListener('submit', function(e) {
                e.preventDefault();
                addMessage('Form submit prevented');
                addMessage('Name entered: ' + (nameInput.value || '(empty)'));
                nameInput.value = '';
            });
            
            formDemo.appendChild(nameInput);
            formDemo.appendChild(submitBtn);
            main.appendChild(formDemo);
        }
    ));
    
    // Example 7
    chapter9.appendChild(createExample(
        '7. Event Delegation',
        `parent.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') {
        console.log("Button clicked:", e.target.textContent);
    }
});`,
        'Run Example 7',
        function() {
            const delegationDemo = document.createElement('div');
            delegationDemo.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';
            
            const buttonContainer = document.createElement('div');
            buttonContainer.id = 'buttonContainer';
            buttonContainer.style.cssText = 'display: flex; gap: 10px; flex-wrap: wrap;';
            
            for (let i = 1; i <= 3; i++) {
                const btn = document.createElement('button');
                btn.textContent = 'Button ' + i;
                btn.style.cssText = 'background: #3498db; color: white; border: 1px solid #2c3e50; padding: 8px 15px; border-radius: 4px; cursor: pointer;';
                buttonContainer.appendChild(btn);
            }
            
            buttonContainer.addEventListener('click', function(e) {
                if(e.target.tagName === 'BUTTON') {
                    e.target.style.background = "#2c3e50";
                    addMessage('Button clicked via delegation: ' + e.target.textContent);
                    
                    setTimeout(() => {
                        e.target.style.background = "#3498db";
                    }, 1000);
                }
            });
            
            delegationDemo.innerHTML = '<div style="color: #666; margin-bottom: 10px;">Click any button (single event listener on parent):</div>';
            delegationDemo.appendChild(buttonContainer);
            main.appendChild(delegationDemo);
        }
    ));
    
    // Example 8
    chapter9.appendChild(createExample(
        '8. Prevent Default',
        `link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("Default action prevented");
});`,
        'Run Example 8',
        function() {
            const preventDemo = document.createElement('div');
            preventDemo.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';
            
            const demoLink = document.createElement('a');
            demoLink.href = '#';
            demoLink.textContent = "Click Me (Prevented)";
            demoLink.style.cssText = 'color: #3498db; text-decoration: none; padding: 10px 15px; background: white; border-radius: 4px; display: inline-block; cursor: pointer; border: 1px solid #3498db;';
            
            demoLink.addEventListener('click', function(e) {
                e.preventDefault();
                this.style.background = "#3498db";
                this.style.color = "white";
                addMessage('Default link behavior prevented');
                
                setTimeout(() => {
                    this.style.background = "white";
                    this.style.color = "#3498db";
                }, 1000);
            });
            
            preventDemo.appendChild(demoLink);
            main.appendChild(preventDemo);
        }
    ));
    
    // Example 9
    chapter9.appendChild(createExample(
        '9. Event Bubbling',
        `child.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log("Child clicked");
});
parent.addEventListener('click', function() {
    console.log("Parent clicked");
});`,
        'Run Example 9',
        function() {
            const bubblingDemo = document.createElement('div');
            bubblingDemo.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';
            
            const parentDiv = document.createElement('div');
            parentDiv.id = 'parentDiv';
            parentDiv.style.cssText = 'padding: 25px; background: white; border: 2px solid #3498db; border-radius: 5px; margin-bottom: 10px;';
            parentDiv.textContent = "PARENT DIV (click me)";
            parentDiv.style.color = "#2c3e50";
            parentDiv.style.textAlign = "center";
            
            const childDiv = document.createElement('div');
            childDiv.id = 'childDiv';
            childDiv.style.cssText = 'padding: 15px; background: #f8f9fa; border: 2px solid #2c3e50; border-radius: 5px; margin: 10px auto; max-width: 250px;';
            childDiv.textContent = "CHILD DIV (click me - stops bubbling)";
            childDiv.style.color = "#2c3e50";
            childDiv.style.textAlign = "center";
            childDiv.style.cursor = "pointer";
            
            parentDiv.appendChild(childDiv);
            
            parentDiv.addEventListener('click', function() {
                this.style.background = "#e8f4fc";
                addMessage('Parent div clicked (bubbling)');
                
                setTimeout(() => {
                    this.style.background = "white";
                }, 1000);
            });
            
            childDiv.addEventListener('click', function(e) {
                e.stopPropagation();
                this.style.background = "#3498db";
                this.style.color = "white";
                addMessage('Child div clicked (bubbling stopped)');
                
                setTimeout(() => {
                    this.style.background = "#f8f9fa";
                    this.style.color = "#2c3e50";
                }, 1000);
            });
            
            bubblingDemo.appendChild(parentDiv);
            main.appendChild(bubblingDemo);
        }
    ));
    
    container.appendChild(chapter9);
}

// Helper function to create example cards
function createExample(title, code, buttonText, clickHandler) {
    const example = document.createElement('div');
    example.style.cssText = 'background: white; border-radius: 8px; padding: 20px; margin-bottom: 15px; border: 1px solid #ddd;';
    
    const exampleTitle = document.createElement('h3');
    exampleTitle.textContent = title;
    exampleTitle.style.cssText = 'color: #2c3e50; margin-bottom: 10px;';
    
    const codeBlock = document.createElement('div');
    codeBlock.textContent = code;
    codeBlock.style.cssText = 'background: #f8f9fa; color: #333; padding: 15px; border-radius: 5px; font-family: monospace; font-size: 14px; margin-bottom: 10px; white-space: pre-wrap; overflow-x: auto; border: 1px solid #ddd;';
    
    const runBtn = document.createElement('button');
    runBtn.textContent = buttonText;
    runBtn.style.cssText = 'background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-size: 14px;';
    
    runBtn.onclick = clickHandler;
    
    example.appendChild(exampleTitle);
    example.appendChild(codeBlock);
    example.appendChild(runBtn);
    
    return example;
}

// ============================================
// PART 2 EXAMPLES the past assinments
// ============================================
function runPart2Examples() {
    addMessage('=== PART 2: OBJECT MANIPULATION EXAMPLES ===');
    
    // 1: House object
    addMessage('1. HOUSE OBJECT:');
    let house = {
        owner: "Mr. Muaawiya",
        location: "Hodan, Mogadishu",
        rooms: 5
    };
    addMessage("   Owner: " + house.owner);
    addMessage("   Location: " + house.location);
    addMessage("   Rooms: " + house.rooms);

    // 2: Employee object
    addMessage('2. EMPLOYEE OBJECT:');
    let employee = {
        fullName: "Auub yuusuf alasow",
        position: "Software Developer",
        salary: 1600
    };
    addMessage("   Full Name: " + employee.fullName);
    addMessage("   Position: " + employee.position);
    addMessage("   Salary: $" + employee.salary);

    // 3: Constructor Function
    addMessage('3. CAR OBJECT (Constructor):');
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    let car3 = new Car("hoomey", "buruuj V16", 2024);
    addMessage("   Brand: " + car3.brand);
    addMessage("   Model: " + car3.model);
    addMessage("   Year: " + car3.year);

    // 4: Laptop object
    addMessage('4. LAPTOP OBJECT:');
    let laptop = {
        name: "HP elitebook",
        processor: "Core i7",
        year: 2026
    };
    addMessage("   Name: " + laptop.name);
    addMessage("   Processor: " + laptop.processor);
    addMessage("   Year: " + laptop.year);

    // 5: Countries array
    addMessage('5. COUNTRIES LIST:');
    let countries = [
        { name: "Somalia", capital: "Mogadishu", population: 17000000 },
        { name: "kenya", capital: "Nairobi", population: 54000000 },
        { name: "Turkey", capital: "Ankara", population: 85000000 },
        { name: "Qatar", capital: "Doha", population: 2900000 }
    ];
    for (let i = 0; i < countries.length; i++) {
        addMessage("   Country: " + countries[i].name);
        addMessage("   Capital: " + countries[i].capital);
        addMessage("   Population: " + countries[i].population.toLocaleString());
    }

    // Object Manipulation
    addMessage('=== OBJECT MANIPULATION EXAMPLES ===');
    
    // 1. Change object property
    addMessage('1. House Object (modified):');
    let houseE = { owner: "Mr. Muaawiya", location: "Hodan", rooms: 5 };
    houseE.rooms = 6;
    addMessage("   Rooms (changed from 5 to 6): " + houseE.rooms);

    // 2. Add new property
    addMessage('2. Employee Object (with new property):');
    let employeeE = { fullName: "Ayuub yuusuf", position: "Developer", salary: 1600 };
    employeeE.department = "IT";
    addMessage("   Department (added): " + employeeE.department);

    // 3. Method in object
    addMessage('3. Person Object with Method:');
    let person = {
        name: "AYUUB",
        greet: function() {
            return "Hello " + this.name;
        }
    };
    addMessage("   Method result: " + person.greet());

    // 4. Loop examples
    addMessage('4.1 for...in Loop (House):');
    for (let key in house) {
        addMessage("   " + key + ": " + house[key]);
    }

    // 5. JSON creation
    addMessage('5. JSON String (Student):');
    let student = { name: "JAMIILA", age: 22, major: "ICT" };
    let studentJSON = JSON.stringify(student);
    addMessage("   " + studentJSON);

    // 6. JSON to object
    addMessage('6. Object from JSON:');
    let studentObj = JSON.parse(studentJSON);
    addMessage("   Name: " + studentObj.name);
    addMessage("   Age: " + studentObj.age);
    addMessage("   Major: " + studentObj.major);
    
    addMessage('=== END OF PART 2 EXAMPLES ===');
}
// ============================================
//COLUMNS LAYOUT
// ============================================
function showAbout() {
    const page = document.createElement('div');
    page.style.cssText = 'background: white; border-radius: 10px; padding: 30px; margin-bottom: 30px; border: 1px solid #ddd; max-width: 1200px; margin: 0 auto;';
    
    // Header
    const header = document.createElement('div');
    header.style.cssText = 'text-align: center; margin-bottom: 40px;';
    
    const h1 = document.createElement('h1');
    h1.textContent = 'About Me';
    h1.style.cssText = 'color: #2c3e50; font-size: 36px; margin-bottom: 20px;';
    
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Computer Science Student | JavaScript Developer | E-Learning Platform Creator';
    subtitle.style.cssText = 'color: #3498db; font-size: 18px; font-weight: bold; margin-bottom: 30px;';
    
    header.appendChild(h1);
    header.appendChild(subtitle);
    
    // Main Content
    const mainContent = document.createElement('div');
    mainContent.style.cssText = 'display: grid; grid-template-columns: 1fr 2fr; gap: 30px;';
    
    // ===== LEFT COLUMN =====
    const leftColumn = document.createElement('div');
    
    // Profile Card 
    const profileCard = document.createElement('div');
    profileCard.style.cssText = 'background: white; padding: 25px; border-radius: 10px; border: 2px solid #3498db; margin-bottom: 25px; text-align: center; box-shadow: 0 3px 10px rgba(0,0,0,0.1);';
    
    // Image Section
    const imageUploadContainer = document.createElement('div');
    imageUploadContainer.style.cssText = 'margin-bottom: 20px;';
    
    const imageContainer = document.createElement('div');
    imageContainer.id = 'profileImageContainer';
    imageContainer.style.cssText = 'width: 200px; height: 200px; margin: 0 auto 15px; position: relative; overflow: hidden; border-radius: 50%; border: 4px solid #2c3e50;';
    
    //  profile image
    const profileImg = document.createElement('img');
    profileImg.src = 'https://i.pinimg.com/736x/9f/69/be/9f69be6a5ed22bd3c9db64c1f8f2efe8.jpg';
    profileImg.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
    
    imageContainer.appendChild(profileImg);
    imageUploadContainer.appendChild(imageContainer);
    
    const name = document.createElement('h2');
    name.textContent = 'Muawiya Yusuf';
    name.style.cssText = 'color: #2c3e50; margin-bottom: 10px; font-size: 24px;';
    
    const id = document.createElement('p');
    id.textContent = 'ID: C6240358';
    id.style.cssText = 'color: #3498db; font-weight: bold; margin-bottom: 5px;';
    
    const university = document.createElement('p');
    university.textContent = 'Jamhriya University';
    university.style.cssText = 'color: #666; margin-bottom: 5px;';
    
    const className = document.createElement('p');
    className.textContent = 'Class: CN242';
    className.style.cssText = 'color: #666; margin-bottom: 15px;';
    
    profileCard.appendChild(imageUploadContainer);
    profileCard.appendChild(name);
    profileCard.appendChild(id);
    profileCard.appendChild(university);
    profileCard.appendChild(className);
    
    // Contact Info Card
    const contactCard = document.createElement('div');
    contactCard.style.cssText = 'background: white; padding: 25px; border-radius: 10px; border: 2px solid #2c3e50; box-shadow: 0 3px 10px rgba(0,0,0,0.1);';
    
    const contactTitle = document.createElement('h3');
    contactTitle.textContent = 'Contact Information';
    contactTitle.style.cssText = 'color: #2c3e50; margin-bottom: 20px; text-align: center; border-bottom: 2px solid #3498db; padding-bottom: 10px;';
    
    const contactList = document.createElement('div');
    
    const contacts = [
        { icon: '1', label: 'Email:', value: 'muaawiyayuusuf@gmail.com' },
        { icon: '2', label: 'Phone:', value: '+252 61 739 2380' },
        { icon: '3', label: 'University:', value: 'Jamhriya University' },
        { icon: '4', label: 'Project:', value: 'E-Learning Platform' }
    ];
    
    contacts.forEach(contact => {
        const contactItem = document.createElement('div');
        contactItem.style.cssText = 'margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;';
        
        const icon = document.createElement('span');
        icon.textContent = contact.icon;
        icon.style.cssText = 'margin-right: 10px; font-size: 18px;';
        
        const label = document.createElement('span');
        label.textContent = contact.label;
        label.style.cssText = 'color: #2c3e50; font-weight: bold; margin-right: 10px;';
        
        const value = document.createElement('div');
        value.textContent = contact.value;
        value.style.cssText = 'color: #3498db; margin-top: 5px; font-size: 16px;';
        
        contactItem.appendChild(icon);
        contactItem.appendChild(label);
        contactItem.appendChild(value);
        contactList.appendChild(contactItem);
    });
    
    contactCard.appendChild(contactTitle);
    contactCard.appendChild(contactList);
    
    // Add cards to left column
    leftColumn.appendChild(profileCard);
    leftColumn.appendChild(contactCard);
    
    // ===== RIGHT COLUMN =====
    const rightColumn = document.createElement('div');
    
    // Skills Section 
    const skillsSection = document.createElement('div');
    skillsSection.style.cssText = 'background: white; padding: 25px; border-radius: 10px; border: 2px solid #3498db; margin-bottom: 25px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);';
    
    const skillsTitle = document.createElement('h3');
    skillsTitle.textContent = 'Technical Skills';
    skillsTitle.style.cssText = 'color: #2c3e50; margin-bottom: 20px; text-align: center; border-bottom: 2px solid #3498db; padding-bottom: 10px;';
    
    const skillsGrid = document.createElement('div');
    skillsGrid.style.cssText = 'display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;';
    
   //Skills List
    const skills = [
        { name: 'JavaScript', level: 55, color: '#3498db' },
        { name: 'HTML5', level: 80, color: '#2c3e50' },
        { name: 'CSS3', level: 65, color: '#3498db' },
        { name: 'Video Editing', level: 100, color: '#2c3e50' },
        { name: 'Graphic Design', level: 99, color: '#3498db' },
        { name: 'Motion Graphics', level: 89, color: '#2c3e50' },
        { name: 'E-Learning Platform', level: 90, color: '#3498db' },
        { name: 'UI/UX Design', level: 80, color: '#2c3e50' }
    ];
    
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.style.cssText = 'background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid ' + skill.color + ';';
        
        const skillHeader = document.createElement('div');
        skillHeader.style.cssText = 'display: flex; justify-content: space-between; margin-bottom: 10px;';
        
        const skillName = document.createElement('span');
        skillName.textContent = skill.name;
        skillName.style.cssText = 'color: #2c3e50; font-weight: bold;';
        
        const skillPercent = document.createElement('span');
        skillPercent.textContent = skill.level + '%';
        skillPercent.style.cssText = 'color: ' + skill.color + '; font-weight: bold;';
        
        skillHeader.appendChild(skillName);
        skillHeader.appendChild(skillPercent);
        
        const progressBar = document.createElement('div');
        progressBar.style.cssText = 'width: 100%; height: 8px; background: #e0e0e0; border-radius: 4px; overflow: hidden;';
        
        const progress = document.createElement('div');
        progress.style.cssText = 'width: ' + skill.level + '%; height: 100%; background: ' + skill.color + '; border-radius: 4px;';
        
        progressBar.appendChild(progress);
        
        skillCard.appendChild(skillHeader);
        skillCard.appendChild(progressBar);
        skillsGrid.appendChild(skillCard);
    });
    
    skillsSection.appendChild(skillsTitle);
    skillsSection.appendChild(skillsGrid);
    
    // Projects Section 
    const projectsSection = document.createElement('div');
    projectsSection.style.cssText = 'background: white; padding: 25px; border-radius: 10px; border: 2px solid #2c3e50; margin-bottom: 25px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);';
    
    const projectsTitle = document.createElement('h3');
    projectsTitle.textContent = 'Current Project';
    projectsTitle.style.cssText = 'color: #2c3e50; margin-bottom: 20px; text-align: center; border-bottom: 2px solid #3498db; padding-bottom: 10px;';
    
    const projectCard = document.createElement('div');
    projectCard.style.cssText = 'background: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #ddd;';
    
    const projectName = document.createElement('h4');
    projectName.textContent = 'E-Learning Platform';
    projectName.style.cssText = 'color: #3498db; margin-bottom: 15px; font-size: 20px;';
    
    const projectDesc = document.createElement('p');
    projectDesc.innerHTML = 'My project selection will be <strong>E-Learning Platform</strong>.<br><br>This platform provides:<br>• Online courses and tutorials<br>';
    projectDesc.style.cssText = 'color: #666; line-height: 1.6; margin-bottom: 15px;';
    
    const projectStatus = document.createElement('div');
    projectStatus.style.cssText = 'background: #e8f4fc; padding: 10px; border-radius: 5px; border-left: 4px solid #3498db;';
    
    const statusText = document.createElement('p');
    statusText.innerHTML = '<strong>Status:</strong> In Development<br><strong>Focus:</strong> Web Development + Video Content';
    statusText.style.cssText = 'color: #2c3e50; margin: 0;';
    
    projectStatus.appendChild(statusText);
    
    projectCard.appendChild(projectName);
    projectCard.appendChild(projectDesc);
    projectCard.appendChild(projectStatus);
    
    projectsSection.appendChild(projectsTitle);
    projectsSection.appendChild(projectCard);
    
    // Learning Resources 
    const refSection = document.createElement('div');
    refSection.style.cssText = 'background: white; padding: 25px; border-radius: 10px; border: 2px solid #3498db; box-shadow: 0 3px 10px rgba(0,0,0,0.1);';
    
    const refTitle = document.createElement('h3');
    refTitle.textContent = 'My Learning Resources';
    refTitle.style.cssText = 'color: #2c3e50; margin-bottom: 20px; text-align: center; border-bottom: 2px solid #3498db; padding-bottom: 10px;';
    
    const refList = document.createElement('div');
    
    const references = [
        { 
            name: 'udemy.com', 
            url: 'https://www.udemy.com/course/java-se-programming/?utm_campaign=BG-Search_Keyword_Beta_Prof_la.EN_cc.ROW-English&utm_source=bing&utm_medium=paid-search&portfolio=Bing-ROW-English&utm_audience=mx&utm_tactic=nb&utm_term=best%20java%20learning%20websites&utm_content=o&funnel=&test=&utm_campaign_id=638596232&msclkid=6e1affc2c58f1ee5c0f79698c7febdf1', 
            desc: 'E-Learning platform project with interactive courses'
        },
        { 
            name: 'webflow.com', 
            url: 'https://webflow.com/made-in-webflow/javascript', 
        }
    ];
    
    references.forEach(ref => {
        const refItem = document.createElement('a');
        refItem.href = ref.url;
        refItem.target = '_blank';
        refItem.style.cssText = 'margin-bottom: 15px; padding: 15px; background: #f8f9fa; border-radius: 5px; border-left: 4px solid #2c3e50; display: block; text-decoration: none; color: inherit; transition: transform 0.3s, box-shadow 0.3s;';
        
        refItem.onmouseover = function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            this.style.background = '#e8f4fc';
        };
        
        refItem.onmouseout = function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
            this.style.background = '#f8f9fa';
        };
        
        const refName = document.createElement('div');
        refName.textContent = ref.name;
        refName.style.cssText = 'color: #3498db; font-weight: bold; margin-bottom: 5px; font-size: 16px;';
        
        const refUrl = document.createElement('div');
        refUrl.textContent = ref.url;
        refUrl.style.cssText = 'color: #2c3e50; font-size: 14px; margin-bottom: 5px; font-family: monospace;';
        
        const refDesc = document.createElement('div');
        refDesc.textContent = ref.desc;
        refDesc.style.cssText = 'color: #666; font-size: 13px;';
        
        refItem.appendChild(refName);
        refItem.appendChild(refUrl);
        refItem.appendChild(refDesc);
        refList.appendChild(refItem);
    });
    
    refSection.appendChild(refTitle);
    refSection.appendChild(refList);
    
    //  right column
    rightColumn.appendChild(skillsSection);
    rightColumn.appendChild(projectsSection);
    rightColumn.appendChild(refSection);
    
    //  main content
    mainContent.appendChild(leftColumn);
    mainContent.appendChild(rightColumn);
    
    
    page.appendChild(header);
    page.appendChild(mainContent);
    main.appendChild(page);
}
//  CONTACT PAGE 
function showContact() {
    const page = document.createElement('div');
    page.style.cssText = 'background: white; border-radius: 10px; padding: 30px; margin-bottom: 30px; border: 1px solid #ddd; max-width: 600px; margin: 0 auto;';
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Me';
    h1.style.cssText = 'color: #2c3e50; font-size: 36px; margin-bottom: 20px; text-align: center;';
    
    const p1 = document.createElement('p');
    p1.textContent = 'Fill out the form below and I will get back to you as soon as possible.';
    p1.style.cssText = 'color: #666; font-size: 16px; margin-bottom: 30px; text-align: center;';
    
    page.appendChild(h1);
    page.appendChild(p1);
    
    // Contact Form
    const form = document.createElement('form');
    form.id = 'contactForm';
    form.style.cssText = 'background: white; padding: 25px; border-radius: 8px; border: 1px solid #ddd;';
    
    // Name Field
    const nameGroup = document.createElement('div');
    nameGroup.style.cssText = 'margin-bottom: 20px;';
    
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Full Name *';
    nameLabel.style.cssText = 'display: block; color: #2c3e50; margin-bottom: 8px; font-weight: bold;';
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'contactName';
    nameInput.placeholder = 'Enter your full name';
    nameInput.style.cssText = 'width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px; color: #333; font-size: 16px; box-sizing: border-box;';
    
    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);
    
    // Email Field
    const emailGroup = document.createElement('div');
    emailGroup.style.cssText = 'margin-bottom: 20px;';
    
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email Address *';
    emailLabel.style.cssText = 'display: block; color: #2c3e50; margin-bottom: 8px; font-weight: bold;';
    
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'contactEmail';
    emailInput.placeholder = 'Enter your email';
    emailInput.style.cssText = 'width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px; color: #333; font-size: 16px; box-sizing: border-box;';
    
    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);
    
 
    
    // Message 
    const messageGroup = document.createElement('div');
    messageGroup.style.cssText = 'margin-bottom: 20px;';
    
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message *';
    messageLabel.style.cssText = 'display: block; color: #2c3e50; margin-bottom: 8px; font-weight: bold;';
    
    const messageInput = document.createElement('textarea');
    messageInput.id = 'contactMessage';
    messageInput.placeholder = 'Enter your message here...';
    messageInput.style.cssText = 'width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px; color: #333; font-size: 16px; box-sizing: border-box; height: 150px; resize: vertical;';
    
    messageGroup.appendChild(messageLabel);
    messageGroup.appendChild(messageInput);
    
    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.textContent = 'Send Message';
    submitBtn.style.cssText = 'background: #3498db; color: white; border: none; padding: 15px 30px; border-radius: 5px; cursor: pointer; font-size: 18px; font-weight: bold; width: 100%;';
    
    submitBtn.onclick = function() {
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        
        let isValid = true;
        let errorMessages = [];
        
        // Validate Name
        if (!name) {
            errorMessages.push('Name is required');
            isValid = false;
        } else if (name.length < 2) {
            errorMessages.push('Name must be at least 2 characters');
            isValid = false;
        }
        
        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            errorMessages.push('Email is required');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            errorMessages.push('Please enter a valid email address');
            isValid = false;
        }
        
        // Validate Subject
       
        if (!message) {
            errorMessages.push('farinta wa qasab');
            isValid = false;
        } else if (message.length < 1) {
            errorMessages.push('Message must be at least 10 characters');
            isValid = false;
        }
        
        if (!isValid) {
            alert('Please fix the following errors:\n\n' + errorMessages.join('\n'));
            return;
        }
        
        alert('Message sent successfully!\n\nThank you for contacting me. I will get back to you soon.');
        
        document.getElementById('contactName').value = '';
        document.getElementById('contactEmail').value = '';
        document.getElementById('contactMessage').value = '';
        
      alert('Contact form submitted successfully!');
       ('Name: ' + name);
        ('Email: ' + email);
    };
    
    form.appendChild(nameGroup);
    form.appendChild(emailGroup);
    form.appendChild(messageGroup);
    form.appendChild(submitBtn);
    
    const contactInfo = document.createElement('div');
    contactInfo.style.cssText = 'margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px; border: 1px solid #ddd;';
    
    const infoTitle = document.createElement('h3');
    infoTitle.textContent = 'My Contact Information';
    infoTitle.style.cssText = 'color: #2c3e50; margin-bottom: 15px;';
    
    const infoList = document.createElement('div');
    
    const myInfo = [
        { label: 'Name:', value: 'Muawiya Yusuf' },
        { label: 'Email:', value: 'muaawiyayuusuf@gmail.com' },
        { label: 'Phone:', value: '+252 61 739 2380' },
        { label: 'Student ID:', value: 'C6240358' }
    ];
    
    myInfo.forEach(info => {
        const infoItem = document.createElement('div');
        infoItem.style.cssText = 'margin-bottom: 10px; padding: 8px; background: white; border-radius: 4px;';
        
        const label = document.createElement('span');
        label.textContent = info.label;
        label.style.cssText = 'color: #2c3e50; font-weight: bold; margin-right: 10px;';
        
        const value = document.createElement('span');
        value.textContent = info.value;
        value.style.cssText = 'color: #3498db;';
        
        infoItem.appendChild(label);
        infoItem.appendChild(value);
        infoList.appendChild(infoItem);
    });
    
    contactInfo.appendChild(infoTitle);
    contactInfo.appendChild(infoList);
    
  
    page.appendChild(form);
    page.appendChild(contactInfo);
    main.appendChild(page);
}



function createExample(title, code, buttonText, clickHandler) {
    const example = document.createElement('div');
    example.style.cssText = 'background: white; border-radius: 8px; padding: 20px; margin-bottom: 15px; border: 1px solid #ddd;';
    
    const exampleTitle = document.createElement('h3');
    exampleTitle.textContent = title;
    exampleTitle.style.cssText = 'color: #2c3e50; margin-bottom: 10px;';
    
    const codeBlock = document.createElement('div');
    codeBlock.textContent = code;
    codeBlock.style.cssText = 'background: #f8f9fa; color: #333; padding: 15px; border-radius: 5px; font-family: monospace; font-size: 14px; margin-bottom: 10px; white-space: pre-wrap; overflow-x: auto; border: 1px solid #ddd;';
    
    const runBtn = document.createElement('button');
    runBtn.textContent = buttonText;
    runBtn.style.cssText = 'background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-size: 14px;';
    
    
    runBtn.onclick = function() {
      
        messageDisplay.style.display = 'block';
        addMessage('Running: ' + title);
        
      
        clickHandler();
    };
    
    example.appendChild(exampleTitle);
    example.appendChild(codeBlock);
    example.appendChild(runBtn);
    
    return example;
}


const footer = document.createElement('footer');
footer.style.cssText = 'background: #2c3e50; color: white; padding: 20px; text-align: center; margin-top: auto;';

const footerContent = document.createElement('div');
footerContent.style.cssText = 'max-width: 1200px; margin: 0 auto;';

const footerText = document.createElement('p');
footerText.innerHTML = '<strong>JavaScript Final Project Portfolio</strong> • Created with Pure JavaScript';
footerText.style.cssText = 'margin: 0 0 10px 0;';

const studentInfo = document.createElement('p');
studentInfo.textContent = 'Muawiya Yusuf • ID: C6240358 • Class: CN242 • Jamhriya University';
studentInfo.style.cssText = 'margin: 0 0 10px 0; font-size: 14px; color: #bbb;';

const navInfo = document.createElement('p');
navInfo.textContent = 'Both navigation menu and hamburger menu are visible and work simultaneously';
navInfo.style.cssText = 'margin: 0; font-size: 12px; color: #bbb;';

footerContent.appendChild(footerText);
footerContent.appendChild(studentInfo);
footerContent.appendChild(navInfo);
footer.appendChild(footerContent);
document.body.appendChild(footer);


showHome();

