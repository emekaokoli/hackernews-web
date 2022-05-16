import '../styles/link.styles.css';
const Link = ({url, title}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {title}
    </a>
  );
}

export default Link;