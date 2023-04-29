import './tag.css'

export default function Tag({ names, handleTagChange }: {
    names: string[];
    handleTagChange: (a: string, b: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }): JSX.Element {
    return (
      <div className="tagsInput">
        {names.map((name) => (
          <div className={`listItem__Tag--${name}--uncompleted cursorOnTag`} key={Math.random() * 1000} onClick={(event) => handleTagChange(name, event)}>{name}</div>
        ))}
      </div>
    );
  }
  