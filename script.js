const variant = window.RESUME_VARIANT || { showPrice: true, layout: "classic", badge: "简历版" };

const resume = {
  name: "陈陆莲",
  phone: "18320359830",
  age: "46岁",
  hometown: "广东",
  education: "初中",
  height: "158cm",
  weight: "65kg",
  experience: "6年",
  babies: "15个宝宝",
  language: "粤语、国语、涯话",
  family: "一家五口",
  intro:
    "为人诚实，能吃苦耐劳，有爱心，执行力强，脾气好，说话柔，有耐心，热爱母婴护理工作。服务中重视宝妈情绪沟通，也会细致记录宝宝喂养、睡眠、排便和护理情况。",
  certificates: ["高级催乳证", "高级月嫂证", "育婴师证", "家庭调理师证", "健康证及体检报告"],
  cooking:
    "擅长粤菜、家常菜、婴幼儿辅食、营养粥、各类月子餐和煲汤，菜色多样，注重清淡、均衡和阶段性营养搭配。",
  work: [
    "2021年至2024年在廉江妇幼保健院做一对多3班倒服务。",
    "2024年10月转一对一，在医院产科做产后陪护，并陆续上户做家庭月子服务。",
    "下户空档期继续在医院做一对一服务，保持稳定实操经验。"
  ],
  orders: [
    "2024年12月 廉江碧桂园 26天",
    "2025年3月 廉江下田仔 42天",
    "2025年5月 廉江营仔 26天",
    "2025年7月 湛江麻章 26天",
    "2025年9月 廉江锦绣华景 26天",
    "2026年2月 廉江石城镇 26天",
    "2026年4月 碧桂园盛世名门 26天",
    "2026年5月 廉江市石城镇高桥村龙凤胎 52天"
  ],
  maternalCare: [
    "会阴消毒护理、恶露观察、产后清洁擦身、产妇衣物清洗消毒。",
    "开奶、通乳，指导产妇正确喂奶方式。",
    "姜汁头疗、肚疗、满月发汗排湿、艾灸等基础产后恢复护理。",
    "根据产妇恢复阶段调配饮食，帮助身体机能恢复、伤口愈合和乳汁分泌。",
    "关注产妇心情，及时沟通疏导，陪伴宝妈轻松度过月子期。"
  ],
  babyCare: [
    "新生儿科学喂养，培养合理规律的饮食习惯。",
    "新生儿洗澡、清洁、抚触、安抚。",
    "宝宝衣物、毛巾、奶瓶等用品清洗、消毒及整理。",
    "测体温、观察食量、大小便、脐带消毒、皮肤护理、臀部护理。",
    "观察并预防黄疸、湿疹、感冒等常见情况。"
  ],
  reviews: [
    {
      name: "廉江石城镇家庭",
      text: "龙凤胎服务52天，照护细心，喂养记录清楚，两个宝宝作息逐步稳定。"
    },
    {
      name: "碧桂园盛世名门家庭",
      text: "陈姐做饭清淡有营养，照顾产妇和宝宝都很有耐心，家里人很放心。"
    },
    {
      name: "医院一对一陪护反馈",
      text: "沟通温和，执行力强，遇到宝宝护理细节会及时说明，配合度高。"
    }
  ]
};

const babyPhotos = [
  ["baby-twins.jpg", "双胞胎宝宝护理"],
  ["baby-care.jpg", "新生儿日常照护"],
  ["baby-stroller.jpg", "户外推车陪护"],
  ["baby-service.jpg", "医院及家庭服务记录"]
];

const mealPhotos = [
  ["meal-shrimp.jpg", "虾仁粉丝蒸菜"],
  ["meal-home-1.jpg", "家常营养餐合集"],
  ["meal-home-2.jpg", "月子餐搭配"],
  ["meal-grid.jpg", "营养餐展示"],
  ["meal-gallery.jpg", "多样化家常菜"]
];

const certPhotos = [
  ["certificate-nutrition.jpg", "高级营养师证书"],
  ["certificate-health.jpg", "健康证"],
  ["certificate-checkup.jpg", "体检报告"],
  ["certificate-skills.jpg", "技能证件合集"]
];

const proofPhotos = [
  ["service-award.jpg", "双胞胎服务好评见证"],
  ["baby-service.jpg", "医院服务照片"],
  ["baby-twins.jpg", "龙凤胎护理记录"]
];

function asset(name) {
  return `./assets/chen-lulian/${name}`;
}

function icon(name) {
  return `<i data-lucide="${name}" aria-hidden="true"></i>`;
}

function list(items) {
  return items.map((item) => `<li>${icon("check-circle-2")}<span>${item}</span></li>`).join("");
}

function gallery(title, intro, photos, extraClass = "") {
  return `
    <section class="content-section ${extraClass}">
      <div class="section-heading">
        <h2>${title}</h2>
        <p>${intro}</p>
      </div>
      <div class="photo-grid">
        ${photos
          .map(
            ([file, label]) => `
              <figure class="photo-tile">
                <img src="${asset(file)}" alt="${label}" loading="lazy" />
                <figcaption>${label}</figcaption>
              </figure>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderPrice() {
  if (!variant.showPrice || !variant.wage) return "";
  return `
    <article class="price-panel">
      <span class="panel-label">接单工资</span>
      <strong>¥${variant.wage}</strong>
      <p>特殊档期、双胞胎、早产儿或特殊护理需求，可电话沟通确认。</p>
    </article>
  `;
}

function renderNoPriceNote() {
  if (variant.showPrice) return "";
  return `
    <article class="note-panel">
      <span class="panel-label">服务沟通</span>
      <strong>面议</strong>
      <p>具体服务安排、档期和护理需求，可电话沟通确认。</p>
    </article>
  `;
}

function renderResume() {
  document.body.classList.add("resume-page", `layout-${variant.layout}`);
  const app = document.querySelector("#resumeApp");
  app.innerHTML = `
    <main class="page-shell">
      <section class="profile-hero">
        <div class="hero-media">
          <img src="${asset(variant.layout === "gallery" ? "og-cover.jpg" : "portrait.jpg")}" alt="${resume.name}个人与服务照片" />
        </div>
        <div class="hero-content">
          <a class="home-link" href="./index.html">${icon("arrow-left")}返回版本入口</a>
          <p class="eyebrow">${variant.badge}</p>
          <h1>${resume.name}</h1>
          <p class="lead">
            ${resume.age}，${resume.hometown}籍，${resume.experience}月嫂经验，累计服务${resume.babies}。擅长新生儿护理、产妇护理、开奶通乳、月子餐和婴幼儿辅食。
          </p>
          <div class="trust-strip">
            <span>${resume.age}</span>
            <span>${resume.experience}经验</span>
            <span>带过${resume.babies}</span>
            <span>${resume.language}</span>
          </div>
        </div>
      </section>

      <section class="section-band">
        <div class="summary-grid">
          <article class="metric"><span class="metric-value">${resume.experience}</span><span class="metric-label">服务经验</span></article>
          <article class="metric"><span class="metric-value">15</span><span class="metric-label">服务宝宝</span></article>
          <article class="metric"><span class="metric-value">46</span><span class="metric-label">当前年龄</span></article>
          <article class="metric"><span class="metric-value">52天</span><span class="metric-label">龙凤胎服务</span></article>
        </div>
      </section>

      ${variant.layout === "gallery" ? gallery("服务照片", "宝宝护理、双胞胎服务和好评见证展示。", proofPhotos, "gallery-first") : ""}

      <section class="content-section">
        <div class="two-column">
          <div>
            <div class="section-heading compact">
              <h2>基本资料</h2>
            </div>
            <ul class="info-list">
              <li><span>姓名</span><strong>${resume.name}</strong></li>
              <li><span>籍贯</span><strong>${resume.hometown}</strong></li>
              <li><span>学历</span><strong>${resume.education}</strong></li>
              <li><span>身高体重</span><strong>${resume.height} / ${resume.weight}</strong></li>
              <li><span>语言</span><strong>${resume.language}</strong></li>
              <li><span>家庭结构</span><strong>${resume.family}</strong></li>
            </ul>
          </div>
          <div class="stack-panels">
            ${renderPrice()}
            ${renderNoPriceNote()}
            <article class="contact-panel">
              <span class="panel-label">联系电话</span>
              <strong>${resume.phone}</strong>
              <p>可电话沟通档期，也可扫码添加微信。</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section-band">
        <div class="two-column">
          <div>
            <div class="section-heading compact">
              <h2>资质证书</h2>
              <p>证件照片仅作简历展示，详细证件和体检报告建议面试时核验原件。</p>
            </div>
            <ul class="check-list">${list(resume.certificates)}</ul>
          </div>
          <div>
            <div class="section-heading compact">
              <h2>厨艺能力</h2>
            </div>
            <p class="plain-text">${resume.cooking}</p>
          </div>
        </div>
      </section>

      ${gallery("宝宝护理照片", "展示日常照护、双胞胎服务、户外推车陪护等真实服务场景。", babyPhotos)}
      ${gallery("营养餐照片", "粤菜、家常菜、月子餐、营养粥和阶段性膳食搭配展示。", mealPhotos)}
      ${gallery("证书与健康资料", "包含技能证书、健康证和体检报告照片，页面不转写证件号码。", certPhotos)}

      <section class="content-section">
        <div class="section-heading">
          <h2>工作经历</h2>
          <p>从医院一对多服务到家庭一对一月子服务，护理经验持续稳定。</p>
        </div>
        <div class="timeline">
          ${resume.work.map((item) => `<article><span>经历</span><h3>${item}</h3></article>`).join("")}
        </div>
      </section>

      <section class="section-band">
        <div class="section-heading">
          <h2>月嫂服务单</h2>
          <p>近年上户和医院服务记录。</p>
        </div>
        <div class="order-list">
          ${resume.orders.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </section>

      <section class="content-section">
        <div class="two-column care-columns">
          <div>
            <div class="section-heading compact"><h2>产妇护理</h2></div>
            <ul class="check-list">${list(resume.maternalCare)}</ul>
          </div>
          <div>
            <div class="section-heading compact"><h2>婴儿护理</h2></div>
            <ul class="check-list">${list(resume.babyCare)}</ul>
          </div>
        </div>
      </section>

      <section class="section-band">
        <div class="section-heading">
          <h2>好评见证</h2>
          <p>以下为根据服务记录整理的匿名评价摘要。</p>
        </div>
        <div class="reviews-list" id="reviewsList">
          ${resume.reviews.map((review) => `
            <article class="review-item">
              <div class="review-head"><span>${review.name}</span><span class="stars">★★★★★</span></div>
              <p>${review.text}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="content-section">
        <div class="section-heading">
          <h2>个人评价</h2>
        </div>
        <p class="self-review">${resume.intro}</p>
      </section>
    </main>

    <nav class="bottom-actions" aria-label="联系操作">
      <a class="action-btn primary" href="tel:${resume.phone}">${icon("phone")}<span>拨打电话</span></a>
      <button class="action-btn" id="wechatBtn" type="button">${icon("message-circle-plus")}<span>添加微信</span></button>
      <button class="action-btn" id="reviewBtn" type="button">${icon("star")}<span>发表评价</span></button>
    </nav>

    <dialog id="wechatDialog" class="dialog">
      <form method="dialog" class="dialog-body">
        <button class="icon-btn" value="close" aria-label="关闭">${icon("x")}</button>
        <h2>添加微信</h2>
        <img class="qr-image" src="${asset("wechat-qr.jpg")}" alt="陈陆莲微信二维码" />
        <p>请长按或截图保存二维码，再到微信中识别添加。</p>
        <button class="solid-btn" value="close">知道了</button>
      </form>
    </dialog>

    <dialog id="reviewDialog" class="dialog">
      <form id="reviewForm" class="dialog-body">
        <button class="icon-btn" value="close" type="button" id="closeReview" aria-label="关闭">${icon("x")}</button>
        <h2>发表评价</h2>
        <label><span>称呼</span><input name="name" maxlength="12" placeholder="如：王女士" required /></label>
        <label>
          <span>评分</span>
          <select name="rating" required>
            <option value="5">5星，非常满意</option>
            <option value="4">4星，满意</option>
            <option value="3">3星，一般</option>
          </select>
        </label>
        <label><span>评价内容</span><textarea name="content" rows="4" maxlength="120" placeholder="写一写服务感受" required></textarea></label>
        <button class="solid-btn" type="submit">提交评价</button>
      </form>
    </dialog>
    <div id="toast" class="toast" role="status" aria-live="polite"></div>
  `;
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function bindActions() {
  document.querySelector("#wechatBtn").addEventListener("click", () => {
    document.querySelector("#wechatDialog").showModal();
  });

  document.querySelector("#reviewBtn").addEventListener("click", () => {
    document.querySelector("#reviewDialog").showModal();
  });

  document.querySelector("#closeReview").addEventListener("click", () => {
    document.querySelector("#reviewDialog").close();
  });

  document.querySelector("#reviewForm").addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    document.querySelector("#reviewDialog").close();
    showToast("评价已收到");
  });

  document.querySelectorAll(".dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
}

if (document.querySelector("#resumeApp")) {
  renderResume();
  bindActions();
  if (window.lucide) window.lucide.createIcons();
}
