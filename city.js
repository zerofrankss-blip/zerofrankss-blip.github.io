const cities = {
  paris: {
    title: 'Париж',
    subtitle: 'Франция',
    description: 'Прогуляйтесь по набережной Сены, полюбуйтесь Эйфелевой башней и насладитесь атмосферой романтического города.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522098543979-ffc7f79d87f5?auto=format&fit=crop&w=1200&q=80',
        caption: 'Эйфелева башня на закате'
      },
      {
        url: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Парижские улочки и кафе'
      },
      {
        url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
        caption: 'Лувр и прогулки по музеям'
      }
    ]
  },
  dubai: {
    title: 'Дубай',
    subtitle: 'ОАЭ',
    description: 'Современный мегаполис с небоскрёбами, пустынными сафари и роскошным видом на залив.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Небоскрёбы Дубая и Бурдж-Халифа'
      },
      {
        url: 'https://images.unsplash.com/photo-1541447275212-021a612f459a?auto=format&fit=crop&w=1200&q=80',
        caption: 'Пляжи и современные отели'
      },
      {
        url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
        caption: 'Пустынное сафари и вечерние закаты'
      }
    ]
  },
  bangkok: {
    title: 'Бангкок',
    subtitle: 'Таиланд',
    description: 'Яркий город с храмами, рынками и тропическими садами — отличное место для новых впечатлений.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Храм Ват Арун на фоне реки'
      },
      {
        url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80',
        caption: 'Яркие улицы и ночной рынок'
      },
      {
        url: 'https://images.unsplash.com/photo-1516347243964-a2e5d545b7ca?auto=format&fit=crop&w=1200&q=80',
        caption: 'Современные кварталы и небоскрёбы'
      }
    ]
  },
  seville: {
    title: 'Севилья',
    subtitle: 'Испания',
    description: 'Исторический город с архитектурой Андалусии, красочными площадями и уютными двориками.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        caption: 'Площадь Испании и архитектурный стиль'
      },
      {
        url: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
        caption: 'Узкие улочки Севильи'
      },
      {
        url: 'https://images.unsplash.com/photo-1526187248789-91f6c7c48cee?auto=format&fit=crop&w=1200&q=80',
        caption: 'Старинные дворики и оранжереи'
      }
    ]
  },
  rome: {
    title: 'Рим',
    subtitle: 'Италия',
    description: 'Вечный город с древними руинами, уютными площадями и богатой кухней.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1526481280697-3fce5fec0f7d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Колизей и древняя архитектура'
      },
      {
        url: 'https://images.unsplash.com/photo-1508264165352-258a6a7c2c93?auto=format&fit=crop&w=1200&q=80',
        caption: 'Уютные римские улицы'
      },
      {
        url: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?auto=format&fit=crop&w=1200&q=80',
        caption: 'Фонтан Треви и вечерние огни'
      }
    ]
  },
  tokyo: {
    title: 'Токио',
    subtitle: 'Япония',
    description: 'Современный мегаполис с неоновыми улицами, древними храмами и уникальной культурой.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1508697014387-7ced0f04b737?auto=format&fit=crop&w=1200&q=80',
        caption: 'Яркий Токио ночью'
      },
      {
        url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
        caption: 'Современный городской пейзаж'
      },
      {
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
        caption: 'Храм в центре мегаполиса'
      }
    ]
  }
};

const cityTitle = document.getElementById('cityTitle');
const cityDescription = document.getElementById('cityDescription');
const cityGallery = document.getElementById('cityGallery');

function loadCityPage() {
  const params = new URLSearchParams(window.location.search);
  const cityKey = (params.get('city') || '').toLowerCase();
  const city = cities[cityKey];

  if (!city) {
    cityTitle.textContent = 'Город не найден';
    cityDescription.textContent = 'Выберите город на главной странице и откройте его снова.';
    document.title = 'Город не найден — RoomFinder';
    return;
  }

  cityTitle.textContent = `${city.title}, ${city.subtitle}`;
  cityDescription.textContent = city.description;
  document.title = `${city.title} — RoomFinder`;

  cityGallery.innerHTML = '';
  city.images.forEach((item) => {
    const galleryItem = document.createElement('article');
    galleryItem.className = 'gallery-item';
    galleryItem.style.backgroundImage = `url('${item.url}')`;
    galleryItem.innerHTML = `
      <div class="gallery-caption">
        <strong>${item.caption}</strong>
        <span>${city.title}</span>
      </div>
    `;
    cityGallery.appendChild(galleryItem);
  });
}

window.addEventListener('DOMContentLoaded', loadCityPage);
