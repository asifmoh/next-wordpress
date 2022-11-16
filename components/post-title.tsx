export default function PostTitle({ children }) {
  return (
    
    
    <h1
      className="entry-title"
      dangerouslySetInnerHTML={{ __html: children }}
    />


    
  )
}
