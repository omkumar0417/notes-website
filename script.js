// ====== DARK MODE TOGGLE ======
// const darkToggle = document.getElementById("darkModeToggle");
// document.body.classList.add("dark");
// darkToggle.textContent = "🌙";

// darkToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
//   darkToggle.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
// });


// ====== SEARCH FUNCTIONALITY ======
const searchInput = document.getElementById("searchInput");
const resultsBox = document.getElementById("searchResults");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    resultsBox.innerHTML = "";
    resultsBox.style.display = "none";
    return;
  }

  let results = [];

  for (let subject in notesData) {
    for (let note of notesData[subject]) {
      if (
        note.title.toLowerCase().includes(query) ||
        subject.toLowerCase().includes(query) ||
        (note.tags && note.tags.some(tag => tag.toLowerCase().includes(query))) ||
        (note.content && note.content.toLowerCase().includes(query))
      ) {
        results.push({
          label: `📘 ${note.title} (${subject})`,
          href: `#${subject}/${note.title.replaceAll(" ", "-")}`
        });
      }
    }
  }

  resultsBox.innerHTML = results.length === 0
    ? `<div>No matches found</div>`
    : results.map(res => `<div data-href="${res.href}">${res.label}</div>`).join('');

  resultsBox.style.display = "block";

  Array.from(resultsBox.children).forEach(child => {
    child.onclick = () => {
      location.hash = child.dataset.href;
      resultsBox.style.display = "none";
    };
  });
});

// ====== SIDEBAR RENDERING ======
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("noteContent");

// function renderSidebar() {
//   if (!notesData || Object.keys(notesData).length === 0) {
//     sidebar.innerHTML = "<p>No subjects found. Please add notes.</p>";
//     return;
//   }

//   let html = "<h2>Subjects</h2><ul>";
//   for (let subject in notesData) {
//     html += `<li><strong>${subject}</strong><ul>`;
//     notesData[subject].forEach(note => {
//       html += `<li><a href="#${subject}/${note.title.replaceAll(" ", "-")}">${note.title}</a></li>`;
//     });
//     html += "</ul></li>";
//   }
//   html += "</ul>";
//   sidebar.innerHTML = html;

//   // For mobile: auto-close on link click
//   if (window.innerWidth <= 768) {
//     const links = sidebar.querySelectorAll("a");
//     links.forEach(link => {
//       link.addEventListener("click", () => {
//         sidebar.classList.remove("active");

//       });
//     });
//   }
// }
// function renderSidebar() {
//   const sidebar = document.getElementById("sidebar");
//   sidebar.innerHTML = `<h2>Subjects</h2><ul class="subject-list"></ul>`;
//   const subjectList = sidebar.querySelector(".subject-list");

//   Object.keys(notesData).forEach(subject => {
//     const subjectLi = document.createElement("li");

//     const subjectToggle = document.createElement("div");
//     subjectToggle.className = "subject-toggle";
//     subjectToggle.textContent = subject;

//     const topicUl = document.createElement("ul");
//     topicUl.className = "topics";

//     notesData[subject].forEach((note, index) => {
//       const topicLi = document.createElement("li");
//       const topicA = document.createElement("a");
//      topicA.href = `#${subject}/${note.title.replaceAll(" ", "-")}`;
// topicA.addEventListener("click", () => {
//   if (window.innerWidth <= 768) {
//     document.getElementById("sidebar").classList.remove("active");
//   }
// });

//       topicA.textContent = note.title;
//       topicLi.appendChild(topicA);
//       topicUl.appendChild(topicLi);
//     });

//     // Append subject and collapsible topic list
//     subjectLi.appendChild(subjectToggle);
//     subjectLi.appendChild(topicUl);
//     subjectList.appendChild(subjectLi);
//   });

//   // Toggle dropdown
//   document.querySelectorAll('.subject-toggle').forEach(toggle => {
//   toggle.addEventListener('click', () => {
//     const topics = toggle.nextElementSibling;

//     // ✅ Close all other topic lists
//     document.querySelectorAll('.topics').forEach(list => {
//       if (list !== topics) list.style.display = 'none';
//     });

//     // ✅ Toggle only clicked subject's topic list
//     topics.style.display = (topics.style.display === 'block') ? 'none' : 'block';
//   });
// });
// function renderSidebar() {
//   const sidebar = document.getElementById("sidebar");
//   sidebar.innerHTML = `<h2>Subjects</h2><ul class="subject-list"></ul>`;
//   const subjectList = sidebar.querySelector(".subject-list");

//   Object.keys(notesData).forEach(subject => {
//     const subjectLi = document.createElement("li");

//     const subjectToggle = document.createElement("div");
//     subjectToggle.className = "subject-toggle";
//     subjectToggle.textContent = subject;

//     // Append subject only (not topics yet)
//     subjectLi.appendChild(subjectToggle);
//     subjectList.appendChild(subjectLi);

//     // ✅ Add click listener to load topics on click
//     subjectToggle.addEventListener("click", () => {
//       // Remove existing topic lists
//       document.querySelectorAll(".topics").forEach(el => el.remove());

//       // Build topic list
//       const topicUl = document.createElement("ul");
//       topicUl.className = "topics";

//       notesData[subject].forEach((note, index) => {
//         const topicLi = document.createElement("li");
//         const topicA = document.createElement("a");
//         topicA.href = `#${subject}/${note.title.replaceAll(" ", "-")}`;
//         topicA.textContent = note.title;
//         topicLi.appendChild(topicA);
//         topicUl.appendChild(topicLi);
//       });

//       // ✅ Add topics below current subject
//       subjectLi.appendChild(topicUl);

//       // ✅ Auto-close sidebar in mobile view
//       if (window.innerWidth <= 768) {
//         document.getElementById("sidebar").classList.remove("active");
//       }
//     });
//   });
// }
function renderSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = `
    <div class="sidebar-header">
      <h2>Subjects</h2>
      <span id="closeSidebar" class="close-btn">×</span>
    </div>
    <ul class="subject-list"></ul>
  `;

  const subjectList = sidebar.querySelector(".subject-list");

  Object.keys(notesData).forEach(subject => {
    const subjectLi = document.createElement("li");

    const subjectToggle = document.createElement("div");
    subjectToggle.className = "subject-toggle";
    subjectToggle.textContent = subject;

    const topicUl = document.createElement("ul");
    topicUl.className = "topics";

    notesData[subject].forEach((note, index) => {
      const topicLi = document.createElement("li");
      const topicA = document.createElement("a");
      topicA.href = `#${subject}/${note.title.replaceAll(" ", "-")}`;
      topicA.textContent = note.title;

      // ✅ Close sidebar on topic click (mobile only)
      topicA.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          document.getElementById("sidebar").classList.remove("active");
        }
      });

      topicLi.appendChild(topicA);
      topicUl.appendChild(topicLi);
    });

    subjectLi.appendChild(subjectToggle);
    subjectLi.appendChild(topicUl);
    subjectList.appendChild(subjectLi);
  });

  // ✅ Accordion behavior
  document.querySelectorAll('.subject-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const topics = toggle.nextElementSibling;
      document.querySelectorAll('.topics').forEach(list => {
        if (list !== topics) list.style.display = 'none';
      });
      topics.style.display = (topics.style.display === 'block') ? 'none' : 'block';
    });
  });

  // ✅ Only once, after sidebar DOM is ready
  const closeBtn = document.getElementById("closeSidebar");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.getElementById("sidebar").classList.remove("active");
    });
  }
}




// ====== LOAD NOTE FROM URL HASH ======
function renderNoteFromHash() {
  const hash = decodeURIComponent(location.hash.slice(1));
  if (!hash) {
    mainContent.innerHTML = `
      <div class="welcome-card">
        <h2>👋 Welcome to Your Notes Library</h2>
        <p>Start exploring by selecting a subject and topic from the sidebar.</p>
        <img src="https://raw.githubusercontent.com/omkumar0417/raw-images/main/imagess/image.png" alt="Welcome" class="welcome-image">
      </div>
    `;
    return;
  }

  const [subject, ...titleParts] = hash.split("/");
  const title = titleParts.join(" ").replaceAll("-", " ");
  const notes = notesData[subject];
  const note = notes?.find(n => n.title.toLowerCase() === title.toLowerCase());

  if (note) {
    mainContent.innerHTML = `
      <div class="note-card">
        <h2>${note.title}</h2>
        <p><i>${note.date || ""}</i></p>
        <div>${note.content}</div>
        ${note.image ? `<img src="${note.image}" class="note-image" alt="Note Image">` : ''}
      </div>
      <div class="toolbar">
        <button onclick="downloadPDF()">⬇️ Download as PDF</button>
      </div>
    `;
  } else {
    mainContent.innerHTML = "<p>Note not found!</p>";
  }
}
// // Mobile Sidebar Toggle
// const menuBtn = document.getElementById("menuToggle");
// menuBtn?.addEventListener("click", () => {
//   document.getElementById("sidebar").classList.toggle("active");
// });

// ====== PDF DOWNLOAD ======
async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const hash = decodeURIComponent(location.hash.slice(1));
  if (!hash) return;

  const [subject, ...titleParts] = hash.split("/");
  const title = titleParts.join(" ").replaceAll("-", " ");
  const note = notesData[subject]?.find(n => n.title.toLowerCase() === title.toLowerCase());

  if (!note) {
    alert("Note not found.");
    return;
  }

  const text = `${note.title}\nSubject: ${subject} | ${note.date}\n\n` +
               note.content.replace(/<[^>]*>?/gm, '').replaceAll("&nbsp;", " ");

  const lines = doc.splitTextToSize(text, 180);
  doc.text(lines, 10, 20);
  doc.save(`${note.title.replaceAll(" ", "_")}.pdf`);
}
// ====== MOBILE MENU TOGGLE (unified) ======
const hamburger = document.getElementById("hamburgerToggle");
if (hamburger) {
  hamburger.addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("active");
  });
}
// ====== MOBILE SEARCH ICON TOGGLE (Improved) ======
const searchIcon = document.getElementById("searchIcon");

searchIcon.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    searchInput.classList.toggle("active");

    if (searchInput.classList.contains("active")) {
      searchInput.focus();
    } else {
      searchInput.value = "";
      resultsBox.innerHTML = "";
      resultsBox.style.display = "none";
    }
  }
});

// Auto-close mobile search input after selecting a result
Array.from(resultsBox.children).forEach(child => {
  child.onclick = () => {
    location.hash = child.dataset.href;
    resultsBox.style.display = "none";

    // Close input field (mobile only)
    if (window.innerWidth <= 768) {
      searchInput.classList.remove("active");
      searchInput.value = "";
    }
  };
});



// ====== INIT ======
renderSidebar();
renderNoteFromHash();
window.addEventListener("hashchange", renderNoteFromHash);
