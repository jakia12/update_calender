const NavArrow = () => {
  return (
    <div className="lg:flex items-center justify-center posi hidden">
      <button className="mr-[14px]">
        <img src="/images/lar.png" alt="" className="w-[40px]" />
      </button>
      <button>
        <img src="/images/rar.png" alt="" className="w-[40px]" />
      </button>
    </div>
  );
};

export default NavArrow;
