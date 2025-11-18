export default function CompanyLogos() {
  const logos = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/052aa13ab2e4a9bda6f1cdfca5302ff56cd9ee40?width=144",
      alt: "Disney",
      width: "w-[72px]",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/4a3e12dc74d20e563ed2ca76bb21b42f77b6a4e1?width=336",
      alt: "Thomson Reuters",
      width: "w-[168px]",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/f2fc73d517e0568c523b6ed72e9a7acc4ea9e902?width=192",
      alt: "Alphabet",
      width: "w-24",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/280be409c1c9c508362036dd56ff4a7d84b02ea5?width=190",
      alt: "Meta",
      width: "w-[95px]",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/641f2d5c4f2533a925c1793676156b241ad23962?width=160",
      alt: "Okta",
      width: "w-20",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/ae6e980fff3be41b3b91e35607bd2af31ed545a2?width=64",
      alt: "HP",
      width: "w-8",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/e54d8285f7fd10305a3448c1a24ddee9135b2939?width=176",
      alt: "Samsung",
      width: "w-[88px]",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/da99126c913fd56407e1b3c4d3d0898730d562af?width=144",
      alt: "Lowe's",
      width: "w-[72px]",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/25d1dc09c6ea18eacd449db5b145d287ec934d6b?width=112",
      alt: "P & G",
      width: "w-14",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/6ba2c4d61d8a8490c9dc5e100c65934753212e42?width=208",
      alt: "Alibaba",
      width: "w-[104px]",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/18f52023c59395b163022f8fa3dfc801745e9e29?width=160",
      alt: "Hermes",
      width: "w-20",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/d917f0d91f3e60183b32892d17d5a82275860ffa?width=208",
      alt: "Siemens",
      width: "w-[104px]",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/d59c3d1d280c64265bd2d2f98cbe6507dc37a254?width=208",
      alt: "Equifax",
      width: "w-[104px]",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/c35b59789f9429fc71319c3b0bceea61adbc9f04?width=192",
      alt: "American Family Insurance",
      width: "w-24",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/f086e0d2b47619d0d7647e4da5dff614e0c46600?width=176",
      alt: "Stonex",
      width: "w-[88px]",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/0a19a6f09b955cb1d7a9d874e1f790f6638f5608?width=224",
      alt: "Opendoor",
      width: "w-28",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/3cabee9fc25ec22ecbc8fbd87db93641d66dc922?width=240",
      alt: "Booking.com",
      width: "w-[120px]",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/d161ab1046ba63794b775576d87f0721fa0dadd3?width=160",
      alt: "Indeed",
      width: "w-20",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/51e3ed2e9bb91f7006e53e01b4cd5eae754330de?width=224",
      alt: "Mastercard",
      width: "w-28",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/a62eb84a1036ce9b2449db1c55b6a662585806cf?width=192",
      alt: "Allstate",
      width: "w-24",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/06b14c1c36dcba4b6964b9db1b56b650c5278a1a?width=224",
      alt: "Edward Jones",
      width: "w-28",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/4ef8e941eefe461dc43b7e453fc64b8fd57ab675?width=240",
      alt: "Poshmark",
      width: "w-[120px]",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/dc3dc6b0cf010dd14351aee717b82d93f6def8e8?width=144",
      alt: "Flipkart",
      width: "w-[72px]",
    },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="border-t border-b border-zapier-border bg-zapier-cream py-12 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="relative">
          <div className="inline-block bg-zapier-cream px-6 relative z-10 mb-8 left-1/2 -translate-x-1/2">
            <p className="text-sm text-zapier-grey tracking-tight">
              Trusted by 3.4 million companies
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-16 md:gap-20 animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.width} h-auto object-contain opacity-70 hover:opacity-100 transition-opacity`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
