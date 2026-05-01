export default function Avatar() {
  return (
    <img
      src="/anarv.jpeg"
      alt="Anarv Vasavada"
      className="profile-avatar"
      style={{
        width: 88,
        height: 88,
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: 'center top',
        flexShrink: 0,
        border: '2px solid #2e2e2e',
        boxShadow: '0 0 0 4px #0c0c0c, 0 0 20px rgba(140,197,90,0.12)',
      }}
    />
  )
}