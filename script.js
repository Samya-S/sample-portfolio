/****** Pre-page-loading section ******/
document.onreadystatechange = async () => {
    if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
      document.querySelector("body").classList.add('loading');
    } 
    else {
      await new Promise(r => setTimeout(r, 1000));
      document.querySelector("#loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
      document.querySelector("body").classList.remove('loading');
    }
};


/****** For views-count ******/
document.addEventListener('DOMContentLoaded', function() {
    // Get the counter element
    const counterElement = document.getElementById('views-count');

    // Check if there's a stored count in localStorage
    let count = localStorage.getItem('pageCount');

    if (count === null) {
        // If no count is found, initialize to 0
        count = 73;
    } else {
        // If a count is found, convert it to a number
        count = parseInt(count);
    }

    // Increment the count
    count++;

    // Update the counter element
    counterElement.textContent = count;

    // Save the updated count to localStorage
    localStorage.setItem('pageCount', count.toString());
    // document.getElementById("views-count").innerText += count;
});


/****** follow and like buttons ******/
document.addEventListener('DOMContentLoaded', function() {
  const followButton = document.getElementById('followButton');
  const followCountElement = document.getElementById('follower-count');

  let followCount = 24;
  followCountElement.textContent = followCount;
  let following = false;

  followButton.addEventListener('click', function() {
    following = !following; // Toggle following status

    if(following){
      followCount++;
      followCountElement.textContent = followCount;
      followButton.textContent = "Following";
      followButton.classList.add('following');
      followButton.classList.remove('follow');
    }
    else{
      followCount--;
      followCountElement.textContent = followCount;
      followButton.textContent = "Follow";
      followButton.classList.add('follow');
      followButton.classList.remove('following');
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const likeButton = document.getElementById('likeButton');
  const likeCountElement = document.getElementById('likes-count');

  let likeCount = 53;
  likeCountElement.textContent = likeCount;
  let liked = false;

  likeButton.addEventListener('click', function() {
    liked = !liked; // Toggle liked status

    if(liked){
      likeCount++;
      likeCountElement.textContent = likeCount;
      likeButton.textContent = "Liked";
      likeButton.classList.add('liked');
      likeButton.classList.remove('like');
    }
    else{
      likeCount--;
      likeCountElement.textContent = likeCount;
      likeButton.textContent = "Like";
      likeButton.classList.add('like');
      likeButton.classList.remove('liked');
    }

    // likeButton.classList.toggle("liked");
  });
});



/****** For typing animation ******/
const typedTextSpan = document.querySelector("#banner-typing");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["HTML", "CSS", "JavaScript", "C", "C++", "Python"];
const typingDelay = 150;
const erasingDelay = 70;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});