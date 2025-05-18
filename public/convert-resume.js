
document.addEventListener('DOMContentLoaded', function() {
  const element = document.body;
  const opt = {
    margin:       [0.5, 0.5],
    filename:     'ibrahim_olawale_resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  
  // New Promise-based usage:
  html2pdf().set(opt).from(element).save();
});
