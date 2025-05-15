
const extensions = [
  {
      "logo": "./images/logo-devlens.svg",
      "name": "DevLens",
      "description": "Quickly inspect page layouts and visualize element boundaries.",
      "isActive": true
  },
  {
      "logo": "./images/logo-style-spy.svg",
      "name": "StyleSpy",
      "description": "Instantly analyze and copy CSS from any webpage element.",
      "isActive": true
  },
  {
      "logo": "./images/logo-speed-boost.svg",
      "name": "SpeedBoost",
      "description": "Optimizes browser resource usage to accelerate page loading.",
      "isActive": false
  },
  {
      "logo": "./images/logo-json-wizard.svg",
      "name": "JSONWizard",
      "description": "Formats, validates, and prettifies JSON responses in-browser.",
      "isActive": true
  },
  {
      "logo": "./images/logo-tab-master-pro.svg",
      "name": "TabMaster Pro",
      "description": "Organizes browser tabs into groups and sessions.",
      "isActive": true
  },
  {
      "logo": "./images/logo-viewport-buddy.svg",
      "name": "ViewportBuddy",
      "description": "Simulates various screen resolutions directly within the browser.",
      "isActive": false
  },
  {
      "logo": "./images/logo-markup-notes.svg",
      "name": "Markup Notes",
      "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
      "isActive": true
  },
  {
      "logo": "./images/logo-grid-guides.svg",
      "name": "GridGuides",
      "description": "Overlay customizable grids and alignment guides on any webpage.",
      "isActive": false
  },
  {
      "logo": "./images/logo-palette-picker.svg",
      "name": "Palette Picker",
      "description": "Instantly extracts color palettes from any webpage.",
      "isActive": true
  },
  {
      "logo": "./images/logo-link-checker.svg",
      "name": "LinkChecker",
      "description": "Scans and highlights broken links on any page.",
      "isActive": true
  },
  {
      "logo": "./images/logo-dom-snapshot.svg",
      "name": "DOM Snapshot",
      "description": "Capture and export DOM structures quickly.",
      "isActive": false
  },
  {
      "logo": "./images/logo-console-plus.svg",
      "name": "ConsolePlus",
      "description": "Enhanced developer console with advanced filtering and logging.",
      "isActive": true
  }
];

const list = document.getElementById('extensionsList');
const filter = document.querySelectorAll('.filter');
const changeMode = document.getElementById('mode');
let listAll= 'all';

function listExtensions(filter) {
  list.innerHTML = '';
  
  const filtered = filter === 'all' 
      ? extensions 
      : extensions.filter(extension => filter === 'active' ? extension.isActive : !extension.isActive);
  
  filtered.forEach(extension => {
      const card = document.createElement('div');
      card.className = 'card';
      
      card.innerHTML = `
          <div class="card-top">
              <div class="card-logo">
                  <img src="${extension.logo}" alt="${extension.name}">
              </div>
              <div class="card-info">
                  <h3>${extension.name}</h3>
                  <p>${extension.description}</p>
              </div>
          </div>
          <div class="card-actions">
              <button class="remove">Remove</button>
              <label class="activate">
                  <input type="checkbox" ${extension.isActive ? 'checked' : ''}>
                  <span class="check"></span>
              </label>
          </div>
      `;
      
      const toggle = card.querySelector('input[type="checkbox"]');
      toggle.addEventListener('change', () => {
          extension.isActive = toggle.checked;
          if (listAll !== 'all') {
              listExtensions(currentFilter);
          }
      });
      
      const removeBtn = card.querySelector('.remove');
      removeBtn.addEventListener('click', () => {
          const index = extensions.indexOf(extension);
          extensions.splice(index, 1);
          listExtensions(listAll);
      });
      
      list.appendChild(card);
  });
}

filter.forEach(tab => {
  tab.addEventListener('click', () => {
      filter.forEach(tab => tab.classList.remove('active'));
      tab.classList.add('active');
      listAll = tab.dataset.filter;
      listExtensions(listAll);
  });
});

changeMode.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

listExtensions('all');
