<!-- 
  ╔═══════════════════════════════════════════════════════════╗
  ║  🌀 ROTATING SNAKE ANIMATION - CIRCULAR README EFFECT 🌀  ║
  ╚═══════════════════════════════════════════════════════════╝
-->

<div align="center">

<!-- Animated Rotating Border Effect using SVG -->
<svg width="100%" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#58A6FF;stop-opacity:1" />
      <stop offset="25%" style="stop-color:#A371F7;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#FF7B72;stop-opacity:1" />
      <stop offset="75%" style="stop-color:#3FB950;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#58A6FF;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Rotating Rectangular Snake Animation -->
  <rect x="10" y="10" width="780" height="180" fill="none" stroke="url(#snakeGradient)" stroke-width="4" rx="20" filter="url(#glow)">
    <animateTransform attributeName="transform" type="rotate" from="0 400 100" to="360 400 100" dur="20s" repeatCount="indefinite" />
  </rect>
  
  <!-- Inner rotating dashed border -->
  <rect x="25" y="25" width="750" height="150" fill="none" stroke="#58A6FF" stroke-width="2" stroke-dasharray="15,10" rx="15" opacity="0.6">
    <animateTransform attributeName="transform" type="rotate" from="360 400 100" to="0 400 100" dur="15s" repeatCount="indefinite" />
  </rect>
  
  <!-- Corner decorations -->
  <circle cx="10" cy="10" r="8" fill="#58A6FF">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
  </circle>
  <circle cx="790" cy="10" r="8" fill="#A371F7">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.5s" repeatCount="indefinite" />
  </circle>
  <circle cx="790" cy="190" r="8" fill="#FF7B72">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="1s" repeatCount="indefinite" />
  </circle>
  <circle cx="10" cy="190" r="8" fill="#3FB950">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="1.5s" repeatCount="indefinite" />
  </circle>
</svg>

</div>

<!-- Profile Header with Animated Typing Effect -->
<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&duration=3000&pause=1000&color=58A6FF&center=true&vCenter=true&width=600&lines=Welcome+to+My+GitHub+Profile;Building+Digital+Solutions;Open+Source+Enthusiast;Continuous+Learner" alt="Typing SVG" />
</p>

<!-- Inspirational Quote Section -->
<div align="center">

| 💡 **Quote of the Day** |
|------------------------|
| > *"The best way to predict the future is to invent it."* — Alan Kay |
| > *"Code is like humor. When you have to explain it, it's bad."* — Cory House |
| > *"Simplicity is the soul of efficiency."* — Austin Freeman |

</div>

<!-- Profile Banner -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=&animation=twinkle&render=2" alt="Profile Banner" />
</p>

<!-- Social Stats Row -->
<table align="center">
  <tr>
    <td>
      <!-- GitHub Stats Card -->
      <img src="https://github-readme-stats.vercel.app/api?username=nexuss0781&show_icons=true&theme=radical&count_private=true&hide_border=true" alt="GitHub Stats" />
    </td>
    <td>
      <!-- Top Languages Card -->
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=nexuss0781&layout=compact&theme=radical&hide_border=true" alt="Top Languages" />
    </td>
  </tr>
</table>

<!-- Contribution Activity Graph -->
<p align="center">
  <img src="https://ghchart.rshah.org/nexuss0781" alt="Contribution Chart" width="100%" />
</p>

<!-- Streak Stats -->
<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=nexuss0781&theme=radical&hide_border=true" alt="Commit Streak" />
</p>

<!-- Achievements Section -->
<p align="center">
  <h3>🏆 GitHub Achievements</h3>
  <img src="https://github-profile-trophy.vercel.app/?username=nexuss0781&theme=radical&no-frame=false&no-bg=true&margin-w=4&row=1" alt="Trophy Profile" />
</p>

<!-- Detailed Stats Cards -->
<table align="center">
  <tr>
    <td>
      <!-- Most Contributed Repos -->
      <img src="https://github-readme-stats.vercel.app/api/pin/?username=nexuss0781&repo=&theme=radical&hide_border=true" alt="Pinned Repo" />
    </td>
    <td>
      <!-- Code Time Stats (if available) -->
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=nexuss0781&theme=radical" alt="Profile Summary" />
    </td>
  </tr>
</table>

<!-- Productivity Metrics -->
<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=nexuss0781&theme=react-dark&hide_border=true&hide_title=true&area=true&custom_title=Contribution+Activity+Graph" alt="Activity Graph" />
</p>

<!-- Tech Stack Section Placeholder -->
<p align="center">
  <h3>🛠️ Technologies & Tools</h3>
  <i>Add your tech stack badges here using shields.io or simple-icons</i>
</p>

<!-- Recent Activity / Blog Posts Placeholder -->
<p align="center">
  <h3>📝 Latest Updates</h3>
  <i>Connect your blog or recent activity feed here</i>
</p>

<!-- Visitor Counter -->
<p align="center">
  <img src="https://komarev.com/visitors?username=nexuss0781&color=58A6FF" alt="Profile Views" />
</p>

<!-- Footer with Rotating Animation -->
<div align="center">

<!-- Animated Footer Snake Border -->
<svg width="100%" height="150" viewBox="0 0 800 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3FB950;stop-opacity:1" />
      <stop offset="25%" style="stop-color:#FF7B72;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#A371F7;stop-opacity:1" />
      <stop offset="75%" style="stop-color:#58A6FF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3FB950;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Rotating footer border -->
  <rect x="10" y="10" width="780" height="130" fill="none" stroke="url(#footerGradient)" stroke-width="3" rx="15">
    <animateTransform attributeName="transform" type="rotate" from="360 400 75" to="0 400 75" dur="25s" repeatCount="indefinite" />
  </rect>
  
  <!-- Thank you message -->
  <text x="400" y="80" text-anchor="middle" fill="#58A6FF" font-size="20" font-family="Arial">
    ✨ Thanks for visiting! ✨
  </text>
</svg>

</div>

<!-- Footer Capsule -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=footing&color=auto&height=100&section=footer&animation=twinkle&render=2" alt="Footer" />
</p>

<!-- 
  ╔════════════════════════════════════════════════════════════════════╗
  ║              🎨 README UTILITIES & FEATURES SHOWCASE 🎨            ║
  ╚════════════════════════════════════════════════════════════════════╝
  
  ✅ CUSTOM SVG ANIMATIONS
     • Rotating rectangular snake border (top & footer)
     • Multi-color gradient stroke with glow effect
     • Counter-rotating inner dashed border
     • Pulsing corner decorations
     
  ✅ DYNAMIC CONTENT SERVICES
     • Readme Typing SVG - Animated typing text header
     • Capsule Render - Waving banner & animated footer
     • GitHub Readme Stats - Real-time profile statistics
     • GitHub Readme Streak Stats - Live commit streak counter
     • GitHub Profile Trophy - Auto-generated achievement trophies
     • GHChart - Visual contribution heatmap
     • GitHub Readme Activity Graph - Detailed activity visualization
     • GitHub Profile Summary Cards - Comprehensive profile details
     • Komarev Badge - Live visitor counter
     
  ✅ DESIGN ELEMENTS
     • Inspirational quote section with table formatting
     • Responsive table layouts for organized content
     • Custom color themes (Radical theme throughout)
     • Mobile-friendly responsive design
     • Glow filters and gradient effects
     • SVG-based animations (no external dependencies)
     
  ✅ ANIMATION FEATURES
     • Continuous rotation (20s & 25s cycles)
     • Counter-rotation effects for visual depth
     • Pulsing opacity animations on corners
     • Smooth gradient transitions
     • Infinite loop animations
  
  📊 STATS UPDATE FREQUENCY: Every 24 hours (GitHub API)
  🎯 TOTAL EXTERNAL SERVICES: 10+ integrated utilities
  🚀 PERFORMANCE: Pure SVG/CSS animations (zero JavaScript)
-->

<p align="center">
  <sub>Built with ❤️ using GitHub Markdown & SVG Magic</sub>
</p>
