'use strict';

(function () {
  const BASE_ASSET = 'https://pre-mcsp.zed.com';

  const FALLBACK_DATA = {
    home: {
      hero: [
        {
          src: 'ima1.jpg',
          alt: 'Descubre las mejores experiencias Orange'
        },
        {
          src: 'ima2.jpg',
          alt: 'Beneficios exclusivos para clientes Orange'
        },
        {
          src: 'ima3.jpg',
          alt: 'Conéctate donde quieras con ofertas Orange'
        }
      ],
      discover: [
        { label: 'Lectura', image: `${BASE_ASSET}/assets/books_discover.png` },
        { label: 'Música', image: `${BASE_ASSET}/assets/music_discover.png` },
        { label: 'Deportes', image: `${BASE_ASSET}/assets/sports_discover.png` },
        { label: 'Vídeos', image: `${BASE_ASSET}/assets/videos_discover.png` },
        { label: 'Juegos', image: `${BASE_ASSET}/assets/games_discover.png` }
      ],
      recommendations: [
        {
          id: 'ekomics',
          title: 'E-Komics',
          image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/118/113/P00017C02770007/ekomics%202%20(2)_320.png'
        },
        {
          id: 'fit-life',
          title: 'Fit Life',
          image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/75/65/P00017C02770009/Pack%20fitlife_320_vs4_320.png'
        },
        {
          id: 'television-consciente',
          title: 'Televisión Consciente',
          image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/69/105/P00017C02770015/consiusTVNew_320.jpg'
        },
        {
          id: 'esportz365',
          title: 'Esportz365',
          image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/51/43/P00017C02770017/pack%20esportz365_320.png'
        }
      ],
      newsHighlights: [
        {
          title: 'Lector de prensa',
          image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/74/50/P00017C02770030/press%20reader_320.png'
        },
        {
          title: 'Kokoro KIDS',
          image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/106/101/P00017C02770014/kokoro%201_320.jpg'
        },
        {
          title: 'NBA League Pass',
          image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/121/77/P00017C02770031/Product_NBA%20LEAGUE%20PASS_landscape_320.jpg'
        },
        {
          title: 'Essentia',
          image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/85/72/P00017C02770037/essentia%202_320.jpg'
        }
      ],
      popular: [
        {
          id: 'conciertos-qello',
          title: 'Conciertos Qello',
          image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/54/43/P00017C02770032/quello%202_320.jpg'
        },
        {
          id: 'fight-tv',
          title: 'Fight TV',
          image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/83/78/P00017C02771039/figh%20tv%202_320.jpg'
        },
        {
          id: 'retro-gol',
          title: 'RETRO GOL',
          image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/100/83/P00017C02770039/RetroGol6_320.jpg'
        },
        {
          id: 'television-consciente',
          title: 'Televisión Consciente',
          image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/69/105/P00017C02770015/consiusTVNew_320.jpg'
        }
      ],
      services: [
        {
          label: 'Salud',
          image: `${BASE_ASSET}/assets/salud.png`
        },
        {
          label: 'Alarmas',
          image: `${BASE_ASSET}/assets/alarmas.png`
        },
        {
          label: 'Seguros',
          image: `${BASE_ASSET}/assets/seguros.png`
        },
        {
          label: 'Electricidad',
          image: `${BASE_ASSET}/assets/limpieza.png`
        }
      ]
    },
    recommendations: [
      {
        id: 'ekomics',
        title: 'E-Komics',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/118/113/P00017C02770007/ekomics%202%20(2)_320.png'
      },
      {
        id: 'fit-life',
        title: 'Fit Life',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/75/65/P00017C02770009/Pack%20fitlife_320_vs4_320.png'
      },
      {
        id: 'television-consciente',
        title: 'Televisión Consciente',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/69/105/P00017C02770015/consiusTVNew_320.jpg'
      },
      {
        id: 'esportz365',
        title: 'Esportz365',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/51/43/P00017C02770017/pack%20esportz365_320.png'
      },
      {
        id: 'sportlocker',
        title: 'Sportlocker',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/77/55/P00017C02770018/Pack%20sportlocker_320.png'
      },
      {
        id: 'lector-de-prensa',
        title: 'Lector de prensa',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/74/50/P00017C02770030/press%20reader_320.png'
      },
      {
        id: 'busuu',
        title: 'Busuu',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/76/77/P00017C02770033/Busuu_320.png'
      },
      {
        id: 'superfunbox',
        title: 'Superfunbox',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/52/121/P00017C02770034/Superfunbox_320.png'
      },
      {
        id: 'smile-learn',
        title: 'Smile & Learn',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/69/50/P00017C02770036/smile%20and%20leanr_320.jpg'
      },
      {
        id: 'hoopers-life',
        title: 'Hoopers Life',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/43/107/P00017C02770020/Pack%20hoopers_320.png'
      }
    ],
    news: [
      {
        id: 'lector-de-prensa',
        title: 'Lector de prensa',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/74/50/P00017C02770030/press%20reader_320.png'
      },
      {
        id: 'kokoro-kids',
        title: 'Kokoro KIDS',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/106/101/P00017C02770014/kokoro%201_320.jpg'
      },
      {
        id: 'nba-league-pass',
        title: 'NBA League Pass',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/121/77/P00017C02770031/Product_NBA%20LEAGUE%20PASS_landscape_320.jpg'
      },
      {
        id: 'essentia',
        title: 'Essentia',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/85/72/P00017C02770037/essentia%202_320.jpg'
      },
      {
        id: 'derbis-laliga',
        title: 'Derbis de LaLiga',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/117/113/P00017C02770040/LaLigaDerbies_320.jpg'
      },
      {
        id: 'sportlocker',
        title: 'Sportlocker',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/77/55/P00017C02770018/Pack%20sportlocker_320.png'
      },
      {
        id: 'footballers-lives',
        title: 'Footballers Lives',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/48/115/P00017C02770019/Pack%20footballers_320.png'
      },
      {
        id: 'hoopers-life',
        title: 'Hoopers Life',
        image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/43/107/P00017C02770020/Pack%20hoopers_320.png'
      }
    ],
    services: {
      state: 'soon',
      illustration: `${BASE_ASSET}/assets/soon.png`
    },
    bundles: {
      'ekomics': {
        id: 'ekomics',
        name: 'E-Komics',
        category: 'Packs',
        price: '3.3€',
        heroImage: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/118/113/P00017C02770007/ekomics%202%20(2)_320.png',
        description:
          'E-Komics ofrece una gran variedad de títulos de cómics locales y globales con la mejor experiencia de usuario, la interfaz de usuario más atractiva y funciones innovadoras como «Super Motion» y «Super Zoom».',
        recommendations: ['ekomics', 'fit-life', 'television-consciente', 'esportz365'],
        similar: [
          {
            title: 'LECTURA DIGITAL',
            image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/80/59/P00017C02770061/LECTURA%20DIGITAL_320.png'
          },
          {
            title: 'VEN Y DISFRUTA',
            image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/112/78/P00017C02770065/VEN%20Y%20DISFRUTA_320.png'
          },
          {
            title: 'LECTURA PREMIUM',
            image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/62/64/P00017C02770067/LECTURA%20PREMIUM_320.png'
          }
        ]
      },
      'fit-life': {
        id: 'fit-life',
        name: 'Fit Life',
        category: 'Packs',
        price: '3.3€',
        heroImage: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/75/65/P00017C02770009/Pack%20fitlife_320_vs4_320.png',
        description:
          'Espacio virtual para mejorar tu estado de ánimo, tu bienestar y ayudarte a estar en forma haciendo ejercicio en casa. Clases divididas en diversas categorías y entrenamientos completos impartidos por los mejores profesionales del Fitness.',
        recommendations: ['ekomics', 'fit-life', 'television-consciente', 'esportz365'],
        similar: [
          {
            title: 'SPORTS 4U',
            image: 'https://cdn4.zed.com/static/grap/BundleItem/Converted/81/70/P00017C02770062/SPORTS%204U_320.png'
          }
        ]
      }
    },
    redeem: {
      summary: {
        level: 'Gold',
        levelLabel: 'Nivel Gold',
        balance: 2150,
        currencyLabel: 'puntos',
        historyLabel: 'Historial',
        earnMoreLabel: 'Ganar más'
      },
      categories: ['Servicios Telco', 'Productos digitales', 'Sorteos'],
      defaultCategory: 'Sorteos',
      rewards: [
        {
          id: 'iphone-15-pro',
          title: 'iPhone 15 Pro Max',
          description: 'Smartphone Apple de última generación con cámara profesional y chip A17.',
          points: 50,
          unitLabel: 'por boleto',
          soldLabel: '1,247 boletos vendidos',
          drawLabel: 'Sorteo: 15 Oct 2025',
          image:
            'https://images.unsplash.com/photo-1695048131596-7f35cf97b989?auto=format&fit=crop&w=640&q=80',
          tier: 'Solo Oro',
          tierVariant: 'gold',
          category: 'Sorteos',
          minQuantity: 1,
          maxQuantity: 10
        },
        {
          id: 'apple-watch-series-9',
          title: 'Apple Watch Series 9',
          description: 'Reloj inteligente con GPS, seguimiento de salud y resistencia al agua.',
          points: 25,
          unitLabel: 'por boleto',
          soldLabel: '892 boletos vendidos',
          drawLabel: 'Sorteo: 20 Oct 2025',
          image:
            'https://images.unsplash.com/photo-1544965850-6f8aa17483d2?auto=format&fit=crop&w=640&q=80',
          tier: 'Silver+',
          tierVariant: 'silver',
          category: 'Sorteos',
          minQuantity: 1,
          maxQuantity: 10
        },
        {
          id: 'airpods-pro',
          title: 'AirPods Pro (2da Gen)',
          description: 'Auriculares con cancelación activa de ruido y audio espacial personalizable.',
          points: 15,
          unitLabel: 'por boleto',
          soldLabel: '1,104 boletos vendidos',
          drawLabel: 'Sorteo: 28 Oct 2025',
          image:
            'https://images.unsplash.com/photo-1524678714210-9917a6c619c0?auto=format&fit=crop&w=640&q=80',
          tier: 'Todos',
          tierVariant: 'all',
          category: 'Sorteos',
          minQuantity: 1,
          maxQuantity: 10
        },
        {
          id: 'extra-data-pack',
          title: 'Paquete de datos extra 5 GB',
          description: 'Añade 5 GB de navegación adicional a tu línea móvil por 30 días.',
          points: 280,
          unitLabel: 'canje inmediato',
          soldLabel: 'Disponible ahora',
          drawLabel: 'Entrega inmediata',
          image:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=80',
          tier: 'Todos',
          tierVariant: 'all',
          category: 'Servicios Telco',
          minQuantity: 1,
          maxQuantity: 2
        },
        {
          id: 'spotify-premium',
          title: 'Spotify Premium 3 meses',
          description: 'Disfruta de música sin anuncios y descargas offline durante tres meses.',
          points: 180,
          unitLabel: 'canje inmediato',
          soldLabel: 'Más de 3,500 canjes',
          drawLabel: 'Entrega por email en minutos',
          image:
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=640&q=80',
          tier: 'Solo Oro',
          tierVariant: 'gold',
          category: 'Productos digitales',
          minQuantity: 1,
          maxQuantity: 5
        }
      ]
    }
  };

  let data = null;

  const state = {
    view: 'home',
    bundleId: null,
    redeemCategory: null
  };

  let heroTimer = null;

  const mainContent = document.getElementById('main-content');
  const bottomButtons = document.querySelectorAll('.bottom-nav__btn');
  const header = document.querySelector('.app-header');
  const searchTrigger = document.querySelector('.bottom-nav__btn--search');
  const searchPanel = document.getElementById('footer-search-panel');
  const searchInput = searchPanel?.querySelector('input[type="search"]');
  const appRoot = document.querySelector('.app');
  const loyaltyBadge = header?.querySelector('.user-status-badge');
  const loyaltyPanel = document.getElementById('loyalty-panel');
  const loyaltyCard = loyaltyPanel?.querySelector('.loyalty-panel__card');
  let isSearchPanelOpen = false;
  let isLoyaltyPanelOpen = false;
  const menuDrawer = document.getElementById('menu-drawer');
  const menuDrawerPanel = menuDrawer?.querySelector('.menu-drawer__panel');
  const menuTriggers = Array.from(document.querySelectorAll('[data-action="open-menu"]'));
  const menuCloseButton = menuDrawer?.querySelector('.menu-drawer__close');
  const menuItems = menuDrawer ? Array.from(menuDrawer.querySelectorAll('.menu-drawer__item')) : [];
  let isMenuOpen = false;
  let lastMenuTrigger = null;
  const profileTrigger = document.querySelector('.bottom-nav__btn[data-route="profile"]');
  const profilePanel = document.getElementById('profile-panel');
  const profileCard = profilePanel?.querySelector('.profile-panel__card');
  let isProfilePanelOpen = false;

  function openSearchPanel() {
    if (!searchPanel || !searchTrigger || !appRoot) return;
    if (isSearchPanelOpen) return;
    closeLoyaltyPanel();
    closeMenuDrawer();
    closeProfilePanel();
    isSearchPanelOpen = true;
    appRoot.classList.add('is-search-open');
    searchTrigger.setAttribute('aria-expanded', 'true');
    searchTrigger.setAttribute('aria-label', 'Cerrar buscador');
    searchPanel.setAttribute('aria-hidden', 'false');
    document.addEventListener('click', handleDocumentClick, true);
    document.addEventListener('keydown', handleGlobalKeydown);
    requestAnimationFrame(() => {
      searchInput?.focus({ preventScroll: true });
    });
  }

  function closeSearchPanel(options = {}) {
    const { restoreFocus = false } = options;
    if (!isSearchPanelOpen) {
      return;
    }
    isSearchPanelOpen = false;
    document.removeEventListener('click', handleDocumentClick, true);
    document.removeEventListener('keydown', handleGlobalKeydown);
    if (!searchPanel || !searchTrigger || !appRoot) {
      return;
    }
    appRoot.classList.remove('is-search-open');
    searchTrigger.setAttribute('aria-expanded', 'false');
    searchTrigger.setAttribute('aria-label', 'Abrir buscador');
    searchPanel.setAttribute('aria-hidden', 'true');
    if (restoreFocus) {
      requestAnimationFrame(() => {
        searchTrigger.focus({ preventScroll: true });
      });
    }
  }

  function toggleSearchPanel(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (isSearchPanelOpen) {
      closeSearchPanel();
    } else {
      openSearchPanel();
    }
  }

  function handleDocumentClick(event) {
    if (!isSearchPanelOpen || !searchPanel || !searchTrigger) return;
    const target = event.target;
    if (searchPanel.contains(target) || searchTrigger.contains(target)) return;
    closeSearchPanel();
  }

  function handleGlobalKeydown(event) {
    if (!isSearchPanelOpen) return;
    if (event.key === 'Escape' || event.key === 'Esc') {
      closeSearchPanel({ restoreFocus: true });
    }
  }

  function openLoyaltyPanel() {
    if (!appRoot || !loyaltyBadge || !loyaltyPanel || !loyaltyCard) return;
    if (isLoyaltyPanelOpen) return;
    closeSearchPanel();
    closeMenuDrawer();
    closeProfilePanel();
    isLoyaltyPanelOpen = true;
    loyaltyBadge.setAttribute('aria-expanded', 'true');
    loyaltyPanel.setAttribute('aria-hidden', 'false');
    appRoot.classList.add('is-loyalty-open');
    document.addEventListener('keydown', handleLoyaltyKeydown);
    requestAnimationFrame(() => {
      loyaltyCard.focus({ preventScroll: true });
    });
  }

  function closeLoyaltyPanel(options = {}) {
    const { restoreFocus = false } = options;
    isLoyaltyPanelOpen = false;
    document.removeEventListener('keydown', handleLoyaltyKeydown);
    if (loyaltyPanel) {
      loyaltyPanel.setAttribute('aria-hidden', 'true');
    }
    if (appRoot) {
      appRoot.classList.remove('is-loyalty-open');
    }
    if (loyaltyBadge) {
      loyaltyBadge.setAttribute('aria-expanded', 'false');
    }
    if (restoreFocus && loyaltyBadge) {
      requestAnimationFrame(() => {
        loyaltyBadge.focus({ preventScroll: true });
      });
    }
  }

  function toggleLoyaltyPanel(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (isLoyaltyPanelOpen) {
      closeLoyaltyPanel({ restoreFocus: true });
    } else {
      openLoyaltyPanel();
    }
  }

  function handleLoyaltyPanelClick(event) {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.dataset.action === 'close-loyalty') {
      event.preventDefault();
      event.stopPropagation();
      const restoreFocus = !target.classList.contains('loyalty-panel__overlay');
      closeLoyaltyPanel({ restoreFocus });
      return;
    }
    if (loyaltyCard && !loyaltyCard.contains(target)) {
      event.stopPropagation();
      closeLoyaltyPanel();
    }
  }

  function handleLoyaltyKeydown(event) {
    if (!isLoyaltyPanelOpen) return;
    if (event.key === 'Escape' || event.key === 'Esc') {
      closeLoyaltyPanel({ restoreFocus: true });
    }
  }

  function openMenuDrawer(trigger) {
    if (!menuDrawer || !menuDrawerPanel || !appRoot) return;
    if (isMenuOpen) return;
    closeSearchPanel();
    closeLoyaltyPanel();
    closeProfilePanel();
    isMenuOpen = true;
    lastMenuTrigger = trigger ?? null;
    menuDrawer.removeAttribute('inert');
    appRoot.classList.add('is-menu-open');
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'true');
    }
    document.addEventListener('keydown', handleMenuKeydown);
    requestAnimationFrame(() => {
      if (menuDrawerPanel instanceof HTMLElement) {
        menuDrawerPanel.focus({ preventScroll: true });
      }
    });
  }

  function closeMenuDrawer(options = {}) {
    const { restoreFocus = false } = options;
    if (!menuDrawer || !appRoot) {
      isMenuOpen = false;
      return;
    }
    if (!isMenuOpen) return;
    isMenuOpen = false;
    const triggerToRestore = lastMenuTrigger;
    menuDrawer.setAttribute('inert', '');
    appRoot.classList.remove('is-menu-open');
    document.removeEventListener('keydown', handleMenuKeydown);
    if (triggerToRestore) {
      triggerToRestore.setAttribute('aria-expanded', 'false');
    }
    if (restoreFocus && triggerToRestore) {
      requestAnimationFrame(() => {
        triggerToRestore.focus({ preventScroll: true });
      });
    }
    if (!restoreFocus && triggerToRestore) {
      requestAnimationFrame(() => {
        triggerToRestore.blur?.();
      });
    }
    lastMenuTrigger = null;
  }

  function toggleMenuDrawer(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const trigger = event?.currentTarget instanceof Element ? event.currentTarget : null;
    if (isMenuOpen) {
      closeMenuDrawer({ restoreFocus: true });
    } else {
      openMenuDrawer(trigger);
    }
  }

  function handleMenuClick(event) {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.dataset.action === 'close-menu') {
      event.preventDefault();
      closeMenuDrawer({ restoreFocus: !target.classList.contains('menu-drawer__overlay') });
      return;
    }
    if (menuDrawerPanel && !menuDrawerPanel.contains(target)) {
      closeMenuDrawer();
    }
  }

  function handleMenuKeydown(event) {
    if (!isMenuOpen) return;
    if (event.key === 'Escape' || event.key === 'Esc') {
      closeMenuDrawer({ restoreFocus: true });
    }
    if (event.key === 'Tab') {
      const focusable = [menuDrawerPanel, menuCloseButton, ...menuItems].filter(Boolean);
      if (focusable.length === 0) return;
      const currentIndex = focusable.indexOf(document.activeElement);
      let nextIndex = currentIndex;
      if (event.shiftKey) {
        nextIndex = currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1;
      } else {
        nextIndex = currentIndex === focusable.length - 1 ? 0 : currentIndex + 1;
      }
      if (nextIndex !== currentIndex) {
        event.preventDefault();
        focusable[nextIndex].focus({ preventScroll: true });
      }
    }
  }

  function openProfilePanel() {
    if (!profilePanel || !profileCard || !appRoot) return;
    if (isProfilePanelOpen) return;
    closeSearchPanel();
    closeLoyaltyPanel();
    closeMenuDrawer();
    isProfilePanelOpen = true;
    profilePanel.removeAttribute('inert');
    appRoot.classList.add('is-profile-open');
    if (profileTrigger) {
      profileTrigger.setAttribute('aria-expanded', 'true');
    }
    document.addEventListener('keydown', handleProfileKeydown);
    requestAnimationFrame(() => {
      profileCard.focus({ preventScroll: true });
    });
  }

  function closeProfilePanel(options = {}) {
    const { restoreFocus = false } = options;
    if (!profilePanel || !appRoot) {
      isProfilePanelOpen = false;
      return;
    }
    if (!isProfilePanelOpen) return;
    isProfilePanelOpen = false;

    const finalizeClose = () => {
      profilePanel.setAttribute('inert', '');
      appRoot.classList.remove('is-profile-open');
      document.removeEventListener('keydown', handleProfileKeydown);
      if (profileTrigger) {
        profileTrigger.setAttribute('aria-expanded', 'false');
      }
    };

    const focusFallback = () => {
      if (profileTrigger) {
        profileTrigger.focus({ preventScroll: true });
        return;
      }
      if (appRoot instanceof HTMLElement) {
        const previousTabIndex = appRoot.getAttribute('tabindex');
        appRoot.setAttribute('tabindex', '-1');
        appRoot.focus({ preventScroll: true });
        if (previousTabIndex === null) {
          appRoot.removeAttribute('tabindex');
        } else {
          appRoot.setAttribute('tabindex', previousTabIndex);
        }
      }
    };

    const activeElement = document.activeElement;
    const isFocusInside =
      activeElement instanceof HTMLElement && profileCard?.contains(activeElement);

    if (isFocusInside) {
      requestAnimationFrame(() => {
        focusFallback();
        requestAnimationFrame(finalizeClose);
      });
      return;
    }

    finalizeClose();

    if (restoreFocus) {
      requestAnimationFrame(() => {
        focusFallback();
      });
    }
  }

  function toggleProfilePanel(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (isProfilePanelOpen) {
      closeProfilePanel({ restoreFocus: true });
    } else {
      openProfilePanel();
    }
  }

  function handleProfilePanelClick(event) {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.dataset.action === 'close-profile') {
      event.preventDefault();
      const restoreFocus = !target.classList.contains('profile-panel__overlay');
      closeProfilePanel({ restoreFocus });
      return;
    }
    if (profileCard && !profileCard.contains(target)) {
      closeProfilePanel();
    }
  }

  function handleProfileKeydown(event) {
    if (!isProfilePanelOpen) return;
    if (event.key === 'Escape' || event.key === 'Esc') {
      closeProfilePanel({ restoreFocus: true });
      return;
    }
    if (event.key === 'Tab') {
      const focusable = getProfileFocusable();
      if (focusable.length === 0) return;
      const currentIndex = focusable.indexOf(document.activeElement);
      let nextIndex = currentIndex;
      if (event.shiftKey) {
        nextIndex = currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1;
      } else {
        nextIndex = currentIndex === focusable.length - 1 ? 0 : currentIndex + 1;
      }
      if (nextIndex !== currentIndex) {
        event.preventDefault();
        focusable[nextIndex].focus({ preventScroll: true });
      }
    }
  }

  function getProfileFocusable() {
    if (!profileCard) return [];
    const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    return Array.from(profileCard.querySelectorAll(selector)).filter((el) => {
      if (!(el instanceof HTMLElement)) return false;
      return !el.hasAttribute('disabled') && el.tabIndex !== -1;
    });
  }

  if (loyaltyBadge && loyaltyPanel && loyaltyCard) {
    loyaltyBadge.addEventListener('click', toggleLoyaltyPanel);
    loyaltyPanel.addEventListener('click', handleLoyaltyPanelClick);
  }

  if (menuDrawer && menuDrawerPanel) {
    menuDrawer.addEventListener('click', handleMenuClick);
    menuTriggers.forEach((trigger) => {
      trigger.addEventListener('click', toggleMenuDrawer);
    });
    menuItems.forEach((item) => {
      item.addEventListener('click', () => {
        const targetRoute = item.getAttribute('data-menu');
        closeMenuDrawer({ restoreFocus: true });
        switch (targetRoute) {
          case 'home':
            setView('home');
            break;
          case 'games':
          case 'music':
          case 'sports':
            setView('recommendations');
            break;
          case 'videos':
            setView('news');
            break;
          case 'promotions':
            setView('redeem');
            break;
          case 'books':
          case 'packs':
            setView('services');
            break;
          case 'offers':
            setView('recommendations');
            break;
          case 'faqs':
          case 'contact':
            alert('Muy pronto encontrarás esta sección disponible en Zentra.');
            break;
          default:
            setView('home');
            break;
        }
      });
    });
  }

  if (profilePanel && profileCard) {
    profilePanel.addEventListener('click', handleProfilePanelClick);
  }

  setLoading();
  bootstrap();

  function setView(view, params = {}) {
    state.view = view;
    state.bundleId = params.bundleId ?? null;
    if (view === 'redeem') {
      const redeemData = (data && data.redeem) || FALLBACK_DATA.redeem;
      const defaultCategory =
        params.category ??
        state.redeemCategory ??
        redeemData?.defaultCategory ??
        redeemData?.categories?.[0] ??
        'Sorteos';
      state.redeemCategory = defaultCategory;
    }
    closeSearchPanel();
    closeLoyaltyPanel();
    closeMenuDrawer();
    closeProfilePanel();
    if (!data) return;
    render();
  }

  function render() {
    if (!data) {
      setLoading();
      return;
    }

    clearInterval(heroTimer);
    heroTimer = null;

    switch (state.view) {
      case 'home':
        renderHome();
        break;
      case 'recommendations':
        renderCollection('Recomendaciones', data.recommendations);
        break;
      case 'news':
        renderCollection('Novedades', data.news);
        break;
      case 'services':
        renderServices();
        break;
      case 'redeem':
        renderRedeemPoints();
        break;
      case 'detail':
        renderDetail(state.bundleId);
        break;
      default:
        renderHome();
        break;
    }

    updateNavigation();

    if (appRoot instanceof HTMLElement) {
      if (state.view === 'redeem') {
        appRoot.classList.add('is-redeem-view');
      } else {
        appRoot.classList.remove('is-redeem-view');
      }
    }
  }

  function renderHome() {
    const { hero, discover, recommendations, newsHighlights, popular, services } = data.home;

    mainContent.innerHTML = `
      <section class="section">
        <div class="hero-slider" aria-label="Promociones destacadas">
          ${hero
            .map(
              (slide, index) => `
                <article class="hero-slide ${index === 0 ? 'is-active' : ''}" data-index="${index}">
                  <img src="${slide.src}" alt="${slide.alt}" loading="lazy" />
                </article>
              `
            )
            .join('')}
          <div class="hero-dots">
            ${hero
              .map(
                (_, index) => `
                  <button type="button" class="${index === 0 ? 'is-active' : ''}" data-hero-dot="${index}" aria-label="Mostrar banner ${index + 1}"></button>
                `
              )
              .join('')}
          </div>
        </div>
      </section>

      <section class="section">
        <header class="section-header">
          <h2>Descubre</h2>
        </header>
        <div class="discover-grid" aria-label="Categorías destacadas">
          ${discover
            .map(
              (item) => `
                <article class="discover-card">
                  <div class="discover-card__img" style="background-image:url('${item.image}')"></div>
                  <span>${item.label}</span>
                </article>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="section">
        <header class="section-header">
          <h2>Recomendaciones</h2>
          <button class="link-button" data-route="recommendations">Ver más</button>
        </header>
        <div class="carousel-row" aria-label="Contenidos recomendados">
          ${recommendations.map(renderCarouselCard).join('')}
        </div>
      </section>

      <section class="section">
        <header class="section-header">
          <h2>Novedades</h2>
          <button class="link-button" data-route="news">Ver más</button>
        </header>
        <div class="grid-news" aria-label="Novedades del catálogo">
          ${newsHighlights
            .map(
              (item) => `
                <article class="news-card" data-bundle="${item.id ?? ''}">
                  <img src="${item.image}" alt="${item.title}" loading="lazy" />
                  <div>
                    <h3>${item.title}</h3>
                    <p>Descubre los nuevos lanzamientos y beneficios exclusivos.</p>
                  </div>
                </article>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="section">
        <header class="section-header">
          <h2>Populares</h2>
        </header>
        <div class="carousel-row" aria-label="Contenidos populares">
          ${popular.map(renderCarouselCard).join('')}
        </div>
      </section>

      <section class="section">
        <header class="section-header">
          <h2>Servicios complementarios</h2>
          <button class="link-button" data-route="services">Ver más</button>
        </header>
        <div class="services-grid">
          ${services
            .map(
              (service) => `
                <article class="service-card">
                  <img src="${service.image}" alt="${service.label}" loading="lazy" />
                  <span>${service.label}</span>
                </article>
              `
            )
            .join('')}
        </div>
      </section>
    `;

    bindHomeInteractions();
    if (Array.isArray(hero) && hero.length > 0) {
      startHeroSlider(hero.length);
    }
  }


  function renderCarouselCard(item) {
    return `
      <article class="carousel-card" data-bundle="${item.id ?? ''}">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <h3 class="card-title">${item.title}</h3>
      </article>
    `;
  }

  function renderCollection(title, items = []) {
    const hasItems = Array.isArray(items) && items.length > 0;
    const cards = hasItems
      ? items
          .map(
            (item) => `
              <article class="news-card" data-bundle="${item.id ?? ''}">
                <img src="${item.image}" alt="${item.title}" loading="lazy" />
                <div>
                  <h3>${item.title}</h3>
                  <p>Explora los detalles de este contenido y añádelo a tu cuenta.</p>
                </div>
              </article>
            `
          )
          .join('')
      : '';

    mainContent.innerHTML = `
      <a href="#" class="back-button" data-route="home">Inicio</a>
      <section class="section">
        <header class="section-header">
          <h2>${title}</h2>
        </header>
        ${
          hasItems
            ? `<div class="grid-news">${cards}</div>`
            : `
                <div class="empty-state">
                  <img src="https://cdn4.zed.com/static/grap/Theme/Original/80/105/P00011C02770001/ilustracion-comingsoon.png" alt="Contenido en preparación" loading="lazy" />
                  <h2>Estamos cargando nuevas experiencias</h2>
                  <p>Vuelve más tarde para descubrir contenidos dentro de esta categoría.</p>
                  <button class="primary-btn" data-route="home">Volver al inicio</button>
                </div>
              `
        }
      </section>
    `;

    bindCollectionInteractions();
  }

  function renderServices() {
    const illustration = data.services?.illustration ?? `${BASE_ASSET}/assets/soon.png`;

    mainContent.innerHTML = `
      <a href="#" class="back-button" data-route="home">Inicio</a>
      <section class="section">
        <div class="empty-state">
          <img src="${illustration}" alt="Próximamente" loading="lazy" />
          <h2>Próximamente</h2>
          <p>Estamos preparando un ecosistema de servicios complementarios para que puedas contratar nuevas soluciones directamente desde el portal.</p>
          <button class="primary-btn" data-route="home">Volver al inicio</button>
        </div>
      </section>
    `;

    bindGenericRoutes();
  }

  function renderRedeemPoints() {
    const redeem = (data && data.redeem) || FALLBACK_DATA.redeem;
    if (!redeem) {
      mainContent.innerHTML = `
        <a href="#" class="back-button" data-route="home">Inicio</a>
        <section class="section">
          <div class="empty-state">
            <h2>Estamos preparando la experiencia de canje</h2>
            <p>Vuelve en unos minutos para descubrir los beneficios que puedes canjear con tus puntos.</p>
            <button class="primary-btn" data-route="home">Volver al inicio</button>
          </div>
        </section>
      `;
      bindGenericRoutes();
      return;
    }

    const uniqueCategories = Array.from(new Set(redeem.categories ?? [])).filter(Boolean);
    const categories = ['Todos', ...uniqueCategories];
    let activeCategory = state.redeemCategory;
    if (!categories.includes(activeCategory ?? '')) {
      activeCategory = redeem.defaultCategory && categories.includes(redeem.defaultCategory)
        ? redeem.defaultCategory
        : categories[0];
      state.redeemCategory = activeCategory;
    }

    const rewards = (redeem.rewards ?? []).filter((reward) => {
      if (!reward) return false;
      if (!activeCategory || activeCategory === 'Todos') return true;
      return reward.category === activeCategory;
    });

    const heroLevelLabel = redeem.summary?.levelLabel ?? 'Mi nivel';
    const heroLevel = redeem.summary?.level ?? 'Bronce';
    const balance = redeem.summary?.balance ?? 0;
    const currencyLabel = redeem.summary?.currencyLabel ?? 'puntos';
    const historyLabel = redeem.summary?.historyLabel ?? 'Historial';
    const earnMoreLabel = redeem.summary?.earnMoreLabel ?? 'Ganar más';

    const rewardCards = rewards.length
      ? rewards
          .map((reward) => {
            const tierLabel = reward.tier ?? '';
            const tierVariant = reward.tierVariant ?? 'all';
            const minQuantity = Number.isFinite(reward.minQuantity) ? reward.minQuantity : 1;
            const maxQuantity = Number.isFinite(reward.maxQuantity) ? reward.maxQuantity : Math.max(minQuantity, 10);
            const ctaLabel = reward.category === 'Sorteos' ? 'Comprar boletos' : 'Canjear beneficio';
            return `
              <article class="redeem-card" data-category="${reward.category ?? ''}">
                <div class="redeem-card__media">
                  <img src="${reward.image}" alt="${reward.title}" loading="lazy" />
                  ${tierLabel ? `<span class="redeem-card__tier redeem-card__tier--${tierVariant}">${tierLabel}</span>` : ''}
                </div>
                <div class="redeem-card__body">
                  <h3>${reward.title}</h3>
                  <p class="redeem-card__description">${reward.description ?? ''}</p>
                  <p class="redeem-card__points">
                    <span class="redeem-card__points-value">${reward.points} puntos</span>
                    <span class="redeem-card__points-unit">${reward.unitLabel ?? ''}</span>
                  </p>
                  <p class="redeem-card__meta">${reward.soldLabel ?? ''}</p>
                  <p class="redeem-card__meta">${reward.drawLabel ?? ''}</p>
                  <div class="redeem-card__quantity" data-quantity="${reward.id}" data-min="${minQuantity}" data-max="${maxQuantity}">
                    <button type="button" class="redeem-quantity-btn" data-quantity-control="decrease" data-target="${reward.id}" aria-label="Reducir cantidad">
                      <span aria-hidden="true">−</span>
                    </button>
                    <span class="redeem-quantity-value" data-quantity-value aria-live="polite">${minQuantity}</span>
                    <button type="button" class="redeem-quantity-btn" data-quantity-control="increase" data-target="${reward.id}" aria-label="Incrementar cantidad">
                      <span aria-hidden="true">+</span>
                    </button>
                  </div>
                  <button type="button" class="primary-btn redeem-card__cta" data-action="submit-redeem" data-reward-id="${reward.id}" data-reward-name="${reward.title}" data-reward-points="${reward.points}">
                    ${ctaLabel}
                  </button>
                </div>
              </article>
            `;
          })
          .join('')
      : `
          <div class="empty-state">
            <h3>No hay beneficios disponibles en esta categoría</h3>
            <p>Selecciona otra categoría para continuar canjeando tus puntos.</p>
          </div>
        `;

    mainContent.innerHTML = `
      <div class="redeem-page">
        <a href="#" class="back-button" data-route="home">Inicio</a>
        <section class="redeem-summary" aria-labelledby="redeem-summary-title">
          <header class="redeem-summary__header">
            <div>
              <p class="redeem-summary__eyebrow">${heroLevelLabel}</p>
              <h1 id="redeem-summary-title">Canje de puntos</h1>
            </div>
            <div class="redeem-summary__balance" aria-live="polite">
              <span class="redeem-summary__balance-value">${balance}</span>
              <span class="redeem-summary__balance-label">${currencyLabel}</span>
            </div>
          </header>
          <div class="redeem-summary__meta">
            <span class="redeem-summary__level">${heroLevel}</span>
            <div class="redeem-summary__actions">
              <button type="button" class="redeem-summary__pill" data-action="open-history">${historyLabel}</button>
              <button type="button" class="redeem-summary__pill" data-action="open-earn-more">${earnMoreLabel}</button>
            </div>
          </div>
          <p class="redeem-summary__caption">Selecciona un beneficio y canjea tus puntos en segundos.</p>
        </section>

        <section class="redeem-categories" aria-label="Categorías de canje">
          <div class="redeem-categories__list" role="list">
            ${categories
              .map((category) => {
                const isActive = category === activeCategory;
                return `
                  <button type="button" role="listitem" class="redeem-category-btn${
                    isActive ? ' is-active' : ''
                  }" data-redeem-category="${category}" aria-pressed="${isActive ? 'true' : 'false'}">
                    ${category}
                  </button>
                `;
              })
              .join('')}
          </div>
        </section>

        <section class="redeem-grid" aria-label="Beneficios disponibles">
          ${rewardCards}
        </section>
      </div>
    `;

    bindRedeemPage(redeem);
  }

  function bindRedeemPage(redeem) {
    bindGenericRoutes();
    const categoryButtons = mainContent.querySelectorAll('[data-redeem-category]');
    categoryButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextCategory = btn.getAttribute('data-redeem-category');
        if (!nextCategory) return;
        if (state.redeemCategory === nextCategory) return;
        state.redeemCategory = nextCategory;
        renderRedeemPoints();
      });
    });

    const quantityControls = mainContent.querySelectorAll('[data-quantity-control]');
    quantityControls.forEach((control) => {
      control.addEventListener('click', () => {
        const target = control.getAttribute('data-target');
        if (!target) return;
        const delta = control.getAttribute('data-quantity-control') === 'increase' ? 1 : -1;
        adjustRedeemQuantity(target, delta);
      });
    });

    syncRedeemQuantities();

    const redeemButtons = mainContent.querySelectorAll('[data-action="submit-redeem"]');
    redeemButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const rewardId = button.getAttribute('data-reward-id');
        const reward = (redeem.rewards ?? []).find((item) => item.id === rewardId);
        const quantityWrapper = mainContent.querySelector(`[data-quantity="${rewardId}"]`);
        const valueEl = quantityWrapper?.querySelector('[data-quantity-value]');
        const quantity = Number(valueEl?.textContent ?? 1);
        const rewardName = reward?.title ?? button.getAttribute('data-reward-name') ?? 'beneficio';
        const pointsPerUnit = Number(reward?.points ?? button.getAttribute('data-reward-points') ?? 0);
        const totalPoints = pointsPerUnit * quantity;
        alert(`Canjearías ${quantity} ${quantity === 1 ? 'unidad' : 'unidades'} de "${rewardName}" por ${totalPoints} puntos. Esta demo no procesa el canje real.`);
      });
    });

    const summaryActions = mainContent.querySelectorAll('.redeem-summary__pill');
    summaryActions.forEach((pill) => {
      pill.addEventListener('click', () => {
        alert('Esta sección estará disponible pronto en Zentra.');
      });
    });
  }

  function adjustRedeemQuantity(target, delta = 0) {
    if (!target) return;
    const wrapper = mainContent.querySelector(`[data-quantity="${target}"]`);
    if (!wrapper) return;
    const valueEl = wrapper.querySelector('[data-quantity-value]');
    if (!valueEl) return;
    const min = Number(wrapper.getAttribute('data-min') ?? 1);
    const max = Number(wrapper.getAttribute('data-max') ?? min);
    const current = Number(valueEl.textContent ?? min);
    const next = Math.min(max, Math.max(min, current + delta));
    valueEl.textContent = String(next);
    const decreaseBtn = wrapper.querySelector('[data-quantity-control="decrease"]');
    const increaseBtn = wrapper.querySelector('[data-quantity-control="increase"]');
    if (decreaseBtn instanceof HTMLButtonElement) {
      decreaseBtn.disabled = next <= min;
    }
    if (increaseBtn instanceof HTMLButtonElement) {
      increaseBtn.disabled = next >= max;
    }
  }

  function syncRedeemQuantities() {
    const wrappers = mainContent.querySelectorAll('[data-quantity]');
    wrappers.forEach((wrapper) => {
      const target = wrapper.getAttribute('data-quantity');
      if (target) {
        adjustRedeemQuantity(target, 0);
      }
    });
  }

  function renderDetail(bundleId) {
    const bundle = data.bundles[bundleId];
    if (!bundle) {
      renderHome();
      return;
    }

    const recommendationCards = (bundle.recommendations ?? [])
      .map((id) => getItemCard(id))
      .filter(Boolean)
      .map(renderCarouselCard)
      .join('');

    const similarCards = (bundle.similar ?? [])
      .map(
        (item) => `
          <article class="carousel-card">
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
            <h3 class="card-title">${item.title}</h3>
          </article>
        `
      )
      .join('');

    mainContent.innerHTML = `
      <a href="#" class="back-button" data-route="home">Inicio</a>
      <nav class="breadcrumb" aria-label="Ruta de navegación">
        <span>Marketplace</span>
        <span>${bundle.category}</span>
        <span>${bundle.name}</span>
      </nav>

      <section class="detail-view">
        <div class="detail-hero">
          <img src="${bundle.heroImage}" alt="${bundle.name}" loading="lazy" />
        </div>
        <div class="detail-info">
          <h1>${bundle.name}</h1>
          <p class="detail-price">${bundle.price}</p>
          <div class="detail-actions">
            <div class="notice">Para realizar una compra o añadir al carrito, necesitas iniciar sesión.</div>
            <button class="primary-btn">Iniciar sesión</button>
            <button class="secondary-btn" data-action="toggle-description">Mostrar más</button>
            <p class="detail-description" data-expanded="false">${bundle.description}</p>
          </div>
        </div>
      </section>

      ${
        recommendationCards
          ? `
              <section class="section">
                <header class="section-header">
                  <h2>Recomendaciones</h2>
                </header>
                <div class="carousel-row">
                  ${recommendationCards}
                </div>
              </section>
            `
          : ''
      }

      ${
        similarCards
          ? `
              <section class="section">
                <header class="section-header">
                  <h2>Packs similares</h2>
                </header>
                <div class="carousel-row">
                  ${similarCards}
                </div>
              </section>
            `
          : ''
      }
    `;

    bindDetailInteractions();
  }

  function bindHomeInteractions() {
    mainContent.querySelectorAll('[data-route]').forEach((el) => {
      el.addEventListener('click', (event) => {
        event.preventDefault();
        const route = el.getAttribute('data-route');
        if (route === 'recommendations') {
          setView('recommendations');
        } else if (route === 'news') {
          setView('news');
        } else if (route === 'services') {
          setView('services');
        } else if (route === 'home') {
          setView('home');
        }
      });
    });

    mainContent.querySelectorAll('[data-bundle]').forEach((el) => {
      el.addEventListener('click', () => {
        const bundle = el.getAttribute('data-bundle');
        openBundle(bundle);
      });
    });
  }

  function bindCollectionInteractions() {
    bindGenericRoutes();
    mainContent.querySelectorAll('[data-bundle]').forEach((el) => {
      el.addEventListener('click', () => {
        const bundle = el.getAttribute('data-bundle');
        openBundle(bundle);
      });
    });
  }

  function bindDetailInteractions() {
    bindGenericRoutes();
    mainContent.querySelectorAll('[data-action="toggle-description"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const description = mainContent.querySelector('.detail-description');
        if (!description) return;
        const isExpanded = description.getAttribute('data-expanded') === 'true';
        description.setAttribute('data-expanded', String(!isExpanded));
        btn.textContent = isExpanded ? 'Mostrar más' : 'Mostrar menos';
      });
    });

    mainContent.querySelectorAll('[data-bundle]').forEach((el) => {
      el.addEventListener('click', () => {
        const bundle = el.getAttribute('data-bundle');
        openBundle(bundle);
      });
    });
  }

  function bindGenericRoutes() {
    mainContent.querySelectorAll('[data-route]').forEach((el) => {
      el.addEventListener('click', (event) => {
        event.preventDefault();
        const route = el.getAttribute('data-route');
        if (route === 'home') {
          setView('home');
        }
      });
    });
  }

  function openBundle(bundle) {
    if (!bundle) return;
    if (data?.bundles?.[bundle]) {
      setView('detail', { bundleId: bundle });
    } else {
      alert('Estamos preparando la ficha de este contenido.');
    }
  }

  function startHeroSlider(totalSlides) {
    const slides = Array.from(mainContent.querySelectorAll('.hero-slide'));
    const dots = Array.from(mainContent.querySelectorAll('[data-hero-dot]'));
    if (slides.length <= 1) return;

    let index = 0;
    const applyState = (next) => {
      slides.forEach((slide) => slide.classList.remove('is-active'));
      dots.forEach((dot) => dot.classList.remove('is-active'));
      slides[next]?.classList.add('is-active');
      dots[next]?.classList.add('is-active');
    };

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const next = Number(dot.getAttribute('data-hero-dot'));
        index = next;
        applyState(index);
      });
    });

    heroTimer = setInterval(() => {
      index = (index + 1) % totalSlides;
      applyState(index);
    }, 4500);
  }

  function updateNavigation() {
    bottomButtons.forEach((btn) => btn.classList.remove('is-active'));
    const mapping = {
      home: 'home',
      recommendations: 'discover',
      news: 'discover',
      services: 'discover',
      redeem: 'discover',
      detail: 'discover'
    };
    const activeRoute = mapping[state.view] ?? 'home';
    const activeButton = Array.from(bottomButtons).find(
      (btn) => btn.getAttribute('data-route') === activeRoute
    );
    if (activeButton) {
      activeButton.classList.add('is-active');
    }
  }

  async function bootstrap() {
    try {
      const response = await fetch('data/catalog.json', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`Respuesta ${response.status}`);
      }
      const json = await response.json();
      data = {
        ...json,
        recommendations: json.collections?.recommendations ?? [],
        news: json.collections?.news ?? []
      };
    } catch (error) {
      console.error('No se pudo cargar el catálogo dinámico de Zentra', error);
      data = FALLBACK_DATA;
      setFallbackMessage();
    }

    const redeemConfig = (data && data.redeem) || FALLBACK_DATA.redeem;
    if (redeemConfig) {
      state.redeemCategory = state.redeemCategory ?? redeemConfig.defaultCategory ?? redeemConfig.categories?.[0] ?? 'Sorteos';
    }

    render();
  }

  function setLoading() {
    mainContent.innerHTML = `
      <div class="loading-state" role="status" aria-live="polite">
        <span class="loading-spinner" aria-hidden="true"></span>
        <p>Cargando catálogo Zentra…</p>
      </div>
    `;
  }

  function setFallbackMessage() {
    const noticeId = 'fallback-notice';
    if (document.getElementById(noticeId)) return;
    const banner = document.createElement('div');
    banner.id = noticeId;
    banner.className = 'fallback-banner';
    banner.innerHTML = `
      <strong>Modo demo:</strong> No se pudo cargar el catálogo actualizado. Estás viendo datos estáticos para la maqueta.
      <button type="button" aria-label="Cerrar aviso">×</button>
    `;
    banner.querySelector('button').addEventListener('click', () => {
      banner.remove();
    });
    document.body.prepend(banner);
  }

  function getItemCard(id) {
    if (!id || !data) return null;
    const pools = [
      data.home?.recommendations ?? [],
      data.home?.popular ?? [],
      data.recommendations ?? [],
      data.news ?? [],
      data.home?.newsHighlights ?? []
    ];

    for (const collection of pools) {
      const match = collection.find((item) => item.id === id);
      if (match) return match;
    }

    return null;
  }

  bottomButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      if (btn.dataset.action === 'open-menu') {
        return;
      }
      if (btn.dataset.action === 'toggle-search') {
        toggleSearchPanel(event);
        return;
      }
      if (btn.dataset.action === 'open-profile') {
        toggleProfilePanel(event);
        return;
      }
      closeSearchPanel();
      closeLoyaltyPanel();
      closeMenuDrawer();
  closeProfilePanel();
      const route = btn.getAttribute('data-route');
      if (route === 'home') {
        setView('home');
      } else if (route === 'discover') {
        setView('recommendations');
      } else if (route === 'rewards') {
        setView('redeem');
      } else if (route === 'cart') {
        alert('El carrito está vacío. Inicia sesión para añadir contenidos.');
      } else if (route === 'profile') {
        toggleProfilePanel(event);
      }
    });
  });

  // render lifecycle controlled by bootstrap
})();
