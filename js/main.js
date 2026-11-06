/**
 * ========================================================
 * FRATTI CAFETERIA — APLICATIVO INTERATIVO & EFEITOS
 * ========================================================
 */

(function () {
  'use strict';

  /* ========================================================
     1. BANCO DE DADOS DO CARDÁPIO & PRODUTOS (COM NOVAS FOTOS)
     ======================================================== */
  const MENU_DATABASE = [
    // --- Cafés Quentes ---
    {
      id: 'espresso-classico',
      name: 'Espresso Clássico Microlote',
      category: 'quentes',
      price: 7.50,
      image: 'img/espresso_single.jpg',
      tasteNotes: 'Notas de chocolate amargo & avelã',
      desc: 'Extração perfeita sob 9 bars de pressão. Grãos 100% Arábica do Cerrado Mineiro, com crema densa e aveludada.',
      tags: ['vegano', 'sem-gluten', 'destaque'],
      dietLabels: ['Vegano', 'Sem Glúten'],
      rating: 4.9
    },
    {
      id: 'cappuccino-italiano',
      name: 'Cappuccino Italiano Fratti',
      category: 'quentes',
      price: 12.90,
      image: 'img/cappuccino_art.jpg',
      tasteNotes: 'Toque suave de canela & latte art',
      desc: 'Equilíbrio harmonioso entre espresso intenso, leite vaporizado e espuma cremosa em partes iguais.',
      tags: ['destaque'],
      dietLabels: ['Mais Pedido'],
      rating: 5.0
    },
    {
      id: 'flat-white',
      name: 'Flat White Aveludado',
      category: 'quentes',
      price: 13.50,
      image: 'img/flat_white.jpg',
      tasteNotes: 'Microespuma sedosa & doçura natural',
      desc: 'Dose dupla de ristretto coberta por uma camada fina e brilhante de microespuma de leite integral.',
      tags: ['destaque'],
      dietLabels: ['Especialidade'],
      rating: 4.8
    },
    {
      id: 'mocha-belga',
      name: 'Mocha Chocolate Belga',
      category: 'quentes',
      price: 14.90,
      image: 'img/latte_close.jpg',
      tasteNotes: 'Cacau 70% & espresso encorpado',
      desc: 'Combinação luxuosa de chocolate nobre derretido, café espresso recém-extraído e chantilly fresco.',
      tags: [],
      dietLabels: ['Doce'],
      rating: 4.9
    },

    // --- Gelados & Especiais ---
    {
      id: 'iced-caramel',
      name: 'Iced Caramel Macchiato',
      category: 'gelados',
      price: 15.90,
      image: 'img/iced_caramel.jpg',
      tasteNotes: 'Caramelo salgado caseiro & gelo cristalino',
      desc: 'Camadas visuais elegantes de leite frio batido, xarope de baunilha, espresso flutuante e fio de caramelo.',
      tags: ['destaque'],
      dietLabels: ['Refrescante', 'Mais Pedido'],
      rating: 5.0
    },
    {
      id: 'cold-brew-tonica',
      name: 'Cold Brew Tônica & Laranja',
      category: 'gelados',
      price: 14.50,
      image: 'img/cold_brew.jpg',
      tasteNotes: 'Cítrico brilhante & efervescência',
      desc: 'Café infusionado a frio por 18 horas, servido com água tônica premium, gelo artesanal e rodela de laranja.',
      tags: ['vegano', 'sem-gluten', 'sem-lactose'],
      dietLabels: ['Vegano', 'Sem Lactose'],
      rating: 4.9
    },
    {
      id: 'matcha-latte',
      name: 'Iced Matcha Latte Japonês',
      category: 'gelados',
      price: 16.00,
      image: 'img/matcha_latte.jpg',
      tasteNotes: 'Matcha cerimonial & leite de aveia',
      desc: 'Bebida antioxidante japonesa de sabor herbal elegante e doçura delicada sobre cubos de gelo.',
      tags: ['vegano', 'sem-lactose'],
      dietLabels: ['Vegano', 'Sem Lactose'],
      rating: 4.8
    },
    {
      id: 'affogato-fratti',
      name: 'Affogato al Caffè Artesanal',
      category: 'gelados',
      price: 13.00,
      image: 'img/steaming.jpg',
      tasteNotes: 'Sorvete de fava de baunilha & espresso fumegante',
      desc: 'A clássica sobremesa italiana: uma bola generosa de gelato de baunilha afogada em shot duplo de café.',
      tags: ['sem-gluten'],
      dietLabels: ['Sobremesa'],
      rating: 4.9
    },

    // --- Pães & Salgados ---
    {
      id: 'croissant-frances',
      name: 'Croissant Francês de Manteiga',
      category: 'salgados',
      price: 11.50,
      image: 'img/croissant.jpg',
      tasteNotes: 'Folhado dourado & miolo alveolado',
      desc: 'Receita tradicional francesa com fermentação lenta de 36 horas e pura manteiga nacional selecionada.',
      tags: ['destaque'],
      dietLabels: ['Fornada Quente'],
      rating: 4.9
    },
    {
      id: 'pao-de-queijo',
      name: 'Pão de Queijo da Canastra',
      category: 'salgados',
      price: 8.90,
      image: 'img/pao_de_queijo.jpg',
      tasteNotes: 'Queijo Canastra curado & crosta crocante',
      desc: 'Porção com 4 unidades assadas na hora, feitas com polvilho artesanal e queijo meia cura autêntico.',
      tags: ['sem-gluten'],
      dietLabels: ['Sem Glúten'],
      rating: 5.0
    },
    {
      id: 'quiche-lorraine',
      name: 'Quiche Lorraine com Alho-Poró',
      category: 'salgados',
      price: 16.90,
      image: 'img/quiche.jpg',
      tasteNotes: 'Bacon crocante & queijo gruyère',
      desc: 'Massa brisée amanteigada com recheio cremoso e dourado, servida quentinha acompanhada de mix de folhas.',
      tags: [],
      dietLabels: ['Brunch'],
      rating: 4.8
    },
    {
      id: 'toast-avocado',
      name: 'Avocado Toast & Ovo Poché',
      category: 'salgados',
      price: 18.50,
      image: 'img/toast_avocado.jpg',
      tasteNotes: 'Sourdough artesanal & azeite trufado',
      desc: 'Fatia tostada de pão de fermentação natural, pasta rústica de avocado, ovo poché e pimenta calabresa.',
      tags: ['destaque'],
      dietLabels: ['Brunch Especial'],
      rating: 4.9
    },

    // --- Confeitaria & Doces ---
    {
      id: 'banoffee-pie',
      name: 'Torta Banoffee Fratti',
      category: 'doces',
      price: 15.50,
      image: 'img/banoffee.jpg',
      tasteNotes: 'Doce de leite mineiro & canela',
      desc: 'Nossa campeã de pedidos: base de biscoito, doce de leite cremoso no ponto, bananas frescas e chantilly.',
      tags: ['destaque'],
      dietLabels: ['Campeã de Pedidos'],
      rating: 5.0
    },
    {
      id: 'cheesecake-frutas',
      name: 'Cheesecake Frutas Vermelhas',
      category: 'doces',
      price: 16.50,
      image: 'img/cheesecake.jpg',
      tasteNotes: 'Coulis caseiro de amora & morango',
      desc: 'Estilo nova-iorquino assado lentamente, textura densa e sedosa com calda artesanal cítrica e fresca.',
      tags: [],
      dietLabels: ['Confeitaria'],
      rating: 4.9
    },
    {
      id: 'brownie-chocolate',
      name: 'Brownie Belga com Nozes',
      category: 'doces',
      price: 14.00,
      image: 'img/brownie.jpg',
      tasteNotes: 'Chocolate 70% & flor de sal',
      desc: 'Casquinha craquelada crocante e centro incrivelmente cremoso e úmido. Acompanha bola de sorvete de baunilha.',
      tags: [],
      dietLabels: ['Favorito'],
      rating: 4.9
    },

    // --- Grãos Selecionados ---
    {
      id: 'graos-cerrado',
      name: 'Café em Grãos Microlote Cerrado 250g',
      category: 'graos',
      price: 38.00,
      image: 'img/coffee_beans_bag.jpg',
      tasteNotes: 'Notas de caramelo, avelã e acidez média',
      desc: 'Pacote com válvula desgaseificadora e ziploc. Variedade Bourbon Amarelo, altitude 1.150m, torra média fresca.',
      tags: ['vegano', 'sem-gluten', 'destaque'],
      dietLabels: ['87 Pontos SCA'],
      rating: 5.0
    },
    {
      id: 'graos-catuai',
      name: 'Café em Grãos Mantiqueira 250g',
      category: 'graos',
      price: 36.00,
      image: 'img/roasted.jpg',
      tasteNotes: 'Notas de frutas amarelas e mel',
      desc: 'Grãos selecionados com colheita manual seletiva. Variedade Catuaí Vermelho, torra clara para coados brilhantes.',
      tags: ['vegano', 'sem-gluten'],
      dietLabels: ['86 Pontos SCA'],
      rating: 4.9
    }
  ];

  /* ========================================================
     2. ESTADO GLOBAL DA APLICAÇÃO
     ======================================================== */
  const AppState = {
    currentScreen: 'home',
    theme: localStorage.getItem('fratti_theme') || 'dark',
    audioMuted: true,
    cart: JSON.parse(localStorage.getItem('fratti_cart') || '[]'),
    appliedCoupon: null,
    discountAmount: 0,
    stamps: parseInt(localStorage.getItem('fratti_stamps') || '6', 10),
    activeCategory: 'all',
    activeTagFilter: null,
    searchQuery: '',
    // Customizer state
    customizer: {
      base: { name: 'Espresso Duplo', price: 7.00, color: '#3c1e0e', height: '35%' },
      milk: { name: 'Leite Integral Cremoso', price: 4.00, color: '#fdfbf7', height: '35%' },
      flavor: { name: 'Caramelo Salgado', price: 3.00, color: '#b66614' },
      topping: { name: 'Chantilly & Canela', price: 2.50, color: '#ffffff' }
    }
  };

  /* ========================================================
     3. SÍNTESE DE ÁUDIO WEB AUDIO API (OFFLINE & LEVE)
     ======================================================== */
  class CoffeeSoundEffects {
    constructor() {
      this.ctx = null;
      this.ambientOsc = null;
      this.ambientGain = null;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playClick() {
      if (AppState.audioMuted) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    }

    playAddCart() {
      if (AppState.audioMuted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'triangle';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc2.frequency.setValueAtTime(659.25, now + 0.08); // E5

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc1.stop(now + 0.08);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.35);
    }

    playWheelTick() {
      if (AppState.audioMuted) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(700, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.02);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.02);
    }

    playFanfare() {
      if (AppState.audioMuted) return;
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C alta
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + (idx * 0.1);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.45);
      });
    }

    toggleAmbientCafe() {
      this.init();
      if (!this.ctx) return false;

      if (!AppState.audioMuted && !this.ambientOsc) {
        // Criar som sutil de café (acorde quente em harmonia)
        this.ambientGain = this.ctx.createGain();
        this.ambientGain.gain.setValueAtTime(0.03, this.ctx.currentTime);

        const freqs = [196, 246.94, 293.66, 392]; // G major 7 suave
        this.ambientOsc = freqs.map((f) => {
          const osc = this.ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, this.ctx.currentTime);
          osc.connect(this.ambientGain);
          osc.start();
          return osc;
        });

        this.ambientGain.connect(this.ctx.destination);
      } else if (this.ambientOsc) {
        if (this.ambientGain) {
          this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
        }
        setTimeout(() => {
          if (this.ambientOsc) {
            this.ambientOsc.forEach(o => { try { o.stop(); } catch(e){} });
            this.ambientOsc = null;
          }
        }, 500);
      }
      return !AppState.audioMuted;
    }
  }

  const audioFX = new CoffeeSoundEffects();

  /* ========================================================
     4. CANVAS DE PARTÍCULAS E VAPOR AROMÁTICO (60FPS)
     ======================================================== */
  function initAmbientParticlesCanvas() {
    const canvas = document.getElementById('ambientCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const PARTICLE_COUNT = 38;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.8 + 0.8,
        speedY: -(Math.random() * 0.45 + 0.15),
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.4 ? '232, 154, 60' : '255, 230, 190',
        waveOffset: Math.random() * Math.PI * 2
      });
    }

    let mouseX = -100;
    let mouseY = -100;
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.waveOffset += 0.02;
        p.x += p.speedX + Math.sin(p.waveOffset) * 0.25;
        p.y += p.speedY;

        // Efeito sutil de repulsão suave com o mouse
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          p.x += (dx / dist) * 1.5;
          p.y += (dy / dist) * 1.5;
        }

        // Reset ao sair do topo
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.shadowColor = `rgba(${p.color}, 0.5)`;
        ctx.shadowBlur = 6;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }
    animate();
  }

  /* ========================================================
     5. EFEITO DE CONFETES CELEBRATIVOS
     ======================================================== */
  function fireConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const confettis = [];
    const colors = ['#e89a3c', '#e2b044', '#f5ab4c', '#ffffff', '#34d399', '#c85a3a'];

    for (let i = 0; i < 90; i++) {
      confettis.push({
        x: width / 2,
        y: height / 2,
        w: Math.random() * 8 + 4,
        h: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.7) * 18,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        gravity: 0.35,
        alpha: 1
      });
    }

    let frame = 0;
    function renderConfetti() {
      ctx.clearRect(0, 0, width, height);
      let alive = false;

      confettis.forEach(c => {
        c.x += c.vx;
        c.y += c.vy;
        c.vy += c.gravity;
        c.rot += c.rotSpeed;
        c.alpha -= 0.012;

        if (c.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.translate(c.x, c.y);
          ctx.rotate((c.rot * Math.PI) / 180);
          ctx.fillStyle = c.color;
          ctx.globalAlpha = Math.max(0, c.alpha);
          ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
          ctx.restore();
        }
      });

      frame++;
      if (alive && frame < 120) {
        requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    }
    renderConfetti();
  }

  /* ========================================================
     6. NAVEGAÇÃO ENTRE TELAS DO APLICATIVO (ROUTER SPA)
     ======================================================== */
  function navigateToScreen(screenId) {
    const screens = document.querySelectorAll('.app-screen');
    const targetScreen = document.getElementById(`screen-${screenId}`);
    if (!targetScreen) return;

    audioFX.playClick();

    screens.forEach(screen => {
      screen.classList.remove('active');
    });
    targetScreen.classList.add('active');
    AppState.currentScreen = screenId;

    // Atualiza botões ativos no Desktop Header
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.target === screenId);
    });

    // Atualiza botões ativos na barra inferior Mobile
    document.querySelectorAll('.app-bar-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.target === screenId);
    });

    // Sobe suavemente para o topo da tela
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Se navegou para o cardápio, garante que a grade esteja renderizada
    if (screenId === 'menu') {
      renderMenuItems();
    }
  }

  function setupNavigation() {
    // Cliques na navegação Desktop
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        navigateToScreen(btn.dataset.target);
      });
    });

    // Cliques na barra inferior Mobile
    document.querySelectorAll('.app-bar-item').forEach(btn => {
      btn.addEventListener('click', () => {
        navigateToScreen(btn.dataset.target);
      });
    });

    // Botões que acionam troca de tela por atributo data-switch-to
    document.addEventListener('click', (e) => {
      const switcher = e.target.closest('[data-switch-to]');
      if (switcher) {
        e.preventDefault();
        navigateToScreen(switcher.dataset.switchTo);
      }
    });

    // Clique no Logo volta para Home
    const logoBtn = document.getElementById('brandLogoBtn');
    if (logoBtn) {
      logoBtn.addEventListener('click', () => navigateToScreen('home'));
    }
  }

  /* ========================================================
     7. RENDERIZAÇÃO DO CARDÁPIO & FILTROS INTELIGENTES
     ======================================================== */
  function renderMenuItems() {
    const grid = document.getElementById('menuItemsGrid');
    if (!grid) return;

    let items = MENU_DATABASE.filter(item => {
      // Filtro de categoria
      const catMatch = AppState.activeCategory === 'all' || item.category === AppState.activeCategory;
      
      // Filtro de busca de texto
      const searchMatch = !AppState.searchQuery || 
        item.name.toLowerCase().includes(AppState.searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(AppState.searchQuery.toLowerCase()) ||
        item.tasteNotes.toLowerCase().includes(AppState.searchQuery.toLowerCase());

      // Filtro por dieta / tags
      const tagMatch = !AppState.activeTagFilter || item.tags.includes(AppState.activeTagFilter);

      return catMatch && searchMatch && tagMatch;
    });

    if (items.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
          <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
          <h3>Nenhum item encontrado</h3>
          <p style="color: var(--text-muted); margin-top: 6px;">Tente buscar por outro termo ou limpar os filtros.</p>
          <button class="btn btn-primary" id="resetFiltersBtn" style="margin-top: 16px;">Ver Todos os Itens</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          AppState.activeCategory = 'all';
          AppState.activeTagFilter = null;
          AppState.searchQuery = '';
          const searchInput = document.getElementById('menuSearchInput');
          if (searchInput) searchInput.value = '';
          document.querySelectorAll('.cat-pill').forEach(p => p.classList.toggle('active', p.dataset.cat === 'all'));
          document.querySelectorAll('.diet-tag').forEach(t => t.classList.remove('active'));
          renderMenuItems();
        });
      }
      return;
    }

    grid.innerHTML = items.map(item => `
      <article class="menu-item-card" data-product-id="${item.id}">
        <div class="menu-img-holder">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <div class="diet-badge-corner">
            ${item.dietLabels.map(l => `<span class="diet-badge">${l}</span>`).join('')}
          </div>
        </div>
        <div class="menu-item-content">
          <h3 class="menu-item-title">${item.name}</h3>
          <p class="menu-item-taste">${item.tasteNotes}</p>
          <p class="menu-item-desc">${item.desc}</p>
          <div class="menu-item-bottom">
            <span class="item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
            <button class="btn-add-item" data-open-modal="${item.id}">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Pedir
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  function setupMenuFilters() {
    // Filtro por Categoria
    document.querySelectorAll('.cat-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        audioFX.playClick();
        document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        AppState.activeCategory = btn.dataset.cat;
        renderMenuItems();
      });
    });

    // Filtro por Tags (Sem lactose, vegano, sem glúten, destaque)
    document.querySelectorAll('.diet-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        audioFX.playClick();
        if (tag.classList.contains('active')) {
          tag.classList.remove('active');
          AppState.activeTagFilter = null;
        } else {
          document.querySelectorAll('.diet-tag').forEach(t => t.classList.remove('active'));
          tag.classList.add('active');
          AppState.activeTagFilter = tag.dataset.tag;
        }
        renderMenuItems();
      });
    });

    // Busca de texto
    const searchInput = document.getElementById('menuSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        AppState.searchQuery = e.target.value.trim();
        if (clearBtn) clearBtn.style.display = AppState.searchQuery ? 'block' : 'none';
        renderMenuItems();
      });
    }
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        AppState.searchQuery = '';
        clearBtn.style.display = 'none';
        renderMenuItems();
      });
    }
  }

  /* ========================================================
     8. MODAL DE PRODUTO & PERSONALIZAÇÃO
     ======================================================== */
  let currentModalProduct = null;
  let modalQty = 1;
  let modalSizeMultiplier = 1.0;
  let modalSelectedSize = 'P (200ml)';
  let modalSelectedMilk = 'Padronizado da Casa';
  let modalSelectedExtras = [];

  function openProductModal(productId) {
    const product = MENU_DATABASE.find(p => p.id === productId);
    if (!product) return;

    currentModalProduct = product;
    modalQty = 1;
    modalSizeMultiplier = 1.0;
    modalSelectedSize = 'P (200ml)';
    modalSelectedMilk = 'Padronizado da Casa';
    modalSelectedExtras = [];

    const modal = document.getElementById('productModalBackdrop');
    if (!modal) return;

    document.getElementById('modalProductImg').src = product.image;
    document.getElementById('modalProductImg').alt = product.name;
    document.getElementById('modalProductTag').textContent = product.dietLabels[0] || 'Especial';
    document.getElementById('modalProductTitle').textContent = product.name;
    document.getElementById('modalProductDesc').textContent = product.desc;
    document.getElementById('modalQtyValue').textContent = '1';

    // Reset botões de tamanho
    document.querySelectorAll('.size-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === 0);
    });

    // Reset extras
    document.querySelectorAll('.extra-check input').forEach(input => {
      input.checked = false;
    });

    // Reset select de leite
    const milkSelect = document.getElementById('modalMilkSelect');
    if (milkSelect) milkSelect.selectedIndex = 0;

    // Se for comida ou grãos, esconde opções de xícara/leite
    const customArea = document.getElementById('modalCustomizationsArea');
    if (product.category === 'graos' || product.category === 'doces' || product.category === 'salgados') {
      if (customArea) customArea.style.display = 'none';
    } else {
      if (customArea) customArea.style.display = 'block';
    }

    updateModalPrice();
    modal.classList.add('active');
    audioFX.playClick();
  }

  function updateModalPrice() {
    if (!currentModalProduct) return;
    let basePrice = currentModalProduct.price * modalSizeMultiplier;

    // Leite adicional
    const milkSelect = document.getElementById('modalMilkSelect');
    if (milkSelect && milkSelect.value.includes('+R$ 1,50')) basePrice += 1.50;
    if (milkSelect && milkSelect.value.includes('+R$ 3,00')) basePrice += 3.00;
    if (milkSelect && milkSelect.value.includes('+R$ 3,50')) basePrice += 3.50;

    // Extras
    modalSelectedExtras.forEach(e => {
      basePrice += e.price;
    });

    const totalPrice = basePrice * modalQty;
    document.getElementById('modalProductPrice').textContent = `R$ ${basePrice.toFixed(2).replace('.', ',')}`;
    document.getElementById('modalAddTotalBtn').textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
  }

  function setupProductModal() {
    const modal = document.getElementById('productModalBackdrop');
    const closeBtn = document.getElementById('closeProductModalBtn');

    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    }

    // Cliques em cards e botões "Pedir"
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-open-modal]');
      if (trigger) {
        e.preventDefault();
        openProductModal(trigger.dataset.openModal);
      }
      const quickAdd = e.target.closest('.quick-add-btn');
      if (quickAdd) {
        e.preventDefault();
        openProductModal(quickAdd.dataset.id);
      }
    });

    // Seletor de Tamanho
    document.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        modalSizeMultiplier = parseFloat(btn.dataset.multiplier);
        modalSelectedSize = btn.dataset.size;
        updateModalPrice();
        audioFX.playClick();
      });
    });

    // Seletor de Leite
    const milkSelect = document.getElementById('modalMilkSelect');
    if (milkSelect) {
      milkSelect.addEventListener('change', () => {
        modalSelectedMilk = milkSelect.value;
        updateModalPrice();
      });
    }

    // Checkboxes de Extras
    document.querySelectorAll('.extra-check input').forEach(input => {
      input.addEventListener('change', () => {
        modalSelectedExtras = [];
        document.querySelectorAll('.extra-check input:checked').forEach(checked => {
          modalSelectedExtras.push({
            name: checked.dataset.extra,
            price: parseFloat(checked.dataset.price)
          });
        });
        updateModalPrice();
      });
    });

    // Quantidade Stepper
    const qtyMinus = document.getElementById('modalQtyMinus');
    const qtyPlus = document.getElementById('modalQtyPlus');
    const qtyVal = document.getElementById('modalQtyValue');

    if (qtyMinus) {
      qtyMinus.addEventListener('click', () => {
        if (modalQty > 1) {
          modalQty--;
          qtyVal.textContent = modalQty;
          updateModalPrice();
          audioFX.playClick();
        }
      });
    }
    if (qtyPlus) {
      qtyPlus.addEventListener('click', () => {
        modalQty++;
        qtyVal.textContent = modalQty;
        updateModalPrice();
        audioFX.playClick();
      });
    }

    // Botão Adicionar ao Pedido do Modal
    const addBtn = document.getElementById('modalAddToCartBtn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        if (!currentModalProduct) return;

        let unitPrice = currentModalProduct.price * modalSizeMultiplier;
        if (milkSelect && milkSelect.value.includes('+R$ 1,50')) unitPrice += 1.50;
        if (milkSelect && milkSelect.value.includes('+R$ 3,00')) unitPrice += 3.00;
        if (milkSelect && milkSelect.value.includes('+R$ 3,50')) unitPrice += 3.50;
        modalSelectedExtras.forEach(e => unitPrice += e.price);

        const cartItem = {
          id: `${currentModalProduct.id}-${Date.now()}`,
          productId: currentModalProduct.id,
          name: currentModalProduct.name,
          image: currentModalProduct.image,
          unitPrice: unitPrice,
          qty: modalQty,
          size: modalSelectedSize,
          milk: modalSelectedMilk,
          extras: modalSelectedExtras.map(e => e.name)
        };

        addToCart(cartItem);
        modal.classList.remove('active');
        showToast(`☕ ${currentModalProduct.name} adicionado ao pedido!`);
      });
    }
  }

  /* ========================================================
     9. CARRINHO DE COMPRAS & CÁLCULOS
     ======================================================== */
  function addToCart(item) {
    AppState.cart.push(item);
    saveCart();
    updateCartUI();
    audioFX.playAddCart();

    // Efeito bump no badge
    const badge = document.getElementById('cartCountBadge');
    if (badge) {
      badge.classList.remove('bump');
      void badge.offsetWidth;
      badge.classList.add('bump');
    }
  }

  function removeFromCart(index) {
    AppState.cart.splice(index, 1);
    saveCart();
    updateCartUI();
    audioFX.playClick();
  }

  function updateCartItemQty(index, delta) {
    if (AppState.cart[index]) {
      AppState.cart[index].qty += delta;
      if (AppState.cart[index].qty <= 0) {
        AppState.cart.splice(index, 1);
      }
      saveCart();
      updateCartUI();
      audioFX.playClick();
    }
  }

  function saveCart() {
    localStorage.setItem('fratti_cart', JSON.stringify(AppState.cart));
  }

  function calculateCartTotals() {
    let subtotal = 0;
    let count = 0;

    AppState.cart.forEach(item => {
      subtotal += item.unitPrice * item.qty;
      count += item.qty;
    });

    let discount = 0;
    if (AppState.appliedCoupon) {
      discount = AppState.appliedCoupon.calc(subtotal);
    }
    const total = Math.max(0, subtotal - discount);

    return { subtotal, discount, total, count };
  }

  function updateCartUI() {
    const { subtotal, discount, total, count } = calculateCartTotals();

    // Badges do Header
    const badge = document.getElementById('cartCountBadge');
    if (badge) badge.textContent = count;
    const headerTotal = document.getElementById('cartHeaderTotal');
    if (headerTotal) headerTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

    // Lista de Itens da Gaveta
    const list = document.getElementById('cartItemsList');
    const emptyView = document.getElementById('emptyCartView');
    const footer = document.getElementById('cartDrawerFooter');

    if (!list) return;

    if (AppState.cart.length === 0) {
      if (emptyView) emptyView.style.display = 'flex';
      if (footer) footer.style.display = 'none';
      list.innerHTML = '';
      if (emptyView) list.appendChild(emptyView);
    } else {
      if (emptyView) emptyView.style.display = 'none';
      if (footer) footer.style.display = 'flex';

      list.innerHTML = AppState.cart.map((item, idx) => `
        <div class="cart-item-row">
          <div class="cart-item-thumb">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-item-info">
            <h4 class="cart-item-name">${item.name}</h4>
            <div class="cart-item-meta">
              ${item.size ? `Tamanho: ${item.size}` : ''}
              ${item.extras && item.extras.length > 0 ? `<br>+ ${item.extras.join(', ')}` : ''}
            </div>
            <div class="cart-item-price">R$ ${(item.unitPrice * item.qty).toFixed(2).replace('.', ',')}</div>
          </div>
          <div class="cart-item-actions">
            <button class="cart-stepper-btn" onclick="window.FrattiApp.updateQty(${idx}, -1)">-</button>
            <span class="cart-item-qty">${item.qty}</span>
            <button class="cart-stepper-btn" onclick="window.FrattiApp.updateQty(${idx}, 1)">+</button>
          </div>
        </div>
      `).join('');
    }

    // Totais no footer da gaveta
    const subtotalText = document.getElementById('cartSubtotalText');
    if (subtotalText) subtotalText.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

    const discountLine = document.getElementById('discountLine');
    const discountText = document.getElementById('cartDiscountText');
    if (discountLine && discountText) {
      if (discount > 0) {
        discountLine.style.display = 'flex';
        discountText.textContent = `- R$ ${discount.toFixed(2).replace('.', ',')}`;
      } else {
        discountLine.style.display = 'none';
      }
    }

    const totalText = document.getElementById('cartTotalText');
    if (totalText) totalText.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

    const payBtnAmount = document.getElementById('btnPayAmount');
    if (payBtnAmount) payBtnAmount.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  }

  function setupCartDrawer() {
    const openBtn = document.getElementById('openCartBtn');
    const closeBtn = document.getElementById('closeCartBtn');
    const overlay = document.getElementById('cartOverlay');
    const drawer = document.getElementById('cartDrawer');

    const openDrawer = () => {
      drawer.classList.add('active');
      overlay.classList.add('active');
      audioFX.playClick();
    };

    const closeDrawer = () => {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    };

    if (openBtn) openBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    // Toggle tipo de pedido (Balcão vs Mesa)
    document.querySelectorAll('input[name="orderType"]').forEach(radio => {
      radio.addEventListener('change', () => {
        const tableRow = document.getElementById('tableNumRow');
        if (tableRow) {
          tableRow.style.display = radio.value === 'mesa' ? 'flex' : 'none';
        }
      });
    });

    // Aplicação de Cupom de Desconto
    const applyCouponBtn = document.getElementById('applyCartCouponBtn');
    const couponInput = document.getElementById('cartCouponInput');
    const couponMsg = document.getElementById('couponAppliedMsg');

    const couponsValid = {
      'FRATTI10': { calc: (sub) => sub * 0.10, desc: '10% de desconto aplicado!' },
      'FRATTI15': { calc: (sub) => sub * 0.15, desc: '15% de desconto de Happy Hour!' },
      'CAFEZINHO': { calc: () => 5.00, desc: 'R$ 5,00 de desconto na sua xícara!' },
      'BEMVINDO': { calc: (sub) => sub * 0.10, desc: '10% de desconto de boas-vindas!' },
      'DOCE15': { calc: (sub) => sub * 0.15, desc: '15% de desconto especial em sobremesas!' },
      'PAODEQUEIJO': { calc: () => 8.90, desc: 'Pão de Queijo grátis abatido no valor!' },
      'ESPRESSOFREE': { calc: () => 7.50, desc: 'Espresso clássico grátis da roleta!' }
    };

    const applyCouponCode = (code) => {
      const clean = code.toUpperCase().trim();
      if (couponsValid[clean]) {
        AppState.appliedCoupon = couponsValid[clean];
        if (couponMsg) {
          couponMsg.textContent = `✅ ${couponsValid[clean].desc}`;
          couponMsg.style.display = 'block';
        }
        if (couponInput) couponInput.value = clean;
        updateCartUI();
        showToast(`🎉 Cupom ${clean} aplicado com sucesso!`);
        fireConfetti();
        audioFX.playFanfare();
      } else {
        if (couponMsg) {
          couponMsg.textContent = '❌ Cupom inválido ou expirado.';
          couponMsg.style.display = 'block';
        }
      }
    };

    if (applyCouponBtn && couponInput) {
      applyCouponBtn.addEventListener('click', () => {
        applyCouponCode(couponInput.value);
      });
    }

    // Cliques em cupons diretos (data-code)
    document.addEventListener('click', (e) => {
      const applyBtn = e.target.closest('.apply-coupon-direct');
      if (applyBtn) {
        applyCouponCode(applyBtn.dataset.code);
        openDrawer();
      }
    });

    // Copiar cupom do banner
    const copyCouponBtn = document.getElementById('copyCouponBtn');
    if (copyCouponBtn) {
      copyCouponBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('FRATTI15').then(() => {
          showToast('📋 Cupom FRATTI15 copiado! Aplique no carrinho.');
        });
      });
    }

    // Iniciar Checkout
    const startCheckoutBtn = document.getElementById('startCheckoutBtn');
    if (startCheckoutBtn) {
      startCheckoutBtn.addEventListener('click', () => {
        closeDrawer();
        openCheckoutModal();
      });
    }
  }

  /* ========================================================
     10. CHECKOUT & RASTREADOR DE PEDIDO EM TEMPO REAL
     ======================================================== */
  function openCheckoutModal() {
    const modal = document.getElementById('checkoutModalBackdrop');
    if (!modal) return;

    const { total } = calculateCartTotals();
    document.getElementById('checkoutSummaryTotal').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

    // Reseta visualização para a etapa 1 (Pagamento)
    document.getElementById('checkoutStepPayment').style.display = 'block';
    document.getElementById('checkoutStepTracker').style.display = 'none';

    modal.classList.add('active');
    audioFX.playClick();
  }

  function setupCheckoutTracker() {
    const modal = document.getElementById('checkoutModalBackdrop');
    const closeBtn = document.getElementById('closeCheckoutModalBtn');
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));

    // Opções de Pagamento (PIX, Cartão, Balcão)
    document.querySelectorAll('.payment-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.payment-opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const pixArea = document.getElementById('pixPaymentArea');
        if (pixArea) {
          pixArea.style.display = btn.dataset.method === 'pix' ? 'block' : 'none';
        }
        audioFX.playClick();
      });
    });

    // Copiar Chave PIX
    const copyPixBtn = document.getElementById('copyPixKeyBtn');
    const pixInput = document.getElementById('pixCodeCopyInput');
    if (copyPixBtn && pixInput) {
      copyPixBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(pixInput.value).then(() => {
          showToast('⚡ Código PIX Copia e Cola copiado para a área de transferência!');
        });
      });
    }

    // Confirmar Pagamento -> Inicia Rastreador ao Vivo
    const confirmBtn = document.getElementById('confirmPaymentBtn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        audioFX.playFanfare();
        fireConfetti();

        // Incrementa fidelidade automaticamente
        addStamp();

        // Limpa carrinho
        AppState.cart = [];
        AppState.appliedCoupon = null;
        saveCart();
        updateCartUI();

        // Troca para o tracker
        document.getElementById('checkoutStepPayment').style.display = 'none';
        document.getElementById('checkoutStepTracker').style.display = 'block';

        // Gera número de pedido dinâmico
        const orderId = Math.floor(Math.random() * 8999 + 1000);
        document.getElementById('liveOrderId').textContent = orderId;

        startLiveOrderAnimation();
      });
    }

    // Finalizar Tracker
    const finishBtn = document.getElementById('finishTrackerBtn');
    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        navigateToScreen('home');
      });
    }
  }

  function startLiveOrderAnimation() {
    const progressLine = document.getElementById('stepLineProgress');
    const statusSub = document.getElementById('trackerStatusSub');
    const liveText = document.getElementById('loaderLiveText');
    const step1 = document.getElementById('trackStep1');
    const step2 = document.getElementById('trackStep2');
    const step3 = document.getElementById('trackStep3');
    const step4 = document.getElementById('trackStep4');

    // Estado inicial
    step1.classList.add('active');
    step2.classList.remove('active');
    step3.classList.remove('active');
    step4.classList.remove('active');
    if (progressLine) progressLine.style.width = '25%';

    // Etapa 2: Moendo os grãos (após 3.5s)
    setTimeout(() => {
      step2.classList.add('active');
      if (progressLine) progressLine.style.width = '50%';
      if (statusSub) statusSub.textContent = 'O barista está moendo seus grãos na hora!';
      if (liveText) liveText.textContent = '⚙️ Moagem na regulagem perfeita para extração...';
      audioFX.playClick();
    }, 3500);

    // Etapa 3: Extraindo o café (após 7s)
    setTimeout(() => {
      step3.classList.add('active');
      if (progressLine) progressLine.style.width = '75%';
      if (statusSub) statusSub.textContent = 'Vaporizando leite e extraindo o café com aroma incrível...';
      if (liveText) liveText.textContent = '☕ Extração a 9 bars e latte art no capricho...';
      audioFX.playClick();
    }, 7000);

    // Etapa 4: Pedido Pronto! (após 11s)
    setTimeout(() => {
      step4.classList.add('active');
      if (progressLine) progressLine.style.width = '100%';
      if (statusSub) statusSub.textContent = 'Seu pedido está prontinho esperando por você!';
      if (liveText) liveText.textContent = '🎉 Prontinho no balcão! Bom apetite!';
      audioFX.playFanfare();
      fireConfetti();
      showToast('☕ Seu café da Fratti está pronto no balcão!');
    }, 11000);
  }

  /* ========================================================
     11. SIMULADOR "MONTE SEU CAFÉ" (VISUALIZAÇÃO INTERATIVA)
     ======================================================== */
  function setupCustomizer() {
    const updateCupVisual = () => {
      const base = AppState.customizer.base;
      const milk = AppState.customizer.milk;
      const flavor = AppState.customizer.flavor;
      const topping = AppState.customizer.topping;

      // Camadas do copo
      const baseEl = document.getElementById('liquidBase');
      const milkEl = document.getElementById('liquidMilk');
      const flavorEl = document.getElementById('liquidFlavor');
      const toppingEl = document.getElementById('liquidTopping');

      if (baseEl) {
        baseEl.style.height = base.height;
        baseEl.style.background = base.color;
      }
      if (milkEl) {
        milkEl.style.height = milk.height;
        milkEl.style.background = milk.color;
      }
      if (flavorEl) {
        flavorEl.style.background = flavor.color;
      }
      if (toppingEl) {
        toppingEl.style.background = topping.color;
      }

      // Preço total
      const total = base.price + milk.price + flavor.price + topping.price;
      const priceEl = document.getElementById('customCoffeePrice');
      if (priceEl) priceEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

      // Nome do Café
      const nameEl = document.getElementById('customCoffeeName');
      if (nameEl) {
        nameEl.textContent = `${base.name} com ${flavor.name}`;
      }

      // Tags de resumo
      const tagsList = document.getElementById('recipeTagsList');
      if (tagsList) {
        tagsList.innerHTML = `
          <span class="tag-pill">${base.name}</span>
          <span class="tag-pill">${milk.name}</span>
          <span class="tag-pill">${flavor.name}</span>
          <span class="tag-pill">${topping.name}</span>
        `;
      }
    };

    // Botões de Base
    document.querySelectorAll('#baseOptions .option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#baseOptions .option-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        AppState.customizer.base = {
          name: btn.dataset.name,
          price: parseFloat(btn.dataset.price),
          color: btn.dataset.color,
          height: btn.dataset.height
        };
        updateCupVisual();
        audioFX.playClick();
      });
    });

    // Botões de Leite
    document.querySelectorAll('#milkOptions .option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#milkOptions .option-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        AppState.customizer.milk = {
          name: btn.dataset.name,
          price: parseFloat(btn.dataset.price),
          color: btn.dataset.color,
          height: btn.dataset.height
        };
        updateCupVisual();
        audioFX.playClick();
      });
    });

    // Botões de Xarope / Sabor
    document.querySelectorAll('#flavorOptions .option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#flavorOptions .option-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        AppState.customizer.flavor = {
          name: btn.dataset.name,
          price: parseFloat(btn.dataset.price),
          color: btn.dataset.color
        };
        updateCupVisual();
        audioFX.playClick();
      });
    });

    // Botões de Topping
    document.querySelectorAll('#toppingOptions .option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toppingOptions .option-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        AppState.customizer.topping = {
          name: btn.dataset.name,
          price: parseFloat(btn.dataset.price),
          color: btn.dataset.color
        };
        updateCupVisual();
        audioFX.playClick();
      });
    });

    // Adicionar Criação ao Carrinho
    const addCustomBtn = document.getElementById('addCustomCoffeeBtn');
    if (addCustomBtn) {
      addCustomBtn.addEventListener('click', () => {
        const base = AppState.customizer.base;
        const milk = AppState.customizer.milk;
        const flavor = AppState.customizer.flavor;
        const topping = AppState.customizer.topping;
        const total = base.price + milk.price + flavor.price + topping.price;

        const customItem = {
          id: `custom-${Date.now()}`,
          productId: 'custom-blend',
          name: `Meu Café: ${base.name}`,
          image: 'img/latte_art.jpg',
          unitPrice: total,
          qty: 1,
          size: 'Personalizado',
          milk: milk.name,
          extras: [flavor.name, topping.name]
        };

        addToCart(customItem);
        showToast('✨ Sua receita exclusiva foi adicionada ao pedido!');
        fireConfetti();
      });
    }

    updateCupVisual();
  }

  /* ========================================================
     12. ROLETA DA SORTE GAMIFICADA (CANVAS SPIN)
     ======================================================== */
  function setupLuckyWheel() {
    const canvas = document.getElementById('luckyWheelCanvas');
    const spinBtn = document.getElementById('spinWheelBtn');
    const resultBanner = document.getElementById('wheelResultBanner');
    if (!canvas || !spinBtn) return;

    const ctx = canvas.getContext('2d');
    const segments = [
      { text: '10% OFF', code: 'FRATTI10', color: '#e89a3c', textColor: '#ffffff' },
      { text: 'Espresso Free', code: 'ESPRESSOFREE', color: '#2a170d', textColor: '#f5ab4c' },
      { text: '15% Doces', code: 'DOCE15', color: '#d97706', textColor: '#ffffff' },
      { text: 'Pão de Queijo', code: 'PAODEQUEIJO', color: '#4a2512', textColor: '#f5c070' },
      { text: '50 Pontos', code: null, color: '#e2b044', textColor: '#180e08' },
      { text: 'R$ 5 OFF', code: 'CAFEZINHO', color: '#1f1008', textColor: '#f5ab4c' }
    ];

    const numSegments = segments.length;
    const arc = (2 * Math.PI) / numSegments;
    let currentAngle = 0;
    let isSpinning = false;

    function drawWheel() {
      const radius = canvas.width / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < numSegments; i++) {
        const angle = currentAngle + i * arc;
        ctx.beginPath();
        ctx.fillStyle = segments[i].color;
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, radius - 8, angle, angle + arc);
        ctx.lineTo(radius, radius);
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Texto do segmento
        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(angle + arc / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = segments[i].textColor;
        ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(segments[i].text, radius - 24, 6);
        ctx.restore();
      }

      // Aro dourado externo
      ctx.beginPath();
      ctx.arc(radius, radius, radius - 4, 0, 2 * Math.PI);
      ctx.strokeStyle = '#e2b044';
      ctx.lineWidth = 6;
      ctx.stroke();
    }

    drawWheel();

    spinBtn.addEventListener('click', () => {
      if (isSpinning) return;
      isSpinning = true;
      spinBtn.disabled = true;
      if (resultBanner) resultBanner.style.display = 'none';

      // Sorteia o prêmio
      const prizeIndex = Math.floor(Math.random() * numSegments);
      const prize = segments[prizeIndex];

      // Ângulo onde o ponteiro (no topo -90deg / 270deg) vai parar
      const targetSegmentCenter = (prizeIndex * arc) + (arc / 2);
      const pointerAngle = (3 * Math.PI) / 2; // Topo
      const baseRotation = 5 * 2 * Math.PI; // 5 voltas completas
      const finalAngle = baseRotation + (pointerAngle - targetSegmentCenter);

      const duration = 4000;
      const start = performance.now();
      const initialAngle = currentAngle;

      let lastTickAngle = 0;

      function stepSpin(time) {
        const elapsed = time - start;
        const progress = Math.min(1, elapsed / duration);
        // Easing de desaceleração suave
        const easeOut = 1 - Math.pow(1 - progress, 3.5);
        currentAngle = initialAngle + finalAngle * easeOut;
        drawWheel();

        // Sons de tick da roleta
        if (Math.abs(currentAngle - lastTickAngle) > 0.4) {
          audioFX.playWheelTick();
          lastTickAngle = currentAngle;
        }

        if (progress < 1) {
          requestAnimationFrame(stepSpin);
        } else {
          isSpinning = false;
          spinBtn.disabled = false;
          audioFX.playFanfare();
          fireConfetti();

          if (resultBanner) {
            resultBanner.innerHTML = `🎉 Parabéns! Você ganhou: <strong>${prize.text}</strong>!`;
            if (prize.code) {
              resultBanner.innerHTML += `<br><small>Cupom <strong>${prize.code}</strong> adicionado para seu carrinho.</small>`;
              const couponInput = document.getElementById('cartCouponInput');
              if (couponInput) couponInput.value = prize.code;
            }
            resultBanner.style.display = 'block';
          }
        }
      }

      requestAnimationFrame(stepSpin);
    });
  }

  /* ========================================================
     13. CARTÃO FIDELIDADE GAMIFICADO (CARIMBOS DIGITAIS)
     ======================================================== */
  function addStamp() {
    if (AppState.stamps < 10) {
      AppState.stamps++;
    } else {
      AppState.stamps = 1; // reset para novo ciclo
    }
    localStorage.setItem('fratti_stamps', AppState.stamps);
    renderStamps();
  }

  function renderStamps() {
    const counter = document.getElementById('stampsCount');
    if (counter) counter.textContent = AppState.stamps;

    const grid = document.getElementById('stampsGrid');
    if (!grid) return;

    const slots = grid.querySelectorAll('.stamp-slot');
    slots.forEach((slot, idx) => {
      const isStamped = idx < AppState.stamps;
      slot.classList.toggle('stamped', isStamped);
      slot.classList.toggle('empty', !isStamped);
    });

    if (AppState.stamps === 10) {
      showToast('🎁 Parabéns! Você completou 10 carimbos e ganhou uma bebida grátis!');
      audioFX.playFanfare();
      fireConfetti();
    }
  }

  function setupLoyaltyCard() {
    const stampBtn = document.getElementById('simulateStampBtn');
    const resetBtn = document.getElementById('resetStampsBtn');

    if (stampBtn) {
      stampBtn.addEventListener('click', () => {
        addStamp();
        audioFX.playClick();
        showToast('☕ Novo carimbo adicionado ao seu cartão!');
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        AppState.stamps = 0;
        localStorage.setItem('fratti_stamps', '0');
        renderStamps();
        audioFX.playClick();
      });
    }

    renderStamps();
  }

  /* ========================================================
     14. FORMULÁRIO DE RESERVA DE MESAS
     ======================================================== */
  function setupReservationForm() {
    const form = document.getElementById('reservationForm');
    const feedback = document.getElementById('resFeedback');
    const dateInput = document.getElementById('resDate');

    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.value = today;
      dateInput.min = today;
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('resName').value;
        const time = document.getElementById('resTime').value;
        const guests = document.getElementById('resGuests').value;
        const area = document.getElementById('resArea').value;
        const voucher = `RES-${Math.floor(Math.random() * 89999 + 10000)}`;

        audioFX.playFanfare();
        fireConfetti();

        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.innerHTML = `
            🎉 <strong>Reserva Confirmada com Sucesso!</strong><br>
            Voucher: <strong>#${voucher}</strong><br>
            Esperamos por ${name} às ${time} (${guests} pessoas no ${area}).
          `;
          feedback.style.display = 'block';
        }

        form.reset();
        if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
        showToast(`📅 Mesa reservada com sucesso para ${name}!`);
      });
    }
  }

  /* ========================================================
     15. LIGHTBOX DE FOTOS EM ALTA RESOLUÇÃO
     ======================================================== */
  function setupLightbox() {
    const modal = document.getElementById('lightboxModal');
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');
    const closeBtn = document.getElementById('lightboxCloseBtn');

    document.querySelectorAll('.lightbox-trigger').forEach(item => {
      item.addEventListener('click', () => {
        if (!modal || !img) return;
        img.src = item.dataset.img;
        caption.textContent = item.dataset.caption || '';
        modal.classList.add('active');
        audioFX.playClick();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    }
  }

  /* ========================================================
     16. 3D TILT EFFECT NOS CARDS EM DESTAQUE
     ======================================================== */
  function setupTiltEffect() {
    document.querySelectorAll('.tilt-effect').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  /* ========================================================
     17. CONTADOR REGRESSIVO DO HAPPY HOUR
     ======================================================== */
  function startPromoCountdown() {
    let remainingSeconds = (3 * 3600) + (45 * 60) + 18;

    const hoursEl = document.getElementById('cdHours');
    const minutesEl = document.getElementById('cdMinutes');
    const secondsEl = document.getElementById('cdSeconds');

    setInterval(() => {
      if (remainingSeconds > 0) {
        remainingSeconds--;
        const h = Math.floor(remainingSeconds / 3600);
        const m = Math.floor((remainingSeconds % 3600) / 60);
        const s = remainingSeconds % 60;

        if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(m).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(s).padStart(2, '0');
      }
    }, 1000);
  }

  /* ========================================================
     18. SAUDAÇÃO DINÂMICA PELO HORÁRIO DO DIA
     ======================================================== */
  function updateTimeGreeting() {
    const greetingEl = document.getElementById('timeGreetingText');
    if (!greetingEl) return;
    const hour = new Date().getHours();
    let text = 'Boa noite, amante de café!';
    if (hour >= 5 && hour < 12) text = 'Bom dia! Pronto para o primeiro café especial?';
    else if (hour >= 12 && hour < 18) text = 'Boa tarde! Hora perfeita para uma pausa na Fratti.';
    greetingEl.textContent = text;
  }

  /* ========================================================
     19. TOAST NOTIFICATIONS ELEGANTE
     ======================================================== */
  function showToast(msg) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${msg}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-out');
      setTimeout(() => toast.remove(), 350);
    }, 3200);
  }

  /* ========================================================
     20. CONTROLES DO HEADER (TEMA & SOM)
     ======================================================== */
  function setupHeaderControls() {
    // Tema Claro / Escuro
    const themeBtn = document.getElementById('themeToggleBtn');
    document.documentElement.setAttribute('data-theme', AppState.theme);

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', AppState.theme);
        localStorage.setItem('fratti_theme', AppState.theme);
        audioFX.playClick();
        showToast(AppState.theme === 'dark' ? '🌙 Modo Noturno Café Torrado ativado' : '☀️ Modo Diurno Café com Leite ativado');
      });
    }

    // Toggle Som Ambiente
    const audioBtn = document.getElementById('audioToggleBtn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        AppState.audioMuted = !AppState.audioMuted;
        const iconOff = audioBtn.querySelector('.audio-icon-off');
        const waves = audioBtn.querySelector('.audio-waves');

        if (!AppState.audioMuted) {
          if (iconOff) iconOff.style.display = 'none';
          if (waves) waves.style.display = 'flex';
          audioFX.toggleAmbientCafe();
          showToast('🎵 Som ambiente e efeitos sonoros ativados!');
        } else {
          if (iconOff) iconOff.style.display = 'block';
          if (waves) waves.style.display = 'none';
          audioFX.toggleAmbientCafe();
          showToast('🔇 Som mutado.');
        }
      });
    }
  }

  /* ========================================================
     21. INICIALIZAÇÃO GERAL DO APP
     ======================================================== */
  function init() {
    setupNavigation();
    setupMenuFilters();
    setupProductModal();
    setupCartDrawer();
    setupCheckoutTracker();
    setupCustomizer();
    setupLuckyWheel();
    setupLoyaltyCard();
    setupReservationForm();
    setupLightbox();
    setupTiltEffect();
    setupHeaderControls();
    startPromoCountdown();
    updateTimeGreeting();
    initAmbientParticlesCanvas();
    updateCartUI();

    // Renderiza itens iniciais do cardápio
    renderMenuItems();

    // Disponibiliza métodos essenciais no escopo global
    window.FrattiApp = {
      navigateTo: navigateToScreen,
      updateQty: updateCartItemQty,
      removeFromCart: removeFromCart,
      openProduct: openProductModal
    };

    console.log('☕ Fratti Cafeteria App carregado com sucesso!');
  }

  // Inicia após DOM pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
