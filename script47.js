
var users = [
  {
    username: "john_doe",
    image: "https://i.pinimg.com/736x/54/95/3c/54953ccbea5b0d2072d5562b97ac9b86.jpg",
    profession: "Software Developer",
    description:
      "Passionate about building scalable web applications and learning new technologies.",
    tags: ["JavaScript", "React", "Node.js"],
  },
  {
    username: "sarah_smith",
    image: "https://i.pinimg.com/736x/4b/f6/1f/4bf61f7bec0d6e6d35644df9f76e210e.jpg",
    profession: "Graphic Designer",
    description:
      "Creative designer focused on branding, UI/UX, and digital illustrations.",
    tags: ["Photoshop", "Illustrator", "UI/UX"],
  },
  {
    username: "mike_johnson",
    image: "https://i.pinimg.com/1200x/56/e1/b3/56e1b37c9c2e5d7b6d7de581ee653883.jpg",
    profession: "Digital Marketer",
    description:
      "Helping brands grow through SEO, content marketing, and social media strategies.",
    tags: ["SEO", "Content Marketing", "Social Media"],
  },
  {
    username: "emma_wilson",
    image: "https://i.pinimg.com/1200x/9a/59/50/9a59508b8703e7117daf9601405bfcb0.jpg",
    profession: "Data Analyst",
    description:
      "Turning data into actionable insights using analytics and visualization tools.",
    tags: ["Python", "Data Visualization", "SQL"],
  },
];
var sum = ''
users.forEach(function (elem) {
    sum = sum+ `  <div class="card">
        <img
          src="${elem.image}"
          alt=""
        />
        <h3>${elem.username}</h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description}</p>
      </div>`
});
var main=document.querySelector('main')
main.innerHTML=sum