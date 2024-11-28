intro.addEventListener('click',function(){
    seasontitle.innerHTML = "Introduction";
    document.getElementById('outfits').src="images/intropic.webp";
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
    document.getElementById('outfits').src="images/season-1-fit.webp";
    console.log('Mr. Big was introduced here, yuck');
    document.body.classList.remove("intro");
    document.body.classList.remove("season2");
    document.body.classList.remove("season3");
    document.body.classList.remove("season4");
    document.body.classList.remove("season5");
    document.body.classList.remove("season6");
    document.body.classList.add("season1");
    document.getElementById("description").innerHTML = "It would seem absolutely wrong to choose this iconic outfit from the show’s opening credits. Looking back at this pink tank top with the matching tutu and the animal print Jimmy Choo heels feels nostalgic. You can almost remember the optimism and excitement of watching  this show  for the first time before it was marred by Carrie’s terrible personality. In fact, this outfit fools every new viewer into thinking that Carrie would be their favourite character.";
    
})

season2.addEventListener('click',function(){
    seasontitle.innerHTML = "Season 2";
    document.getElementById('outfits').src="images/season-2-fit.webp";
    console.log('Carrie and Big breakup part 1');
    document.body.classList.remove("intro");
    document.body.classList.remove("season1");
    document.body.classList.remove("season3");
    document.body.classList.remove("season4");
    document.body.classList.remove("season5");
    document.body.classList.remove("season6");
    document.body.classList.add("season2");
    document.getElementById("description").innerHTML = "This white silk Dior dress from the season finale is *chef’s kiss*. She almost made me like her. She really had her strong independent woman moment in this scene and the iconic “Carrie” necklace seen throughout the series really adds to the plot. But everything good on this show, and everything good that happens to Carrie gets ruined by Big. Always. But I think his unwelcomed appearance during this scene was at least saved by this Dior dress.";
    
})

season3.addEventListener('click',function(){
    seasontitle.innerHTML = "Season 3";
    document.getElementById('outfits').src="images/season-3-fit.webp";
    console.log('Aiden, Steve, Trey: yay, yay, boo');
    document.body.classList.remove("intro");
    document.body.classList.remove("season2");
    document.body.classList.remove("season1");
    document.body.classList.remove("season4");
    document.body.classList.remove("season5");
    document.body.classList.remove("season6");
    document.body.classList.add("season3");
    document.getElementById("description").innerHTML = "It's pink, it’s chiffon, it’s asymmetrical, it’s well-tailored! What’s not to love? Well, it’s worn by a grown woman who can’t stop talking about her ex! Let’s not forget the fight that she had with Miranda who was also trying to rekindle things with her ex. Either way, this Richard Tyler dress from his Resort 2001 collection is one I would scour consignment stores for.";
})

season4.addEventListener('click',function(){
    seasontitle.innerHTML = "Season 4";
    document.getElementById('outfits').src="images/season-4-fit.webp";
    console.log('Carrie breaks up with Aiden after he forgave her after cheating on him with Big');
    document.body.classList.remove("intro");
    document.body.classList.remove("season2");
    document.body.classList.remove("season3");
    document.body.classList.remove("season1");
    document.body.classList.remove("season5");
    document.body.classList.remove("season6");
    document.body.classList.add("season4");
    document.getElementById("description").innerHTML = "Ah, yes. The Vogue episode. This Vivienne Westwood set is incredible. As a Vivienne Westwood fan, this gets a 1000/10 from me. I loved it so much that I almost (ALMOST) forgave Carrie for feeling entitled to Charlotte’s engagement ring in the previous episode. The ring that was gifted to her before she RECENTLY divorced her husband. All because Carrie refused to sell her shoe collection to pay for her rent. Carrie’s morals get a -1000/10 from me.";
   
})

season5.addEventListener('click',function(){
    seasontitle.innerHTML = "Season 5";
    document.getElementById('outfits').src="images/season-5-fit.webp";
    console.log('shortest season bc SJP was pregnant irl haha');
    document.body.classList.remove("intro");
    document.body.classList.remove("season2");
    document.body.classList.remove("season3");
    document.body.classList.remove("season4");
    document.body.classList.remove("season1");
    document.body.classList.remove("season6");
    document.body.classList.add("season5");
    document.getElementById("description").innerHTML = "This was the episode Carrie goes to Napa for her book tour…while also meeting up with Big. Instead of relishing on her success as a published author, she chooses the same red-flag to ruin her life. Instead, we can enjoy her blue plaid Vivienne Westood dress, worn at her book signing! ";
})

season6.addEventListener('click',function(){
    seasontitle.innerHTML = "Season 6";
    document.getElementById('outfits').src="images/season-6-fit.webp";
    console.log('Goes to paris only to end up with Big: big boo');
    document.body.classList.remove("intro");
    document.body.classList.remove("season2");
    document.body.classList.remove("season3");
    document.body.classList.remove("season4");
    document.body.classList.remove("season5");
    document.body.classList.remove("season1");
    document.body.classList.add("description");
    document.getElementById("description").innerHTML = "This vintage sage green dress from Geminola is like the grown-up version of her outfit from the opening credits and I’m personally a fan. Going back to New York with Big was the better decision than living a miserable life in Paris with Aleksandr for the rest of her days, sums up the kind of woman Carrie is. Not only does this dress get the best outfit of the season because it’s objectively beautiful, but because this is one of the last outfits that we’ll ever get to see on Carrie (at least before the movies). We’re celebrating style, but we’re also celebrating the end of this awful but iconic series. ";
})
