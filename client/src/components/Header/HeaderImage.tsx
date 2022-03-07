import RotatedBox from "../RotatedBox";
import Ferdowsi from "../../assets/images/ferdowsi-retro.png";

export default function HeaderImage() {
  return (
    <div className="header-image">
      <RotatedBox>
        <span aria-hidden className="animated-letters" />
        <img draggable={false} className="main-image" src={Ferdowsi} alt="" />
      </RotatedBox>
    </div>
  );
}
