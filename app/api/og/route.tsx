import { ImageResponse } from 'next/og';
import { SITE_NAME } from '@/lib/constants';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at top right, rgba(255, 198, 44, 0.05), transparent), linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 100,
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-0.05em',
              lineHeight: 1,
              marginBottom: 10,
              textTransform: 'uppercase',
            }}
          >
            Prathin Sajith
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#ffc62c',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Senior Software Engineer
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 40,
              gap: 15,
            }}
          >
            {['Symfony', 'Laravel', 'Next.js', 'Cloud'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '10px 20px',
                  borderRadius: 50,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
