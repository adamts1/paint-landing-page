import { useEffect, useState } from "react";
import "./Accessibility.css";

type Props = {
  onAccessibilityContrast?: () => void;
};

const Accessibility: React.FC<Props> = (props: Props) => {
  const [isFontSizeLarger, setIsFontSizeLarger] = useState(false);

  useEffect(() => {
    if (isFontSizeLarger) {
      document.body.style.fontSize = "larger";
    } else {
      document.body.style.fontSize = "";
    }
  }, [isFontSizeLarger]);

  return (
    <div className="accessibility-menu fade-in">
      <button onClick={() => setIsFontSizeLarger((prev: boolean) => !prev)}>
        הגדלת טקסט
      </button>
      <button onClick={props.onAccessibilityContrast}>ניגודיות גבוהה</button>
      <button>
        <a
          style={{
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
          href="https://aisrael.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          מידע על הנגישות
        </a>
      </button>
    </div>
  );
};

Accessibility.displayName = "Accessibility";
export default Accessibility;
