import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const LASTFM_API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
const LASTFM_USER = import.meta.env.VITE_LASTFM_USER;

const LastFmTopArtists: React.FC = () => {
  const [artists, setArtists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!LASTFM_API_KEY || !LASTFM_USER) {
      setError('Missing Last.fm API key or username.');
      setLoading(false);
      return;
    }
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=${LASTFM_USER}&api_key=${LASTFM_API_KEY}&format=json`
    )
      .then((res) => res.json())
      .then(async (data) => {
        if (data.error) {
          setError(data.message || 'Failed to fetch data from Last.fm');
          setLoading(false);
          return;
        }
        const topArtists = data.weeklyartistchart?.artist?.slice(0, 5) || [];
        const placeholder = 'https://via.placeholder.com/80?text=No+Image';

        // Get Spotify access token (unauthenticated)
        let spotifyToken = '';
        try {
          const tokenRes = await fetch('https://open.spotify.com/get_access_token?reason=transport&productType=web_player');
          const tokenData = await tokenRes.json();
          spotifyToken = tokenData.accessToken;
        } catch (e) {
          // If token fetch fails, fallback to previous logic
          spotifyToken = '';
        }

        const artistsWithImages = await Promise.all(
          topArtists.map(async (artist: any) => {
            let image = '';
            // Try Spotify first if token available
            if (spotifyToken) {
              try {
                const spotifyRes = await fetch(
                  `https://api.spotify.com/v1/search?type=artist&q=${encodeURIComponent(artist.name)}&decorate_restrictions=false&best_match=true&include_external=audio&limit=1`,
                  {
                    headers: {
                      Authorization: `Bearer ${spotifyToken}`,
                    },
                  }
                );
                const spotifyData = await spotifyRes.json();
                const best = spotifyData.artists?.items?.[0];
                if (best && best.images && best.images.length > 0) {
                  image = best.images[0].url;
                  console.log(`Spotify image for ${artist.name}:`, image);
                }
              } catch (e) {
                // Ignore Spotify errors, fallback to next
              }
            }
            // If no image from Spotify, try Last.fm
            if (!image) {
              try {
                let url = '';
                if (artist.mbid) {
                  url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${artist.mbid}&api_key=${LASTFM_API_KEY}&format=json`;
                } else {
                  url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(artist.name)}&api_key=${LASTFM_API_KEY}&autocorrect=1&format=json`;
                }
                const infoRes = await fetch(url);
                const infoData = await infoRes.json();
                if (infoData.artist && Array.isArray(infoData.artist.image) && infoData.artist.image.length > 0) {
                  const imgArr = infoData.artist.image;
                  image = imgArr
                    .map((img: any) => img['#text'])
                    .find((url: string) => url && url.length > 0 && !url.includes('2a96cbd8b46e442fc41c2b86b821562f.png')) || '';
                }
              } catch (e) {
                // Ignore Last.fm errors
              }
            }
            // If no image from Last.fm, try Wikipedia
            if (!image) {
              try {
                const wikiSearch = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(artist.name)}&format=json&origin=*`);
                const wikiData = await wikiSearch.json();
                const page = wikiData.query?.search?.[0];
                if (page) {
                  const pageTitle = page.title;
                  const wikiImgRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=pageimages&format=json&pithumbsize=300&origin=*`);
                  const wikiImgData = await wikiImgRes.json();
                  const pages = wikiImgData.query?.pages;
                  const firstPage = pages && Object.values(pages)[0];
                  if (firstPage && firstPage.thumbnail && firstPage.thumbnail.source) {
                    image = firstPage.thumbnail.source;
                  }
                }
              } catch (e) {
                // Ignore Wikipedia errors
              }
            }
            if (!image) image = placeholder;
            return { ...artist, image };
          })
        );
        setArtists(artistsWithImages);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch data from Last.fm');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="exp-card" style={{ marginBottom: '2rem' }}>Loading top artists…</div>;
  if (error) return <div className="exp-card" style={{ marginBottom: '2rem', color: 'red' }}>{error}</div>;

  const artist = artists[current];

  return (
    <section style={{ marginTop: 0, marginBottom: '2rem', padding: 0, textAlign: 'left', maxWidth: 600 }}>
      <h3 style={{ margin: 0, marginBottom: '1.2rem', fontSize: '1.17rem', fontWeight: 500 }}>My Top Artists This Week</h3>
      <div style={{ width: '100%', maxWidth: 340, marginBottom: '1.2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {/* Left-aligned content block for image, name, playcount */}
        {/* Center image, name, playcount over the third dot (of 5) by offsetting with left margin */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          marginLeft: artists.length === 5 ? '-50px' : artists.length === 3 ? '4px' : artists.length === 1 ? '0' : '0',
          transition: 'margin-left 0.2s',
        }}>
          {artist && artist.image && (
            <img src={artist.image} alt={artist.name} style={{ width: 180, height: 180, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 16px rgba(0,0,0,0.13)', marginBottom: '1em' }} />
          )}
          <a href={artist?.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, fontSize: '1.15rem', color: 'var(--accent2)', textAlign: 'center', marginBottom: 2 }}>{artist?.name}</a>
          <span style={{ color: '#888', fontSize: '1rem', textAlign: 'center', marginBottom: 8 }}>{artist?.playcount} plays</span>
        </div>
        {/* Navigation menu below image and name, left-aligned */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2em', marginTop: '0.7em', justifyContent: 'flex-start', width: '100%' }}>
          <button
            onClick={() => setCurrent((c) => (c === 0 ? artists.length - 1 : c - 1))}
            disabled={artists.length <= 1}
            style={{
              padding: '0.3em 0.7em',
              borderRadius: 8,
              border: 'none',
              background: 'var(--accent)',
              color: 'var(--accent2)',
              fontWeight: 600,
              cursor: 'pointer',
              opacity: artists.length <= 1 ? 0.5 : 1,
              fontSize: '1.6em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Previous artist"
          >
            <FaChevronLeft />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4em' }}>
            {artists.map((_, idx) => (
              <span
                key={idx}
                style={{
                  display: 'inline-block',
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: idx === current ? 'var(--accent2)' : '#ccc',
                  opacity: idx === current ? 1 : 0.5,
                  transition: 'background 0.2s',
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((c) => (c === artists.length - 1 ? 0 : c + 1))}
            disabled={artists.length <= 1}
            style={{
              padding: '0.3em 0.7em',
              borderRadius: 8,
              border: 'none',
              background: 'var(--accent)',
              color: 'var(--accent2)',
              fontWeight: 600,
              cursor: 'pointer',
              opacity: artists.length <= 1 ? 0.5 : 1,
              fontSize: '1.6em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Next artist"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LastFmTopArtists;
