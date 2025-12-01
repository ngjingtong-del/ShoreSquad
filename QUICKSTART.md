# ShoreSquad - Quick Start Guide

## 🚀 Launch Your Project in 30 Seconds

### Option 1: Using Live Server (Recommended for VS Code)

1. **Open the project folder in VS Code**
   ```bash
   code .
   ```

2. **Right-click on `index.html`** in the file explorer

3. **Select "Open with Live Server"**

4. **Your browser opens automatically to `http://localhost:5500`** 🎉

### Option 2: Using Python (Quick HTTP Server)

```bash
# Python 3
python -m http.server 5500

# Python 2
python -m SimpleHTTPServer 5500
```

Then open `http://localhost:5500` in your browser.

### Option 3: Using Node.js (npx)

```bash
# If you have Node.js installed
npx http-server -p 5500
```

---

## 📁 Project Structure

```
ShoreSquad/
├── 📄 index.html              ← Main HTML file (START HERE!)
├── 📁 css/
│   └── 🎨 styles.css          ← All styling & colors
├── 📁 js/
│   └── ⚙️ app.js              ← Interactive features & logic
├── 📁 .vscode/
│   └── ⚙️ settings.json       ← Live Server config
├── 📄 .gitignore              ← Git ignore rules
├── 📄 README.md               ← Full documentation
├── 📄 DESIGN.md               ← Design system & specs
└── 📄 QUICKSTART.md           ← This file!
```

---

## 🎨 Customize the Design

### Change Colors
Edit `css/styles.css` - Look for the `:root` section:

```css
:root {
    --color-primary: #00A6E4;      /* Ocean Blue */
    --color-secondary: #FDB913;    /* Sandy Beige */
    --color-accent: #1B998F;       /* Teal */
    --color-accent-light: #90EE90; /* Lime Green */
    /* ... etc ... */
}
```

### Update Content
Edit `index.html` to change:
- Text, titles, descriptions
- Links and button text
- Navigation menu items

### Add Features
Edit `js/app.js` to:
- Add new functions to ShoreSquad object
- Update state data
- Add event listeners
- Modify UI behavior

---

## 🔧 Key Features to Explore

### 1. **Interactive Beaches**
- Located in the "Map" section
- Click any beach card to see it in action
- Beaches are stored in `ShoreSquad.state.beaches`

### 2. **Crew Management**
- Add/remove team members
- Located in the "My Crew" section
- Manage crew in `ShoreSquad.state.crew`

### 3. **Event Creation**
- Create cleanup events with the button
- Modal dialog pops up
- Form validation works!

### 4. **Weather Tracking**
- Real-time weather display
- Located in "Weather Conditions" section
- Easy to integrate real API

### 5. **Notifications**
- Toast messages appear in top-right
- Automatic disappear after 3 seconds
- Used throughout the app

---

## 💡 JavaScript Tips

### Access ShoreSquad in Console
1. Open DevTools: **F12**
2. Go to **Console** tab
3. Try these commands:

```javascript
// View all data
window.ShoreSquad.state

// Add a crew member
ShoreSquad.addCrewMember('Your Name', 'Volunteer', 'YN')

// Show notification
ShoreSquad.showNotification('Hello World!')

// Create an event
ShoreSquad.state.events.push({
  id: 3,
  name: 'My Cleanup',
  beach: 'My Beach',
  date: '2025-06-30',
  time: '10:00',
  attendees: 5,
  description: 'Cool cleanup!'
})

// Render the events
ShoreSquad.renderEvents()
```

### Common Tasks

**Add a new beach:**
```javascript
ShoreSquad.state.beaches.push({
  id: 4,
  name: 'My Beach',
  location: 'My City',
  difficulty: 'Easy',
  description: 'Amazing beach!',
  image: 'https://via.placeholder.com/400x300',
  coords: { lat: 34.0522, lng: -118.2437 }
});
ShoreSquad.renderBeaches();
```

**Update the weather:**
```javascript
ShoreSquad.state.weather = {
  temperature: 75,
  condition: 'Partly Cloudy',
  humidity: 70,
  windSpeed: 5,
  uvIndex: 6
};
ShoreSquad.updateWeather();
```

---

## 🎨 Customization Ideas

### Easy Wins
- [ ] Change brand colors in CSS variables
- [ ] Update navigation menu items in HTML
- [ ] Modify hero section text in HTML
- [ ] Add more beaches to the data
- [ ] Change font sizes and spacing

### Medium Complexity
- [ ] Integrate real weather API (OpenWeatherMap)
- [ ] Add Google Maps integration
- [ ] Create user profile system
- [ ] Add image uploads
- [ ] Implement search/filter

### Advanced Features
- [ ] Backend with Node.js/Express
- [ ] Database integration (Firebase)
- [ ] User authentication
- [ ] Real-time chat with WebSockets
- [ ] Mobile app with React Native

---

## 🐛 Troubleshooting

### Live Server Not Starting?
- Ensure Live Server extension is installed (Ctrl+Shift+X)
- Right-click index.html specifically
- Check VS Code status bar for errors

### Styles Not Updating?
- Hard refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
- Check CSS file is linked in HTML
- Verify file path: `css/styles.css`

### JavaScript Errors?
- Open DevTools: **F12**
- Check Console tab for error messages
- Verify file path: `js/app.js`

### Git Issues?
```bash
# Check git status
git status

# View recent commits
git log --oneline

# Stage all changes
git add .

# Commit with message
git commit -m "Your message here"
```

---

## 📚 Learning Resources

### HTML5
- [MDN HTML Guide](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

### CSS3
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

### JavaScript
- [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [ES6 Features](https://es6-features.org/)
- [DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

### Web Design
- [WCAG Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Web Performance](https://developers.google.com/web/fundamentals/performance)

---

## 🎯 Next Steps

1. **Explore the code** - Open each file and understand the structure
2. **Customize content** - Update beaches, events, and crew members
3. **Modify styles** - Play with colors and layouts
4. **Add features** - Implement new functionality in JavaScript
5. **Deploy** - Share your site with the world!

---

## 🌊 You're Ready!

Everything is set up and ready to go. Start by:

1. Opening `index.html` with Live Server
2. Checking out each section
3. Opening the browser console (F12) and experimenting
4. Making your first customization
5. Committing to git with `git commit -m "Your message"`

**Happy building!** 🚀

---

**Questions?** Check out:
- `README.md` - Full project documentation
- `DESIGN.md` - Design system and specifications
- Comments in `js/app.js` - Code documentation
- Comments in `css/styles.css` - CSS documentation

**Tip:** Keep your browser DevTools open while developing. It's your best friend! 🛠️
