export const gardenStyles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #fff8fa, #f0f8ff)',
    borderRadius: '8px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '600',
    color: '#d48fb8',
    marginBottom: '32px',
    textAlign: 'center',
    textShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
    fontFamily: '"Playfair Display", serif',
  },
  gardenGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
    width: '100%',
    justifyContent: 'center',
  },
}