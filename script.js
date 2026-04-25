const countryButtons = document.getElementById('countryButtons');
const hotelCards = document.getElementById('hotelCards');
const contactForm = document.getElementById('contactForm');

const countries = ['Все страны', ...new Set(hotels.map((hotel) => hotel.country))];
let activeCountry = 'Все страны';

function init() {
  createCountryButtons();
  renderHotels();
  attachBookingListeners();
  attachContactListener();
}

window.addEventListener('DOMContentLoaded', init);

function createCountryButtons() {
  countryButtons.innerHTML = '';
  countries.forEach((country) => {
    const button = document.createElement('button');
    button.textContent = country;
    button.className = 'country-button';
    if (country === activeCountry) {
      button.classList.add('active');
    }
    button.addEventListener('click', () => {
      activeCountry = country;
      updateButtons();
      renderHotels();
    });
    countryButtons.append(button);
  });
}

function attachBookingListeners() {
  hotelCards.addEventListener('click', (event) => {
    const button = event.target.closest('.button.secondary');
    if (!button) {
      return;
    }
    const card = button.closest('.card');
    const hotelName = card?.querySelector('h4')?.textContent || 'номер';
    showToast(`Оплата для ${hotelName} прошла успешно! Спасибо за бронирование.`);
  });
}

async function attachContactListener() {
  contactForm?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const ajaxUrl = `${contactForm.action.replace(/\/$/, '')}/ajax`;

    try {
      const response = await fetch(ajaxUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch {
        result = null;
      }

      if (!result || result.success === true || result.success === 'true') {
        showToast('Заявка успешно отправлена. Спасибо!');
        contactForm.reset();
        return;
      }

      showToast('Заявка отправлена. Спасибо!');
      contactForm.reset();
    } catch (error) {
      console.error('AJAX отправка не прошла:', error);
      const name = formData.get('name') || 'Клиент';
      const email = formData.get('email') || '';
      const location = formData.get('location') || '';
      const subject = encodeURIComponent(`Заявка с сайта RoomFinder от ${name}`);
      const body = encodeURIComponent(
        `Имя: ${name}\nE-mail: ${email}\nСтрана или город: ${location}\n\nСообщение отправлено через сайт RoomFinder.`
      );
      window.location.href = `mailto:zerofrankss@gmail.com?subject=${subject}&body=${body}`;
      showToast('Открывается почтовый клиент для отправки заявки.');
    }
  });
}

function updateButtons() {
  const buttons = document.querySelectorAll('.country-button');
  buttons.forEach((button) => {
    button.classList.toggle('active', button.textContent === activeCountry);
  });
}

function renderHotels() {
  hotelCards.innerHTML = '';
  const filteredHotels = hotels.filter((hotel) => {
    return activeCountry === 'Все страны' || hotel.country === activeCountry;
  });

  if (!filteredHotels.length) {
    hotelCards.innerHTML = '<p>Нет доступных номеров для выбранной страны.</p>';
    return;
  }

  filteredHotels.forEach((hotel) => {
    const cardLink = document.createElement('a');
    cardLink.href = `hotel.html?hotel=${hotel.slug}`;
    cardLink.className = 'hotel-card-link';
    cardLink.innerHTML = `
      <article class="card">
        <div class="hotel-image" style="background-image: url('${hotel.image}');"></div>
        <div class="hotel-title">
          <div>
            <h4>${hotel.name}</h4>
            <span class="hotel-city">${hotel.tag}</span>
            <span class="hotel-location">${hotel.country}</span>
          </div>
        </div>
        <p>${hotel.description}</p>
        <div class="hotel-meta">
          <span>${hotel.guests}</span>
          <span>Рейтинг ${hotel.rating}</span>
          <span class="hotel-price">${hotel.price} ₽/ночь</span>
        </div>
        <span class="button secondary card-button">Посмотреть</span>
      </article>
    `;
    hotelCards.append(cardLink);
  });
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.append(toast);
  setTimeout(() => toast.remove(), 3600);
}
