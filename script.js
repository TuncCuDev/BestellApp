function renderMenu(){
    let mainCoursesRef = document.getElementById('mainCourses')
    mainCoursesRef.innerHTML = "";
    for (let index = 0; index < menu.length; index++) {
        const continentalMenu = menu[index]
        mainCoursesRef.innerHTML += getMenuTemplate(continentalMenu, menuItem)
    }
   
    }    