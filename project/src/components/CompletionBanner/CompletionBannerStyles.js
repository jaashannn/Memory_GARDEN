export const bannerStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    opacity: 0,
    animation: 'fadeIn 1s ease-out forwards',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 16px 32px rgba(212, 143, 184, 0.2)',
    textAlign: 'center',
    maxWidth: '600px',
    border: '2px solid rgba(212, 143, 184, 0.3)',
  },
  title: {
    fontSize: '1.75rem',
    color: '#d48fb8',
    marginBottom: '32px',
    lineHeight: '1.4',
    fontFamily: '"Playfair Display", serif',
  },
  button: {
    backgroundColor: '#f8bbce',
    color: 'white',
    border: 'none',
    padding: '12px 32px',
    borderRadius: '24px',
    fontSize: '1.25rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(212, 143, 184, 0.3)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 12px rgba(212, 143, 184, 0.4)',
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: '0 2px 4px rgba(212, 143, 184, 0.3)',
    },
  },
}