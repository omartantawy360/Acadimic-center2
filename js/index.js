// ===== HERO CHART =====
document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('heroChart');
  if (!ctx) return;
  const isDark = document.documentElement.classList.contains('dark');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['السبت','الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة'],
      datasets: [{
        label: 'الأداء',
        data: [65, 72, 68, 80, 75, 88, 92],
        borderColor: '#7c3aed',
        backgroundColor: 'rgba(124,58,237,0.1)',
        borderWidth: 2.5,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#7c3aed',
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { font: { family: 'Cairo', size: 11 }, color: isDark ? '#9ca3af' : '#6b7280' } },
        y: { grid: { color: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }, ticks: { font: { family: 'Cairo', size: 11 }, color: isDark ? '#9ca3af' : '#6b7280' } }
      }
    }
  });
});
