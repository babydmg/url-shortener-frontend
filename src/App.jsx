import styles from './styles/App.module.css';
import { useState } from 'react';

function App() {
  const [fullUrl, setFullUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [showText, setShowText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://agile-hare-jumper.cyclic.app/create/new-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        full_url: fullUrl,
        short_url: shortUrl,
      }),
    })
      .then(() => {
        console.log('link successfully created');
        setShowText(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <h1>QuickLink</h1>
      {showText ? (
        <p>Your url is agile-hare-jumper.cyclic.app/{shortUrl}</p>
      ) : (
        ''
      )}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type='text'
          className={styles.input}
          placeholder='Enter your URL here...'
          value={fullUrl}
          onChange={(e) => setFullUrl(e.target.value)}
        />
        <input
          type='text'
          className={styles.input}
          placeholder='Enter your custom short URL here...'
          value={shortUrl}
          onChange={(e) => setShortUrl(e.target.value)}
        />
        <button type='submit' className={styles.generateURLBtn}>
          Generate URL
        </button>
      </form>
    </div>
  );
}

export default App;
