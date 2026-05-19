// 简历下载功能
const downloadBtn = document.getElementById('downloadBtn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'assets/resume/resume.pdf';
        link.download = '蒋旻阳_简历.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        let downloadCount = localStorage.getItem('resumeDownloads') || 0;
        downloadCount = parseInt(downloadCount, 10) + 1;
        localStorage.setItem('resumeDownloads', downloadCount);
        console.log(`简历已下载 ${downloadCount} 次`);
    });
}

// 平滑滚动
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
