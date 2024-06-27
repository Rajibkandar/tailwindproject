document.getElementById('burger').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  menu.classList.add('menu-visible');
  menu.classList.remove('menu-hidden');
});

document.getElementById('close').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  menu.classList.add('menu-hidden');
  menu.classList.remove('menu-visible');
});

const words = ["Goal"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 200);
}

type();


const testimonials = [
    {
        text: "As a volunteer with the Rehmat Foundation, I've had the privilege of witnessing firsthand the impact of our efforts on the lives of individuals and families facing adversity. From providing essential resources to offering emotional support, every action we take helps restore hope and dignity to those who need it most.",
        name: "Jenny"
    },
    {
        text: "Volunteering with the Rehmat Foundation has been a life-changing experience. The sense of community and purpose I've gained from helping others is indescribable.",
        name: "Alex"
    },
    {
        text: "Being part of the Rehmat Foundation has taught me the importance of giving back and the power of collective effort in making a difference.",
        name: "Sam"
    },
    {
        text: "The Rehmat Foundation has given me the opportunity to make a tangible difference in people's lives, and for that, I am forever grateful.",
        name: "Taylor"
    },
    {
        text: "I've met so many amazing people through the Rehmat Foundation, and together, we are making the world a better place one step at a time.",
        name: "Jordan"
    },
    {
        text: "The Rehmat Foundation's mission resonates deeply with me, and I am proud to contribute to such a worthy cause.",
        name: "Morgan"
    }
];

function showTestimonial(index) {
    const testimonial = testimonials[index];
    document.getElementById('testimonial-text').textContent = testimonial.text;
    document.getElementById('testimonial-name').textContent = testimonial.name;
    document.getElementById('testimonial-text-mobile').textContent = testimonial.text;
    document.getElementById('testimonial-name-mobile').textContent = testimonial.name;
}

