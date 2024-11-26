intro.addEventListener('click',function(){
    console.log('testing the intro');
    document.body.classList.remove("season1");
    document.body.classList.remove("season2");
    document.body.classList.remove("season3");
    document.body.classList.remove("season4");
    document.body.classList.remove("season5");
    document.body.classList.remove("season6");
    document.body.classList.add("intro");
})

season1.addEventListener('click',function(){
    seasontitle.innerHTML = "Season 1";
    console.log('Mr. Big was introduced here, yuck');
    document.body.classList.remove("intro");
    document.body.classList.remove("season2");
    document.body.classList.remove("season3");
    document.body.classList.remove("season4");
    document.body.classList.remove("season5");
    document.body.classList.remove("season6");
    document.body.classList.add("season1");
})

season2.addEventListener('click',function(){
    seasontitle.innerHTML = "Season 2";
    console.log('Carrie and Big breakup part 1');
    document.body.classList.remove("intro");
    document.body.classList.remove("season1");
    document.body.classList.remove("season3");
    document.body.classList.remove("season4");
    document.body.classList.remove("season5");
    document.body.classList.remove("season6");
    document.body.classList.add("season2");
})

season3.addEventListener('click',function(){
    seasontitle.innerHTML = "Season 3";
    console.log('Aiden, Steve, Trey: yay, yay, boo');
    document.body.classList.remove("intro");
    document.body.classList.remove("season2");
    document.body.classList.remove("season1");
    document.body.classList.remove("season4");
    document.body.classList.remove("season5");
    document.body.classList.remove("season6");
    document.body.classList.add("season3");
})

season4.addEventListener('click',function(){
    seasontitle.innerHTML = "Season 4";
    console.log('Carrie cheats on Aiden with Big ugh');
    document.body.classList.remove("intro");
    document.body.classList.remove("season2");
    document.body.classList.remove("season3");
    document.body.classList.remove("season1");
    document.body.classList.remove("season5");
    document.body.classList.remove("season6");
    document.body.classList.add("season4");
})

season5.addEventListener('click',function(){
    seasontitle.innerHTML = "Season 5";
    console.log('shortest season bc SJP was pregnant irl haha');
    document.body.classList.remove("intro");
    document.body.classList.remove("season2");
    document.body.classList.remove("season3");
    document.body.classList.remove("season4");
    document.body.classList.remove("season1");
    document.body.classList.remove("season6");
    document.body.classList.add("season5");
})

season6.addEventListener('click',function(){
    seasontitle.innerHTML = "Season 6";
    console.log('Goes to paris only to end up with Big: big boo');
    document.body.classList.remove("intro");
    document.body.classList.remove("season2");
    document.body.classList.remove("season3");
    document.body.classList.remove("season4");
    document.body.classList.remove("season5");
    document.body.classList.remove("season1");
    document.body.classList.add("season6");
})
