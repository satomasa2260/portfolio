// 作品データ
const works = [
  // --- 最新作品（Allタブで最初に表示） ---
  {
    title: "【完全無料】サンライズ（Sunrise）Airdrop確定！ 7/14までの最終確認方法を徹底解説！",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/sunrise.png",
    link: "https://note.com/satomasa_eth/n/n19dff0dace94",
    description: "仮想通貨投資家の皆さん、朗報です。以前から注目していた「サンライズ（Sunrise）」プロジェクトのエアドロップが、ついに確定しました！完全無料で参加できたテストネットの貢献者向けに配布されます。"
  },
  {
    title: "災害情報サイト",
    category: "lp",
    categoryLabel: "制作LP",
    thumb: "images/LP/DisasterPreventionInformation.png",
    link: "https://satomasa2260.github.io/DisasterPreventionInformation/",
    description: "災害情報を分かりやすく提供するサイト。防災知識と最新情報を統合した災害対策情報サイト。"
  },
  {
    title: "快適室温の教科書",
    category: "lp",
    categoryLabel: "制作LP",
    thumb: "images/LP/kaiteki.png",
    link: "https://satomasa2260.github.io/roomlife/",
    description: "その室温、本当に快適？電気代を気にせず、家族みんなが健康に過ごす方法を紹介するランディングページ。"
  },
  // --- まずブログ記事 ---
  {
    title: "【Solanaユーザー必見】ビットコイン無料GETのチャンス！ $zBTCエアドロップ確認方法を徹底解説",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/bitcoin01.png",
    link: "https://note.com/satomasa_eth/n/nf6971a4fabcf",
    description: "Solanaチェーン上で利用できるビットコイン$zBTCのエアドロップについて解説。ゼウスネットワークが提供する無料ビットコイン獲得チャンスを紹介。"
  },
  {
    title: "【最短2分】資金ゼロで参加！Lorenzoテストネットで5万ドルのエアドロ報酬プールを狙う",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/lorenzo.png",
    link: "https://note.com/satomasa_eth/n/n96515330ee9d",
    description: "Lorenzoテストネットの参加方法を詳しく解説。無料で2分で完了し、5万ドルのエアドロップ報酬プールを狙える穴場プロジェクトを紹介。"
  },
  {
    title: "PER・PBRとは？投資初心者が知っておきたい企業価値の見方",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/per_pbr.png",
    link: "https://note.com/satomasa_eth/n/n5c2213837b6c",
    description: "PER・PBRの基本概念と企業価値の見方を初心者向けに解説。投資判断に役立つ指標の使い方を紹介。"
  },
  {
    title: "Amazonプライムデー2025攻略ガイド：お得な買い方から注目セール品まで徹底解説！",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/amazon01.jpg",
    link: "https://note.com/satomasa_eth/n/n6f1e7bcdc8ee",
    description: "Amazonプライムデー2025の攻略法とお得な買い方を徹底解説。注目セール品から購入のコツまで初心者向けに分かりやすく紹介。"
  },
  {
    title: "AI PCは\"賞味期限付き\"のデバイスなのか？ クラウドAIとの激突が生む未来",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/PCvsAI.png",
    link: "https://note.com/satomasa_eth/n/ndce45b832d02",
    description: "AI PCとクラウドAIの競合関係を分析。ローカルAIの利点と限界、将来のデバイス進化について解説。"
  },
  {
    title: "Apple WWDC 2025徹底解説！ iOS 18（26）、Apple AI、HomeOSの噂と新機能まとめ",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/wwdc2025.jpg",
    link: "https://note.com/satomasa_eth/n/nbb6f4bc9c19e",
    description: "Apple WWDC 2025の最新情報を徹底解説。iOS 18、Apple AI、HomeOSの噂と新機能をまとめて紹介。"
  },
  {
    title: "iPhone 25%関税の悪夢か、新章の幕開けか？ Appleの深層心理と価格の行方を徹底予測！",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/applevstrump.jpg",
    link: "https://note.com/satomasa_eth/n/nc1a780d1351b",
    description: "iPhone関税問題の影響とAppleの対応戦略を分析。価格変動の可能性と消費者への影響を予測。"
  },
  {
    title: "国債投資の始め方ガイド｜米国債・日本国債のメリット・デメリットを初心者向けに解説",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/kokusai.jpg",
    link: "https://note.com/satomasa_eth/n/n948a7ed5cca4",
    description: "国債投資の基礎知識を初心者向けに解説。米国債と日本国債の違い、メリット・デメリットを比較。"
  },
  {
    title: "プラチナNISAをやさしく解説｜65歳以上・初心者が知っておきたいメリットとリスク",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/platinumnisa.jpg",
    link: "https://note.com/satomasa_eth/n/n4def296de5c8",
    description: "プラチナNISAの仕組みと特徴を65歳以上・初心者向けに解説。メリットとリスクを分かりやすく紹介。"
  },
  {
    title: "ニュースで話題の備蓄米放出―それでも米価が下がらない理由とは？",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/bitikumai.jpg",
    link: "https://note.com/satomasa_eth/n/nd1070764a3a2",
    description: "備蓄米放出の背景と米価が下がらない理由を経済学的視点から解説。食料安全保障の課題を分析。"
  },
  {
    title: "【初心者向け】日産が工場閉鎖を検討？ニュースの裏側を分かりやすく解説",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/nissan.jpg",
    link: "https://note.com/satomasa_eth/n/n120c8f3e9310",
    description: "日産の工場閉鎖検討の背景と影響を初心者向けに解説。自動車業界の現状と将来展望を分析。"
  },
  // --- ここからWeb記事 ---
  {
    title: "アップルAirPods Proは「精神と時の部屋」だった！ソニーWF-1000XM3から乗り換えを決めた理由",
    category: "web",
    categoryLabel: "Web記事",
    thumb: "images/airpods.jpg",
    link: "https://ascii.jp/elem/000/001/968/1968335/",
    description: "AirPods Proの音質とノイズキャンセリング機能をソニーWF-1000XM3と比較。乗り換えを決めた理由を詳しくレビュー。"
  },
  {
    title: "Apple Watch Series 5の常時点灯は一度使うと戻れない魅惑の機能だった",
    category: "web",
    categoryLabel: "Web記事",
    thumb: "images/applewatch.jpg",
    link: "https://ascii.jp/elem/000/001/953/1953805/",
    description: "Apple Watch Series 5の常時点灯ディスプレイ機能の実用性と使い勝手を実際の使用体験からレビュー。"
  },
  {
    title: "まるで自分の部屋を拡張？ 箱に詰めて送るだけの収納サービスが便利すぎる",
    category: "web",
    categoryLabel: "Web記事",
    thumb: "images/sumally.jpg",
    link: "https://ascii.jp/elem/000/001/910/1910818/",
    description: "収納サービスの便利さと実用性を実際の利用体験から紹介。部屋の片付けと収納の新しい解決策を解説。"
  },
  {
    title: "iPhoneと連携できるフォッシルのスマートウォッチ「Explorist HR」をレビュー",
    category: "web",
    categoryLabel: "Web記事",
    thumb: "images/fossil.jpg",
    link: "https://ascii.jp/elem/000/001/773/1773607/",
    description: "Fossil Explorist HRのデザイン、機能、iPhoneとの連携について詳しくレビュー。スマートウォッチ選びの参考情報。"
  },
  {
    title: "スペックよりコスパ重視なら第6世代iPadを買うしかない！",
    category: "web",
    categoryLabel: "Web記事",
    thumb: "images/ipad.jpg",
    link: "https://ascii.jp/elem/000/001/667/1667562/",
    description: "第6世代iPadのコストパフォーマンスを分析。スペックと価格のバランスから見た購入推奨理由を解説。"
  },
  {
    title: "Apple Watchを身に着けて寝るだけ！　自動で睡眠データをトラッキング「AutoSleep」",
    category: "web",
    categoryLabel: "Web記事",
    thumb: "images/AutoSleep.jpg",
    link: "https://ascii.jp/elem/000/001/474/1474290/",
    description: "AutoSleepアプリの機能と使い勝手をレビュー。Apple Watchを使った睡眠トラッキングの実用性を検証。"
  },
  {
    title: "「貯金できない」を支援するiPhoneアプリfinbeeで自動貯金をはじめよう",
    category: "web",
    categoryLabel: "Web記事",
    thumb: "images/finbee.jpg",
    link: "https://ascii.jp/elem/000/001/473/1473982/",
    description: "finbeeアプリの自動貯金機能と使い方を紹介。貯金が苦手な人向けの便利な機能を詳しく解説。"
  },
  // --- ここから下は他カテゴリのダミーデータ ---
  {
    title: "土星の環の正体は？1分で宇宙解説",
    category: "tiktok",
    categoryLabel: "TikTok",
    thumb: "images/TikTok/dosei01.png",
    link: "https://www.tiktok.com/@spacewhiz2024/video/7431174969964416272",
    description: "土星の環の正体を1分で分かりやすく解説。宇宙の神秘を短時間で学べる動画コンテンツ。"
  },
  {
    title: "地球の自転が止まったら？1分で宇宙解説",
    category: "tiktok",
    categoryLabel: "TikTok",
    thumb: "images/TikTok/earth.png",
    link: "https://www.tiktok.com/@spacewhiz2024/video/7429970065706994945",
    description: "地球の自転が止まった場合の影響を1分で解説。科学的な仮説を分かりやすく紹介。"
  },
  {
    title: "太陽系の惑星を全部並べてみた！1分で宇宙解説",
    category: "tiktok",
    categoryLabel: "TikTok",
    thumb: "images/TikTok/solar.png",
    link: "https://www.tiktok.com/@spacewhiz2024/video/7428934163421547793",
    description: "太陽系の全惑星を1分で紹介。各惑星の特徴を簡潔に解説する宇宙教育動画。"
  },
  {
    title: "Lo-Fi Work & Study Mix【勉強や仕事のときに聴きたい作業用BGM】",
    category: "youtube",
    categoryLabel: "YouTube",
    thumb: "images/YouTube/001.png",
    link: "https://www.youtube.com/watch?v=cSBACGVmUm4",
    description: "勉強や仕事に集中できるLo-Fi音楽。リラックスしながら作業効率を上げるBGMプレイリスト。"
  },
  {
    title: "Chill Beats to Boost Your Productivity | Lo-Fi Work & Study Mix【勉強や仕事のときに聴きたい作業用BGM】",
    category: "youtube",
    categoryLabel: "YouTube",
    thumb: "images/YouTube/002.png",
    link: "https://www.youtube.com/watch?v=yzSSP3PTTWA",
    description: "生産性向上を目的としたLo-Fiビート集。集中力を高める作業用BGMとして最適。"
  },
  {
    title: "勉強や仕事のときに聴きたい作業用BGM - Jazzy lo-fi hip hop vol.2",
    category: "youtube",
    categoryLabel: "YouTube",
    thumb: "images/YouTube/003.png",
    link: "https://www.youtube.com/watch?v=uA6JGHPBVvg",
    description: "ジャジーなLo-Fiヒップホップで構成された作業用BGM。リラックスしながら集中できる音楽。"
  },
  {
    title: "勉強や仕事のときに聴きたい作業用BGM - Jazzy lo-fi hip hop (studying or working)",
    category: "youtube",
    categoryLabel: "YouTube",
    thumb: "images/YouTube/004.png",
    link: "https://www.youtube.com/watch?v=5nAA5T1ge98",
    description: "勉強や仕事に最適なジャジーLo-Fiヒップホップ。集中力を維持しながらリラックスできる音楽。"
  },
  {
    title: "勉強や仕事のときに聴きたい作業用BGM - Lo-fi Chill Relaxing Study Music.",
    category: "youtube",
    categoryLabel: "YouTube",
    thumb: "images/YouTube/005.png",
    link: "https://www.youtube.com/watch?v=1yFGIF-2Tm0",
    description: "リラックスしながら集中できるLo-Fiチルミュージック。勉強や仕事の効率を上げるBGM。"
  },
  {
    title: "勉強や仕事のときに聴きたい作業用BGM - Lo-fi, Hip Hop Beats, Jazz",
    category: "youtube",
    categoryLabel: "YouTube",
    thumb: "images/YouTube/006.png",
    link: "https://www.youtube.com/watch?v=1ouevNwOjR8",
    description: "Lo-Fi、ヒップホップ、ジャズを融合した作業用BGM。多様な音楽ジャンルで構成された集中用音楽。"
  },
  {
    title: "猫カフェLP（作例）",
    category: "lp",
    categoryLabel: "制作LP",
    thumb: "images/LP/nekocafe.png",
    link: "https://satomasa2260.github.io/nekocafe/",
    description: "猫カフェのランディングページ作例。魅力的なデザインとユーザビリティを重視したWeb制作。"
  },
  {
    title: "法律事務所LP（作例）",
    category: "lp",
    categoryLabel: "制作LP",
    thumb: "images/LP/houritujimusho.png",
    link: "https://satomasa2260.github.io/lawfirm/",
    description: "法律事務所のランディングページ作例。信頼性と専門性を表現したWebデザイン。"
  },
  {
    title: "都内にあるカフェLP（作例）",
    category: "lp",
    categoryLabel: "制作LP",
    thumb: "images/LP/cafe.png",
    link: "https://satomasa2260.github.io/cafe-lp/",
    description: "都内カフェのランディングページ作例。温かみのあるデザインで来店を促すWeb制作。"
  },
  // --- ここからWebツール ---
  {
    title: "AIツール診断",
    category: "webtool",
    categoryLabel: "Webツール",
    thumb: "images/webtool/aitoolshindan.png",
    link: "https://satomasa2260.github.io/aitoolshindan/",
    description: "AIツールの適性を診断するWebツール。ユーザーのニーズに合ったAIツールを提案する診断サービス。"
  }
];

// 作品カードの生成（SEO・アクセシビリティ対応）
function renderWorks(filter = "all") {
  const grid = document.getElementById('works-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  const filtered = filter === "all" ? works : works.filter(w => w.category === filter);
  
  if (filtered.length === 0) {
    const noResults = document.createElement('p');
    noResults.textContent = '該当する作品はありません。';
    noResults.setAttribute('aria-live', 'polite');
    grid.appendChild(noResults);
    return;
  }
  
  filtered.forEach((work, index) => {
    const card = document.createElement('article');
    card.className = 'work-card';
    card.setAttribute('itemscope', '');
    card.setAttribute('itemtype', 'https://schema.org/CreativeWork');
    
    const cardId = `work-${index}`;
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
  
  // フィルター結果をスクリーンリーダーに通知
  const resultsCount = filtered.length;
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = `${resultsCount}件の作品が見つかりました。`;
  grid.appendChild(announcement);
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
      
      // フィルター適用
      const filter = btn.getAttribute('data-filter');
      renderWorks(filter);
      
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
    anchor.addEventListener('click', function(e) {
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
  // 作品の初期表示
  renderWorks();
  
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