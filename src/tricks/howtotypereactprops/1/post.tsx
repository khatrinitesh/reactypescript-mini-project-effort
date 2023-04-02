interface PostProps {
    title: string;
  }

  export default function Post({title}:PostProps) {
    return(
        <li>{title}</li>
    )
  }