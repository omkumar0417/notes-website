// let notesData = typeof window.notesData !== "undefined" ? window.notesData : {};
// const notesData = window.notesData;



const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("noteContent");
const searchInput = document.getElementById("searchInput");
const darkToggle = document.getElementById("darkModeToggle");

function renderSidebar() {
  if (!notesData || Object.keys(notesData).length === 0) {
    sidebar.innerHTML = "<p>No subjects found. Please add notes.</p>";
    return;
  }

  let html = "<h2>Subjects</h2><ul>";
  for (let subject in notesData) {
    html += `<li><strong>${subject}</strong><ul>`;
    notesData[subject].forEach(note => {
      html += `<li><a href="#${subject}/${note.title.replaceAll(" ", "-")}">${note.title}</a></li>`;
    });
    html += "</ul></li>";
  }
  html += "</ul>";
  sidebar.innerHTML = html;
}

function renderNoteFromHash() {
  const hash = decodeURIComponent(location.hash.slice(1));
  if (!hash) {
    mainContent.innerHTML = `<p>Select a note from the sidebar to view it.</p>`;
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
    <p><i>${note.date}</i></p>
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

function handleSearch() {
  const query = searchInput.value.toLowerCase();
  const resultsBox = document.getElementById("searchResults");

  if (!query) {
    resultsBox.style.display = "none";
    resultsBox.innerHTML = "";
    return;
  }

  let results = [];

  for (let subject in notesData) {
    if (subject.toLowerCase().includes(query)) {
      results.push({
        label: `📁 ${subject}`,
        href: `#${subject}`
      });
    }
    for (let note of notesData[subject]) {
      if (
        note.title.toLowerCase().includes(query) ||
        note.tags?.some(tag => tag.toLowerCase().includes(query)) ||
        note.content?.toLowerCase().includes(query)
      ) {
        results.push({
          label: `📝 ${note.title} (${subject})`,
          href: `#${subject}/${note.title.replaceAll(" ", "-")}`
        });
      }
    }
  }

  if (results.length === 0) {
    resultsBox.innerHTML = `<div>No matches found</div>`;
  } else {
    resultsBox.innerHTML = results.map(res => `<div data-href="${res.href}">${res.label}</div>`).join('');
  }

  resultsBox.style.display = "block";

  // Add click behavior
  Array.from(resultsBox.children).forEach(child => {
    child.onclick = () => {
      location.hash = child.dataset.href;
      resultsBox.style.display = "none";
    };
  });
}



function initDarkMode() {
  if (document.body.classList.contains("dark")) return;

  darkToggle.onclick = () => {
    document.body.classList.toggle("dark");
  };
}


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

window.addEventListener("hashchange", renderNoteFromHash);
searchInput.addEventListener("input", handleSearch);

renderSidebar();
renderNoteFromHash();
initDarkMode();
const hamburgerToggle = document.getElementById("hamburgerToggle");

hamburgerToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
