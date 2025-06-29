// 作品データ
const works = [
  // --- まずブログ記事 ---
  {
    title: "AI PCは\"賞味期限付き\"のデバイスなのか？ クラウドAIとの激突が生む未来",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/PCvsAI.png",
    link: "https://note.com/satomasa_eth/n/ndce45b832d02"
  },
  {
    title: "Apple WWDC 2025徹底解説！ iOS 18（26）、Apple AI、HomeOSの噂と新機能まとめ",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/wwdc2025.jpg",
    link: "https://note.com/satomasa_eth/n/nbb6f4bc9c19e"
  },
  {
    title: "iPhone 25%関税の悪夢か、新章の幕開けか？ Appleの深層心理と価格の行方を徹底予測！",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/applevstrump.jpg",
    link: "https://note.com/satomasa_eth/n/nc1a780d1351b"
  },
  {
    title: "国債投資の始め方ガイド｜米国債・日本国債のメリット・デメリットを初心者向けに解説",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/kokusai.jpg",
    link: "https://note.com/satomasa_eth/n/n948a7ed5cca4"
  },
  {
    title: "プラチナNISAをやさしく解説｜65歳以上・初心者が知っておきたいメリットとリスク",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/platinumnisa.jpg",
    link: "https://note.com/satomasa_eth/n/n4def296de5c8"
  },
  {
    title: "ニュースで話題の備蓄米放出―それでも米価が下がらない理由とは？",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/bitikumai.jpg",
    link: "https://note.com/satomasa_eth/n/nd1070764a3a2"
  },
  {
    title: "【初心者向け】日産が工場閉鎖を検討？ニュースの裏側を分かりやすく解説",
    category: "blog",
    categoryLabel: "ブログ",
    thumb: "images/blog/nissan.jpg",
    link: "https://note.com/satomasa_eth/n/n120c8f3e9310"
  },
  // --- ここからWeb記事 ---
  {
    title: "アップルAirPods Proは「精神と時の部屋」だった！ソニーWF-1000XM3から乗り換えを決めた理由",
    category: "web",
    categoryLabel: "Web記事",
    thumb: "images/airpods.jpg",
    link: "https://ascii.jp/elem/000/001/968/1968335/"
  },
  {
    title: "Apple Watch Series 5の常時点灯は一度使うと戻れない魅惑の機能だった",
    category: "web",
    categoryLabel: "Web記事",
    thumb: "images/applewatch.jpg",
    link: "https://ascii.jp/elem/000/001/953/1953805/"
  },
  {
    title: "まるで自分の部屋を拡張？ 箱に詰めて送るだけの収納サービスが便利すぎる",
    category: "web",
    categoryLabel: "Web記事",
    thumb: "images/sumally.jpg",
    link: "https://ascii.jp/elem/000/001/910/1910818/"
  },
  {
    title: "iPhoneと連携できるフォッシルのスマートウォッチ「Explorist HR」をレビュー",
    category: "web",
    categoryLabel: "Web記事",
    thumb: "images/fossil.jpg",
    link: "https://ascii.jp/elem/000/001/773/1773607/"
  },
  {
    title: "スペックよりコスパ重視なら第6世代iPadを買うしかない！",
    category: "web",
    categoryLabel: "Web記事",
    thumb: "images/ipad.jpg",
    link: "https://ascii.jp/elem/000/001/667/1667562/"
  },
  {
    title: "Apple Watchを身に着けて寝るだけ！　自動で睡眠データをトラッキング「AutoSleep」",
    category: "web",
    categoryLabel: "Web記事",
    thumb: "images/AutoSleep.jpg",
    link: "https://ascii.jp/elem/000/001/474/1474290/"
  },
  {
    title: "「貯金できない」を支援するiPhoneアプリfinbeeで自動貯金をはじめよう",
    category: "web",
    categoryLabel: "Web記事",
    thumb: "images/finbee.jpg",
    link: "https://ascii.jp/elem/000/001/473/1473982/"
  },
  // --- ここから下は他カテゴリのダミーデータ ---
  {
    title: "土星の環の正体は？1分で宇宙解説",
    category: "tiktok",
    categoryLabel: "TikTok",
    thumb: "images/TikTok/dosei01.png",
    link: "https://www.tiktok.com/@spacewhiz2024/video/7431174969964416272"
  },
  {
    title: "地球の自転が止まったら？1分で宇宙解説",
    category: "tiktok",
    categoryLabel: "TikTok",
    thumb: "images/TikTok/earth.png",
    link: "https://www.tiktok.com/@spacewhiz2024/video/7429970065706994945"
  },
  {
    title: "太陽系の惑星を全部並べてみた！1分で宇宙解説",
    category: "tiktok",
    categoryLabel: "TikTok",
    thumb: "images/TikTok/solar.png",
    link: "https://www.tiktok.com/@spacewhiz2024/video/7428934163421547793"
  },
  {
    title: "Lo-Fi Work & Study Mix【勉強や仕事のときに聴きたい作業用BGM】",
    category: "youtube",
    categoryLabel: "YouTube",
    thumb: "images/YouTube/001.png",
    link: "https://www.youtube.com/watch?v=cSBACGVmUm4"
  },
  {
    title: "Chill Beats to Boost Your Productivity | Lo-Fi Work & Study Mix【勉強や仕事のときに聴きたい作業用BGM】",
    category: "youtube",
    categoryLabel: "YouTube",
    thumb: "images/YouTube/002.png",
    link: "https://www.youtube.com/watch?v=yzSSP3PTTWA"
  },
  {
    title: "勉強や仕事のときに聴きたい作業用BGM - Jazzy lo-fi hip hop vol.2",
    category: "youtube",
    categoryLabel: "YouTube",
    thumb: "images/YouTube/003.png",
    link: "https://www.youtube.com/watch?v=uA6JGHPBVvg"
  },
  {
    title: "勉強や仕事のときに聴きたい作業用BGM - Jazzy lo-fi hip hop (studying or working)",
    category: "youtube",
    categoryLabel: "YouTube",
    thumb: "images/YouTube/004.png",
    link: "https://www.youtube.com/watch?v=5nAA5T1ge98"
  },
  {
    title: "勉強や仕事のときに聴きたい作業用BGM - Lo-fi Chill Relaxing Study Music.",
    category: "youtube",
    categoryLabel: "YouTube",
    thumb: "images/YouTube/005.png",
    link: "https://www.youtube.com/watch?v=1yFGIF-2Tm0"
  },
  {
    title: "勉強や仕事のときに聴きたい作業用BGM - Lo-fi, Hip Hop Beats, Jazz",
    category: "youtube",
    categoryLabel: "YouTube",
    thumb: "images/YouTube/006.png",
    link: "https://www.youtube.com/watch?v=1ouevNwOjR8"
  },
  {
    title: "猫カフェLP（作例）",
    category: "lp",
    categoryLabel: "制作LP",
    thumb: "images/LP/nekocafe.png",
    link: "https://satomasa2260.github.io/nekocafe/"
  },
  {
    title: "法律事務所LP（作例）",
    category: "lp",
    categoryLabel: "制作LP",
    thumb: "images/LP/houritujimusho.png",
    link: "https://satomasa2260.github.io/lawfirm/"
  },
  {
    title: "都内にあるカフェLP（作例）",
    category: "lp",
    categoryLabel: "制作LP",
    thumb: "images/LP/cafe.png",
    link: "https://satomasa2260.github.io/cafe-lp/"
  },
  // --- ここからWebツール ---
  {
    title: "AIツール診断",
    category: "webtool",
    categoryLabel: "Webツール",
    thumb: "images/webtool/aitoolshindan.png",
    link: "https://satomasa2260.github.io/aitoolshindan/"
  }
];

// 作品カードの生成
function renderWorks(filter = "all") {
  const grid = document.getElementById('works-grid');
  grid.innerHTML = '';
  const filtered = filter === "all" ? works : works.filter(w => w.category === filter);
  if (filtered.length === 0) {
    grid.innerHTML = '<p>該当する作品はありません。</p>';
    return;
  }
  filtered.forEach(work => {
    const card = document.createElement('div');
    card.className = 'work-card';
    card.innerHTML = `
      <a href="${work.link}" target="_blank" rel="noopener">
        <img class="work-thumb" src="${work.thumb}" alt="${work.title}">
      </a>
      <div class="work-content">
        <div>
          <div class="work-category">${work.categoryLabel}</div>
          <h3 class="work-title">
            <a href="${work.link}" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;">${work.title}</a>
          </h3>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// フィルターボタンのイベント
document.addEventListener('DOMContentLoaded', () => {
  renderWorks();

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderWorks(filter);
    });
  });

  // スムーズスクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 60,
          behavior: 'smooth'
        });
      }
    });
  });
}); 