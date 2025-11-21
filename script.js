// 作品データは data.js から読み込まれます


// グローバル変数
let currentFilter = "blog";
let currentPage = 0;
let isLoading = false;
const itemsPerPage = 12; // 1ページあたりの表示件数



// 作品カードの生成（SEO・アクセシビリティ対応）
function renderWorks(filter = "all", page = 0) {
  const grid = document.getElementById('works-grid');
  if (!grid) return;



  // フィルターが変わった場合は最初から表示
  if (filter !== currentFilter) {

    grid.innerHTML = '';
    currentPage = 0;
    currentFilter = filter;
  } else {

  }

  // デバッグ: 現在のグリッドの状態を確認


  // フィルタリング処理
  let filtered = works.filter(w => w.category === filter);


  if (filtered.length === 0) {

    const noResults = document.createElement('p');
    noResults.textContent = '該当する作品はありません。';
    noResults.setAttribute('aria-live', 'polite');
    noResults.style.gridColumn = '1 / -1'; // グリッドの全列にまたがる
    noResults.style.textAlign = 'center'; // 中央揃え
    noResults.style.padding = '40px 20px'; // 適切な余白
    grid.appendChild(noResults);
    return;
  }

  // ページネーション処理
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const worksToShow = filtered.slice(startIndex, endIndex);



  // ページ0の場合は既存のカードをクリア、それ以外は追加
  if (page === 0) {
    // 既存のカードをクリア（スクリーンリーダー用の要素は保持）
    const existingCards = grid.querySelectorAll('.work-card');
    existingCards.forEach(card => card.remove());

  }

  worksToShow.forEach((work, index) => {


    const card = document.createElement('article');
    card.className = 'work-card';
    card.setAttribute('itemscope', '');
    card.setAttribute('itemtype', 'https://schema.org/CreativeWork');

    const cardId = `work-${startIndex + index}`;
    card.setAttribute('id', cardId);

    card.innerHTML = `
      <a href="${work.link}" target="_blank" rel="noopener noreferrer" aria-describedby="${cardId}-desc">
        <img class="work-thumb" src="${work.thumb}" alt="${work.title}" loading="lazy" itemprop="image">
      </a>
      <div class="work-content">
        <div>
          <div class="work-category" itemprop="genre">${work.categoryLabel}</div>
          <h3 class="work-title">
            <a href="${work.link}" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:none;" itemprop="url">
              <span itemprop="name">${work.title}</span>
            </a>
          </h3>
          <p id="${cardId}-desc" class="work-description" itemprop="description">${work.description}</p>
        </div>
      </div>
    `;

    grid.appendChild(card);

  });

  // フィルター結果をスクリーンリーダーに通知（ページ0の場合のみ）
  if (page === 0) {
    const resultsCount = filtered.length;
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = `${resultsCount}件の作品が見つかりました。`;
    grid.appendChild(announcement);
  }

  // ローディング状態の更新
  isLoading = false;

  // 次のページがあるかチェック
  if (endIndex < filtered.length) {
    showLoadMoreButton();
  } else {
    // 最後のページに達した場合、「もっと見る」ボタンを削除
    const existingButton = grid.querySelector('.load-more-btn');
    if (existingButton) {
      existingButton.remove();
    }
  }


}

// ロードモアボタンの表示
function showLoadMoreButton() {
  const grid = document.getElementById('works-grid');
  if (!grid) return;

  // 既存のロードモアボタンを削除
  const existingButton = grid.querySelector('.load-more-btn');
  if (existingButton) {
    existingButton.remove();
  }

  const loadMoreBtn = document.createElement('button');
  loadMoreBtn.className = 'load-more-btn';
  loadMoreBtn.textContent = 'もっと見る';
  loadMoreBtn.setAttribute('aria-label', 'さらに作品を表示する');

  loadMoreBtn.addEventListener('click', () => {
    loadMoreWorks();
  });

  grid.appendChild(loadMoreBtn);
}

// 追加の作品を読み込む
function loadMoreWorks() {
  if (isLoading) return;

  isLoading = true;
  currentPage++;



  // ローディング表示
  const grid = document.getElementById('works-grid');

  // 「もっと見る」ボタンを削除
  const existingButton = grid.querySelector('.load-more-btn');
  if (existingButton) {
    existingButton.remove();
  }

  const loadingIndicator = document.createElement('div');
  loadingIndicator.className = 'loading-indicator';
  loadingIndicator.innerHTML = '<div class="spinner"></div><p>読み込み中...</p>';
  grid.appendChild(loadingIndicator);

  // 少し遅延を入れてスムーズな表示
  setTimeout(() => {
    loadingIndicator.remove();

    renderWorks(currentFilter, currentPage);
  }, 300);
}

// フィルターボタンのイベント（アクセシビリティ対応）
function setupFilterButtons() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const worksGrid = document.getElementById('works-grid');



  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {


      // アクティブ状態の更新
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // フィルター適用（ページをリセット）
      const filter = btn.getAttribute('data-filter');


      // フィルターが変わった場合のみ処理
      if (filter !== currentFilter) {

        currentFilter = filter;

        // ページカウンターをリセット
        currentPage = 0;

        // グリッドをクリア
        worksGrid.innerHTML = '';


        // 新しいフィルターで作品を表示
        renderWorks(filter, 0);


      } else {

      }

      // フォーカス管理
      worksGrid.focus();
    });

    // キーボードナビゲーション
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
}

// スムーズスクロール（アクセシビリティ対応）
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);

      if (target) {
        e.preventDefault();

        // スクロール位置の計算（ヘッダーの高さを考慮）
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // フォーカスを移動
        target.setAttribute('tabindex', '-1');
        target.focus();

        // スクリーンリーダーに通知
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = `${target.querySelector('h2, h3')?.textContent || targetId}セクションに移動しました。`;
        document.body.appendChild(announcement);

        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      }
    });
  });
}

// パフォーマンス最適化：画像の遅延読み込み
function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {


  // 作品の初期表示（ページネーション初期化）
  currentFilter = "all";
  currentPage = 0;

  // 既存の「もっと見る」ボタンをクリア
  const grid = document.getElementById('works-grid');
  if (grid) {
    const existingButton = grid.querySelector('.load-more-btn');
    if (existingButton) {
      existingButton.remove();
    }
  }

  // 作品の初期表示（ブログカテゴリをデフォルトで表示）
  renderWorks("blog", 0);

  // フィルターボタンの設定
  setupFilterButtons();

  // スムーズスクロールの設定
  setupSmoothScroll();

  // 遅延読み込みの設定
  setupLazyLoading();

  // ページ読み込み完了の通知
  const pageTitle = document.title;
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = `${pageTitle}の読み込みが完了しました。`;
  document.body.appendChild(announcement);

  setTimeout(() => {
    if (document.body.contains(announcement)) {
      document.body.removeChild(announcement);
    }
  }, 2000);

  // ===== ダークモード切替機能 =====
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  function setTheme(mode) {
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggle.innerHTML = '☀️ Light';
      themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
      document.body.classList.remove('dark-mode');
      themeToggle.innerHTML = '🌙 Dark';
      themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  // 初期テーマ設定
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersDark) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  // ボタンクリックで切り替え
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    if (isDark) {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  });
}); 