import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type Props = {
  component: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  fill: string;
  onHoverFill: string;
  width?: string;
  onClick: () => void;
};

export default function Svg({
  component,
  fill,
  onHoverFill,
  width = "50px",
  onClick,
}: Props) {
  const Cmp = component;

  return (
    <Cmp
      sx={{
        width: width,
        height: width,
        color: fill,
        transition: "ease-in-out 0.3s",
        "&:hover": {
          color: onHoverFill,
          cursor: "pointer",
        },
      }}
      onClick={onClick}
    />
  );
}
