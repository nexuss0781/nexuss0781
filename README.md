<!-- Snake Animation Border Top - Rotating Rectangle -->
<div align="center">
  <svg width="100%" height="80" viewBox="0 0 900 80" xmlns="http://www.w3.org/2000/svg" style="max-width: 900px;">
    <defs>
      <linearGradient id="snakeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#58A6FF;stop-opacity:1">
          <animate attributeName="offset" values="0;0.2;0.4;0.6;0.8;1;0" dur="3s" repeatCount="indefinite"/>
        </stop>
        <stop offset="25%" style="stop-color:#A371F7;stop-opacity:1">
          <animate attributeName="offset" values="0.25;0.45;0.65;0.85;1.05;1.25;0.25" dur="3s" repeatCount="indefinite"/>
        </stop>
        <stop offset="50%" style="stop-color:#FF7B72;stop-opacity:1">
          <animate attributeName="offset" values="0.5;0.7;0.9;1.1;1.3;1.5;0.5" dur="3s" repeatCount="indefinite"/>
        </stop>
        <stop offset="75%" style="stop-color:#3FB950;stop-opacity:1">
          <animate attributeName="offset" values="0.75;0.95;1.15;1.35;1.55;1.75;0.75" dur="3s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" style="stop-color:#58A6FF;stop-opacity:1">
          <animate attributeName="offset" values="1;1.2;1.4;1.6;1.8;2;1" dur="3s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
      <filter id="glowEffect">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <!-- Animated rotating rectangle border -->
    <rect x="8" y="8" width="884" height="64" fill="none" stroke="url(#snakeGrad)" stroke-width="5" 
          stroke-dasharray="30 15" filter="url(#glowEffect)" rx="8">
      <animateTransform attributeName="transform" type="rotate" from="0 450 40" to="360 450 40" dur="12s" repeatCount="indefinite"/>
    </rect>
    
    <!-- Inner dashed border rotating opposite direction -->
    <rect x="18" y="18" width="864" height="44" fill="none" stroke="#A371F7" stroke-width="2" 
          stroke-dasharray="20 10" opacity="0.8" rx="4">
      <animateTransform attributeName="transform" type="rotate" from="360 450 40" to="0 450 40" dur="8s" repeatCount="indefinite"/>
    </rect>
    
    <!-- Pulsing corner orbs -->
    <circle cx="8" cy="8" r="8" fill="#58A6FF" filter="url(#glowEffect)">
      <animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="892" cy="8" r="8" fill="#A371F7" filter="url(#glowEffect)">
      <animate attributeName="r" values="6;10;6" dur="1.5s" begin="0.4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" begin="0.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="892" cy="72" r="8" fill="#FF7B72" filter="url(#glowEffect)">
      <animate attributeName="r" values="6;10;6" dur="1.5s" begin="0.8s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" begin="0.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="8" cy="72" r="8" fill="#3FB950" filter="url(#glowEffect)">
      <animate attributeName="r" values="6;10;6" dur="1.5s" begin="1.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" begin="1.2s" repeatCount="indefinite"/>
    </circle>
    
    <!-- Flowing particles along border -->
    <circle r="4" fill="#FFFFFF" filter="url(#glowEffect)">
      <animateMotion dur="4s" repeatCount="indefinite" path="M8,40 L892,40 M892,40 L892,40 M892,40 L892,40 M892,40 L8,40 M8,40 L8,40 M8,40 L8,40"/>
    </circle>
  </svg>
</div>

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
        <img src="https://github-readme-stats-ten-rho.vercel.app/api?username=nexuss0781&show_icons=true&theme=radical&count_private=true&hide_rank=false" width="100%" alt="GitHub Stats" />
      </td>
      <td>
        <img src="https://github-readme-stats-ten-rho.vercel.app/api/top-langs/?username=nexuss0781&layout=compact&theme=radical&hide=jupyter%20notebook" width="100%" alt="Top Languages" />
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
        <img src="https://streak-stats.demolab.com/?user=nexuss0781&theme=radical&date_format=M%20j%5B%2C%20Y%5D" width="100%" alt="Commit Streak" />
      </td>
      <td>
        <img src="https://github-profile-trophy.vercel.app/?username=nexuss0781&theme=radical&no-frame=true&row=1&column=4&margin-w=10" width="100%" alt="Trophies" />
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

<!-- Activity Graph with Profile Summary -->
<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=nexuss0781&theme=radical" width="100%" alt="Profile Summary" />
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=nexuss0781&theme=radical" width="48%" alt="Languages" />
        <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=nexuss0781&theme=radical" width="48%" alt="Commit Languages" />
      </td>
    </tr>
  </table>
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

<!-- Snake Animation Border Bottom - Rotating Rectangle -->
<div align="center">
  <svg width="100%" height="80" viewBox="0 0 900 80" xmlns="http://www.w3.org/2000/svg" style="max-width: 900px;">
    <defs>
      <linearGradient id="snakeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#3FB950;stop-opacity:1">
          <animate attributeName="offset" values="0;0.2;0.4;0.6;0.8;1;0" dur="3.5s" repeatCount="indefinite"/>
        </stop>
        <stop offset="25%" style="stop-color:#FF7B72;stop-opacity:1">
          <animate attributeName="offset" values="0.25;0.45;0.65;0.85;1.05;1.25;0.25" dur="3.5s" repeatCount="indefinite"/>
        </stop>
        <stop offset="50%" style="stop-color:#A371F7;stop-opacity:1">
          <animate attributeName="offset" values="0.5;0.7;0.9;1.1;1.3;1.5;0.5" dur="3.5s" repeatCount="indefinite"/>
        </stop>
        <stop offset="75%" style="stop-color:#58A6FF;stop-opacity:1">
          <animate attributeName="offset" values="0.75;0.95;1.15;1.35;1.55;1.75;0.75" dur="3.5s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" style="stop-color:#3FB950;stop-opacity:1">
          <animate attributeName="offset" values="1;1.2;1.4;1.6;1.8;2;1" dur="3.5s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
      <filter id="glowEffect2">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <!-- Animated rotating rectangle border (bottom) - counter-clockwise -->
    <rect x="8" y="8" width="884" height="64" fill="none" stroke="url(#snakeGrad2)" stroke-width="5" 
          stroke-dasharray="30 15" filter="url(#glowEffect2)" rx="8">
      <animateTransform attributeName="transform" type="rotate" from="360 450 40" to="0 450 40" dur="15s" repeatCount="indefinite"/>
    </rect>
    
    <!-- Inner dashed border rotating clockwise -->
    <rect x="18" y="18" width="864" height="44" fill="none" stroke="#FF7B72" stroke-width="2" 
          stroke-dasharray="20 10" opacity="0.8" rx="4">
      <animateTransform attributeName="transform" type="rotate" from="0 450 40" to="360 450 40" dur="10s" repeatCount="indefinite"/>
    </rect>
    
    <!-- Pulsing corner orbs -->
    <circle cx="8" cy="8" r="8" fill="#3FB950" filter="url(#glowEffect2)">
      <animate attributeName="r" values="6;10;6" dur="1.8s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="892" cy="8" r="8" fill="#FF7B72" filter="url(#glowEffect2)">
      <animate attributeName="r" values="6;10;6" dur="1.8s" begin="0.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" begin="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="892" cy="72" r="8" fill="#A371F7" filter="url(#glowEffect2)">
      <animate attributeName="r" values="6;10;6" dur="1.8s" begin="1s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" begin="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="8" cy="72" r="8" fill="#58A6FF" filter="url(#glowEffect2)">
      <animate attributeName="r" values="6;10;6" dur="1.8s" begin="1.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" begin="1.5s" repeatCount="indefinite"/>
    </circle>
    
    <!-- Thanks message embedded -->
    <text x="450" y="45" text-anchor="middle" fill="#FFFFFF" font-size="14" font-weight="bold" filter="url(#glowEffect2)">
      Thanks for visiting! 🚀
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
    </text>
  </svg>
</div>
