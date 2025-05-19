
function downloadAsPDF() {
  const element = document.body;
  const opt = {
    margin: [0.5, 0.5],
    filename: 'ibrahim_olawale_resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      logging: false,
      letterRendering: true
    },
    jsPDF: { 
      unit: 'in', 
      format: 'letter', 
      orientation: 'portrait',
      compress: true 
    },
    pagebreak: { mode: 'avoid-all' }
  };
  
  // Generate and save PDF
  html2pdf().set(opt).from(element).save();
}

// Automatically trigger download when coming from the portfolio site download button
document.addEventListener('DOMContentLoaded', function() {
  // Check if this is an auto-download request
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('download') === 'true') {
    downloadAsPDF();
  }
});
