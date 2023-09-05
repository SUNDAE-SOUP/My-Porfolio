function openNav() 
{
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() 
{
    document.getElementById("myNav").style.width = "0%";
}


function openNav2() 
{
    document.getElementById("myNav2").style.width = "100%";
}

function closeNav2() 
{
    document.getElementById("myNav2").style.width = "0%";
}

function openNav3() 
{
    document.getElementById("myNav3").style.width = "100%";
}

function closeNav3() 
{
    document.getElementById("myNav3").style.width = "0%";
}

function openNav4() 
{
    document.getElementById("myNav4").style.width = "100%";
}

function closeNav4() 
{
    document.getElementById("myNav4").style.width = "0%";
}

// Function to add or remove 'p-5' class based on screen width
function updateP5ClassBasedOnScreenSize() {
    const projectImageContainer = document.querySelectorAll(".projectImageContainer");
    const mediaQuery = window.matchMedia("(max-width: 767px)");
  
    projectImageContainer.forEach(function(projectImageContainer) {
      if (mediaQuery.matches) {
        // If the screen width is 767px or less, remove 'p-5' then add 'mt-4'
        if (projectImageContainer.classList.contains("p-5")) {
            projectImageContainer.classList.remove("p-5");
            projectImageContainer.classList.remove("col");
            projectImageContainer.classList.add("mt-4");
            projectImageContainer.classList.add("col-sm-4");
        }
      } else {
        // If the screen width is greater than 767px, add 'p-5'
        if (!projectImageContainer.classList.contains("p-5")) {
            projectImageContainer.classList.add("p-5");
            projectImageContainer.classList.add("col");
            projectImageContainer.classList.remove("mt-4");
            projectImageContainer.classList.remove("col-sm-4");
        }
      }
    });
}
  
// Call the function initially and whenever the window is resized
updateP5ClassBasedOnScreenSize();
  
// Listen for window resize events to update the class
window.addEventListener("resize", updateP5ClassBasedOnScreenSize);
