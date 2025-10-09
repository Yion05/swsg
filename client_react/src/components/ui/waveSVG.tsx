const WaveSeparator = ({ id = 'wave-gradient' }) => { 
  return (
    <div className="w-full h-auto"> 
      <svg
        className="w-full h-full" 
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* to contributor reading this, you can adjust the gradient here 🐦 */}
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#A60000', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#650000', stopOpacity: 1 }} /> 
          </linearGradient>
        </defs>

        <path
          fill={`url(#${id})`} 
          fillOpacity={1} 
          d="M0,224L60,197.3C120,171,240,117,360,122.7C480,128,600,192,720,208C840,224,960,192,1080,170.7C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          stroke="none"
        />
      </svg>
    </div>
  );
};

export default WaveSeparator;