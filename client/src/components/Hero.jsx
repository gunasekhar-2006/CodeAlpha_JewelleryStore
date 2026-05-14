const Hero = () => {

  const scrollToProducts = () => {

    const section =
      document.getElementById("products");

    section.scrollIntoView({
      behavior:"smooth",
    });
  };

  return (

    <section className="hero">

      <h1>
        Luxury Jewellery Collections
      </h1>

      <p>
        Discover timeless elegance with Gold,
        Diamond, Silver and Platinum Jewellery
      </p>

      <button
        className="btn"
        onClick={scrollToProducts}
      >
        Explore Collection
      </button>

    </section>
  );
};

export default Hero;