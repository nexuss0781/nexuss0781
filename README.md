<!-- Snake Animation Border Top -->
<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&animation=twinkling" width="100%" />
</div>

<!-- Custom Rotating Snake Animation SVG -->
<svg width="100%" height="60" viewBox="0 0 800 60" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#58A6FF;stop-opacity:1" />
      <stop offset="33%" style="stop-color:#A371F7;stop-opacity:1" />
      <stop offset="66%" style="stop-color:#FF7B72;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3FB950;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Outer rotating rectangle border -->
  <rect x="5" y="5" width="790" height="50" fill="none" stroke="url(#snakeGradient)" stroke-width="4" 
        stroke-dasharray="20 10" filter="url(#glow)">
    <animateTransform attributeName="transform" type="rotate" from="0 400 30" to="360 400 30" dur="20s" repeatCount="indefinite"/>
  </rect>
  
  <!-- Inner counter-rotating dashed border -->
  <rect x="15" y="15" width="770" height="30" fill="none" stroke="#A371F7" stroke-width="2" 
        stroke-dasharray="15 15" opacity="0.7">
    <animateTransform attributeName="transform" type="rotate" from="360 400 30" to="0 400 30" dur="15s" repeatCount="indefinite"/>
  </rect>
  
  <!-- Corner decorations -->
  <circle cx="5" cy="5" r="6" fill="#58A6FF" filter="url(#glow)">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="795" cy="5" r="6" fill="#A371F7" filter="url(#glow)">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="795" cy="55" r="6" fill="#FF7B72" filter="url(#glow)">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="1s" repeatCount="indefinite"/>
  </circle>
  <circle cx="5" cy="55" r="6" fill="#3FB950" filter="url(#glow)">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="1.5s" repeatCount="indefinite"/>
  </circle>
</svg>

<!-- Big NEXUSS Banner -->
<div align="center">
  <h1 style="font-size: 80px; font-weight: bold; letter-spacing: 10px; color: #58A6FF; text-shadow: 3px 3px 6px rgba(0,0,0,0.5); margin: 20px 0;">
    N E X U S S
  </h1>
</div>

<!-- Animated Typing Header -->
<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=30&duration=3000&pause=1000&color=A371F7&center=true&vCenter=true&width=600&height=60&lines=Welcome+to+my+profile;Building+the+future;Code+%7C+Create+%7C+Innovate" alt="Typing SVG" />
</div>

<br/>

<!-- Stats Section -->
<div align="center">
  <table>
    <tr>
      <td>
        <img src="https://github-readme-stats.vercel.app/api?username=nexuss0781&show_icons=true&theme=radical&count_private=true&hide_rank=false" width="100%" alt="GitHub Stats" />
      </td>
      <td>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=nexuss0781&layout=compact&theme=radical&hide=jupyter%20notebook" width="100%" alt="Top Languages" />
      </td>
    </tr>
  </table>
</div>

<br/>

<!-- Streak & Trophies -->
<div align="center">
  <table>
    <tr>
      <td>
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=nexuss0781&theme=radical&date_format=M%20j%5B%2C%20Y%5D" width="100%" alt="Commit Streak" />
      </td>
      <td>
        <img src="https://github-profile-trophy.vercel.app/?username=nexuss0781&theme=radical&no-frame=true&row=1&column=4" width="100%" alt="Trophies" />
      </td>
    </tr>
  </table>
</div>

<br/>

<!-- Contribution Heatmap -->
<div align="center">
  <h2 style="color: #FF7B72;">🔥 Contribution Activity</h2>
  <img src="https://ghchart.rshah.org/nexuss0781" alt="Contribution Heatmap" width="100%" />
</div>

<br/>

<!-- Activity Graph -->
<div align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=nexuss0781&theme=radical" width="100%" alt="Profile Summary" />
</div>

<br/>

<!-- Inspirational Quotes -->
<div align="center">
  <h2 style="color: #3FB950;">💡 Words of Wisdom</h2>
  <table>
    <tr>
      <td align="center" style="border: 2px solid #58A6FF; border-radius: 10px; padding: 15px; margin: 10px;">
        <i>"Simple things should be simple, complex things should be possible."</i><br/>
        <b>— Alan Kay</b>
      </td>
    </tr>
    <tr>
      <td align="center" style="border: 2px solid #A371F7; border-radius: 10px; padding: 15px; margin: 10px;">
        <i>"Make it work, make it right, make it fast."</i><br/>
        <b>— Kent Beck</b>
      </td>
    </tr>
    <tr>
      <td align="center" style="border: 2px solid #FF7B72; border-radius: 10px; padding: 15px; margin: 10px;">
        <i>"Code is like humor. When you have to explain it, it's bad."</i><br/>
        <b>— Cory House</b>
      </td>
    </tr>
  </table>
</div>

<br/>

<!-- Footer with Visitor Counter -->
<div align="center">
  <h3 style="color: #58A6FF;">Thanks for visiting! 🚀</h3>
  <img src="https://komarev.com/ghpvc/?username=nexuss0781&color=58A6FF" alt="Profile views" />
</div>

<!-- Snake Animation Border Bottom -->
<svg width="100%" height="60" viewBox="0 0 800 60" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="snakeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3FB950;stop-opacity:1" />
      <stop offset="33%" style="stop-color:#FF7B72;stop-opacity:1" />
      <stop offset="66%" style="stop-color:#A371F7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#58A6FF;stop-opacity:1" />
    </linearGradient>
    <filter id="glow2">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Outer rotating rectangle border (bottom) -->
  <rect x="5" y="5" width="790" height="50" fill="none" stroke="url(#snakeGradient2)" stroke-width="4" 
        stroke-dasharray="20 10" filter="url(#glow2)">
    <animateTransform attributeName="transform" type="rotate" from="360 400 30" to="0 400 30" dur="25s" repeatCount="indefinite"/>
  </rect>
  
  <!-- Inner counter-rotating dashed border -->
  <rect x="15" y="15" width="770" height="30" fill="none" stroke="#FF7B72" stroke-width="2" 
        stroke-dasharray="15 15" opacity="0.7">
    <animateTransform attributeName="transform" type="rotate" from="0 400 30" to="360 400 30" dur="18s" repeatCount="indefinite"/>
  </rect>
  
  <!-- Corner decorations -->
  <circle cx="5" cy="5" r="6" fill="#3FB950" filter="url(#glow2)">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="795" cy="5" r="6" fill="#FF7B72" filter="url(#glow2)">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" begin="0.6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="795" cy="55" r="6" fill="#A371F7" filter="url(#glow2)">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" begin="1.2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="5" cy="55" r="6" fill="#58A6FF" filter="url(#glow2)">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" begin="1.8s" repeatCount="indefinite"/>
  </circle>
</svg>
