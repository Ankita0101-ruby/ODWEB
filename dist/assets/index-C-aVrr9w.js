(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(i){if(i.ep)return;i.ep=!0;const t=a(i);fetch(i.href,t)}})();const y={voyage:{id:"voyage",name:"The Voyage",greekName:"Ὁ Πλοῦς καὶ ἡ Καινοτομία",icon:"🧭",tagline:"Journey to Innovation — Navigating Uncharted Waters",coords:"37°58'N 23°43'E — Island of Circe & Open Sea",mapPos:{x:18,y:43},heroImg:"/images/voyage_hero.jpg",quote:"“Every innovator must conquer the journey before their vision finds its home.”",quoteAuthor:"Journey to Innovation — Chapter I",overview:"The Voyage represents the courageous first step into uncharted territories. Like Odysseus navigating tempestuous waters and mythical sea gods, true innovation requires bold leadership, adaptive steering, and the resilience to conquer unknown challenges.",stats:[{label:"Voyage Milestone",value:"Phase I: Discovery"},{label:"Navigational Guide",value:"Celestial Astrolabe"},{label:"Primary Objective",value:"Chart New Horizons"},{label:"Core Competency",value:"Strategic Resilience"}],artifacts:[{name:"The Golden Astrolabe",origin:"Phoenician & Achaean Navigators",desc:"An ancient celestial instrument used to measure star elevation and navigate uncharted sea routes.",power:"Visionary Sight +95",badge:"Navigation Emblem"},{name:"The Leather Bag of Winds",origin:"Gift of Aeolus, Lord of the Winds",desc:"A silver-tied ox-hide bag containing gale winds to accelerate progress during stagnant calms.",power:"Momentum Boost +92",badge:"Mythic Relic"},{name:"Flagship Helm of Courage",origin:"Shipyards of Mycenae",desc:"Carved oak rudder that steers through storms, whirlpools, and hostile crags without flinching.",power:"Steering Mastery +90",badge:"Ship Artifact"}],loreChapters:[{title:"Pioneering Unmapped Frontiers",content:"Every legendary journey begins when visionaries leave comfortable shores. Pushing off into wine-dark waters, the expedition embraces risk and uncertainty as necessary catalysts for groundbreaking breakthroughs."},{title:"Navigating Storms & Resistance",content:"Just as Poseidon summoned violent tempests to stall Odysseus, innovative ventures face skepticism and turbulent headwinds. Success belongs to those who adjust their sails while keeping their gaze fixed on the goal."},{title:"The Astrolabe of Continuous Direction",content:"By aligning with enduring principles rather than temporary storms, pioneers maintain steady velocity across open ocean expanses."}],challenge:{question:"Your expedition faces an unmapped sea current pulling toward dangerous reefs. How do you lead your crew forward?",options:[{text:"Use the Golden Astrolabe to calculate celestial coordinates and steer into open deep water.",correct:!0,feedback:"A master navigator's decision! You bypass the reef and discover a faster trade current."},{text:"Drop anchor immediately and wait for the weather to clear.",correct:!1,feedback:"The current drags your ship into stagnant waters, delaying the voyage."},{text:"Abandon course and return to the safety of the starting harbor.",correct:!1,feedback:"You miss the opportunity for groundbreaking discovery!"}]}},realms:{id:"realms",name:"The Realms",greekName:"Τὰ Βασίλεια καὶ αἱ Νῆσοι",icon:"🏛️",tagline:"Architectural Pillars of Knowledge & Domain Sanctuaries",coords:"36°25'N 25°26'E — Land of the Cyclopes",mapPos:{x:45,y:30},heroImg:"/images/realms_hero.jpg",quote:"“Build upon granite pillars of wisdom, for great domains are constructed stone by stone upon solid foundations...”",quoteAuthor:"Journey to Innovation — Chapter II",overview:"The Realms represent the foundational pillars, domains, and architectural frameworks of progress. From sacred marble sanctuaries to island archipelagos, each domain fosters unique capabilities, specialized talents, and enduring structures.",stats:[{label:"Sovereign Domains",value:"5 Core Realms"},{label:"Pillar Style",value:"Classical Doric & Ionic"},{label:"Sanctuary Guardian",value:"Athena Polias"},{label:"Core Attribute",value:"Structural Integrity"}],artifacts:[{name:"Parthenon Keystone Seal",origin:"Architects of Athens",desc:"A carved marble seal symbolizing perfect proportion, balance, and structural permanence.",power:"Framework Stability +98",badge:"Architectural Relic"},{name:"The Holy Moly Herb",origin:"Hermes' Gift on Island Aeaea",desc:"A rare divine flower with black roots and white petals that renders the bearer immune to illusions and magic.",power:"Clarity & Immunity +96",badge:"Sacred Flora"},{name:"Amphora of Divine Knowledge",origin:"Oracle Sanctuary of Delphi",desc:"A golden vessel containing liquid wisdom to enlighten leaders during complex decision-making.",power:"Insight +90",badge:"Sacred Vessel"}],loreChapters:[{title:"Establishing Structural Foundations",content:"No innovation survives without robust architecture. Like the grand marble temples of Hellas, sustainable systems require deep foundations, clear principles, and harmonious design."},{title:"The Diversity of Domain Talents",content:"Across the archipelagos of the Mediterranean, each island contributed distinct crafts—metalworking from Lemnos, navigation from Scheria, and strategy from Athens. Innovation thrives when diverse expertise unites."},{title:"Guardian Sanctuaries",content:"Protecting core values ensures that expansion does not dilute identity or compromise standards of excellence."}],challenge:{question:"You are tasked with expanding a domain sanctuary into new territory. What is your architectural priority?",options:[{text:"Lay deep granite foundations and erect marble pillars before raising the roof structure.",correct:!0,feedback:"Excellent structural foresight! The sanctuary withstands both earthquakes and century storms."},{text:"Build decorative facades quickly to impress neighboring city-states.",correct:!1,feedback:"Without solid foundations, the first seasonal storm cracks the outer walls."},{text:"Copy an old wooden design from a century ago without modification.",correct:!1,feedback:"The design fails to meet modern scale demands."}]}},protocols:{id:"protocols",name:"Realm Protocols",greekName:"Ὁ Κανὼν καὶ αἱ Θεσμοί",icon:"📜",tagline:"Sacred Codes of Governance, Trust & Operational Decrees",coords:"38°29'N 22°30'E — Aeolus Wind Island",mapPos:{x:72,y:38},heroImg:"/images/protocols_hero.jpg",quote:"“Trust is the unwritten law of civilized realms, where sacred codes protect the guest and honor the covenant...”",quoteAuthor:"Journey to Innovation — Chapter III",overview:"Realm Protocols dictate the unwritten divine laws governing collaboration, ethics, and mutual trust. Foremost among them is Xenia—the sacred code of hospitality and integrity—ensuring seamless operational harmony across all teams.",stats:[{label:"Core Protocol",value:"Sacred Trust (Xenia)"},{label:"Governance Body",value:"Olympian Decree Council"},{label:"Compliance Rate",value:"100% Integrity"},{label:"Enforcement Shield",value:"Aegis of Athena"}],artifacts:[{name:"The Golden Scroll of Xenia",origin:"Temple of Zeus at Olympia",desc:"An inscribed bronze scroll outlining sacred codes of mutual respect, hospitality, and ethical conduct.",power:"Trust Integration +97",badge:"Governance Relic"},{name:"Oracle's Signet Ring",origin:"Pythian Temple of Delphi",desc:"A laurel-engraved ring guaranteeing safe passage and authentic diplomatic representation across all city-states.",power:"Authenticity Seal +94",badge:"Diplomatic Token"},{name:"Libation Bowl of Covenant",origin:"Mycenaean Royal Court",desc:"A silver phiale used to consecrate solemn pacts and long-term strategic alliances.",power:"Alliance Honor +91",badge:"Treaty Vessel"}],loreChapters:[{title:"The Law of Mutual Hospitality (Xenia)",content:"In ancient times, travelers were welcomed with shelter, nourishment, and honor before asking their business. In modern innovation, open collaboration and mutual respect form the bedrock of high-performing teams."},{title:"Governance & Operational Clarity",content:"Clear protocols prevent friction. When standards of engagement are transparent, execution moves with speed and confidence."},{title:"Consequences of Protocol Breach",content:"Those who break sacred covenants lose trust and invite ruin. Integrity is non-negotiable."}],challenge:{question:"A new partner arrives requesting access to your realm's core knowledge base. How do you apply Protocol Xenia?",options:[{text:"Establish a clear onboarding protocol: offer genuine collaboration while verifying alignment with core values.",correct:!0,feedback:"A masterclass in governance! The partner becomes a trusted long-term ally."},{text:"Grant unrestricted root access without verifying credentials or alignment.",correct:!1,feedback:"Protocol violation! Unverified changes compromise system security."},{text:"Refuse to communicate or share any information.",correct:!1,feedback:"Silo mentality stifles joint innovation and creates isolation."}]}},legions:{id:"legions",name:"The Legions",greekName:"Αἱ Λεγεῶνες καὶ ἡ Ἰσχύς",icon:"🛡️",tagline:"Unified Execution, Hoplite Shield Wall & Strategic Vanguard",coords:"37°04'N 22°25'E — Scylla & Land of the Dead",mapPos:{x:38,y:70},heroImg:"/images/legions_hero.jpg",quote:"“Stand shield to shield in unbroken alignment, for unity transforms individual strength into invincible force...”",quoteAuthor:"Journey to Innovation — Chapter IV",overview:"The Legions represent unified execution, tactical discipline, and collective strength. Operating like an unbroken Achaean hoplite phalanx, aligned teams overcome monumental obstacles through synchronized focus and unwavering defense.",stats:[{label:"Phalanx Formation",value:"Overlap Shield Wall"},{label:"Execution Speed",value:"Synchronized Pulse"},{label:"Tactical Mastermind",value:"Odysseus Strategy"},{label:"Defense Rating",value:"Impenetrable +99"}],artifacts:[{name:"Spartan Bronze Aspis Shield",origin:"Spartan & Salamis Guard",desc:"A massive bronze-faced ox-hide shield that overlaps with comrades to form an impenetrable phalanx wall.",power:"Collective Defense +99",badge:"Hoplite Relic"},{name:"The Trojan Horse Blueprint",origin:"Conceived by Odysseus",desc:"The legendary tactical diagram demonstrating how creative strategy breaches unyielding obstacles.",power:"Strategic Subterfuge +98",badge:"Mastermind Relic"},{name:"Corinthian Crested Helmet",origin:"Vanguard Officers",desc:"A heavy cast-bronze helmet providing clear line-of-sight command during intense campaign maneuvers.",power:"Tactical Focus +92",badge:"Armor Relic"}],loreChapters:[{title:"The Power of the Phalanx Shield Wall",content:"A hoplite shield protected not only the warrior carrying it, but also the comrade standing to his left. Alignment means looking out for one another and executing as one cohesive unit."},{title:"Out-Thinking Brute Force",content:"When nine years of direct siege failed to breach the walls of Troy, Odysseus applied creative strategic thinking. The wooden horse proved that genius strategy succeeds where brute force stalls."},{title:"Resilience in the Face of Setbacks",content:"Even when facing perilous trials, aligned legions absorb blows, adapt tactics, and press forward to victory."}],challenge:{question:"Your team encounters a formidable technical roadblock that brute force cannot solve. How do you deploy your legion?",options:[{text:"Convene a strategic workshop, pivot approach with creative problem-solving (Trojan Horse tactic), and execute in unison.",correct:!0,feedback:"Tactical brilliance! The creative workaround solves the bottleneck effortlessly."},{text:"Order everyone to double down on the exact same failing brute-force method.",correct:!1,feedback:"Resource exhaustion! The team burns out without making progress."},{text:"Disband the team and abandon the initiative.",correct:!1,feedback:"Surrender forfeits all gains achieved so far."}]}},odyssey:{id:"odyssey",name:"The Odyssey",greekName:"Ἡ Ὀδύσσεια καὶ ἡ Τελείωσις",icon:"👑",tagline:"The Pinnacle of Triumph, Golden Mastery & Return Home",coords:"38°22'N 20°43'E — Kingdom of Ithaca",mapPos:{x:76,y:71},heroImg:"/images/odyssey_hero.jpg",quote:"“Rejoice in the golden hall of achievement! The bow is strung, the journey fulfilled, and victory crown'd!”",quoteAuthor:"Journey to Innovation — Chapter V",overview:"The Odyssey is the grand culmination of endurance, wisdom, and triumphant achievement (Nostos). It celebrates the ultimate realization of vision, reclaiming sovereign mastery, and inspiring future generations of innovators.",stats:[{label:"Journey Duration",value:"Completed Cycle"},{label:"Ultimate Relic",value:"Great Bow of Odysseus"},{label:"Achievement Tier",value:"Golden Mastery"},{label:"Legacy Status",value:"Eternal Inspiration"}],artifacts:[{name:"The Great Bow of Odysseus",origin:"Gift from Iphitus",desc:"A composite bow that only the rightful king possessed the strength and mastery to string and shoot through 12 axe heads.",power:"Pinnacle Precision +100",badge:"Royal Relic"},{name:"Golden Olive-Tree Bed",origin:"Handcrafted by Odysseus",desc:"The immovable foundation carved into the living olive tree—symbolizing deep roots and permanent legacy.",power:"Unshakable Legacy +99",badge:"Dynastic Emblem"},{name:"Laurel Crown of Nostos",origin:"Sanctuary of Athena Ithaka",desc:"Woven golden laurel wreath awarded to champions upon completing their epic journey to innovation.",power:"Sovereign Glory +96",badge:"Crown Relic"}],loreChapters:[{title:"The Trial of Mastery (Bending the Bow)",content:"Many attempted to string the great bow, but only the one with true mastery could bend it effortlessly and send the arrow true. Mastery is earned through years of practice, trials, and resilience."},{title:"Triumphant Reclaim & Realization",content:"Upon returning to Ithaca, Odysseus restored order, peace, and prosperity to his golden realm. True innovation concludes not just in ideas, but in fully delivered, transformative impact."},{title:"Inspiring the Next Generation",content:"The completion of an epic journey becomes the foundation for new horizons. The legacy of innovation continues forever."}],challenge:{question:"You stand before the final trial: stringing the Great Bow of Odysseus to seal your Journey to Innovation. What is your mind state?",options:[{text:"Breathe with calm focus, draw upon years of hard-won experience, string the bow smoothly, and shoot true.",correct:!0,feedback:"GOLDEN TRIUMPH! The arrow glides cleanly through all 12 axe sockets! Your Journey to Innovation is fulfilled in glory!"},{text:"Try to force the bow back with violent jerky motions.",correct:!1,feedback:"Without composure, the heavy horn bow resists your grip."},{text:"Hesitate and hand the bow to someone else.",correct:!1,feedback:"Leadership requires stepping up to complete the vision yourself."}]}}};class L{constructor(){this.ctx=null,this.isMuted=!1,this.ambientOsc=null,this.waveGain=null,this.bgMusic=null}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playBackgroundMusic(){this.bgMusic||(this.bgMusic=new Audio("/bg-music.mp3"),this.bgMusic.loop=!0,this.bgMusic.volume=.45);const e=()=>{this.init(),this.bgMusic.paused?this.bgMusic.play().then(()=>{console.log("Background music started successfully."),a()}).catch(s=>{console.warn("Autoplay prevented or failed, waiting for user interaction:",s)}):a()},a=()=>{document.removeEventListener("click",e),document.removeEventListener("touchstart",e),document.removeEventListener("keydown",e)};e(),document.addEventListener("click",e),document.addEventListener("touchstart",e),document.addEventListener("keydown",e)}toggleSound(){return this.init(),this.isMuted=!this.isMuted,this.bgMusic&&(this.isMuted?this.bgMusic.pause():this.bgMusic.play().catch(e=>console.warn("Error resuming bgMusic:",e))),this.isMuted||this.playLyreArpeggio(),!this.isMuted}playClick(){}playLyreArpeggio(){}playTriumph(){if(!(this.isMuted||!this.ctx))try{[440,554.37,659.25,880].forEach((a,s)=>{setTimeout(()=>{const i=this.ctx.createOscillator(),t=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(a,this.ctx.currentTime),t.gain.setValueAtTime(.2,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.8),i.connect(t),t.connect(this.ctx.destination),i.start(),i.stop(this.ctx.currentTime+.8)},s*150)})}catch(e){console.warn("Audio error:",e)}}}const d=new L;class x{constructor(e,a,s){this.container=document.getElementById(e),this.wrapper=document.getElementById(a),this.onSymbolSelect=s,this.init()}init(){if(!this.container||!this.wrapper)return;document.querySelectorAll(".map-pin").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation(),d.playClick();const i=a.getAttribute("data-symbol");i&&this.onSymbolSelect&&this.onSymbolSelect(i)})})}resetView(){this.wrapper&&(this.wrapper.style.transform="none")}}class O{constructor(){this.currentSymbolId=null,this.activeTab="lore",this.odysseyMap=null,this.unlockedStep=1,this.symbolOrder=["voyage","realms","protocols","legions","odyssey"]}init(){var E;d.playBackgroundMusic(),this.odysseyMap=new x("map-container","map-wrapper",l=>{this.handleSymbolClick(l)});const e=document.getElementById("map-container"),a=document.getElementById("map-wrapper"),s=document.getElementById("scroll-touch-btn"),i=document.getElementById("intro-opening-screen"),t=document.getElementById("intro-bg-video"),o=()=>{i&&!i.classList.contains("fade-out")&&(i.classList.add("fade-out"),setTimeout(()=>{i.style.display="none",a==null||a.classList.add("slide-in")},600))};t&&(t.muted=!1,t.play().catch(()=>{const l=()=>{t&&(t.muted=!1,t.play()),document.removeEventListener("click",l),document.removeEventListener("keydown",l)};document.addEventListener("click",l),document.addEventListener("keydown",l)}),t.addEventListener("ended",()=>{o()})),i==null||i.addEventListener("click",()=>{o()});const n=()=>{e&&!e.classList.contains("unfolded")&&e.classList.add("unfolded")};s==null||s.addEventListener("click",l=>{l.stopPropagation(),n()}),document.querySelectorAll(".symbol-nav .nav-pill").forEach(l=>{l.addEventListener("click",()=>{const g=l.getAttribute("data-symbol"),v=this.symbolOrder.indexOf(g)+1;v<=this.unlockedStep?(d.playClick(),this.openSymbolPage(g)):(d.playClick(),this.showLockedNotice(v))})}),(E=document.getElementById("brand-logo"))==null||E.addEventListener("click",()=>{d.playClick(),this.showMapView()});const c=document.getElementById("sound-btn");c==null||c.addEventListener("click",()=>{const l=d.toggleSound();c.querySelector(".btn-icon").textContent=l?"🔊":"🔇",c.querySelector(".btn-text").textContent=l?"Audio On":"Audio Off"});const u=document.getElementById("guide-btn"),h=document.getElementById("guide-modal"),I=document.getElementById("guide-close-btn"),C=document.getElementById("guide-confirm-btn");u==null||u.addEventListener("click",()=>{d.playClick(),h==null||h.classList.add("active")}),[I,C].forEach(l=>{l==null||l.addEventListener("click",()=>{d.playClick(),h==null||h.classList.remove("active")})});const b=document.getElementById("artifact-modal"),T=document.getElementById("modal-close-btn"),A=document.getElementById("art-confirm-btn");[T,A].forEach(l=>{l==null||l.addEventListener("click",()=>{d.playClick(),b==null||b.classList.remove("active")})});const f=document.getElementById("registration-modal"),w=document.getElementById("reg-close-btn"),m=document.getElementById("reg-form"),k=document.getElementById("reg-success-msg");w==null||w.addEventListener("click",()=>{d.playClick(),f==null||f.classList.remove("active")}),m==null||m.addEventListener("submit",l=>{var S;l.preventDefault(),d.playTriumph();const g=((S=document.getElementById("reg-team-name"))==null?void 0:S.value)||"your team",v=document.getElementById("odysseus-team-name");v&&(v.textContent=g),m.style.display="none",k&&(k.style.display="flex")}),this.initParticleCanvas(),window.addEventListener("hashchange",()=>this.handleHashRoute()),this.handleHashRoute(),this.updateSerialUnlockState()}handleSymbolClick(e){const a=this.symbolOrder.indexOf(e)+1;a<=this.unlockedStep?(a===this.unlockedStep&&this.unlockedStep<5&&(this.unlockedStep++,this.updateSerialUnlockState()),this.openSymbolPage(e)):this.showLockedNotice(a)}updateSerialUnlockState(){this.symbolOrder.forEach((a,s)=>{const i=s+1,t=document.getElementById(`pin-${a}`),o=document.getElementById(`pill-${a}`);if(i<=this.unlockedStep){t==null||t.classList.remove("locked"),t==null||t.classList.add("unlocked"),o==null||o.classList.remove("locked"),o==null||o.classList.add("unlocked");const n=t==null?void 0:t.querySelector(".action-prompt");n&&(n.classList.remove("prompt-status"),a==="voyage"?n.textContent="Click Here →":n.textContent=`Open Realm ${i} →`)}else t==null||t.classList.remove("unlocked"),t==null||t.classList.add("locked"),o==null||o.classList.remove("unlocked"),o==null||o.classList.add("locked")});for(let a=1;a<=4;a++){const s=document.getElementById(`trail-seg-${a}`);a<this.unlockedStep?s==null||s.classList.add("active"):s==null||s.classList.remove("active")}const e=document.getElementById("trail-status-text");if(e)if(this.unlockedStep>=5)e.textContent="🎉 All 5 Realms Unlocked! Complete Journey to Innovation Foot Path Trail Active.";else{const a=y[this.symbolOrder[this.unlockedStep-1]].name;e.textContent=`Step ${this.unlockedStep-1} of 5 Completed • Foot Path Trail Extended to ${a}!`}}showLockedNotice(e){var s;const a=(s=y[this.symbolOrder[e-2]])==null?void 0:s.name;alert(`🔒 This symbol is locked! Complete ${a} (Symbol ${e-1}) first to extend the brown foot path trail!`)}handleHashRoute(){const e=window.location.hash.replace("#","");y[e]?this.symbolOrder.indexOf(e)+1<=this.unlockedStep?this.openSymbolPage(e,!1):this.showMapView(!1):this.showMapView(!1)}showMapView(e=!0){e&&window.history.pushState(null,""," ");const a=document.getElementById("map-view"),s=document.getElementById("subpage-view");a==null||a.classList.add("active"),s==null||s.classList.remove("active"),document.querySelectorAll(".symbol-nav .nav-pill").forEach(i=>{i.getAttribute("data-symbol")===this.currentSymbolId?i.classList.add("active"):i.classList.remove("active")})}openSymbolPage(e,a=!0){const s=y[e];if(!s)return;const i=document.getElementById("map-container"),t=document.getElementById("map-wrapper");i&&!i.classList.contains("unfolded")&&(i.classList.add("unfolded"),t==null||t.classList.add("slide-in")),this.currentSymbolId=e,this.activeTab="lore",a&&(window.location.hash=e),document.querySelectorAll(".symbol-nav .nav-pill").forEach(c=>{c.getAttribute("data-symbol")===e?c.classList.add("active"):c.classList.remove("active")}),this.renderSubpageContent(s);const o=document.getElementById("map-view"),n=document.getElementById("subpage-view");o==null||o.classList.remove("active"),n==null||n.classList.add("active");const r=document.getElementById("subpage-content");r&&(r.scrollTop=0),d.playLyreArpeggio()}renderSubpageContent(e){var i;const a=document.getElementById("subpage-content");if(!a)return;if(e.id==="voyage"){this.renderVoyageAboutUs(a,e);return}if(e.id==="realms"){this.renderRealmsHackathon(a,e);return}if(e.id==="protocols"){this.renderProtocolsPage(a,e);return}if(e.id==="legions"){this.renderLegionsPage(a,e);return}if(e.id==="odyssey"){this.renderOdysseyPage(a,e);return}a.innerHTML=`
      <!-- Hero Section -->
      <section class="page-hero" style="background-image: url('${e.heroImg}');">
        <div class="hero-content">
          <button class="back-map-btn" id="back-to-map-btn">
            <span>&larr;</span> Return to Map & Foot Path
          </button>
          <h1 class="hero-main-title">
            <span class="hero-title-icon">${e.icon}</span>
            ${e.name}
          </h1>
          <div class="hero-greek-sub">${e.greekName}</div>
          <div class="hero-tagline">${e.tagline}</div>
        </div>

        <div class="hero-quote-box">
          <p class="quote-text">${e.quote}</p>
          <span class="quote-author">&mdash; ${e.quoteAuthor}</span>
        </div>
      </section>

      <!-- Main Body with Tabs -->
      <section class="page-body-container">
        <!-- Navigation Tab Bar -->
        <nav class="page-tab-bar">
          <button class="tab-btn active" data-tab="lore">
            <span>📜</span> Lore & Epic Tale
          </button>
          <button class="tab-btn" data-tab="artifacts">
            <span>🛡️</span> Artifact Vault (${e.artifacts.length})
          </button>
          <button class="tab-btn" data-tab="challenge">
            <span>⚔️</span> Realm Challenge
          </button>
          <button class="tab-btn" data-tab="stats">
            <span>🗺️</span> Chart Data
          </button>
        </nav>

        <!-- TAB 1: LORE CHAPTERS -->
        <div class="tab-panel active" id="panel-lore">
          <div class="lore-grid">
            <div class="lore-chapters-col">
              <div class="chapter-card">
                <h3 class="chapter-title">Overview of the Realm</h3>
                <p class="chapter-content">${e.overview}</p>
              </div>

              ${e.loreChapters.map((t,o)=>`
                <div class="chapter-card">
                  <h3 class="chapter-title">Chapter ${o+1}: ${t.title}</h3>
                  <p class="chapter-content">${t.content}</p>
                </div>
              `).join("")}
            </div>

            <div class="lore-sidebar-col">
              <div class="sidebar-box">
                <h4 class="sidebar-title">Realms Coordinates</h4>
                <div class="stats-list">
                  <div class="stat-item">
                    <span class="stat-lbl">Chart Grid:</span>
                    <span class="stat-val">${e.coords}</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-lbl">Symbol ID:</span>
                    <span class="stat-val">${e.id.toUpperCase()}</span>
                  </div>
                </div>
              </div>

              <div class="sidebar-box">
                <h4 class="sidebar-title">Mythic Attributes</h4>
                <div class="stats-list">
                  ${e.stats.map(t=>`
                    <div class="stat-item">
                      <span class="stat-lbl">${t.label}:</span>
                      <span class="stat-val">${t.value}</span>
                    </div>
                  `).join("")}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 2: ARTIFACT VAULT -->
        <div class="tab-panel" id="panel-artifacts">
          <div class="artifacts-grid">
            ${e.artifacts.map((t,o)=>`
              <div class="artifact-card">
                <div>
                  <span class="art-card-badge">${t.badge}</span>
                  <h3 class="art-card-title">${t.name}</h3>
                  <div class="art-card-origin">${t.origin}</div>
                  <p class="art-card-desc">${t.desc}</p>
                </div>
                <button class="inspect-btn" data-art-idx="${o}">Inspect Relic &rarr;</button>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- TAB 3: REALM CHALLENGE -->
        <div class="tab-panel" id="panel-challenge">
          <div class="challenge-card">
            <h3 class="chapter-title" style="margin-bottom:1rem;">Trial of Cunning & Courage</h3>
            <p class="challenge-question">${e.challenge.question}</p>
            <div class="options-list">
              ${e.challenge.options.map((t,o)=>`
                <button class="option-btn" data-opt-idx="${o}">
                  ${o+1}. ${t.text}
                </button>
              `).join("")}
            </div>
            <div class="challenge-feedback" id="challenge-feedback"></div>
          </div>
        </div>

        <!-- TAB 4: CHART DATA -->
        <div class="tab-panel" id="panel-stats">
          <div class="chapter-card">
            <h3 class="chapter-title">Geographical & Strategic Charting</h3>
            <div class="stats-list" style="margin-top:1.5rem; gap:1.2rem;">
              <div class="stat-item" style="padding-bottom:0.8rem;">
                <span class="stat-lbl">Realm Name:</span>
                <span class="stat-val">${e.name} (${e.greekName})</span>
              </div>
              <div class="stat-item" style="padding-bottom:0.8rem;">
                <span class="stat-lbl">Primary Coordinates:</span>
                <span class="stat-val">${e.coords}</span>
              </div>
              <div class="stat-item" style="padding-bottom:0.8rem;">
                <span class="stat-lbl">Navigational Risk Level:</span>
                <span class="stat-val" style="color:var(--color-gold-bright);">High Mythic Peril</span>
              </div>
              <div class="stat-item" style="padding-bottom:0.8rem;">
                <span class="stat-lbl">Divine Patronage:</span>
                <span class="stat-val">Olympian Council</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,(i=document.getElementById("back-to-map-btn"))==null||i.addEventListener("click",()=>{d.playClick(),this.showMapView()});const s=a.querySelectorAll(".tab-btn");s.forEach(t=>{t.addEventListener("click",()=>{d.playClick();const o=t.getAttribute("data-tab");s.forEach(r=>r.classList.remove("active")),t.classList.add("active"),a.querySelectorAll(".tab-panel").forEach(r=>{r.classList.remove("active")});const n=a.querySelector(`#panel-${o}`);n&&n.classList.add("active")})}),a.querySelectorAll(".inspect-btn").forEach(t=>{t.addEventListener("click",()=>{d.playClick();const o=parseInt(t.getAttribute("data-art-idx"),10),n=e.artifacts[o];n&&this.openArtifactModal(n)})}),a.querySelectorAll(".option-btn").forEach(t=>{t.addEventListener("click",()=>{const o=parseInt(t.getAttribute("data-opt-idx"),10),n=e.challenge.options[o],r=a.querySelector("#challenge-feedback");r&&n&&(r.className="challenge-feedback "+(n.correct?"success":"failure"),r.textContent=n.feedback,n.correct?d.playTriumph():d.playClick())})})}renderVoyageAboutUs(e,a){var s;e.innerHTML=`
      <div class="voyage-cover-wrapper" style="background-image: url('${a.heroImg}');">
        <div class="voyage-cover-overlay">
          <div class="voyage-header-bar">
            <button class="back-map-btn" id="back-to-map-btn">
              <span>&larr;</span> Return to Map
            </button>
          </div>

          <!-- About Us Section with Slow Pop-up from Bottom -->
          <section class="aboutus-section">
            <h1 class="aboutus-heading">ABOUT US</h1>

            <div class="aboutus-divider">
              <span class="aboutus-divider-icon">⚓</span>
            </div>

            <div class="aboutus-body">
              <p class="aboutus-paragraph">
                Every journey begins with a vision, and every vision begins with a spark. At <strong>BCET</strong>, <strong>ODYSSEY</strong> turns that spark into a journey of innovation.
              </p>
              <p class="aboutus-paragraph">
                This is not just a destination—it is the beginning of something yet to be discovered.
              </p>
              <p class="aboutus-paragraph">
                Where curiosity becomes courage, and ideas become possibilities.
              </p>
              <p class="aboutus-paragraph">
                Where aspiration becomes reality.
              </p>
            </div>

            <!-- Extended KPI Cards with Background Images -->
            <div class="aboutus-kpi-row">
              <a href="https://bcetodisha.ac.in/" target="_blank" class="aboutus-kpi-card kpi-card-1" id="kpi-card-1" title="The Unbindable Bow - BCET">
                <div class="kpi-card-bg-layer" style="background-image: url('/images/bcet.jpg');"></div>
                <div class="kpi-card-overlay"></div>
                <div class="kpi-card-content">
                  <div class="kpi-badge">PILLAR I</div>
                  <h2 class="kpi-title">The Unbindable Bow</h2>
                  <h3 class="kpi-subheading">BCET</h3>
                  <p class="kpi-desc">
                    Like an unbindable bow that never loses its strength, BCET stands firm in its pursuit of knowledge and innovation. With every challenge, we draw stronger; with every idea, we aim higher—turning vision into action and possibilities into reality.
                  </p>
                  <div class="kpi-link-label">Visit BCET &rarr;</div>
                </div>
              </a>

              <a href="https://falconclub.xyz/" target="_blank" class="aboutus-kpi-card kpi-card-2" id="kpi-card-2" title="Hephaestus Forge - FALCON CLUB">
                <div class="kpi-card-bg-layer" style="background-image: url('/images/falcon.jpeg');"></div>
                <div class="kpi-card-overlay"></div>
                <div class="kpi-card-content">
                  <div class="kpi-badge">PILLAR II</div>
                  <h2 class="kpi-title">Hephaestus Forge</h2>
                  <h3 class="kpi-subheading">FALCON CLUB</h3>
                  <p class="kpi-desc">
                    Like Hephaestus, the master of the forge, FALCON Communities turns passion into strength and ideas into creation. With the courage to rise, the vision to soar, and the spirit to create—Aim High, Fly High.
                  </p>
                  <div class="kpi-link-label">Visit Falcon Club &rarr;</div>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    `,(s=document.getElementById("back-to-map-btn"))==null||s.addEventListener("click",()=>{d.playClick(),this.showMapView()})}renderRealmsHackathon(e,a){var t;e.innerHTML=`
      <div class="realms-cover-wrapper" style="background-image: url('${a.heroImg}');">
        <div class="realms-cover-overlay">
          <div class="voyage-header-bar">
            <button class="back-map-btn" id="back-to-map-btn">
              <span>&larr;</span> Return to Map
            </button>
          </div>

          <!-- Hackathon Section -->
          <section class="hackathon-section">
            <h1 class="hackathon-heading">HACKATHON</h1>

            <div class="hackathon-tagline">Enter the Quest. Create the Future.</div>

            <div class="aboutus-divider">
              <span class="aboutus-divider-icon">🏛️</span>
            </div>

            <div class="hackathon-body">
              <p class="hackathon-paragraph">
                <strong>ODYSSEY</strong> is not just a hackathon; it is a journey where ideas turn into impact. It brings together creative minds, passionate innovators, and problem-solvers to tackle real-world challenges. Participants will explore new frontiers, transform bold ideas into working solutions, and learn through collaboration. Every challenge is a quest, every team is a legion, and every solution marks a step forward. With innovation as the compass and creativity as the driving force, the journey begins. Step into <strong>ODYSSEY</strong> — and begin your Journey to Innovation.
              </p>
            </div>

            <!-- 4 Hackathon KPI Cards -->
            <div class="hack-kpi-grid">
              <div class="hack-kpi-card">
                <div class="hack-kpi-number">I</div>
                <h2 class="hack-kpi-title">Software Deployment with AI Implementation</h2>
                <div class="hack-kpi-cta">Join the Quest</div>
              </div>

              <div class="hack-kpi-card">
                <div class="hack-kpi-number">II</div>
                <h2 class="hack-kpi-title">IOT with Software Solutions</h2>
                <div class="hack-kpi-cta">Join the Quest</div>
              </div>

              <div class="hack-kpi-card">
                <div class="hack-kpi-number">III</div>
                <h2 class="hack-kpi-title">Tech for Bharat & Social Impact</h2>
                <div class="hack-kpi-cta">Join the Quest</div>
              </div>

              <div class="hack-kpi-card">
                <div class="hack-kpi-number">IV</div>
                <h2 class="hack-kpi-title">Automation Development / Agentic AI Development</h2>
                <div class="hack-kpi-cta">Join the Quest</div>
              </div>
            </div>

            <!-- Quest Rewards Section -->
            <section class="quest-rewards-section">
              <h2 class="rewards-heading">QUEST REWARDS</h2>
              <div class="rewards-tagline">Glory, Honor & Legendary Treasures Await the Champions</div>

              <div class="aboutus-divider">
                <span class="aboutus-divider-icon">🏆</span>
              </div>

              <!-- 3 Main Prize Pools -->
              <div class="main-prizes-grid">
                <!-- 1st Prize: The Spear of Athena -->
                <div class="reward-card first-prize">
                  <div class="reward-crown-badge">1ST PLACE</div>
                  <div class="reward-img-frame">
                    <img src="/images/spear_of_athena.jpg" alt="The Spear of Athena" class="reward-artwork">
                    <div class="reward-art-glow"></div>
                  </div>
                  <h3 class="reward-title">The Spear of Athena</h3>
                  <div class="reward-amount">₹10,000</div>
                  <div class="reward-subtitle">Grand Champion Prize</div>
                </div>

                <!-- 2nd Prize: The Corinthian Helmet -->
                <div class="reward-card second-prize">
                  <div class="reward-crown-badge">2ND PLACE</div>
                  <div class="reward-img-frame">
                    <img src="/images/corinthian_helmet.jpg" alt="The Corinthian Helmet" class="reward-artwork">
                    <div class="reward-art-glow"></div>
                  </div>
                  <h3 class="reward-title">The Corinthian Helmet</h3>
                  <div class="reward-amount">₹7,000</div>
                  <div class="reward-subtitle">First Runner-Up Prize</div>
                </div>

                <!-- 3rd Prize: The Shield of Achilles -->
                <div class="reward-card third-prize">
                  <div class="reward-crown-badge">3RD PLACE</div>
                  <div class="reward-img-frame">
                    <img src="/images/shield_achilles.jpg" alt="The Shield of Achilles" class="reward-artwork">
                    <div class="reward-art-glow"></div>
                  </div>
                  <h3 class="reward-title">The Shield of Achilles</h3>
                  <div class="reward-amount">₹5,000</div>
                  <div class="reward-subtitle">Second Runner-Up Prize</div>
                </div>
              </div>

              <!-- 2 Special Category Prizes -->
              <div class="special-prizes-title-wrap">
                <h3 class="special-prizes-heading">SPECIAL CATEGORY LAURELS</h3>
              </div>

              <div class="special-prizes-grid">
                <!-- Special Prize 1: Business Potential -->
                <div class="special-reward-card midas-touch">
                  <div class="special-badge">BUSINESS POTENTIAL</div>
                  <div class="special-img-frame">
                    <img src="/images/midas_touch.jpg" alt="The Midas Touch" class="special-artwork">
                    <div class="special-art-glow"></div>
                  </div>
                  <h4 class="special-reward-title">The Midas Touch</h4>
                  <p class="special-reward-desc">Awarded for exceptional market viability, commercial strategy & economic potential.</p>
                </div>

                <!-- Special Prize 2: Best Innovation -->
                <div class="special-reward-card promethean-fire">
                  <div class="special-badge">BEST INNOVATION</div>
                  <div class="special-img-frame">
                    <img src="/images/promethean_fire.jpg" alt="The Promethean Fire" class="special-artwork">
                    <div class="special-art-glow"></div>
                  </div>
                  <h4 class="special-reward-title">The Promethean Fire</h4>
                  <p class="special-reward-desc">Awarded for groundbreaking technological spark, creative design & innovative impact.</p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    `,(t=document.getElementById("back-to-map-btn"))==null||t.addEventListener("click",()=>{d.playClick(),this.showMapView()});const s=e.querySelectorAll(".hack-kpi-card"),i=new IntersectionObserver(o=>{o.forEach((n,r)=>{if(n.isIntersecting){const c=n.target,u=Array.from(s).indexOf(c)*150;setTimeout(()=>{c.classList.add("visible")},u),i.unobserve(c)}})},{threshold:.15});s.forEach(o=>{i.observe(o),o.addEventListener("click",()=>{var r;const n=((r=o.querySelector(".hack-kpi-title"))==null?void 0:r.textContent)||"Hackathon Track";this.triggerWeaponArrow(n)})})}renderProtocolsPage(e,a){var o;e.innerHTML=`
      <div class="realms-cover-wrapper" style="background-image: url('${a.heroImg}');">
        <div class="realms-cover-overlay">
          <div class="voyage-header-bar">
            <button class="back-map-btn" id="back-to-map-btn">
              <span>&larr;</span> Return to Map
            </button>
          </div>

          <section class="protocols-section">
            <h1 class="hackathon-heading">PROTOCOLS</h1>

            <div class="aboutus-divider">
              <span class="aboutus-divider-icon">⚖️</span>
            </div>

            <div class="protocols-body">
              <ol class="protocols-list">
                <li>The ODYSSEY is a 24 hrs based hackathon event.</li>
                <li>Every team can have 3 to 5 members in their team. A girl team member is mandatory in the team.</li>
                <li>Every team should nominate a team leader. He/She will be responsible for communication purpose with the organizing committee. No change will be taken into consideration after the registration is completed. Check the information properly before you undergo registration.</li>
                <li>There will be a shortlisting round where out of all teams 20 to 25 teams will be selected.</li>
                <li>Please provide info about your arrival and accommodations.</li>
                <li>Fooding will be provided to the participants during the event.</li>
                <li>Carry the necessary documents for verification and identification process (AADHAR CARD, College ID cards, NOC from Authorized Individual).</li>
                <li>Wifi/Internet Access will be provided where required but the team is requested to have all the required technical components and dependencies with them (laptops, IoT components, etc). The organizing committee will not be held responsible for any kind of data loss of the team due to hardware or software glitch.</li>
                <li>Everyone is expected to maintain discipline and adhere to the rules provided by the organizers.</li>
                <li>Team members can belong to different academic year and department but of same college.</li>
                <li>On spot tasks will be provided by the judges during the event.</li>
                <li>Must be original work and any kind of plagiarism or malpractice activity will lead to disqualification.</li>
                <li>For any kind of problem, immediately contact the organizing team.</li>
                <li>There will be total 3 rounds in the event.</li>
              </ol>
            </div>

            <!-- Schedule Roadmap Section -->
            <div class="roadmap-container">
              <h2 class="roadmap-heading">EVENT ROADMAP & SCHEDULE</h2>
              <div class="roadmap-tagline">The Path of Innovation & Chronology of Quests</div>

              <div class="aboutus-divider">
                <span class="aboutus-divider-icon">📜</span>
              </div>

              <div class="roadmap-timeline">
                <!-- Milestone 1 -->
                <div class="timeline-item">
                  <div class="timeline-marker">1</div>
                  <div class="timeline-content">
                    <div class="timeline-header">
                      <h3 class="timeline-title">The Call to Quest</h3>
                      <span class="timeline-date">9th Sept 2026</span>
                    </div>
                    <p class="timeline-desc">The call has been made—step forward, embrace the challenge, and begin your journey to innovation.</p>
                  </div>
                </div>

                <!-- Milestone 2 -->
                <div class="timeline-item">
                  <div class="timeline-marker">2</div>
                  <div class="timeline-content">
                    <div class="timeline-header">
                      <h3 class="timeline-title">The Final Call</h3>
                      <span class="timeline-date">25th Sept 2026</span>
                    </div>
                    <p class="timeline-desc">The final call is here—take your last step forward and claim your place in the ODYSSEY.</p>
                  </div>
                </div>

                <!-- Milestone 3 -->
                <div class="timeline-item">
                  <div class="timeline-marker">3</div>
                  <div class="timeline-content">
                    <div class="timeline-header">
                      <h3 class="timeline-title">Interaction with Mortals</h3>
                      <span class="timeline-date">29th Sept & 30th Sept 2026</span>
                    </div>
                    <p class="timeline-desc">Where innovators meet, ideas speak, and the worthy are chosen for the next quest.</p>
                  </div>
                </div>

                <!-- Milestone 4 -->
                <div class="timeline-item">
                  <div class="timeline-marker">4</div>
                  <div class="timeline-content">
                    <div class="timeline-header">
                      <h3 class="timeline-title">Call for Final Verdict</h3>
                      <span class="timeline-date">3rd Oct 2026</span>
                    </div>
                    <p class="timeline-desc">The final verdict is cast—only the worthy shall advance to the next realm.</p>
                  </div>
                </div>

                <!-- Milestone 5 -->
                <div class="timeline-item highlight-item">
                  <div class="timeline-marker">5</div>
                  <div class="timeline-content">
                    <div class="timeline-header">
                      <h3 class="timeline-title">The ODYSSEY BEGINS</h3>
                      <span class="timeline-date">9th Oct & 10th Oct 2026</span>
                    </div>
                    <p class="timeline-desc">The hour has come—the chosen embark on their ultimate journey to innovation.</p>
                  </div>
                </div>

                <!-- Milestone 6 -->
                <div class="timeline-item champion-item">
                  <div class="timeline-marker">👑</div>
                  <div class="timeline-content">
                    <div class="timeline-header">
                      <h3 class="timeline-title">The Conquerors</h3>
                      <span class="timeline-date">10th Oct 2026</span>
                    </div>
                    <p class="timeline-desc">From mere mortals to mighty champions—their courage and vision have earned them a place among the legends.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    `,(o=document.getElementById("back-to-map-btn"))==null||o.addEventListener("click",()=>{d.playClick(),this.showMapView()});const s=e.querySelectorAll(".timeline-item"),i={root:null,rootMargin:"0px 0px -15% 0px",threshold:.1},t=new IntersectionObserver((n,r)=>{n.forEach(c=>{c.isIntersecting&&c.target.classList.add("active")})},i);s.forEach(n=>{t.observe(n)})}renderOdysseyPage(e,a){var s;e.innerHTML=`
      <div class="realms-cover-wrapper" style="background-image: url('${a.heroImg}');">
        <div class="realms-cover-overlay">
          <div class="voyage-header-bar">
            <button class="back-map-btn" id="back-to-map-btn">
              <span>&larr;</span> Return to Map
            </button>
          </div>

          <section class="odyssey-promo-section" style="max-width: 1400px; margin: 1rem auto 4rem; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 2.2rem; padding: 0 1.5rem;">
            <h1 class="hackathon-heading" style="margin-top: 1rem;">THE QUEST TRAILER</h1>

            <div class="aboutus-divider">
              <span class="aboutus-divider-icon">🏛️</span>
            </div>

            <div class="legion-kpi-card promo-video-card" style="width: 100%; max-width: 1300px; padding: 2rem !important; background: rgba(16, 10, 5, 0.85); border: 2px solid var(--border-gold); border-radius: 20px; box-shadow: 0 15px 45px rgba(0, 0, 0, 0.95); display: flex; flex-direction: column; align-items: center; gap: 1.5rem;">
              <div class="promo-video-wrapper" style="width: 100%; border-radius: 12px; overflow: hidden; border: 1.5px solid rgba(255, 215, 0, 0.2); box-shadow: 0 8px 30px rgba(0, 0, 0, 0.9);">
                <video controls autoplay loop muted playsinline preload="auto" style="width: 100%; height: auto; display: block;">
                  <source src="/odysseynoaudio.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <!-- Allies / Sponsors Heading Section -->
            <div class="allies-header-section" style="margin-top: 2rem; width: 100%;">
              <h2 class="hackathon-heading" style="font-size: 2.2rem; margin-bottom: 0.5rem;">THE ALLIES OF ODYSSEY</h2>
              <p class="hackathon-tagline" style="font-size: 1.1rem; max-width: 800px; margin: 0 auto;">Every great voyage needs powerful allies—our sponsors make this journey possible</p>
              
              <div class="aboutus-divider" style="margin-top: 1.5rem;">
                <span class="aboutus-divider-icon">🛡️</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    `,(s=document.getElementById("back-to-map-btn"))==null||s.addEventListener("click",()=>{d.playClick(),this.showMapView()})}renderLegionsPage(e,a){var t;e.innerHTML=`
      <div class="realms-cover-wrapper" style="background-image: url('${a.heroImg}');">
        <div class="realms-cover-overlay">
          <div class="voyage-header-bar">
            <button class="back-map-btn" id="back-to-map-btn">
              <span>&larr;</span> Return to Map
            </button>
          </div>

          <section class="legions-section">
            <h1 class="hackathon-heading">THE LEGIONS</h1>
            <div class="hackathon-tagline">The High Command & Vanguard of ODYSSEY</div>

            <div class="aboutus-divider">
              <span class="aboutus-divider-icon">🏛️</span>
            </div>

            <!-- Supreme Leadership KPI Cards (Cards 1, 2, 3) -->
            <div class="legion-high-grid">
              <!-- KPI Card 1: The High King -->
              <div class="legion-kpi-card high-king-card has-photo">
                <div class="card-photo-side">
                  <img src="/images/high_king.jpg" alt="Manmath Biswal" class="vanguard-photo">
                </div>
                <div class="card-text-side">
                  <h2 class="legion-card-title">The High King</h2>
                  <div class="legion-name">Manmath Biswal</div>
                  <div class="legion-role">Chairman</div>
                </div>
              </div>

              <!-- KPI Card 2: The Commander -->
              <div class="legion-kpi-card commander-card has-photo">
                <div class="card-photo-side">
                  <img src="/images/commander.jpg" alt="Jyoti Ranjan Rout" class="vanguard-photo">
                </div>
                <div class="card-text-side">
                  <h2 class="legion-card-title">The Commander</h2>
                  <div class="legion-name">Jyoti Ranjan Rout</div>
                  <div class="legion-role">The Convenor</div>
                </div>
              </div>

              <!-- KPI Card 3: The Sovereign Queen -->
              <div class="legion-kpi-card queen-card has-photo">
                <div class="card-photo-side">
                  <img src="/images/suhasini_queen.jpg" alt="Suhasini Choudhury" class="vanguard-photo">
                </div>
                <div class="card-text-side">
                  <h2 class="legion-card-title">The Sovereign Queen</h2>
                  <div class="legion-name">Suhasini Choudhury</div>
                  <div class="legion-role">The Faculty Incharge</div>
                </div>
              </div>
            </div>

            <!-- Vanguard Heading Section (Card 4 Container) -->
            <div class="vanguard-banner">
              <span class="vanguard-badge">⚡ THE PLANNING COMMITTEE</span>
              <h2 class="vanguard-title">The Vanguard of Odyssey</h2>
              <p class="vanguard-subtitle">The Strategic Masterminds & Core Execution Officers</p>
            </div>

            <!-- Planning Committee Sub-KPI Cards (Sub-Cards 4A to 4F / Cards 4 - 9) -->
            <div class="vanguard-kpi-grid">
              <!-- Sub KPI Card 4A: HERA -->
              <div class="vanguard-kpi-card has-photo">
                <div class="card-photo-side">
                  <img src="/images/hera_new.jpg" alt="A.S. Deepali" class="vanguard-photo">
                </div>
                <div class="card-text-side">
                  <div class="vanguard-deity-badge">HERA</div>
                  <h3 class="vanguard-person-name">A.S. Deepali</h3>
                  <div class="vanguard-person-role">The Chief Organizer</div>
                </div>
              </div>

              <!-- Sub KPI Card 4B: ATHENA -->
              <div class="vanguard-kpi-card has-photo">
                <div class="card-photo-side">
                  <img src="/images/athena_new.jpg" alt="Ankita Das" class="vanguard-photo">
                </div>
                <div class="card-text-side">
                  <div class="vanguard-deity-badge">ATHENA</div>
                  <h3 class="vanguard-person-name">Ankita Das</h3>
                  <div class="vanguard-person-role">The Lead Organizer</div>
                </div>
              </div>

              <!-- Sub KPI Card 4C: APHRODITE -->
              <div class="vanguard-kpi-card has-photo">
                <div class="card-photo-side">
                  <img src="/images/aphrodite_new.jpg" alt="Bijayalaxmi Swain" class="vanguard-photo">
                </div>
                <div class="card-text-side">
                  <div class="vanguard-deity-badge">APHRODITE</div>
                  <h3 class="vanguard-person-name">Bijayalaxmi Swain</h3>
                  <div class="vanguard-person-role">The Event Coordinator</div>
                </div>
              </div>

              <!-- Sub KPI Card 4D: KRATOS -->
              <div class="vanguard-kpi-card has-photo">
                <div class="card-photo-side">
                  <img src="/images/kratos_new.jpg" alt="Lawrence Kumar Khamurai" class="vanguard-photo">
                </div>
                <div class="card-text-side">
                  <div class="vanguard-deity-badge">KRATOS</div>
                  <h3 class="vanguard-person-name">Lawrence Kumar Khamurai</h3>
                  <div class="vanguard-person-role">The Event Organizer</div>
                </div>
              </div>

              <!-- Sub KPI Card 4E: HEPHAESTUS -->
              <div class="vanguard-kpi-card has-photo">
                <div class="card-photo-side">
                  <img src="/images/hephaestus_new.jpg" alt="Ariyan S.S. Acharya" class="vanguard-photo">
                </div>
                <div class="card-text-side">
                  <div class="vanguard-deity-badge">HEPHAESTUS</div>
                  <h3 class="vanguard-person-name">Ariyan S.S. Acharya</h3>
                  <div class="vanguard-person-role">The Creative & Design Lead</div>
                </div>
              </div>

              <!-- Sub KPI Card 4F: POSEIDON -->
              <div class="vanguard-kpi-card has-photo poseidon-lead-card">
                <div class="card-photo-side">
                  <img src="/images/poseidon_new.jpg" alt="Guru Gourav Panda" class="vanguard-photo">
                </div>
                <div class="card-text-side">
                  <div class="vanguard-deity-badge poseidon-badge">POSEIDON</div>
                  <h3 class="vanguard-person-name">Guru Gourav Panda</h3>
                  <div class="vanguard-person-role">The Outreach Lead</div>
                </div>
              </div>
            </div>

            <!-- Operational Legions Heading Section -->
            <div class="vanguard-banner ops-banner">
              <span class="vanguard-badge">🛡️ OPERATIONAL FORCES</span>
              <h2 class="vanguard-title">Legion Operational Divisions</h2>
            </div>

            <!-- Operational Squad KPI Cards (Cards 10 - 16) -->
            <div class="ops-kpi-grid">
              <!-- KPI Card 10 -->
              <div class="ops-kpi-card has-photo">
                <div class="card-photo-side">
                  <img src="/images/iris_new.jpg" alt="IRIS" class="vanguard-photo">
                </div>
                <div class="card-text-side">
                  <div class="ops-num">X</div>
                  <h3 class="ops-title">IRIS</h3>
                  <div class="ops-role">Web Developers</div>
                </div>
              </div>

              <!-- KPI Card 11 -->
              <div class="ops-kpi-card has-photo">
                <div class="card-photo-side">
                  <img src="/images/helios_new.jpg" alt="HELIOS" class="vanguard-photo">
                </div>
                <div class="card-text-side">
                  <div class="ops-num">XI</div>
                  <h3 class="ops-title">HELIOS</h3>
                  <div class="ops-role">Media Production</div>
                </div>
              </div>

              <!-- KPI Card 13 -->
              <div class="ops-kpi-card has-photo">
                <div class="card-photo-side">
                  <img src="/images/atlas_new.jpg" alt="ATLAS CORE" class="vanguard-photo">
                </div>
                <div class="card-text-side">
                  <div class="ops-num">XIII</div>
                  <h3 class="ops-title">ATLAS CORE</h3>
                  <div class="ops-role">Technical team</div>
                </div>
              </div>

              <!-- KPI Card 14 -->
              <div class="ops-kpi-card has-photo">
                <div class="card-photo-side">
                  <img src="/images/hermes_new.jpg" alt="HERMES PRODUCTION" class="vanguard-photo">
                </div>
                <div class="card-text-side">
                  <div class="ops-num">XIV</div>
                  <h3 class="ops-title">HERMES PRODUCTION</h3>
                  <div class="ops-role">Event Handling Team</div>
                </div>
              </div>

              <!-- KPI Card 15 -->
              <div class="ops-kpi-card has-photo">
                <div class="card-photo-side">
                  <img src="/images/chiron_new.jpg" alt="CHIRON ALLIANCE" class="vanguard-photo">
                </div>
                <div class="card-text-side">
                  <div class="ops-num">XV</div>
                  <h3 class="ops-title">CHIRON ALLIANCE</h3>
                  <div class="ops-role">Volunteer team</div>
                </div>
              </div>

              <!-- KPI Card 16 -->
              <div class="ops-kpi-card has-photo">
                <div class="card-photo-side">
                  <img src="/images/pheme_new.jpg" alt="PHEME" class="vanguard-photo">
                </div>
                <div class="card-text-side">
                  <div class="ops-num">XVI</div>
                  <h3 class="ops-title">PHEME</h3>
                  <div class="ops-role">Public Relation & Marketing</div>
                </div>
              </div>
            </div>

          </section>
        </div>
      </div>
    `,(t=document.getElementById("back-to-map-btn"))==null||t.addEventListener("click",()=>{d.playClick(),this.showMapView()});const s=e.querySelector(".vanguard-kpi-grid");s&&new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting?s.classList.add("spread"):s.classList.remove("spread")})},{threshold:.15}).observe(s);const i=e.querySelector(".legion-high-grid");i&&new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting?i.classList.add("slide-in"):i.classList.remove("slide-in")})},{threshold:.15}).observe(i)}triggerWeaponArrow(e){const a=document.getElementById("weapon-arrow-overlay"),s=document.getElementById("weapon-arrow-wrapper"),i=document.getElementById("registration-modal"),t=document.getElementById("reg-track-select"),o=document.getElementById("reg-track-title");if(!a||!s){this.openRegistrationModal(e);return}a.classList.add("active"),s.classList.remove("shoot"),s.offsetWidth,s.classList.add("shoot"),setTimeout(()=>{t&&(t.value=e),o&&(o.textContent=`Register: ${e}`);const n=document.getElementById("reg-form"),r=document.getElementById("reg-success-msg");n&&(n.style.display="block"),r&&(r.style.display="none"),i==null||i.classList.add("active")},650),setTimeout(()=>{a.classList.remove("active"),s.classList.remove("shoot")},900)}openRegistrationModal(e){const a=document.getElementById("registration-modal"),s=document.getElementById("reg-track-select"),i=document.getElementById("reg-track-title");s&&(s.value=e),i&&(i.textContent=`Register: ${e}`);const t=document.getElementById("reg-form"),o=document.getElementById("reg-success-msg");t&&(t.style.display="block"),o&&(o.style.display="none"),a==null||a.classList.add("active")}openArtifactModal(e){var a;document.getElementById("art-badge").textContent=e.badge,document.getElementById("art-name").textContent=e.name,document.getElementById("art-origin").textContent=e.origin,document.getElementById("art-desc").textContent=e.desc,document.getElementById("art-power").textContent=e.power,(a=document.getElementById("artifact-modal"))==null||a.classList.add("active")}initParticleCanvas(){const e=document.getElementById("particle-canvas");if(!e)return;const a=e.getContext("2d");let s=e.width=window.innerWidth,i=e.height=window.innerHeight;window.addEventListener("resize",()=>{s=e.width=window.innerWidth,i=e.height=window.innerHeight});const t=[],o=45;for(let r=0;r<o;r++)t.push({x:Math.random()*s,y:Math.random()*i,radius:Math.random()*2+.5,alpha:Math.random()*.6+.2,vx:(Math.random()-.5)*.4,vy:-Math.random()*.5-.2});const n=()=>{a.clearRect(0,0,s,i),t.forEach(r=>{r.x+=r.vx,r.y+=r.vy,r.y<0&&(r.y=i+10,r.x=Math.random()*s),a.beginPath(),a.arc(r.x,r.y,r.radius,0,Math.PI*2),a.fillStyle=`rgba(243, 156, 18, ${r.alpha})`,a.shadowBlur=8,a.shadowColor="#ffd700",a.fill()}),requestAnimationFrame(n)};n()}}document.addEventListener("DOMContentLoaded",()=>{new O().init()});
