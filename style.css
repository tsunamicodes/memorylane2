let currentPage = 1;
const totalPages = 9;

function showPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active', 'fade-in'));
  const target = document.getElementById(gallery-page-${pageNumber});
  target.classList.add('active', 'fade-in');
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

function goToStart() {
  currentPage = 1;
  document.getElementById('welcome-page').classList.add('active');
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active', 'fade-in'));
}

function toggleEditMode() {
  document.getElementById('file-input-container').style.display =
    document.getElementById('file-input-container').style.display === 'none' ? 'block' : 'none';
}

function handleImageUpload(event) {
  // placeholder: enable changing image logic here
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && document.getElementById('welcome-page').classList.contains('active')) {
    showPage(1);
  }
});
