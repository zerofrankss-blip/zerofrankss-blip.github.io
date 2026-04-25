function getHotelSlug() {
  return new URLSearchParams(window.location.search).get('hotel');
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function renderStars(count) {
  return '★'.repeat(count) + '☆'.repeat(5 - count);
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.append(toast);
  setTimeout(() => toast.remove(), 3600);
}

function getStoredReviews(slug) {
  try {
    return JSON.parse(localStorage.getItem(`hotelReviews-${slug}`) || '[]');
  } catch {
    return [];
  }
}

function saveReview(slug, review) {
  const stored = getStoredReviews(slug);
  stored.unshift(review);
  localStorage.setItem(`hotelReviews-${slug}`, JSON.stringify(stored));
}

function renderHotelGallery(hotel) {
  const gallery = document.getElementById('hotelGallery');
  gallery.innerHTML = hotel.gallery
    .map(
      (image) => `<article class="gallery-item" style="background-image: url('${image}');"></article>`
    )
    .join('');
}

function renderReviews(hotel) {
  const reviewList = document.getElementById('reviewList');
  const storedReviews = getStoredReviews(hotel.slug);
  const reviews = [...storedReviews, ...hotel.reviews].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  if (!reviews.length) {
    reviewList.innerHTML = '<p>Пока нет отзывов. Будьте первым!</p>';
    return;
  }

  reviewList.innerHTML = reviews
    .map(
      (review) => `
        <article class="review-card">
          <div class="review-card-header">
            <strong>${review.name}</strong>
            <span>${formatDate(review.date)}</span>
          </div>
          <div class="review-rating">${renderStars(review.rating)}</div>
          <p>${review.text}</p>
        </article>
      `
    )
    .join('');
}

function initHotelPage() {
  const slug = getHotelSlug();
  const hotel = hotels.find((item) => item.slug === slug);
  if (!hotel) {
    document.body.innerHTML = '<main class="container"><h1>Номер не найден</h1><p>Пожалуйста, вернитесь на главную страницу.</p></main>';
    return;
  }

  document.title = `${hotel.name} — RoomFinder`;
  document.getElementById('hotelTitle').textContent = hotel.name;
  document.getElementById('hotelSubtitle').textContent = hotel.description;
  document.getElementById('hotelLocation').textContent = `${hotel.tag}, ${hotel.country}`;
  document.getElementById('hotelGuests').textContent = hotel.guests;
  document.getElementById('hotelPrice').textContent = `${hotel.price} ₽/ночь`;
  document.getElementById('hotelRating').textContent = `Рейтинг ${hotel.rating}`;
  document.getElementById('hotelDescription').textContent = hotel.details;
  document.getElementById('hotelLongDescription').textContent = `Этот номер расположен в ${hotel.tag}, ${hotel.country}. ${hotel.details} Мы подготовили дополнительные фотографии и отзывы гостей, чтобы вы могли выбрать лучший вариант.`;
  document.getElementById('hotelHeroImage').style.backgroundImage = `url('${hotel.image}')`;

  const bookButton = document.getElementById('hotelBookBtn');
  const subject = encodeURIComponent(`Заявка на бронирование: ${hotel.name}`);
  const body = encodeURIComponent(`Меня интересует номер ${hotel.name} (${hotel.tag}, ${hotel.country}).\n\nПожалуйста, свяжитесь со мной.`);
  bookButton.href = `mailto:zerofrankss@gmail.com?subject=${subject}&body=${body}`;

  renderHotelGallery(hotel);
  renderReviews(hotel);

  const reviewForm = document.getElementById('reviewForm');
  reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;
    const reviewer = form.reviewer.value.trim();
    const email = form.email.value.trim();
    const rating = Number(form.rating.value);
    const text = form.text.value.trim();

    if (!reviewer || !email || !rating || !text) {
      showToast('Заполните все поля перед отправкой.');
      return;
    }

    saveReview(hotel.slug, {
      name: reviewer,
      date: new Date().toISOString(),
      rating,
      text,
    });

    showToast('Спасибо за отзыв! Он появится на странице.');
    form.reset();
    renderReviews(hotel);
  });
}

window.addEventListener('DOMContentLoaded', initHotelPage);
