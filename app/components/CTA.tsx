
const FinalCtaBanner: React.FC = () => {
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat text-white py-40 px-6 text-center"
      style={{
        backgroundImage: `url('/cta_cover.webp')`,
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Keep Their Memory Beautifully Alive
        </h2>
        <p className="text-lg mb-6">
          Let us help ensure your loved one&apos;s resting place is always cared for with dignity and respect.
        </p>
        <a
          href="#get-started-form"
          className="inline-block bg-white text-brand-primary font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default FinalCtaBanner;
