import ReactDOMServer from "react-dom/server";
import * as FeatherIcons from "react-feather";

type FeatherIcon = React.FC<{ style?: React.CSSProperties }> & {
  displayName?: string;
};

interface CodeProps {
  iconId: string;
  color: string;
  width: number;
  height: number;
  opacity: number;
  rotation: number;
  blur: number;
}

function Code({
  iconId,
  color,
  width,
  height,
  opacity,
  rotation,
  blur,
}: CodeProps) {
  const style: React.CSSProperties = {
    color,
    width,
    height,
    opacity,
    transform: `rotate(${rotation}deg)`,
    filter: `blur(${blur}px)`,
  };

  const icons = Object.values(FeatherIcons) as FeatherIcon[];
  const Element =
    icons.find((item) => item.displayName === iconId) ?? FeatherIcons.GitHub;

  return (
    <div className="px-2.5 pt-2.5">
      <pre className="whitespace-pre-wrap m-0">
        <code className="font-mono text-[0.6rem] text-neutral-700 dark:text-white">
          {ReactDOMServer.renderToStaticMarkup(<Element style={style} />)}
        </code>
      </pre>
    </div>
  );
}

export default Code;
