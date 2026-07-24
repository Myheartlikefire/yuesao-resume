const contact = {
  phone: "13800138000",
  wechat: "YUESAO_LIU888"
};

const defaultReviews = [
  {
    name: "张女士",
    rating: 5,
    content: "刘阿姨做事很有条理，宝宝喂养记录清楚，月子餐也清淡好吃。"
  },
  {
    name: "陈先生",
    rating: 5,
    content: "晚上照护很稳，遇到宝宝胀气会及时处理，也会耐心教家里人。"
  }
];

const reviewsList = document.querySelector("#reviewsList");
const wechatBtn = document.querySelector("#wechatBtn");
const reviewBtn = document.querySelector("#reviewBtn");
const wechatDialog = document.querySelector("#wechatDialog");
const reviewDialog = document.querySelector("#reviewDialog");
const reviewForm = document.querySelector("#reviewForm");
const closeReview = document.querySelector("#closeReview");
const toast = document.querySelector("#toast");

function storedReviews() {
  try {
    return JSON.parse(localStorage.getItem("nannyResumeReviews") || "[]");
  } catch {
    return [];
  }
}

function saveReviews(reviews) {
  localStorage.setItem("nannyResumeReviews", JSON.stringify(reviews));
}

function renderReviews() {
  const reviews = [...storedReviews(), ...defaultReviews];
  reviewsList.innerHTML = reviews
    .map(
      (review) => `
        <article class="review-item">
          <div class="review-head">
            <span>${escapeHtml(review.name)}</span>
            <span class="stars" aria-label="${review.rating}星">${"★".repeat(review.rating)}</span>
          </div>
          <p>${escapeHtml(review.content)}</p>
        </article>
      `
    )
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

async function copyWechat() {
  try {
    await navigator.clipboard.writeText(contact.wechat);
    showToast("微信号已复制");
  } catch {
    showToast(`微信号：${contact.wechat}`);
  }
}

wechatBtn.addEventListener("click", async () => {
  await copyWechat();
  wechatDialog.showModal();
});

reviewBtn.addEventListener("click", () => {
  reviewDialog.showModal();
});

closeReview.addEventListener("click", () => {
  reviewDialog.close();
});

reviewForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(reviewForm);
  const review = {
    name: form.get("name"),
    rating: Number(form.get("rating")),
    content: form.get("content")
  };
  saveReviews([review, ...storedReviews()]);
  reviewForm.reset();
  reviewDialog.close();
  renderReviews();
  showToast("评价已发布");
});

document.querySelectorAll(".dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});

if (window.lucide) {
  window.lucide.createIcons();
}

renderReviews();
