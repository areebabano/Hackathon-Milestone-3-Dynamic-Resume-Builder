// Handle photo preview
function loadPhoto(event: Event) {
  const reader = new FileReader();
  const input = event.target as HTMLInputElement;

  // Check if files are available
  if (input.files && input.files[0]) {
    reader.onload = function (e) {
      const imgElement = document.getElementById(
        "resumePhoto"
      ) as HTMLImageElement;
      if (imgElement) {
        imgElement.src = e.target?.result as string;
      }
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// Add skill dynamically
const addSkillButton = document.getElementById(
  "addSkillButton"
) as HTMLButtonElement;
const skillsContainer = document.getElementById(
  "skills-container"
) as HTMLElement;

if (addSkillButton && skillsContainer) {
  addSkillButton.addEventListener("click", () => {
    const skillCount = skillsContainer.children.length + 1;
    const skillDiv = document.createElement("div");
    skillDiv.className = "skill-item";
    skillDiv.innerHTML = `
            <label for="skill${skillCount}">Skill ${skillCount}</label>
            <input type="text" id="skill${skillCount}" name="skill${skillCount}" placeholder="Enter Skill ${skillCount}" required />
        `;
    skillsContainer.appendChild(skillDiv);
  });
}

// Generate Resume
const generateButton = document.getElementById(
  "generateResume"
) as HTMLButtonElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;

if (generateButton && resumeOutput) {
  generateButton.addEventListener("click", () => {
    // Personal Info
    const fullName = (document.getElementById("fullName") as HTMLInputElement)
      .value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement)
      .value;
    const portfolio = (document.getElementById("portfolio") as HTMLInputElement)
      .value;
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement)
      .value;

    const resumeFullName = document.getElementById("resumeFullName");
    const resumeEmail = document.getElementById("resumeEmail");
    const resumeContact = document.getElementById("resumeContact");
    const portfolioLink = document.getElementById(
      "portfolioLink"
    ) as HTMLAnchorElement;
    const linkedinLink = document.getElementById(
      "linkedinLink"
    ) as HTMLAnchorElement;

    if (
      resumeFullName &&
      resumeEmail &&
      resumeContact &&
      portfolioLink &&
      linkedinLink
    ) {
      resumeFullName.innerText = fullName;
      resumeEmail.innerText = email;
      resumeContact.innerText = contact;
      portfolioLink.href = portfolio;
      linkedinLink.href = linkedin;
    }

    // Education
    const degree = (document.getElementById("degree") as HTMLInputElement)
      .value;
    const institute = (document.getElementById("institute") as HTMLInputElement)
      .value;
    const year = (document.getElementById("year") as HTMLInputElement).value;
    const educationList = document.getElementById("educationList");

    if (educationList) {
      educationList.innerHTML = `<p>${degree} from ${institute}, ${year}</p>`;
    }

    // Skills
    const skillsList = document.getElementById("skills-list");
    if (skillsList) {
      skillsList.innerHTML = "";
      const skillInputs = document.querySelectorAll(
        ".skill-item input"
      ) as NodeListOf<HTMLInputElement>;
      skillInputs.forEach((skillInput) => {
        const skill = skillInput.value;
        if (skill) {
          const li = document.createElement("li");
          li.textContent = skill;
          skillsList.appendChild(li);
        }
      });
    }
    // Experience
    const experienceList = document.getElementById(
      "experienceList"
    ) as HTMLElement;
    const companyName = (
      document.getElementById("companyName") as HTMLInputElement
    ).value;
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement)
      .value;
    const startDate = (document.getElementById("startDate") as HTMLInputElement)
      .value;
    const endDate = (document.getElementById("endDate") as HTMLInputElement)
      .value;
    const details = (document.getElementById("details") as HTMLTextAreaElement)
      .value;

    if (experienceList) {
      experienceList.innerHTML = `
    <h3>${jobTitle}</h3>
    <p><strong>Company:</strong> ${companyName}</p>
    <p><strong>Start Date:</strong> ${startDate}</p>
    <p><strong>End Date:</strong> ${endDate}</p>
    <p><strong>Details:</strong> ${details}</p>
  `;
    }

    if (resumeOutput) {
      resumeOutput.classList.remove("hidden");
    }
  });
}
