if (localStorage.getItem("loggedIn") === "true") {
  Object.assign(window.notesData, {
    "System Design": [
      {
        title: "Scalability",
        content: "System Design includes understanding how to design scalable and reliable systems.",
        private: true
      },
      {
        title: "Load Balancers",
        content: "Load balancers help distribute incoming traffic across multiple servers to ensure availability and performance.",
        private: true
      }
    ],
    "Internship Prep": [
      {
        title: "Resume Tips",
        content: "Tailor your resume to the job, focus on projects and quantify your achievements.",
        private: true
      },
      {
        title: "HR Interview Questions",
        content: "Prepare for questions like: Tell me about yourself, strengths/weaknesses, why this company.",
        private: true
      }
    ]
  });
}
