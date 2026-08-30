(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const m={voyage:{id:"voyage",name:"The Voyage",greekName:"Ὁ Πλοῦς καὶ ἡ Καινοτομία",icon:"🧭",tagline:"Journey to Innovation — Navigating Uncharted Waters",coords:"37°58'N 23°43'E — Island of Circe & Open Sea",mapPos:{x:18,y:43},heroImg:"/images/voyage_hero.jpg",quote:"“Every innovator must conquer the journey before their vision finds its home.”",quoteAuthor:"Journey to Innovation — Chapter I",overview:"The Voyage represents the courageous first step into uncharted territories. Like Odysseus navigating tempestuous waters and mythical sea gods, true innovation requires bold leadership, adaptive steering, and the resilience to conquer unknown challenges.",stats:[{label:"Voyage Milestone",value:"Phase I: Discovery"},{label:"Navigational Guide",value:"Celestial Astrolabe"},{label:"Primary Objective",value:"Chart New Horizons"},{label:"Core Competency",value:"Strategic Resilience"}],artifacts:[{name:"The Golden Astrolabe",origin:"Phoenician & Achaean Navigators",desc:"An ancient celestial instrument used to measure star elevation and navigate uncharted sea routes.",power:"Visionary Sight +95",badge:"Navigation Emblem"},{name:"The Leather Bag of Winds",origin:"Gift of Aeolus, Lord of the Winds",desc:"A silver-tied ox-hide bag containing gale winds to accelerate progress during stagnant calms.",power:"Momentum Boost +92",badge:"Mythic Relic"},{name:"Flagship Helm of Courage",origin:"Shipyards of Mycenae",desc:"Carved oak rudder that steers through storms, whirlpools, and hostile crags without flinching.",power:"Steering Mastery +90",badge:"Ship Artifact"}],loreChapters:[{title:"Pioneering Unmapped Frontiers",content:"Every legendary journey begins when visionaries leave comfortable shores. Pushing off into wine-dark waters, the expedition embraces risk and uncertainty as necessary catalysts for groundbreaking breakthroughs."},{title:"Navigating Storms & Resistance",content:"Just as Poseidon summoned violent tempests to stall Odysseus, innovative ventures face skepticism and turbulent headwinds. Success belongs to those who adjust their sails while keeping their gaze fixed on the goal."},{title:"The Astrolabe of Continuous Direction",content:"By aligning with enduring principles rather than temporary storms, pioneers maintain steady velocity across open ocean expanses."}],challenge:{question:"Your expedition faces an unmapped sea current pulling toward dangerous reefs. How do you lead your crew forward?",options:[{text:"Use the Golden Astrolabe to calculate celestial coordinates and steer into open deep water.",correct:!0,feedback:"A master navigator's decision! You bypass the reef and discover a faster trade current."},{text:"Drop anchor immediately and wait for the weather to clear.",correct:!1,feedback:"The current drags your ship into stagnant waters, delaying the voyage."},{text:"Abandon course and return to the safety of the starting harbor.",correct:!1,feedback:"You miss the opportunity for groundbreaking discovery!"}]}},realms:{id:"realms",name:"The Realms",greekName:"Τὰ Βασίλεια καὶ αἱ Νῆσοι",icon:"🏛️",tagline:"Architectural Pillars of Knowledge & Domain Sanctuaries",coords:"36°25'N 25°26'E — Land of the Cyclopes",mapPos:{x:45,y:30},heroImg:"/images/realms_hero.jpg",quote:"“Build upon granite pillars of wisdom, for great domains are constructed stone by stone upon solid foundations...”",quoteAuthor:"Journey to Innovation — Chapter II",overview:"The Realms represent the foundational pillars, domains, and architectural frameworks of progress. From sacred marble sanctuaries to island archipelagos, each domain fosters unique capabilities, specialized talents, and enduring structures.",stats:[{label:"Sovereign Domains",value:"5 Core Realms"},{label:"Pillar Style",value:"Classical Doric & Ionic"},{label:"Sanctuary Guardian",value:"Athena Polias"},{label:"Core Attribute",value:"Structural Integrity"}],artifacts:[{name:"Parthenon Keystone Seal",origin:"Architects of Athens",desc:"A carved marble seal symbolizing perfect proportion, balance, and structural permanence.",power:"Framework Stability +98",badge:"Architectural Relic"},{name:"The Holy Moly Herb",origin:"Hermes' Gift on Island Aeaea",desc:"A rare divine flower with black roots and white petals that renders the bearer immune to illusions and magic.",power:"Clarity & Immunity +96",badge:"Sacred Flora"},{name:"Amphora of Divine Knowledge",origin:"Oracle Sanctuary of Delphi",desc:"A golden vessel containing liquid wisdom to enlighten leaders during complex decision-making.",power:"Insight +90",badge:"Sacred Vessel"}],loreChapters:[{title:"Establishing Structural Foundations",content:"No innovation survives without robust architecture. Like the grand marble temples of Hellas, sustainable systems require deep foundations, clear principles, and harmonious design."},{title:"The Diversity of Domain Talents",content:"Across the archipelagos of the Mediterranean, each island contributed distinct crafts—metalworking from Lemnos, navigation from Scheria, and strategy from Athens. Innovation thrives when diverse expertise unites."},{title:"Guardian Sanctuaries",content:"Protecting core values ensures that expansion does not dilute identity or compromise standards of excellence."}],challenge:{question:"You are tasked with expanding a domain sanctuary into new territory. What is your architectural priority?",options:[{text:"Lay deep granite foundations and erect marble pillars before raising the roof structure.",correct:!0,feedback:"Excellent structural foresight! The sanctuary withstands both earthquakes and century storms."},{text:"Build decorative facades quickly to impress neighboring city-states.",correct:!1,feedback:"Without solid foundations, the first seasonal storm cracks the outer walls."},{text:"Copy an old wooden design from a century ago without modification.",correct:!1,feedback:"The design fails to meet modern scale demands."}]}},protocols:{id:"protocols",name:"Realm Protocols",greekName:"Ὁ Κανὼν καὶ αἱ Θεσμοί",icon:"📜",tagline:"Sacred Codes of Governance, Trust & Operational Decrees",coords:"38°29'N 22°30'E — Aeolus Wind Island",mapPos:{x:72,y:38},heroImg:"/images/protocols_hero.jpg",quote:"“Trust is the unwritten law of civilized realms, where sacred codes protect the guest and honor the covenant...”",quoteAuthor:"Journey to Innovation — Chapter III",overview:"Realm Protocols dictate the unwritten divine laws governing collaboration, ethics, and mutual trust. Foremost among them is Xenia—the sacred code of hospitality and integrity—ensuring seamless operational harmony across all teams.",stats:[{label:"Core Protocol",value:"Sacred Trust (Xenia)"},{label:"Governance Body",value:"Olympian Decree Council"},{label:"Compliance Rate",value:"100% Integrity"},{label:"Enforcement Shield",value:"Aegis of Athena"}],artifacts:[{name:"The Golden Scroll of Xenia",origin:"Temple of Zeus at Olympia",desc:"An inscribed bronze scroll outlining sacred codes of mutual respect, hospitality, and ethical conduct.",power:"Trust Integration +97",badge:"Governance Relic"},{name:"Oracle's Signet Ring",origin:"Pythian Temple of Delphi",desc:"A laurel-engraved ring guaranteeing safe passage and authentic diplomatic representation across all city-states.",power:"Authenticity Seal +94",badge:"Diplomatic Token"},{name:"Libation Bowl of Covenant",origin:"Mycenaean Royal Court",desc:"A silver phiale used to consecrate solemn pacts and long-term strategic alliances.",power:"Alliance Honor +91",badge:"Treaty Vessel"}],loreChapters:[{title:"The Law of Mutual Hospitality (Xenia)",content:"In ancient times, travelers were welcomed with shelter, nourishment, and honor before asking their business. In modern innovation, open collaboration and mutual respect form the bedrock of high-performing teams."},{title:"Governance & Operational Clarity",content:"Clear protocols prevent friction. When standards of engagement are transparent, execution moves with speed and confidence."},{title:"Consequences of Protocol Breach",content:"Those who break sacred covenants lose trust and invite ruin. Integrity is non-negotiable."}],challenge:{question:"A new partner arrives requesting access to your realm's core knowledge base. How do you apply Protocol Xenia?",options:[{text:"Establish a clear onboarding protocol: offer genuine collaboration while verifying alignment with core values.",correct:!0,feedback:"A masterclass in governance! The partner becomes a trusted long-term ally."},{text:"Grant unrestricted root access without verifying credentials or alignment.",correct:!1,feedback:"Protocol violation! Unverified changes compromise system security."},{text:"Refuse to communicate or share any information.",correct:!1,feedback:"Silo mentality stifles joint innovation and creates isolation."}]}},legions:{id:"legions",name:"The Legions",greekName:"Αἱ Λεγεῶνες καὶ ἡ Ἰσχύς",icon:"🛡️",tagline:"Unified Execution, Hoplite Shield Wall & Strategic Vanguard",coords:"37°04'N 22°25'E — Scylla & Land of the Dead",mapPos:{x:38,y:70},heroImg:"/images/legions_hero.jpg",quote:"“Stand shield to shield in unbroken alignment, for unity transforms individual strength into invincible force...”",quoteAuthor:"Journey to Innovation — Chapter IV",overview:"The Legions represent unified execution, tactical discipline, and collective strength. Operating like an unbroken Achaean hoplite phalanx, aligned teams overcome monumental obstacles through synchronized focus and unwavering defense.",stats:[{label:"Phalanx Formation",value:"Overlap Shield Wall"},{label:"Execution Speed",value:"Synchronized Pulse"},{label:"Tactical Mastermind",value:"Odysseus Strategy"},{label:"Defense Rating",value:"Impenetrable +99"}],artifacts:[{name:"Spartan Bronze Aspis Shield",origin:"Spartan & Salamis Guard",desc:"A massive bronze-faced ox-hide shield that overlaps with comrades to form an impenetrable phalanx wall.",power:"Collective Defense +99",badge:"Hoplite Relic"},{name:"The Trojan Horse Blueprint",origin:"Conceived by Odysseus",desc:"The legendary tactical diagram demonstrating how creative strategy breaches unyielding obstacles.",power:"Strategic Subterfuge +98",badge:"Mastermind Relic"},{name:"Corinthian Crested Helmet",origin:"Vanguard Officers",desc:"A heavy cast-bronze helmet providing clear line-of-sight command during intense campaign maneuvers.",power:"Tactical Focus +92",badge:"Armor Relic"}],loreChapters:[{title:"The Power of the Phalanx Shield Wall",content:"A hoplite shield protected not only the warrior carrying it, but also the comrade standing to his left. Alignment means looking out for one another and executing as one cohesive unit."},{title:"Out-Thinking Brute Force",content:"When nine years of direct siege failed to breach the walls of Troy, Odysseus applied creative strategic thinking. The wooden horse proved that genius strategy succeeds where brute force stalls."},{title:"Resilience in the Face of Setbacks",content:"Even when facing perilous trials, aligned legions absorb blows, adapt tactics, and press forward to victory."}],challenge:{question:"Your team encounters a formidable technical roadblock that brute force cannot solve. How do you deploy your legion?",options:[{text:"Convene a strategic workshop, pivot approach with creative problem-solving (Trojan Horse tactic), and execute in unison.",correct:!0,feedback:"Tactical brilliance! The creative workaround solves the bottleneck effortlessly."},{text:"Order everyone to double down on the exact same failing brute-force method.",correct:!1,feedback:"Resource exhaustion! The team burns out without making progress."},{text:"Disband the team and abandon the initiative.",correct:!1,feedback:"Surrender forfeits all gains achieved so far."}]}},odyssey:{id:"odyssey",name:"The Odyssey",greekName:"Ἡ Ὀδύσσεια καὶ ἡ Τελείωσις",icon:"👑",tagline:"The Pinnacle of Triumph, Golden Mastery & Return Home",coords:"38°22'N 20°43'E — Kingdom of Ithaca",mapPos:{x:76,y:71},heroImg:"/images/odyssey_hero.jpg",quote:"“Rejoice in the golden hall of achievement! The bow is strung, the journey fulfilled, and victory crown'd!”",quoteAuthor:"Journey to Innovation — Chapter V",overview:"The Odyssey is the grand culmination of endurance, wisdom, and triumphant achievement (Nostos). It celebrates the ultimate realization of vision, reclaiming sovereign mastery, and inspiring future generations of innovators.",stats:[{label:"Journey Duration",value:"Completed Cycle"},{label:"Ultimate Relic",value:"Great Bow of Odysseus"},{label:"Achievement Tier",value:"Golden Mastery"},{label:"Legacy Status",value:"Eternal Inspiration"}],artifacts:[{name:"The Great Bow of Odysseus",origin:"Gift from Iphitus",desc:"A composite bow that only the rightful king possessed the strength and mastery to string and shoot through 12 axe heads.",power:"Pinnacle Precision +100",badge:"Royal Relic"},{name:"Golden Olive-Tree Bed",origin:"Handcrafted by Odysseus",desc:"The immovable foundation carved into the living olive tree—symbolizing deep roots and permanent legacy.",power:"Unshakable Legacy +99",badge:"Dynastic Emblem"},{name:"Laurel Crown of Nostos",origin:"Sanctuary of Athena Ithaka",desc:"Woven golden laurel wreath awarded to champions upon completing their epic journey to innovation.",power:"Sovereign Glory +96",badge:"Crown Relic"}],loreChapters:[{title:"The Trial of Mastery (Bending the Bow)",content:"Many attempted to string the great bow, but only the one with true mastery could bend it effortlessly and send the arrow true. Mastery is earned through years of practice, trials, and resilience."},{title:"Triumphant Reclaim & Realization",content:"Upon returning to Ithaca, Odysseus restored order, peace, and prosperity to his golden realm. True innovation concludes not just in ideas, but in fully delivered, transformative impact."},{title:"Inspiring the Next Generation",content:"The completion of an epic journey becomes the foundation for new horizons. The legacy of innovation continues forever."}],challenge:{question:"You stand before the final trial: stringing the Great Bow of Odysseus to seal your Journey to Innovation. What is your mind state?",options:[{text:"Breathe with calm focus, draw upon years of hard-won experience, string the bow smoothly, and shoot true.",correct:!0,feedback:"GOLDEN TRIUMPH! The arrow glides cleanly through all 12 axe sockets! Your Journey to Innovation is fulfilled in glory!"},{text:"Try to force the bow back with violent jerky motions.",correct:!1,feedback:"Without composure, the heavy horn bow resists your grip."},{text:"Hesitate and hand the bow to someone else.",correct:!1,feedback:"Leadership requires stepping up to complete the vision yourself."}]}}};class C{constructor(){this.ctx=null,this.isMuted=!1,this.ambientOsc=null,this.waveGain=null,this.bgMusic=null}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playBackgroundMusic(){this.bgMusic||(this.bgMusic=new Audio("/bg-music.mp3"),this.bgMusic.loop=!0,this.bgMusic.volume=.45);const e=()=>{this.init(),this.bgMusic.paused?this.bgMusic.play().then(()=>{console.log("Background music started successfully."),t()}).catch(i=>{console.warn("Autoplay prevented or failed, waiting for user interaction:",i)}):t()},t=()=>{document.removeEventListener("click",e),document.removeEventListener("touchstart",e),document.removeEventListener("keydown",e)};e(),document.addEventListener("click",e),document.addEventListener("touchstart",e),document.addEventListener("keydown",e)}toggleSound(){return this.init(),this.isMuted=!this.isMuted,this.bgMusic&&(this.isMuted?this.bgMusic.pause():this.bgMusic.play().catch(e=>console.warn("Error resuming bgMusic:",e))),this.isMuted||this.playLyreArpeggio(),!this.isMuted}playClick(){}playLyreArpeggio(){}playTriumph(){if(!(this.isMuted||!this.ctx))try{[440,554.37,659.25,880].forEach((t,i)=>{setTimeout(()=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(t,this.ctx.currentTime),a.gain.setValueAtTime(.2,this.ctx.currentTime),a.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.8),s.connect(a),a.connect(this.ctx.destination),s.start(),s.stop(this.ctx.currentTime+.8)},i*150)})}catch(e){console.warn("Audio error:",e)}}}const l=new C;class T{constructor(e,t,i){this.container=document.getElementById(e),this.wrapper=document.getElementById(t),this.onSymbolSelect=i,this.init()}init(){if(!this.container||!this.wrapper)return;document.querySelectorAll(".map-pin").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation(),l.playClick();const s=t.getAttribute("data-symbol");s&&this.onSymbolSelect&&this.onSymbolSelect(s)})})}resetView(){this.wrapper&&(this.wrapper.style.transform="none")}}class A{constructor(){this.currentSymbolId=null,this.activeTab="lore",this.odysseyMap=null,this.unlockedStep=1,this.symbolOrder=["voyage","realms","protocols","legions","odyssey"]}init(){var k;l.playBackgroundMusic(),this.odysseyMap=new T("map-container","map-wrapper",c=>{this.handleSymbolClick(c)});const e=document.getElementById("map-container"),t=document.getElementById("map-wrapper"),i=document.getElementById("scroll-touch-btn");setTimeout(()=>{t==null||t.classList.add("slide-in")},200);const s=()=>{e&&!e.classList.contains("unfolded")&&e.classList.add("unfolded")};i==null||i.addEventListener("click",c=>{c.stopPropagation(),s()}),document.querySelectorAll(".symbol-nav .nav-pill").forEach(c=>{c.addEventListener("click",()=>{const p=c.getAttribute("data-symbol"),h=this.symbolOrder.indexOf(p)+1;h<=this.unlockedStep?(l.playClick(),this.openSymbolPage(p)):(l.playClick(),this.showLockedNotice(h))})}),(k=document.getElementById("brand-logo"))==null||k.addEventListener("click",()=>{l.playClick(),this.showMapView()});const n=document.getElementById("sound-btn");n==null||n.addEventListener("click",()=>{const c=l.toggleSound();n.querySelector(".btn-icon").textContent=c?"🔊":"🔇",n.querySelector(".btn-text").textContent=c?"Audio On":"Audio Off"});const r=document.getElementById("guide-btn"),o=document.getElementById("guide-modal"),d=document.getElementById("guide-close-btn"),g=document.getElementById("guide-confirm-btn");r==null||r.addEventListener("click",()=>{l.playClick(),o==null||o.classList.add("active")}),[d,g].forEach(c=>{c==null||c.addEventListener("click",()=>{l.playClick(),o==null||o.classList.remove("active")})});const b=document.getElementById("artifact-modal"),E=document.getElementById("modal-close-btn"),I=document.getElementById("art-confirm-btn");[E,I].forEach(c=>{c==null||c.addEventListener("click",()=>{l.playClick(),b==null||b.classList.remove("active")})});const y=document.getElementById("registration-modal"),f=document.getElementById("reg-close-btn"),v=document.getElementById("reg-form"),w=document.getElementById("reg-success-msg");f==null||f.addEventListener("click",()=>{l.playClick(),y==null||y.classList.remove("active")}),v==null||v.addEventListener("submit",c=>{var S;c.preventDefault(),l.playTriumph();const p=((S=document.getElementById("reg-team-name"))==null?void 0:S.value)||"your team",h=document.getElementById("odysseus-team-name");h&&(h.textContent=p),v.style.display="none",w&&(w.style.display="flex")}),this.initParticleCanvas(),window.addEventListener("hashchange",()=>this.handleHashRoute()),this.handleHashRoute(),this.updateSerialUnlockState()}handleSymbolClick(e){const t=this.symbolOrder.indexOf(e)+1;t<=this.unlockedStep?(t===this.unlockedStep&&this.unlockedStep<5&&(this.unlockedStep++,this.updateSerialUnlockState()),this.openSymbolPage(e)):this.showLockedNotice(t)}updateSerialUnlockState(){this.symbolOrder.forEach((t,i)=>{const s=i+1,a=document.getElementById(`pin-${t}`),n=document.getElementById(`pill-${t}`);if(s<=this.unlockedStep){a==null||a.classList.remove("locked"),a==null||a.classList.add("unlocked"),n==null||n.classList.remove("locked"),n==null||n.classList.add("unlocked");const r=a==null?void 0:a.querySelector(".action-prompt");r&&(r.classList.remove("prompt-status"),t==="voyage"?r.textContent="Click Here →":r.textContent=`Open Realm ${s} →`)}else a==null||a.classList.remove("unlocked"),a==null||a.classList.add("locked"),n==null||n.classList.remove("unlocked"),n==null||n.classList.add("locked")});for(let t=1;t<=4;t++){const i=document.getElementById(`trail-seg-${t}`);t<this.unlockedStep?i==null||i.classList.add("active"):i==null||i.classList.remove("active")}const e=document.getElementById("trail-status-text");if(e)if(this.unlockedStep>=5)e.textContent="🎉 All 5 Realms Unlocked! Complete Journey to Innovation Foot Path Trail Active.";else{const t=m[this.symbolOrder[this.unlockedStep-1]].name;e.textContent=`Step ${this.unlockedStep-1} of 5 Completed • Foot Path Trail Extended to ${t}!`}}showLockedNotice(e){var i;const t=(i=m[this.symbolOrder[e-2]])==null?void 0:i.name;alert(`🔒 This symbol is locked! Complete ${t} (Symbol ${e-1}) first to extend the brown foot path trail!`)}handleHashRoute(){const e=window.location.hash.replace("#","");m[e]?this.symbolOrder.indexOf(e)+1<=this.unlockedStep?this.openSymbolPage(e,!1):this.showMapView(!1):this.showMapView(!1)}showMapView(e=!0){e&&window.history.pushState(null,""," ");const t=document.getElementById("map-view"),i=document.getElementById("subpage-view");t==null||t.classList.add("active"),i==null||i.classList.remove("active"),document.querySelectorAll(".symbol-nav .nav-pill").forEach(s=>{s.getAttribute("data-symbol")===this.currentSymbolId?s.classList.add("active"):s.classList.remove("active")})}openSymbolPage(e,t=!0){const i=m[e];if(!i)return;const s=document.getElementById("map-container"),a=document.getElementById("map-wrapper");s&&!s.classList.contains("unfolded")&&(s.classList.add("unfolded"),a==null||a.classList.add("slide-in")),this.currentSymbolId=e,this.activeTab="lore",t&&(window.location.hash=e),document.querySelectorAll(".symbol-nav .nav-pill").forEach(d=>{d.getAttribute("data-symbol")===e?d.classList.add("active"):d.classList.remove("active")}),this.renderSubpageContent(i);const n=document.getElementById("map-view"),r=document.getElementById("subpage-view");n==null||n.classList.remove("active"),r==null||r.classList.add("active");const o=document.getElementById("subpage-content");o&&(o.scrollTop=0),l.playLyreArpeggio()}renderSubpageContent(e){var s;const t=document.getElementById("subpage-content");if(!t)return;if(e.id==="voyage"){this.renderVoyageAboutUs(t,e);return}if(e.id==="realms"){this.renderRealmsHackathon(t,e);return}if(e.id==="protocols"){this.renderProtocolsPage(t,e);return}if(e.id==="legions"){this.renderLegionsPage(t,e);return}t.innerHTML=`
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

              ${e.loreChapters.map((a,n)=>`
                <div class="chapter-card">
                  <h3 class="chapter-title">Chapter ${n+1}: ${a.title}</h3>
                  <p class="chapter-content">${a.content}</p>
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
                  ${e.stats.map(a=>`
                    <div class="stat-item">
                      <span class="stat-lbl">${a.label}:</span>
                      <span class="stat-val">${a.value}</span>
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
            ${e.artifacts.map((a,n)=>`
              <div class="artifact-card">
                <div>
                  <span class="art-card-badge">${a.badge}</span>
                  <h3 class="art-card-title">${a.name}</h3>
                  <div class="art-card-origin">${a.origin}</div>
                  <p class="art-card-desc">${a.desc}</p>
                </div>
                <button class="inspect-btn" data-art-idx="${n}">Inspect Relic &rarr;</button>
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
              ${e.challenge.options.map((a,n)=>`
                <button class="option-btn" data-opt-idx="${n}">
                  ${n+1}. ${a.text}
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
    `,(s=document.getElementById("back-to-map-btn"))==null||s.addEventListener("click",()=>{l.playClick(),this.showMapView()});const i=t.querySelectorAll(".tab-btn");i.forEach(a=>{a.addEventListener("click",()=>{l.playClick();const n=a.getAttribute("data-tab");i.forEach(o=>o.classList.remove("active")),a.classList.add("active"),t.querySelectorAll(".tab-panel").forEach(o=>{o.classList.remove("active")});const r=t.querySelector(`#panel-${n}`);r&&r.classList.add("active")})}),t.querySelectorAll(".inspect-btn").forEach(a=>{a.addEventListener("click",()=>{l.playClick();const n=parseInt(a.getAttribute("data-art-idx"),10),r=e.artifacts[n];r&&this.openArtifactModal(r)})}),t.querySelectorAll(".option-btn").forEach(a=>{a.addEventListener("click",()=>{const n=parseInt(a.getAttribute("data-opt-idx"),10),r=e.challenge.options[n],o=t.querySelector("#challenge-feedback");o&&r&&(o.className="challenge-feedback "+(r.correct?"success":"failure"),o.textContent=r.feedback,r.correct?l.playTriumph():l.playClick())})})}renderVoyageAboutUs(e,t){var i;e.innerHTML=`
      <div class="voyage-cover-wrapper" style="background-image: url('${t.heroImg}');">
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
    `,(i=document.getElementById("back-to-map-btn"))==null||i.addEventListener("click",()=>{l.playClick(),this.showMapView()})}renderRealmsHackathon(e,t){var a;e.innerHTML=`
      <div class="realms-cover-wrapper" style="background-image: url('${t.heroImg}');">
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
    `,(a=document.getElementById("back-to-map-btn"))==null||a.addEventListener("click",()=>{l.playClick(),this.showMapView()});const i=e.querySelectorAll(".hack-kpi-card"),s=new IntersectionObserver(n=>{n.forEach((r,o)=>{if(r.isIntersecting){const d=r.target,g=Array.from(i).indexOf(d)*150;setTimeout(()=>{d.classList.add("visible")},g),s.unobserve(d)}})},{threshold:.15});i.forEach(n=>{s.observe(n),n.addEventListener("click",()=>{var o;const r=((o=n.querySelector(".hack-kpi-title"))==null?void 0:o.textContent)||"Hackathon Track";this.triggerWeaponArrow(r)})})}renderProtocolsPage(e,t){var n;e.innerHTML=`
      <div class="realms-cover-wrapper" style="background-image: url('${t.heroImg}');">
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
    `,(n=document.getElementById("back-to-map-btn"))==null||n.addEventListener("click",()=>{l.playClick(),this.showMapView()});const i=e.querySelectorAll(".timeline-item"),s={root:null,rootMargin:"0px 0px -15% 0px",threshold:.1},a=new IntersectionObserver((r,o)=>{r.forEach(d=>{d.isIntersecting&&d.target.classList.add("active")})},s);i.forEach(r=>{a.observe(r)})}renderLegionsPage(e,t){var a;e.innerHTML=`
      <div class="realms-cover-wrapper" style="background-image: url('${t.heroImg}');">
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
    `,(a=document.getElementById("back-to-map-btn"))==null||a.addEventListener("click",()=>{l.playClick(),this.showMapView()});const i=e.querySelector(".vanguard-kpi-grid");i&&new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting?i.classList.add("spread"):i.classList.remove("spread")})},{threshold:.15}).observe(i);const s=e.querySelector(".legion-high-grid");s&&new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting?s.classList.add("slide-in"):s.classList.remove("slide-in")})},{threshold:.15}).observe(s)}triggerWeaponArrow(e){const t=document.getElementById("weapon-arrow-overlay"),i=document.getElementById("weapon-arrow-wrapper"),s=document.getElementById("registration-modal"),a=document.getElementById("reg-track-select"),n=document.getElementById("reg-track-title");if(!t||!i){this.openRegistrationModal(e);return}t.classList.add("active"),i.classList.remove("shoot"),i.offsetWidth,i.classList.add("shoot"),setTimeout(()=>{a&&(a.value=e),n&&(n.textContent=`Register: ${e}`);const r=document.getElementById("reg-form"),o=document.getElementById("reg-success-msg");r&&(r.style.display="block"),o&&(o.style.display="none"),s==null||s.classList.add("active")},650),setTimeout(()=>{t.classList.remove("active"),i.classList.remove("shoot")},900)}openRegistrationModal(e){const t=document.getElementById("registration-modal"),i=document.getElementById("reg-track-select"),s=document.getElementById("reg-track-title");i&&(i.value=e),s&&(s.textContent=`Register: ${e}`);const a=document.getElementById("reg-form"),n=document.getElementById("reg-success-msg");a&&(a.style.display="block"),n&&(n.style.display="none"),t==null||t.classList.add("active")}openArtifactModal(e){var t;document.getElementById("art-badge").textContent=e.badge,document.getElementById("art-name").textContent=e.name,document.getElementById("art-origin").textContent=e.origin,document.getElementById("art-desc").textContent=e.desc,document.getElementById("art-power").textContent=e.power,(t=document.getElementById("artifact-modal"))==null||t.classList.add("active")}initParticleCanvas(){const e=document.getElementById("particle-canvas");if(!e)return;const t=e.getContext("2d");let i=e.width=window.innerWidth,s=e.height=window.innerHeight;window.addEventListener("resize",()=>{i=e.width=window.innerWidth,s=e.height=window.innerHeight});const a=[],n=45;for(let o=0;o<n;o++)a.push({x:Math.random()*i,y:Math.random()*s,radius:Math.random()*2+.5,alpha:Math.random()*.6+.2,vx:(Math.random()-.5)*.4,vy:-Math.random()*.5-.2});const r=()=>{t.clearRect(0,0,i,s),a.forEach(o=>{o.x+=o.vx,o.y+=o.vy,o.y<0&&(o.y=s+10,o.x=Math.random()*i),t.beginPath(),t.arc(o.x,o.y,o.radius,0,Math.PI*2),t.fillStyle=`rgba(243, 156, 18, ${o.alpha})`,t.shadowBlur=8,t.shadowColor="#ffd700",t.fill()}),requestAnimationFrame(r)};r()}}document.addEventListener("DOMContentLoaded",()=>{new A().init()});
