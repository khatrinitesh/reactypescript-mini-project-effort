interface NavigationProps {
    title: string;
    description:string;
  }
  
  export default function Navigation({ title,description}: NavigationProps) {
    return (
      <nav>
        <h1 style={{color:'red'}}>{title}</h1>
        <p style={{color:'blue'}}>{description}</p>
      </nav>
    );
  }