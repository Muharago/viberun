/* =============================================
   바이브런 홍보 페이지 — main.js
   =============================================
   현재 기능
   - 버튼 hover 시 링크 미설정 경고
   - 스크롤 시 섹션 페이드인 애니메이션
   - 블로그 배너 링크 미설정 시 콘솔 경고
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ── 1. 블로그 배너 링크 미설정 경고 ── */
  const blogBtn = document.getElementById('blog-banner-btn');
  if (blogBtn) {
    if (!blogBtn.getAttribute('href') || blogBtn.getAttribute('href') === '') {
      console.warn('[바이브런] 블로그 배너 링크가 비어 있습니다. main.js 또는 index.html의 blog-banner-btn href를 채워주세요.');
      blogBtn.addEventListener('click', function (e) {
        e.preventDefault();
        alert('블로그 링크가 아직 연결되지 않았습니다.\nmain.js 상단의 BLOG_URL 변수에 링크를 입력해주세요.');
      });
    }
  }

  /* ── 2. 지원하기 버튼 링크 미설정 경고 ── */
  const ctaBtn = document.getElementById('cta-btn');
  if (ctaBtn) {
    if (!ctaBtn.getAttribute('href') || ctaBtn.getAttribute('href') === '') {
      console.warn('[바이브런] 지원 버튼 링크가 비어 있습니다. main.js 또는 index.html의 cta-btn href를 채워주세요.');
    }
  }

  /* ── 3. 스크롤 페이드인 애니메이션 ── */
  const fadeTargets = document.querySelectorAll('.section, .hero, .blog-banner-card, .cta-block');

  // 초기 스타일 세팅
  fadeTargets.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target); // 한 번만 실행
      }
    });
  }, { threshold: 0.08 });

  fadeTargets.forEach(function (el) {
    observer.observe(el);
  });

});
