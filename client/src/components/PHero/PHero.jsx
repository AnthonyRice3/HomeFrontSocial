const PHero = () => {
  return (
    <section className="text-white relative z-[1] pb-28">
      <video className="w-full object-cover -z-[1]" style={{ height: "40vh" }} autoPlay loop muted playsInline poster='./11.png'>
        <source src='./glass_vid.mp4' type='video/mp4' />
      </video>
    </section>
  );
};

export default PHero;
