let currentTopicLabel = null;
let topicStartTime = null;

function trackTopicView(subject, topic) {
  // If switching topics, track exit
  if (currentTopicLabel && currentTopicLabel !== `${subject} > ${topic}`) {
    trackTopicExit(); 
  }

  // Track this new topic click
  gtag('event', 'topic_clicked', {
    event_category: 'Notes',
    event_label: `${subject} > ${topic}`
  });

  currentTopicLabel = `${subject} > ${topic}`;
  topicStartTime = Date.now();
}

function trackTopicExit() {
  if (!currentTopicLabel || !topicStartTime) return;

  const durationSeconds = Math.round((Date.now() - topicStartTime) / 1000);

  // Define bucket based on duration
  let bucketLabel = "";
  if (durationSeconds < 1800) bucketLabel = "< 30 minutes";
  else if (durationSeconds < 3600) bucketLabel = "30 minutes - 1 hour";
  else if (durationSeconds < 7200) bucketLabel = "1 - 2 hours";
  else if (durationSeconds < 10800) bucketLabel = "2 - 3 hours";
  else if (durationSeconds < 14400) bucketLabel = "3 - 4 hours";
  else if (durationSeconds < 18000) bucketLabel = "4 - 5 hours";
  else if (durationSeconds < 21600) bucketLabel = "5 - 6 hours";
  else if (durationSeconds < 25200) bucketLabel = "6 - 7 hours";
  else if (durationSeconds < 28800) bucketLabel = "7 - 8 hours";
  else if (durationSeconds < 32400) bucketLabel = "8 - 9 hours";
  else if (durationSeconds < 36000) bucketLabel = "9 - 10 hours";
  else bucketLabel = "> 10 hours";

  // Track raw seconds (optional, for analytics)
  gtag('event', 'topic_time_spent', {
    event_category: 'Notes',
    event_label: currentTopicLabel,
    value: durationSeconds
  });

  // Track bucketed range
  gtag('event', 'topic_time_bucket', {
    event_category: 'Notes',
    event_label: `${currentTopicLabel} (${bucketLabel})`
  });

  currentTopicLabel = null;
  topicStartTime = null;
}



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
      // topicA.addEventListener("click", () => {
      //   if (window.innerWidth <= 768) {
      //     document.getElementById("sidebar").classList.remove("active");
      //   }
      // });
      topicA.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    document.getElementById("sidebar").classList.remove("active");
  }

  // Extract subject & topic and track
  const topic = note.title;
  trackTopicView(subject, topic);
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
  <h2>🎓 Welcome to <span style="color:#a259ff;">NOTOMIQ</span> — Your Personal Code Companion</h2>
  <p>Dive into structured, simplified notes across every tech subject.<br>
     Select a subject from the sidebar to start your journey!</p>
  <img src="https://raw.githubusercontent.com/omkumar0417/raw-images/main/photo.jpeg" alt="Welcome" class="welcome-image">
</div>

    `;
   

    return;
  }

  const [subject, ...titleParts] = hash.split("/");
  const title = titleParts.join(" ").replaceAll("-", " ");
  const notes = notesData[subject];
  const note = notes?.find(n => n.title.toLowerCase() === title.toLowerCase());

  if (note) {
    trackTopicView(subject, title);
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


// ====== PDF DOWNLOAD ======
async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const hash = decodeURIComponent(location.hash.slice(1));
  if (!hash) return;

  const [subject, ...titleParts] = hash.split("/");
  const title = titleParts.join(" ").replaceAll("-", " ");
  const note = notesData[subject]?.find(n => n.title.toLowerCase() === title.toLowerCase());
gtag('event', 'note_downloaded', {
  event_category: 'Notes',
  event_label: `${subject} > ${note.title}`
});

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
// Array.from(resultsBox.children).forEach(child => {
//   child.onclick = () => {
//     location.hash = child.dataset.href;
//     resultsBox.style.display = "none";

//     // Close input field (mobile only)
//     if (window.innerWidth <= 768) {
//       searchInput.classList.remove("active");
//       searchInput.value = "";
//     }
//   };
// });
Array.from(resultsBox.children).forEach(child => {
  child.onclick = () => {
    const href = child.dataset.href;
    const parts = href.slice(1).split("/");  // Remove "#" and split
    const subject = parts[0];
    const title = parts.slice(1).join(" ").replaceAll("-", " ");

    trackTopicView(subject, title);  // ✅ Track search click

    location.hash = href;
    resultsBox.style.display = "none";

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
window.addEventListener("beforeunload", () => {
  trackTopicExit(); // Log last topic before exit
});

