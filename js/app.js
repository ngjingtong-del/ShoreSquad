/**
 * ShoreSquad - Interactive Beach Cleanup App
 * Features: Map integration, weather tracking, crew management, event planning
 * Target: Young eco-conscious community
 */

// ============================================
// Data Models & State Management
// ============================================

const ShoreSquad = {
  // Application state
  state: {
    user: {
      name: 'Your Name',
      avatar: 'YN',
      role: 'Organizer',
    },
    crew: [
      { id: 1, name: 'Alex Johnson', role: 'Co-organizer', avatar: 'AJ' },
      { id: 2, name: 'Jordan Lee', role: 'Volunteer', avatar: 'JL' },
      { id: 3, name: 'Sam Taylor', role: 'Volunteer', avatar: 'ST' },
    ],
    beaches: [
      {
        id: 1,
        name: 'Sunset Beach',
        location: 'Santa Monica, CA',
        difficulty: 'Easy',
        description: 'Beautiful sandy beach with excellent cleanup opportunities.',
        image: 'https://via.placeholder.com/400x300?text=Sunset+Beach',
        coords: { lat: 34.0195, lng: -118.4912 },
      },
      {
        id: 2,
        name: 'Crystal Cove',
        location: 'Newport Beach, CA',
        difficulty: 'Medium',
        description: 'Rocky coves with unique ecosystem. Bring gloves!',
        image: 'https://via.placeholder.com/400x300?text=Crystal+Cove',
        coords: { lat: 33.5573, lng: -117.8346 },
      },
      {
        id: 3,
        name: 'Ocean View Park',
        location: 'San Diego, CA',
        difficulty: 'Easy',
        description: 'Well-maintained beach perfect for large groups.',
        image: 'https://via.placeholder.com/400x300?text=Ocean+View+Park',
        coords: { lat: 32.7157, lng: -117.2279 },
      },
    ],
    events: [
      {
        id: 1,
        name: 'Summer Cleanup Splash',
        beach: 'Sunset Beach',
        date: '2025-06-15',
        time: '09:00',
        attendees: 24,
        description: 'Join us for a morning cleanup followed by a beach picnic!',
      },
      {
        id: 2,
        name: 'Full Moon Beach Night',
        beach: 'Crystal Cove',
        date: '2025-06-21',
        time: '18:00',
        attendees: 18,
        description: 'Evening cleanup under the stars.',
      },
    ],
    weather: {
      temperature: 72,
      condition: 'Sunny',
      humidity: 65,
      windSpeed: 8,
      uvIndex: 7,
    },
  },

  // ============================================
  // Initialization
  // ============================================

  init() {
    console.log('🌊 ShoreSquad initializing...');
    this.setupEventListeners();
    this.renderBeaches();
    this.renderCrew();
    this.renderEvents();
    this.updateWeather();
    console.log('✅ ShoreSquad ready!');
  },

  // ============================================
  // Event Listeners
  // ============================================

  setupEventListeners() {
    // CTA Buttons
    document.getElementById('ctaBtn').addEventListener('click', () => this.showEventModal());
    document.getElementById('joinBtn').addEventListener('click', () => this.showNotification('Welcome to ShoreSquad! 🌊'));
    document.getElementById('createEventBtn').addEventListener('click', () => this.showEventModal());

    // Modal
    const modal = document.getElementById('eventModal');
    const closeBtn = document.querySelector('.close-modal');
    const form = document.getElementById('eventForm');

    closeBtn.addEventListener('click', () => this.closeModal());
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeModal();
      }
    });

    form.addEventListener('submit', (e) => this.handleEventSubmit(e));

    // Crew management
    document.getElementById('addCrewBtn').addEventListener('click', () => {
      this.addCrewMember('New Member', 'Volunteer', 'NM');
    });

    // Smooth scroll for nav links
    this.setupSmoothScroll();
  },

  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
          e.preventDefault();
          document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  },

  // ============================================
  // Beach Management
  // ============================================

  renderBeaches() {
    const container = document.getElementById('beachesGrid');
    container.innerHTML = '';

    this.state.beaches.forEach((beach) => {
      const card = this.createBeachCard(beach);
      container.appendChild(card);
    });
  },

  createBeachCard(beach) {
    const card = document.createElement('div');
    card.className = 'beach-card';
    card.innerHTML = `
      <img src="${beach.image}" alt="${beach.name}" loading="lazy">
      <div class="beach-card-content">
        <h3>${beach.name}</h3>
        <p>${beach.location}</p>
        <span class="badge">${beach.difficulty}</span>
        <p style="font-size: 0.85rem; margin-top: 10px; color: #999;">${beach.description}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      this.showNotification(`📍 ${beach.name} selected! Ready to plan a cleanup?`);
      this.scrollToSection('events');
    });

    return card;
  },

  // ============================================
  // Crew Management
  // ============================================

  renderCrew() {
    const container = document.getElementById('crewList');
    container.innerHTML = '';

    this.state.crew.forEach((member) => {
      const memberEl = this.createCrewMemberEl(member);
      container.appendChild(memberEl);
    });
  },

  createCrewMemberEl(member) {
    const div = document.createElement('div');
    div.className = 'crew-member';
    div.innerHTML = `
      <div class="crew-member-info">
        <div class="crew-member-avatar">${member.avatar}</div>
        <div>
          <div class="crew-member-name">${member.name}</div>
          <div class="crew-member-role">${member.role}</div>
        </div>
      </div>
      <div class="crew-member-actions">
        <button class="btn-small" onclick="ShoreSquad.contactMember('${member.name}')">Message</button>
        <button class="btn-small" style="background-color: #FFB3B3;" onclick="ShoreSquad.removeMember(${member.id})">Remove</button>
      </div>
    `;
    return div;
  },

  addCrewMember(name, role, avatar) {
    const newMember = {
      id: Math.max(...this.state.crew.map((m) => m.id), 0) + 1,
      name,
      role,
      avatar,
    };
    this.state.crew.push(newMember);
    this.renderCrew();
    this.showNotification(`✅ ${name} added to your crew!`);
  },

  removeMember(id) {
    const member = this.state.crew.find((m) => m.id === id);
    this.state.crew = this.state.crew.filter((m) => m.id !== id);
    this.renderCrew();
    this.showNotification(`👋 ${member.name} removed from crew.`);
  },

  contactMember(name) {
    this.showNotification(`💬 Opening chat with ${name}...`);
  },

  // ============================================
  // Event Management
  // ============================================

  renderEvents() {
    const container = document.getElementById('eventsList');
    container.innerHTML = '';

    this.state.events.forEach((event) => {
      const card = this.createEventCard(event);
      container.appendChild(card);
    });
  },

  createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';

    const eventDate = new Date(event.date + 'T' + event.time);
    const formattedDate = eventDate.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
    const formattedTime = eventDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    card.innerHTML = `
      <div class="event-card-header">
        <h3>${event.name}</h3>
        <div class="event-date">
          <i class="fas fa-calendar"></i>
          <span>${formattedDate} at ${formattedTime}</span>
        </div>
      </div>
      <div class="event-card-body">
        <div class="event-details">
          <div class="event-detail">
            <i class="fas fa-map-marker-alt"></i>
            <span>${event.beach}</span>
          </div>
          <div class="event-detail">
            <i class="fas fa-users"></i>
            <span>${event.attendees} attendees</span>
          </div>
        </div>
        <p style="color: #666; margin-bottom: 15px;">${event.description}</p>
        <button class="btn btn-primary" onclick="ShoreSquad.joinEvent(${event.id})">Join Event</button>
      </div>
    `;

    return card;
  },

  handleEventSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const inputs = e.target.querySelectorAll('input, textarea');
    const [name, date, time, description] = Array.from(inputs).map((el) => el.value);

    const newEvent = {
      id: Math.max(...this.state.events.map((ev) => ev.id), 0) + 1,
      name,
      beach: 'User Location',
      date,
      time,
      attendees: 1,
      description: description || 'Community beach cleanup',
    };

    this.state.events.push(newEvent);
    this.renderEvents();
    this.closeModal();
    this.showNotification(`🎉 Event "${name}" created successfully!`);

    // Reset form
    e.target.reset();
  },

  showEventModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  },

  closeModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  },

  joinEvent(id) {
    const event = this.state.events.find((e) => e.id === id);
    event.attendees += 1;
    this.renderEvents();
    this.showNotification(`🌊 You joined "${event.name}"! See you at the beach!`);
  },

  // ============================================
  // Weather Management
  // ============================================

  updateWeather() {
    const container = document.getElementById('weatherCards');
    const weather = this.state.weather;

    container.innerHTML = `
      <div class="weather-card">
        <i class="fas fa-sun"></i>
        <h3>${weather.temperature}°F</h3>
        <p>${weather.condition}</p>
      </div>
      <div class="weather-card">
        <i class="fas fa-droplet"></i>
        <h3>${weather.humidity}%</h3>
        <p>Humidity</p>
      </div>
      <div class="weather-card">
        <i class="fas fa-wind"></i>
        <h3>${weather.windSpeed} mph</h3>
        <p>Wind Speed</p>
      </div>
      <div class="weather-card">
        <i class="fas fa-shield-sun"></i>
        <h3>${weather.uvIndex}/10</h3>
        <p>UV Index</p>
      </div>
    `;

    // In production, fetch real weather data from an API
    // this.fetchWeatherData();
  },

  fetchWeatherData() {
    // Placeholder for actual API integration (OpenWeatherMap, etc.)
    console.log('📡 Fetching real-time weather data...');
  },

  // ============================================
  // UI Utilities
  // ============================================

  showNotification(message) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: linear-gradient(135deg, #00A6E4 0%, #1B998F 100%);
      color: white;
      padding: 15px 25px;
      border-radius: 50px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      font-weight: 600;
      z-index: 10000;
      animation: slideIn 0.3s ease;
      max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    // Auto remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease forwards';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  },

  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },

  // ============================================
  // Performance Optimizations
  // ============================================

  // Debounce function for search/filter operations
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Lazy load images
  lazyLoadImages() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach((img) => imageObserver.observe(img));
    }
  },

  // Service Worker registration for offline support (future enhancement)
  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => console.log('✅ Service Worker registered'))
        .catch((err) => console.log('❌ Service Worker registration failed:', err));
    }
  },
};

// ============================================
// Application Startup
// ============================================

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  ShoreSquad.init();

  // Log for debugging
  window.ShoreSquad = ShoreSquad;
  console.log('💡 Tip: Access ShoreSquad state with window.ShoreSquad');
});

// Performance monitoring
if (window.performance && window.performance.timing) {
  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('⏱️ Page load time: ' + pageLoadTime + 'ms');
  });
}
