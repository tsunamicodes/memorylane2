body {
  font-family: 'Fredoka', sans-serif;
  background: linear-gradient(to bottom, #fffbea, #e0eafc);
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.page {
  opacity: 0;
  transition: opacity 1s ease-in-out;
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
}

.page.active {
  opacity: 1;
  pointer-events: all;
  position: relative;
}

/* Decorations */
.minecraft-blocks {
  background: url('images/blocks-bg.png') center top / cover no-repeat;
  position: fixed;
  width: 100%;
  height: 200px;
  top: 0;
  left: 0;
}
.butterflies, .flowers {
  background-repeat: no-repeat;
  position: fixed;
  pointer-events: none;
}
.butterflies { top: 20px; right: 20px; width: 150px; height: 150px; background-image: url('images/butterflies.png'); }
.flowers { bottom: 20px; left: 20px; width: 200px; height: 200px; background-image: url('images/flowers.png'); }

/* Welcome screen */
.welcome-content {
  position: absolute;
  top: 40%; left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}
.minecraft-title { font-size: 3rem; color: #2e3a59; }
.press-enter { margin-top: 1rem; font-size: 1.2rem; animation: blink 1.2s infinite; }
.creeper-face { font-size: 5rem; margin-top: 1rem; }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Grid Layout */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 2rem;
  margin-top: 2rem;
}
.photo-item {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.2s;
}
.photo-item:hover {
  transform: translateY(-5px);
}
.photo {
  width: 100%;
  display: block;
}
.caption {
  padding: 0.8rem;
  font-size: 0.9rem;
  border-top: 1px solid #eee;
}
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}
.nav-btn {
  background: #2e3a59;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
.nav-btn:hover { opacity: 0.9; }

/* Edit Mode UI */
#edit-mode-ui {
  position: fixed;
  top: 10px; right: 10px;
}
#edit-toggle {
  background: #ff9f43;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
}
.upload-btn {
  display: inline-block;
  background: #1dd1a1;
  color: white;
  padding: 0.6rem 1rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

/* Fade-in */
.fade-in {
  animation: fadeIn 1s ease-in-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
