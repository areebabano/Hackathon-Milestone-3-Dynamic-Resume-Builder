"use strict";
// Handle photo preview
function loadPhoto(event) {
    const reader = new FileReader();
    const input = event.target;
    // Check if files are available
    if (input.files && input.files[0]) {
        reader.onload = function (e) {
            var _a;
            const imgElement = document.getElementById("resumePhoto");
            if (imgElement) {
                imgElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}
// Add skill dynamically
const addSkillButton = document.getElementById('addSkillButton');
const skillsContainer = document.getElementById('skills-container');
if (addSkillButton && skillsContainer) {
    addSkillButton.addEventListener('click', () => {
        const skillCount = skillsContainer.children.length + 1;
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-item';
        skillDiv.innerHTML = `
            <label for="skill${skillCount}">Skill ${skillCount}</label>
            <input type="text" id="skill${skillCount}" name="skill${skillCount}" placeholder="Enter Skill ${skillCount}" required />
        `;
        skillsContainer.appendChild(skillDiv);
    });
}
// // / Experience
// const experienceList = document.getElementById('experienceList') as HTMLElement;
// experienceList.innerHTML = '';
// const experienceItems = document.querySelectorAll('.experience-item');
// experienceItems.forEach((experienceItem) => {
//   const companyName = (experienceItem.querySelector('input[name^="companyName"]') as HTMLInputElement)?.value || '';
//   const jobTitle = (experienceItem.querySelector('input[name^="jobTitle"]') as HTMLInputElement)?.value || '';
//   const startDate = (experienceItem.querySelector('input[name^="startDate"]') as HTMLInputElement)?.value || '';
//   const endDate = (experienceItem.querySelector('input[name^="endDate"]') as HTMLInputElement)?.value || '';
//   const details = (experienceItem.querySelector('textarea[name^="details"]') as HTMLTextAreaElement)?.value || '';
//   if (companyName || jobTitle || startDate || endDate || details) {
//     const experienceDiv = document.createElement('div');
//     experienceDiv.className = 'experience-item';
//     experienceDiv.innerHTML = `
//       <h3>${jobTitle}</h3>
//       <p><strong>Company:</strong> ${companyName}</p>
//       <p><strong>Start Date:</strong> ${startDate}</p>
//       <p><strong>End Date:</strong> ${endDate}</p>
//       <p><strong>Details:</strong> ${details}</p>
//     `;
//     experienceList.appendChild(experienceDiv);
//   }
// });
// // Add experience dynamically
// const addExperienceButton = document.getElementById('addExperienceButton') as HTMLButtonElement;
// const experienceContainer = document.getElementById('experienceList') as HTMLElement; // Ensure this ID matches your HTML
// let experienceCount = 1; // Initialize counter
// if (addExperienceButton && experienceContainer) {
//     addExperienceButton.addEventListener('click', () => {
//         experienceCount++; // Increment counter for each new experience
//         const experienceDiv = document.createElement('div');
//         experienceDiv.className = 'experience-item';
//         experienceDiv.innerHTML = `
//             <h3>Experience ${experienceCount}</h3>
//             <label for="companyName${experienceCount}">Company Name</label>
//             <input
//                 type="text"
//                 id="companyName${experienceCount}"
//                 name="companyName${experienceCount}"
//                 placeholder="e.g., ABC Corp"
//                 required
//             />
//             <label for="jobTitle${experienceCount}">Job Title</label>
//             <input
//                 type="text"
//                 id="jobTitle${experienceCount}"
//                 name="jobTitle${experienceCount}"
//                 placeholder="e.g., Software Developer"
//                 required
//             />
//             <label for="startDate${experienceCount}">Start Date</label>
//             <input
//                 type="date"
//                 id="startDate${experienceCount}"
//                 name="startDate${experienceCount}"
//                 required
//             />
//             <label for="endDate${experienceCount}">End Date</label>
//             <input
//                 type="date"
//                 id="endDate${experienceCount}"
//                 name="endDate${experienceCount}"
//             />
//             <label for="details${experienceCount}">Details</label>
//             <textarea
//                 id="details${experienceCount}"
//                 name="details${experienceCount}"
//                 placeholder="Briefly describe your role and accomplishments"
//                 required
//             ></textarea>
//         `;
//         experienceContainer.appendChild(experienceDiv);
//     });
// }
// Generate Resume
const generateButton = document.getElementById('generateResume');
const resumeOutput = document.getElementById('resumeOutput');
if (generateButton && resumeOutput) {
    generateButton.addEventListener('click', () => {
        // Personal Info
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;
        const portfolio = document.getElementById('portfolio').value;
        const linkedin = document.getElementById('linkedin').value;
        const resumeFullName = document.getElementById('resumeFullName');
        const resumeEmail = document.getElementById('resumeEmail');
        const resumeContact = document.getElementById('resumeContact');
        const portfolioLink = document.getElementById('portfolioLink');
        const linkedinLink = document.getElementById('linkedinLink');
        if (resumeFullName && resumeEmail && resumeContact && portfolioLink && linkedinLink) {
            resumeFullName.innerText = fullName;
            resumeEmail.innerText = email;
            resumeContact.innerText = contact;
            portfolioLink.href = portfolio;
            linkedinLink.href = linkedin;
        }
        // Education
        const degree = document.getElementById('degree').value;
        const institute = document.getElementById('institute').value;
        const year = document.getElementById('year').value;
        const educationList = document.getElementById('educationList');
        if (educationList) {
            educationList.innerHTML = `<p>${degree} from ${institute}, ${year}</p>`;
        }
        // Skills
        const skillsList = document.getElementById('skills-list');
        if (skillsList) {
            skillsList.innerHTML = '';
            const skillInputs = document.querySelectorAll('.skill-item input');
            skillInputs.forEach((skillInput) => {
                const skill = skillInput.value;
                if (skill) {
                    const li = document.createElement('li');
                    li.textContent = skill;
                    skillsList.appendChild(li);
                }
            });
        }
        // Experience
        const experienceList = document.getElementById('experienceList');
        const companyName = document.getElementById('companyName').value;
        const jobTitle = document.getElementById('jobTitle').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const details = document.getElementById('details').value;
        if (experienceList) {
            experienceList.innerHTML = `
    <h3>${jobTitle}</h3>
    <p><strong>Company:</strong> ${companyName}</p>
    <p><strong>Start Date:</strong> ${startDate}</p>
    <p><strong>End Date:</strong> ${endDate}</p>
    <p><strong>Details:</strong> ${details}</p>
  `;
        }
        // // Experience
        // const experienceList = document.getElementById('experienceList');
        // if (experienceList) {
        //     experienceList.innerHTML = ''; // Clear previous experience entries
        //     const experienceItems = document.querySelectorAll('.experience-item');
        //     experienceItems.forEach((experienceItem) => {
        //         const companyName = (experienceItem.querySelector('input[name^="companyName"]') as HTMLInputElement)?.value || '';
        //         const jobTitle = (experienceItem.querySelector('input[name^="jobTitle"]') as HTMLInputElement)?.value || '';
        //         const startDate = (experienceItem.querySelector('input[name^="startDate"]') as HTMLInputElement)?.value || '';
        //         const endDate = (experienceItem.querySelector('input[name^="endDate"]') as HTMLInputElement)?.value || '';
        //         const details = (experienceItem.querySelector('textarea[name^="details"]') as HTMLTextAreaElement)?.value || '';
        //         if (companyName || jobTitle || startDate || endDate || details) {
        //             const experienceDiv = document.createElement('div');
        //             experienceDiv.className = 'experience-item';
        //             experienceDiv.innerHTML = `
        //                 <h3>${jobTitle}</h3>
        //                 <p><strong>Company:</strong> ${companyName}</p>
        //                 <p><strong>Start Date:</strong> ${startDate}</p>
        //                 <p><strong>End Date:</strong> ${endDate}</p>
        //                 <p><strong>Details:</strong> ${details}</p>
        //             `;
        //             experienceList.appendChild(experienceDiv);
        //         }
        //     });
        // }
        if (resumeOutput) {
            resumeOutput.classList.remove('hidden');
        }
    });
}
// // Handle photo preview
// function loadPhoto(event: Event) {
//     const reader = new FileReader();
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files[0]) {
//         reader.onload = function (e) {
//             const imgElement = document.getElementById("resumePhoto") as HTMLImageElement;
//             if (imgElement) {
//                 imgElement.src = e.target?.result as string;
//             }
//         };
//         reader.readAsDataURL(input.files[0]);
//     }
// }
// // Add skill dynamically
// const addSkillButton = document.getElementById('addSkillButton') as HTMLButtonElement;
// const skillsContainer = document.getElementById('skills-container') as HTMLElement;
// if (addSkillButton && skillsContainer) {
//     addSkillButton.addEventListener('click', () => {
//         const skillCount = skillsContainer.children.length + 1;
//         const skillDiv = document.createElement('div');
//         skillDiv.className = 'skill-item';
//         skillDiv.innerHTML = `
//             <label for="skill${skillCount}">Skill ${skillCount}</label>
//             <input type="text" id="skill${skillCount}" name="skill${skillCount}" placeholder="Enter Skill ${skillCount}" required />
//         `;
//         skillsContainer.appendChild(skillDiv);
//     });
// }
// // Add experience dynamically
// const addExperienceButton = document.getElementById('addExperienceButton') as HTMLButtonElement;
// const experienceContainer = document.getElementById('experienceList') as HTMLElement; // Ensure this ID matches your HTML
// let experienceCount = 1; // Initialize counter
// if (addExperienceButton && experienceContainer) {
//     addExperienceButton.addEventListener('click', () => {
//         experienceCount++; // Increment counter for each new experience
//         const experienceDiv = document.createElement('div');
//         experienceDiv.className = 'experience-item';
//         experienceDiv.innerHTML = `
//             <h3>Experience ${experienceCount}</h3>
//             <label for="companyName${experienceCount}">Company Name</label>
//             <input
//                 type="text"
//                 id="companyName${experienceCount}"
//                 name="companyName${experienceCount}"
//                 placeholder="e.g., ABC Corp"
//                 required
//             />
//             <label for="jobTitle${experienceCount}">Job Title</label>
//             <input
//                 type="text"
//                 id="jobTitle${experienceCount}"
//                 name="jobTitle${experienceCount}"
//                 placeholder="e.g., Software Developer"
//                 required
//             />
//             <label for="startDate${experienceCount}">Start Date</label>
//             <input
//                 type="date"
//                 id="startDate${experienceCount}"
//                 name="startDate${experienceCount}"
//                 required
//             />
//             <label for="endDate${experienceCount}">End Date</label>
//             <input
//                 type="date"
//                 id="endDate${experienceCount}"
//                 name="endDate${experienceCount}"
//             />
//             <label for="details${experienceCount}">Details</label>
//             <textarea
//                 id="details${experienceCount}"
//                 name="details${experienceCount}"
//                 placeholder="Briefly describe your role and accomplishments"
//                 required
//             ></textarea>
//         `;
//         experienceContainer.appendChild(experienceDiv);
//     });
// }
// // Generate Resume
// const generateButton = document.getElementById('generateResume');
// const resumeOutput = document.getElementById('resumeOutput');
// if (generateButton && resumeOutput) {
//     generateButton.addEventListener('click', () => {
//         // Personal Info
//         const fullName = document.getElementById('fullName').value;
//         const email = document.getElementById('email').value;
//         const contact = document.getElementById('contact').value;
//         const portfolio = document.getElementById('portfolio').value;
//         const linkedin = document.getElementById('linkedin').value;
//         const resumeFullName = document.getElementById('resumeFullName');
//         const resumeEmail = document.getElementById('resumeEmail');
//         const resumeContact = document.getElementById('resumeContact');
//         const portfolioLink = document.getElementById('portfolioLink');
//         const linkedinLink = document.getElementById('linkedinLink');
//         if (resumeFullName && resumeEmail && resumeContact && portfolioLink && linkedinLink) {
//             resumeFullName.innerText = fullName;
//             resumeEmail.innerText = email;
//             resumeContact.innerText = contact;
//             portfolioLink.href = portfolio;
//             linkedinLink.href = linkedin;
//         }
//         // Education
//         const degree = document.getElementById('degree').value;
//         const institute = document.getElementById('institute').value;
//         const year = document.getElementById('year').value;
//         const educationList = document.getElementById('educationList');
//         if (educationList) {
//             educationList.innerHTML = `<p>${degree} from ${institute}, ${year}</p>`;
//         }
//         // Skills
//         const skillsList = document.getElementById('skills-list');
//         if (skillsList) {
//             skillsList.innerHTML = '';
//             const skillInputs = document.querySelectorAll('.skill-item input');
//             skillInputs.forEach((skillInput) => {
//                 const skill = skillInput.value;
//                 if (skill) {
//                     const li = document.createElement('li');
//                     li.textContent = skill;
//                     skillsList.appendChild(li);
//                 }
//             });
//         }
//         // Experience
//         const experienceList = document.getElementById('experienceList');
//         if (experienceList) {
//             experienceList.innerHTML = '';
//             const experienceItems = document.querySelectorAll('.experience-item');
//             experienceItems.forEach((experienceItem) => {
//                 const companyName = experienceItem.querySelector('input[name^="companyName"]')?.value || '';
//                 const jobTitle = experienceItem.querySelector('input[name^="jobTitle"]')?.value || '';
//                 const startDate = experienceItem.querySelector('input[name^="startDate"]')?.value || '';
//                 const endDate = experienceItem.querySelector('input[name^="endDate"]')?.value || '';
//                 const details = experienceItem.querySelector('textarea[name^="details"]')?.value || '';
//                 console.log({ companyName, jobTitle, startDate, endDate, details }); // Debugging line
//                 if (companyName || jobTitle || startDate || endDate || details) {
//                     const experienceDiv = document.createElement('div');
//                     experienceDiv.className = 'experience-item';
//                     experienceDiv.innerHTML = `
//                         <h3>${jobTitle}</h3>
//                         <p><strong>Company:</strong> ${companyName}</p>
//                         <p><strong>Start Date:</strong> ${startDate}</p>
//                         <p><strong>End Date:</strong> ${endDate}</p>
//                         <p><strong>Details:</strong> ${details}</p>
//                     `;
//                     experienceList.appendChild(experienceDiv);
//                 }
//             });
//         }
//         if (resumeOutput) {
//             resumeOutput.classList.remove('hidden');
//         }
//     });
// }
// // Function to handle photo upload and display
// function loadPhoto(event: Event) {
//     const input = event.target as HTMLInputElement;
//     const file = input.files ? input.files[0] : null;
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//             const img = document.getElementById('resumePhoto') as HTMLImageElement;
//             img.src = e.target?.result as string;
//         };
//         reader.readAsDataURL(file);
//     }
// }
// // Function to add a new skill input field
// function addSkill() {
//     const skillsContainer = document.getElementById('skills-container') as HTMLElement;
//     const skillCount = skillsContainer.children.length + 1;
//     const skillDiv = document.createElement('div');
//     skillDiv.className = 'skill-item';
//     skillDiv.innerHTML = `
//         <label for="skill${skillCount}">Skill ${skillCount}</label>
//         <input
//             type="text"
//             id="skill${skillCount}"
//             name="skill${skillCount}"
//             placeholder="Enter Skill ${skillCount}"
//             required
//         />
//     `;
//     skillsContainer.appendChild(skillDiv);
// }
// // Function to add a new experience input field
// function addExperience() {
//     const experienceContainer = document.getElementById('experienceContainer') as HTMLElement;
//     const experienceCount = experienceContainer.children.length + 1;
//     const experienceDiv = document.createElement('div');
//     experienceDiv.className = 'experience-item';
//     experienceDiv.innerHTML = `
//         <label for="companyName${experienceCount}">Company Name</label>
//         <input
//             type="text"
//             id="companyName${experienceCount}"
//             name="companyName${experienceCount}"
//             placeholder="e.g., Company ${experienceCount}"
//             required
//         />
//         <label for="jobTitle${experienceCount}">Job Title</label>
//         <input
//             type="text"
//             id="jobTitle${experienceCount}"
//             name="jobTitle${experienceCount}"
//             placeholder="e.g., Job Title ${experienceCount}"
//             required
//         />
//         <label for="startDate${experienceCount}">Start Date</label>
//         <input
//             type="date"
//             id="startDate${experienceCount}"
//             name="startDate${experienceCount}"
//             required
//         />
//         <label for="endDate${experienceCount}">End Date</label>
//         <input
//             type="date"
//             id="endDate${experienceCount}"
//             name="endDate${experienceCount}"
//         />
//         <label for="details${experienceCount}">Details</label>
//         <textarea
//             id="details${experienceCount}"
//             name="details${experienceCount}"
//             placeholder="Briefly describe your role and accomplishments"
//             required
//         ></textarea>
//     `;
//     experienceContainer.appendChild(experienceDiv);
// }
// // Function to generate the resume
// function generateResume() {
//     const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const contact = (document.getElementById('contact') as HTMLInputElement).value;
//     const portfolio = (document.getElementById('portfolio') as HTMLInputElement).value;
//     const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
//     // Display the generated resume
//     const resumeOutput = document.getElementById('resumeOutput');
//     if (resumeOutput) {
//         resumeOutput.classList.remove('hidden');
//     }
//     (document.getElementById('resumeFullName') as HTMLHeadingElement).textContent = fullName;
//     (document.getElementById('resumeEmail') as HTMLParagraphElement).textContent = `Email: ${email}`;
//     (document.getElementById('resumeContact') as HTMLParagraphElement).textContent = `Phone: ${contact}`;
//     (document.getElementById('portfolioLink') as HTMLAnchorElement).href = portfolio;
//     (document.getElementById('linkedinLink') as HTMLAnchorElement).href = linkedin;
//     // Handle education
//     const degree = (document.getElementById('degree') as HTMLInputElement).value;
//     const institute = (document.getElementById('institute') as HTMLInputElement).value;
//     const year = (document.getElementById('year') as HTMLInputElement).value;
//     (document.getElementById('educationList') as HTMLDivElement).innerHTML = `
//         <p><strong>${degree}</strong> at ${institute} (${year})</p>
//     `;
//     // Handle skills
//     const skillsList = document.getElementById('skills-list') as HTMLUListElement;
//     skillsList.innerHTML = '';
//     const skillInputs = document.querySelectorAll<HTMLInputElement>('[id^="skill"]');
//     skillInputs.forEach(skillInput => {
//         if (skillInput.value) {
//             const li = document.createElement('li');
//             li.textContent = skillInput.value;
//             skillsList.appendChild(li);
//         }
//     });
//     // Handle experience
//     const experienceList = document.getElementById('experienceList') as HTMLDivElement;
//     experienceList.innerHTML = '';
//     const experienceInputs = document.querySelectorAll<HTMLInputElement>('[id^="companyName"]');
//     experienceInputs.forEach((companyInput, index) => {
//         const jobTitle = (document.getElementById(`jobTitle${index + 1}`) as HTMLInputElement).value;
//         const startDate = (document.getElementById(`startDate${index + 1}`) as HTMLInputElement).value;
//         const endDate = (document.getElementById(`endDate${index + 1}`) as HTMLInputElement).value;
//         const details = (document.getElementById(`details${index + 1}`) as HTMLTextAreaElement).value;
//         if (companyInput.value && jobTitle) {
//             const div = document.createElement('div');
//             div.innerHTML = `
//                 <h4>${companyInput.value} - ${jobTitle}</h4>
//                 <p>${startDate} to ${endDate}</p>
//                 <p>${details}</p>
//             `;
//             experienceList.appendChild(div);
//         }
//     });
// }
// // Event listeners
// document.getElementById('addSkillButton')?.addEventListener('click', addSkill);
// document.getElementById('addExperienceButton')?.addEventListener('click', addExperience);
// document.getElementById('generateResume')?.addEventListener('click', generateResume);
// document.getElementById('photo')?.addEventListener('change', loadPhoto);
