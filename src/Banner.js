import React from "react";
function Banner(){
    return(
        <>
        <div className="">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">Name
    <div className="carousel-item active">
      <img src="https://i.ytimg.com/vi/D5cCrVEoW6o/maxresdefault.jpg" className="d-block w-100" height="500px" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/R.d4a503b8e691a666cf7b2ae077717d1e?rik=qkv8b5OKAlXlmQ&riu=http%3a%2f%2fwww.discountmantra.in%2fwp-content%2fuploads%2famazon-great-indian-electronics-sale.jpg&ehk=A4h4aiPswOlhXtcAttXDEGLXK1jKAgLXeaAg8dd4wGc%3d&risl=&pid=ImgRaw&r=0" height="500px" className="d-block w-100" alt="... "/>
    </div>
    <div className="carousel-item">
      <img src="https://pbs.twimg.com/media/Dgk97P5U8AA9zmJ.jpg" className="d-block w-100" height="500px" alt="... "/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        </>
    )
}
export default Banner;