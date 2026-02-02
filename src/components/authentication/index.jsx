import authenticatedImg from "../../assets/images/authenticated-img.png"
const Authentication = () => {
  return (
    <div class="authentication-text mt-40 d-dsk">
      <p class="text-black">Authenticated by:</p>
      <img
        src={authenticatedImg}
        alt=""
        class="d-block img-fluid"
      />
    </div>
  );
};

export default Authentication;
