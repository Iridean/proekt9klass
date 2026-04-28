/* =====================================================================
   ДАННЫЕ ПЛАНЕТ
   ===================================================================== */

const solarPlanets = [
  {
    id: 'earth',
    name: 'Земля',
    tagline: 'Третья планета от Солнца',
    image: 'planets/earth.jpg',
    description:
      'Земля — единственная известная планета во Вселенной, на которой существует жизнь. Около 71% её поверхности покрыто водой, а атмосфера из азота и кислорода защищает живые организмы от вредного излучения. Магнитное поле Земли отклоняет потоки заряженных частиц от Солнца, создавая полярные сияния. Её единственный спутник — Луна — стабилизирует наклон оси и вызывает приливы и отливы.',
    facts: [
      { label: 'Диаметр', value: '12 742 км' },
      { label: 'Расстояние от Солнца', value: '149,6 млн км' },
      { label: 'Длина года', value: '365,25 дней' },
      { label: 'Длина суток', value: '24 часа' },
      { label: 'Спутники', value: '1 — Луна' },
      { label: 'Средняя температура', value: '+15 °C' },
    ],
    rotationSeconds: 24,
    overviewSize: 130,
  },
  {
    id: 'mars',
    name: 'Марс',
    tagline: 'Красная планета',
    image: 'planets/mars.jpg',
    description:
      'Марс называют Красной планетой за характерный цвет поверхности, обусловленный оксидом железа — обычной ржавчиной — в его почве. Здесь находится самая высокая гора Солнечной системы — потухший вулкан Олимп высотой около 22 км, и самый длинный каньон — Долина Маринера протяжённостью более 4 000 км. Учёные обнаружили следы древних рек и озёр: в далёком прошлом на Марсе была жидкая вода. Сегодня он — главный кандидат на колонизацию человеком.',
    facts: [
      { label: 'Диаметр', value: '6 779 км' },
      { label: 'Расстояние от Солнца', value: '227,9 млн км' },
      { label: 'Длина года', value: '687 дней' },
      { label: 'Длина суток', value: '24 ч 37 мин' },
      { label: 'Спутники', value: '2 — Фобос, Деймос' },
      { label: 'Средняя температура', value: '−63 °C' },
    ],
    rotationSeconds: 26,
    overviewSize: 110,
  },
  {
    id: 'jupiter',
    name: 'Юпитер',
    tagline: 'Король Солнечной системы',
    image: 'planets/jupiter.jpg',
    description:
      'Юпитер — самая большая планета Солнечной системы. Это газовый гигант, состоящий преимущественно из водорода и гелия, и его масса превышает массу всех остальных планет вместе взятых в 2,5 раза. На Юпитере бушует Большое Красное Пятно — гигантский ураган, который существует уже более 350 лет и больше Земли по размеру. У Юпитера более 95 спутников, среди которых выделяются четыре «галилеевых» — Ио, Европа, Ганимед и Каллисто.',
    facts: [
      { label: 'Диаметр', value: '139 820 км' },
      { label: 'Расстояние от Солнца', value: '778,5 млн км' },
      { label: 'Длина года', value: '11,86 земных лет' },
      { label: 'Длина суток', value: '9 ч 56 мин' },
      { label: 'Спутники', value: 'Более 95' },
      { label: 'Средняя температура', value: '−145 °C' },
    ],
    rotationSeconds: 18,
    overviewSize: 190,
  },
  {
    id: 'saturn',
    name: 'Сатурн',
    tagline: 'Властелин колец',
    image: 'planets/saturn.jpg',
    description:
      'Сатурн знаменит своей удивительной системой колец, состоящей из миллиардов кусочков льда, камней и пыли — от пылинок до глыб размером с дом. Это второй по величине газовый гигант. Поразительный факт: средняя плотность Сатурна меньше плотности воды, и теоретически он мог бы плавать в гигантском океане. У Сатурна 146 известных спутников, среди которых выделяется Титан — единственный спутник в Солнечной системе с плотной атмосферой и метановыми озёрами.',
    facts: [
      { label: 'Диаметр (без колец)', value: '116 460 км' },
      { label: 'Расстояние от Солнца', value: '1,43 млрд км' },
      { label: 'Длина года', value: '29,5 земных лет' },
      { label: 'Длина суток', value: '10 ч 33 мин' },
      { label: 'Спутники', value: '146 (Титан, Энцелад…)' },
      { label: 'Средняя температура', value: '−178 °C' },
    ],
    rotationSeconds: 60,
    overviewSize: 210,
  },
];

const earthLikePlanets = [
  {
    id: 'kepler-452b',
    name: 'Kepler-452b',
    tagline: 'Двоюродная сестра Земли',
    image: 'planets/kepler-452b.jpg',
    description:
      'Kepler-452b — экзопланета, открытая телескопом «Кеплер» в 2015 году. Её часто называют «двоюродной сестрой Земли», потому что она вращается вокруг звезды, очень похожей на наше Солнце, и находится в обитаемой зоне — там, где может существовать жидкая вода. Год на Kepler-452b длится 385 земных дней — почти столько же, сколько у нас. Планета примерно в 1,5 раза больше Земли, и её гравитация может быть почти вдвое сильнее.',
    facts: [
      { label: 'Расстояние до Земли', value: '~1 400 световых лет' },
      { label: 'Созвездие', value: 'Лебедь' },
      { label: 'Радиус', value: '~1,5 радиуса Земли' },
      { label: 'Длина года', value: '385 земных дней' },
      { label: 'Тип звезды', value: 'G2 (как Солнце)' },
      { label: 'Год открытия', value: '2015' },
    ],
    rotationSeconds: 28,
    overviewSize: 130,
  },
  {
    id: 'proxima-b',
    name: 'Proxima Centauri b',
    tagline: 'Ближайшая экзопланета к Земле',
    image: 'planets/proxima-b.jpg',
    description:
      'Proxima Centauri b — самая близкая к нам экзопланета, открытая в 2016 году. Она вращается вокруг ближайшей к Солнцу звезды — красного карлика Проксима Центавра, всего в 4,24 светового года от нас. Планета находится в обитаемой зоне, где возможно существование жидкой воды. Однако из-за активности красного карлика её атмосфера может подвергаться сильному рентгеновскому и ультрафиолетовому излучению. Полёт к ней даже на самом быстром современном корабле занял бы десятки тысяч лет.',
    facts: [
      { label: 'Расстояние до Земли', value: '4,24 световых года' },
      { label: 'Созвездие', value: 'Центавр' },
      { label: 'Масса', value: '~1,17 массы Земли' },
      { label: 'Длина года', value: '11,2 земных дней' },
      { label: 'Тип звезды', value: 'Красный карлик (M5.5)' },
      { label: 'Год открытия', value: '2016' },
    ],
    rotationSeconds: 30,
    overviewSize: 120,
  },
  {
    id: 'trappist-1e',
    name: 'TRAPPIST-1e',
    tagline: 'Лучший кандидат на жизнь',
    image: 'planets/trappist-1e.jpg',
    description:
      'TRAPPIST-1e — одна из семи планет, обращающихся вокруг ультрахолодного карлика TRAPPIST-1 в 40 световых годах от нас. По размеру, массе и количеству получаемой энергии она ближе всего к Земле среди всех известных экзопланет. Учёные считают её одним из лучших кандидатов для поиска внеземной жизни: на ней может быть жидкая вода и подходящая атмосфера. Из-за близости к звезде планета, вероятно, повёрнута к ней одной стороной — там вечный день, а на другой стороне — вечная ночь.',
    facts: [
      { label: 'Расстояние до Земли', value: '~40 световых лет' },
      { label: 'Созвездие', value: 'Водолей' },
      { label: 'Радиус', value: '0,92 радиуса Земли' },
      { label: 'Длина года', value: '6,1 земных дней' },
      { label: 'Тип звезды', value: 'Ультрахолодный карлик' },
      { label: 'Год открытия', value: '2017' },
    ],
    rotationSeconds: 26,
    overviewSize: 125,
  },
  {
    id: 'kepler-186f',
    name: 'Kepler-186f',
    tagline: 'Первая планета размером с Землю в обитаемой зоне',
    image: 'planets/kepler-186f.jpg',
    description:
      'Kepler-186f стала первой подтверждённой экзопланетой размером с Землю, найденной в обитаемой зоне другой звезды. Она почти такого же размера, как наша планета, и получает примерно треть энергии, которую Земля получает от Солнца. Из-за того, что её звезда — красный карлик, свет на её поверхности был бы тусклее и краснее, чем на Земле. Если на ней есть растения, они, вероятно, имели бы не зелёный, а тёмно-красный или почти чёрный цвет, чтобы лучше поглощать свет.',
    facts: [
      { label: 'Расстояние до Земли', value: '~580 световых лет' },
      { label: 'Созвездие', value: 'Лебедь' },
      { label: 'Радиус', value: '1,11 радиуса Земли' },
      { label: 'Длина года', value: '130 земных дней' },
      { label: 'Тип звезды', value: 'Красный карлик (M1)' },
      { label: 'Год открытия', value: '2014' },
    ],
    rotationSeconds: 27,
    overviewSize: 135,
  },
];

/* =====================================================================
   СОСТОЯНИЕ ПРИЛОЖЕНИЯ
   ===================================================================== */

const state = {
  view: 'solar',          // 'solar' | 'earth-like'
  selectedId: null,       // id выбранной планеты или null
  isAnimating: false,     // блокировка кликов во время анимации
};

/* =====================================================================
   ЗВЁЗДНОЕ НЕБО
   ===================================================================== */

function renderStarfield() {
  const field = document.getElementById('starfield');
  const STAR_COUNT = 220;
  const fragment = document.createDocumentFragment();

  // Простой детерминированный псевдослучайный генератор, чтобы расположение
  // звёзд было одинаковым между обновлениями страницы.
  function mulberry32(seed) {
    return function () {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const rand = mulberry32(20260428);

  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    const size = rand() * 2.4 + 0.6;       // 0.6 – 3 px
    const opacity = rand() * 0.65 + 0.3;   // 0.3 – 0.95
    const duration = rand() * 5 + 3;       // 3 – 8 s
    const delay = rand() * 6;              // 0 – 6 s

    star.style.left = `${rand() * 100}%`;
    star.style.top = `${rand() * 100}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.setProperty('--star-base-opacity', opacity.toFixed(2));
    star.style.setProperty('--twinkle-duration', `${duration.toFixed(2)}s`);
    star.style.setProperty('--twinkle-delay', `${delay.toFixed(2)}s`);
    fragment.appendChild(star);
  }
  field.appendChild(fragment);
}

/* =====================================================================
   ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
   ===================================================================== */

function getCurrentPlanets() {
  return state.view === 'solar' ? solarPlanets : earthLikePlanets;
}

function getPlanetById(id) {
  return solarPlanets.concat(earthLikePlanets).find((p) => p.id === id);
}

/** Уменьшаем размеры планет на узких экранах, чтобы 4 шт. помещались красиво. */
function getResponsiveOrbSize(baseSize) {
  const w = window.innerWidth;
  if (w < 480) return Math.min(baseSize, 92);
  if (w < 768) return Math.min(baseSize, 130);
  if (w < 1024) return Math.min(baseSize, 170);
  return baseSize;
}

function getDetailOrbSize() {
  const w = window.innerWidth;
  if (w < 480) return 220;
  if (w < 768) return 280;
  if (w < 1024) return 340;
  if (w < 1280) return 380;
  return 440;
}

/* =====================================================================
   РЕНДЕР: РЯД ПЛАНЕТ (ОБЗОР)
   ===================================================================== */

function renderPlanetRow() {
  const row = document.getElementById('planet-row');
  row.innerHTML = '';

  const planets = getCurrentPlanets();

  planets.forEach((planet) => {
    const tile = document.createElement('div');
    tile.className = 'planet-tile';
    tile.setAttribute('role', 'listitem');

    const size = getResponsiveOrbSize(planet.overviewSize);

    // Кнопка-орб
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'orb-button';
    btn.setAttribute('aria-label', `Подробнее о планете ${planet.name}`);
    btn.dataset.planetId = planet.id;

    const orb = document.createElement('div');
    orb.className = 'planet-orb';
    orb.style.setProperty('--orb-size', `${size}px`);
    orb.style.boxShadow = `0 0 ${Math.round(size * 0.45)}px ${Math.round(
      size * 0.04,
    )}px rgba(95, 200, 255, 0.28)`;

    const img = document.createElement('img');
    img.src = planet.image;
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');
    img.draggable = false;
    img.style.setProperty('--spin-duration', `${planet.rotationSeconds}s`);
    orb.appendChild(img);

    const shadow = document.createElement('span');
    shadow.className = 'orb-shadow';
    shadow.setAttribute('aria-hidden', 'true');
    orb.appendChild(shadow);

    btn.appendChild(orb);

    btn.addEventListener('click', () => {
      if (state.isAnimating) return;
      openDetail(planet.id, orb);
    });

    // Подпись
    const label = document.createElement('div');
    label.className = 'planet-label';
    label.textContent = planet.name;

    tile.appendChild(label);
    tile.appendChild(btn);

    // Доп. кнопка под Землёй — переключение на землеподобные планеты
    if (state.view === 'solar' && planet.id === 'earth') {
      const extra = document.createElement('button');
      extra.type = 'button';
      extra.className = 'planet-extra-action';
      extra.innerHTML =
        '<span class="dot" aria-hidden="true"></span> Землеподобные планеты';
      extra.addEventListener('click', () => switchView('earth-like'));
      tile.appendChild(extra);
    }

    row.appendChild(tile);
  });

  // Кнопка возврата при отображении землеподобных
  const backRow = document.getElementById('back-to-solar');
  backRow.hidden = state.view !== 'earth-like';

  // Заголовок секции
  document.getElementById('overview-title').textContent =
    state.view === 'solar'
      ? 'Планеты Солнечной системы'
      : 'Землеподобные экзопланеты';
  document.getElementById('overview-sub').textContent =
    state.view === 'solar'
      ? 'Земля, Марс, Юпитер и Сатурн'
      : 'Реально существующие планеты у других звёзд';
}

/* =====================================================================
   РЕНДЕР: ДЕТАЛЬНЫЙ ВИД
   ===================================================================== */

function renderDetailContent(planet) {
  document.getElementById('detail-tagline').textContent = planet.tagline;
  document.getElementById('detail-name').textContent = planet.name;
  document.getElementById('detail-description').textContent =
    planet.description;

  const factsEl = document.getElementById('detail-facts');
  factsEl.innerHTML = '';
  planet.facts.forEach((f) => {
    const wrap = document.createElement('div');
    wrap.className = 'fact';
    const dt = document.createElement('dt');
    dt.textContent = f.label;
    const dd = document.createElement('dd');
    dd.textContent = f.value;
    wrap.appendChild(dt);
    wrap.appendChild(dd);
    factsEl.appendChild(wrap);
  });

  const orb = document.getElementById('detail-orb');
  const img = document.getElementById('detail-orb-img');
  const size = getDetailOrbSize();
  orb.style.setProperty('--orb-size', `${size}px`);
  orb.style.boxShadow = `0 0 ${Math.round(size * 0.5)}px ${Math.round(
    size * 0.05,
  )}px rgba(95, 200, 255, 0.32)`;
  img.src = planet.image;
  img.style.setProperty('--spin-duration', `${planet.rotationSeconds}s`);
}

/* =====================================================================
   ПЕРЕХОД: ОБЗОР → ДЕТАЛЬ (FLIP-анимация)
   ===================================================================== */

function openDetail(planetId, sourceOrbEl) {
  const planet = getPlanetById(planetId);
  if (!planet) return;

  state.isAnimating = true;
  state.selectedId = planetId;

  // 1) Запоминаем геометрию исходного орба
  const fromRect = sourceOrbEl.getBoundingClientRect();

  // 2) Подготавливаем содержимое детального вида
  renderDetailContent(planet);

  const overview = document.getElementById('overview');
  const detail = document.getElementById('detail');
  const targetOrb = document.getElementById('detail-orb');
  const info = document.getElementById('detail-info');

  // 3) Делаем детальный вид видимым (но мгновенно), чтобы измерить орб
  detail.hidden = false;
  detail.style.opacity = '0';

  // Принудительный reflow, чтобы получить актуальные размеры
  void targetOrb.offsetWidth;
  const toRect = targetOrb.getBoundingClientRect();

  // Если размеры ещё нулевые (бывает на медленных машинах) — берём fallback
  if (toRect.width === 0) {
    overview.hidden = true;
    detail.style.opacity = '';
    info.classList.remove('animate-in');
    void info.offsetWidth;
    info.classList.add('animate-in');
    state.isAnimating = false;
    return;
  }

  // 4) Скрываем обзор и показываем деталь
  overview.hidden = true;
  detail.style.opacity = '';

  // 5) Применяем FLIP: орб стартует от старой позиции и едет к новой
  const dx = fromRect.left + fromRect.width / 2 - (toRect.left + toRect.width / 2);
  const dy = fromRect.top + fromRect.height / 2 - (toRect.top + toRect.height / 2);
  const scale = fromRect.width / toRect.width;

  const animation = targetOrb.animate(
    [
      { transform: `translate(${dx}px, ${dy}px) scale(${scale})` },
      { transform: 'translate(0, 0) scale(1)' },
    ],
    {
      duration: 850,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'both',
    },
  );

  // 6) Запускаем появление текста
  info.classList.remove('animate-in');
  void info.offsetWidth; // перезапустить анимацию
  info.classList.add('animate-in');

  // 7) Прокручиваем к началу детального блока
  window.scrollTo({ top: 0, behavior: 'smooth' });

  animation.onfinish = () => {
    state.isAnimating = false;
  };
}

/* =====================================================================
   ПЕРЕХОД: ДЕТАЛЬ → ОБЗОР
   ===================================================================== */

function closeDetail() {
  if (state.isAnimating) return;

  const detail = document.getElementById('detail');
  const overview = document.getElementById('overview');
  const targetOrb = document.getElementById('detail-orb');
  const info = document.getElementById('detail-info');

  state.isAnimating = true;

  // Сначала прячем текст, чтобы не дёргался при свёртке планеты
  info.classList.remove('animate-in');

  // Покажем обзор «под» детальным видом, чтобы измерить итоговую позицию
  overview.hidden = false;

  const planetId = state.selectedId;
  const sourceOrbEl = document.querySelector(
    `.orb-button[data-planet-id="${planetId}"] .planet-orb`,
  );

  // Если плитки нет (например, переключили вид и вернулись), просто фейдим
  if (!sourceOrbEl) {
    detail.hidden = true;
    state.selectedId = null;
    state.isAnimating = false;
    return;
  }

  const toRect = sourceOrbEl.getBoundingClientRect();
  const fromRect = targetOrb.getBoundingClientRect();

  const dx = toRect.left + toRect.width / 2 - (fromRect.left + fromRect.width / 2);
  const dy = toRect.top + toRect.height / 2 - (fromRect.top + fromRect.height / 2);
  const scale = toRect.width / fromRect.width;

  // Скроем обзорный орб (исходную плитку), пока летит большая планета
  sourceOrbEl.style.opacity = '0';

  // Делаем фейд текста параллельно
  const infoAnim = info.animate(
    [
      { opacity: 1, transform: 'translateX(0)' },
      { opacity: 0, transform: 'translateX(-32px)' },
    ],
    { duration: 350, easing: 'ease-in', fill: 'forwards' },
  );

  const orbAnim = targetOrb.animate(
    [
      { transform: 'translate(0, 0) scale(1)' },
      { transform: `translate(${dx}px, ${dy}px) scale(${scale})` },
    ],
    {
      duration: 750,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'forwards',
    },
  );

  Promise.all([
    orbAnim.finished.catch(() => {}),
    infoAnim.finished.catch(() => {}),
  ]).then(() => {
    detail.hidden = true;
    targetOrb.getAnimations().forEach((a) => a.cancel());
    sourceOrbEl.style.opacity = '';
    state.selectedId = null;
    state.isAnimating = false;
  });
}

/* =====================================================================
   ПЕРЕКЛЮЧЕНИЕ ВИДОВ (СОЛНЕЧНАЯ / ЗЕМЛЕПОДОБНЫЕ)
   ===================================================================== */

function switchView(view) {
  if (state.view === view || state.isAnimating) return;
  state.view = view;
  state.selectedId = null;

  // Обновляем активный таб
  document.querySelectorAll('.tab').forEach((tab) => {
    const isActive = tab.dataset.view === view;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  // Если открыт детальный — закроем без анимации (планета может быть из другого набора)
  const detail = document.getElementById('detail');
  if (!detail.hidden) {
    detail.hidden = true;
  }
  document.getElementById('overview').hidden = false;

  // Перерисовываем ряд с лёгкой анимацией перепоявления
  const row = document.getElementById('planet-row');
  row.style.opacity = '0';
  row.style.transform = 'translateY(8px)';
  setTimeout(() => {
    renderPlanetRow();
    row.animate(
      [
        { opacity: 0, transform: 'translateY(8px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 450, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'both' },
    );
  }, 120);
}

/* =====================================================================
   ОБРАБОТКА КЛИКОВ
   ===================================================================== */

function bindEvents() {
  // Табы
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => switchView(tab.dataset.view));
  });

  // Кнопки "Назад"
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;
    const action = target.dataset.action;
    if (action === 'back-to-overview') closeDetail();
    if (action === 'back-to-solar') switchView('solar');
  });

  // Esc — закрывает деталь
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.selectedId) closeDetail();
  });

  // Перерисовать ряд при ресайзе (размеры орбов адаптивные)
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (!state.selectedId) renderPlanetRow();
    }, 150);
  });
}

/* =====================================================================
   СТАРТ
   ===================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderStarfield();
  renderPlanetRow();
  bindEvents();
});
