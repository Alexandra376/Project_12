function changeTextOfElem() {
    const paragraphNode = document.getElementById("paragraph");
    paragraphNode.innerText = "Hello, JavaScript!";
}
changeTextOfElem();

const stringArray = ["о нас", "запись", "контакты"];
function list (stringArray) {
    const ulList = document.createElement("ul");
    document.body.append(ulList);


    stringArray.forEach(item => {
        const liList = document.createElement("li");
        liList.textContent = item;
        ulList.append(liList);
    });
}
list(stringArray);

const arrayOfObject = [
    {label: "Label1", link: "https://example1.com"},
    {label: "Label2", link: "https://example2.com"},
];

function makeLinks (linkArray) {
    linkArray.forEach(item => {
        const elemA = document.createElement("a");
        elemA.href = item.link;
        elemA.textContent = item.label;
        document.body.append(elemA);
        document.body.appendChild(document.createTextNode(' '));
    });
}
makeLinks(arrayOfObject);
