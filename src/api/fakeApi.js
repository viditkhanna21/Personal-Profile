const student = {
  name: "Vidit Khanna",
  course: "B.Tech",
  college: "South Asian University",
  description: "Building Websites.",
  email: "vidit.khanna21@gmail.com"
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React"
];

const hobbies = [
  "Cricket",
  "Coding"
];

export function getProfileData() {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve({
        student,
        skills,
        hobbies
      });

    }, 1500);

  });

}