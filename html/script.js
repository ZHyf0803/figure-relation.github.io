
const contentData = {
    picture : "../png/chanjin.png",
    name : 'Alice',
    info : {
        title : '绰号、身份与上梁山之路',
        description : ''
    },
    language : {
        title : '典型语言',
        description : ''
    },
    experience : {
        title : '人物经历与人物形象',
        description : ''
    },
    relation : {
        title : '人物关系',
        description : ''
    }
}

resultItem.classList.add('result-item');
function showContent(tab) {
    const nameElement = document.getElementById('name');
    const descriptionElement = document.getElementById('description');

    nameElement.textContent = contentData[tab].title;
    descriptionElement.innerHTML = `<p>${contentData[tab].description}</p>`;
}

// 鼠标悬停和离开标签栏的功能
function expandTabs() {
    const tabs = document.querySelector('.tabs');
    tabs.style.transform = 'translateY(0)';
}

function collapseTabs() {
    const tabs = document.querySelector('.tabs');
    tabs.style.transform = 'translateY(-80%)'; // 隐藏标签栏的一部分
}