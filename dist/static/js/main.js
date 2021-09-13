function switchIt (itemList, find, showBox) {
  for (let index = 0; index < itemList.length; index++) {
    const element = itemList[index];
    console.log(element)
    element.onclick = function (e) {
      for (let index2 = 0; index2 < itemList.length; index2++) {
        itemList[index2].classList.remove('active')
      }
      console.log(element)
      element.classList.add('active')
      if (showBox && find) showBox.src = element.querySelector(find).src
    }
  }
}