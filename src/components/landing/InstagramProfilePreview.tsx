import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './instagram-profile.css';

const InstagramProfilePreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const appWindowRef = useRef<HTMLDivElement>(null);
  const iconSwitcherRef = useRef<HTMLInputElement>(null);
  const iconRowRef = useRef<HTMLInputElement>(null);
  const iconGridRef = useRef<HTMLInputElement>(null);
  const displayTabRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // No initial setting - let it be visible immediately
    
    // Just add a subtle animation to draw attention
    gsap.fromTo(containerRef.current, 
      { y: 20, scale: 0.98 },
      {
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out"
      }
    );
    
    // Handle theme toggle
    const iconSwitcher = iconSwitcherRef.current;
    if (iconSwitcher) {
      iconSwitcher.addEventListener('change', function(event) {
        const checked = (event.target as HTMLInputElement).checked;
        if (checked) {
          document.body.setAttribute('data-theme', 'dark');
        } else {
          document.body.removeAttribute('data-theme');
        }
      });
    }
    
    // Handle display mode toggle
    const iconRow = iconRowRef.current;
    const iconGrid = iconGridRef.current;
    const displayTab = displayTabRef.current;
    
    if (iconRow && iconGrid && displayTab) {
      iconRow.addEventListener('change', function() {
        displayTab.setAttribute('data-post', 'full');
        iconGrid.parentElement?.setAttribute('data-state', 'muted');
        iconRow.parentElement?.setAttribute('data-state', 'active');
      });
      
      iconGrid.addEventListener('change', function() {
        displayTab.removeAttribute('data-post');
        iconGrid.parentElement?.setAttribute('data-state', 'active');
        iconRow.parentElement?.setAttribute('data-state', 'muted');
      });
    }
    
    return () => {
      if (iconSwitcher) {
        iconSwitcher.removeEventListener('change', () => {});
      }
      if (iconRow) {
        iconRow.removeEventListener('change', () => {});
      }
      if (iconGrid) {
        iconGrid.removeEventListener('change', () => {});
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className="instagram-preview-container">
      <div ref={appWindowRef} className="app-window" data-js-target-app>
        <div className="menu">
          <div className="menu-row">
            <a href="#" className="user">followfuse</a>
            <div className="icon">
              <label className="icon-switcher" data-js-icon-switcher>
                <input ref={iconSwitcherRef} className="control" type="checkbox" />
                <div className="peg"></div>
                <div className="bg"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="scroll">
          <div className="main-content">
            <div className="header-row">
              <div className="avatar">
                <a href="#">
                  <div className="avatar-icon">
                    <img 
                      className="icon" 
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                      alt="Profile" 
                    />
                  </div>
                </a>
              </div>
              <div className="stats">
                <div className="stats-row">
                  <div className="stats">
                    <div className="stats-cell">
                      <div className="data">127</div>
                      <div className="label">Posts</div>
                    </div>
                    <div className="stats-cell">
                      <div className="data">15.2K</div>
                      <div className="label">Followers</div>
                    </div>
                    <div className="stats-cell">
                      <div className="data">342</div>
                      <div className="label">Following</div>
                    </div>
                  </div>
                  <div className="action">
                    <a href="#" className="btn">Follow</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="description-row">
              <div className="headline">Follow Fuse</div>
              <div className="description">Grow your Instagram audience organically</div>
              <a href="#" className="link">followfuse.com</a>
            </div>
            <div className="story-highlights">
              <div className="label">Story Highlights</div>
            </div>
            <div className="tabs-row">
              <div className="tab">
                <label className="icon-grid" data-js-icon-grid data-state="active">
                  <input ref={iconGridRef} className="control" type="checkbox" defaultChecked />
                  <div className="icon"></div>
                </label>
              </div>
              <div className="tab">
                <label className="icon-row" data-js-icon-row data-state="muted">
                  <input ref={iconRowRef} className="control" type="checkbox" />
                  <div className="icon"></div>
                </label>
              </div>
              <div className="tab">
                <div className="icon-tagged">
                  <div className="avatar"></div>
                </div>
              </div>
            </div>
            <div ref={displayTabRef} className="display-tab" data-js-display-tab>
              <div className="post" style={{backgroundImage: 'url(https://source.unsplash.com/800x400/?social-media)'}}></div>
              <div className="post" style={{backgroundImage: 'url(https://source.unsplash.com/800x400/?instagram)'}}></div>
              <div className="post" style={{backgroundImage: 'url(https://source.unsplash.com/800x400/?marketing)'}}></div>
              <div className="post" style={{backgroundImage: 'url(https://source.unsplash.com/800x400/?promotion)'}}></div>
              <div className="post" style={{backgroundImage: 'url(https://source.unsplash.com/800x400/?influencer)'}}></div>
              <div className="post" style={{backgroundImage: 'url(https://source.unsplash.com/800x400/?business)'}}></div>
              <div className="post" style={{backgroundImage: 'url(https://source.unsplash.com/800x400/?content)'}}></div>
              <div className="post" style={{backgroundImage: 'url(https://source.unsplash.com/800x400/?branding)'}}></div>
              <div className="post" style={{backgroundImage: 'url(https://source.unsplash.com/800x400/?social)'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramProfilePreview; 