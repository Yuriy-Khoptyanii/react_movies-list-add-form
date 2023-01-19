import React, { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

type Props = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');
  const [description, setDescription] = useState('');

  const canSubmitForm = title && imgUrl && imdbUrl && imdbId;

  const newMovieComponents = {
    title,
    description,
    imgUrl,
    imdbUrl,
    imdbId,
  };

  const ClearFrom = () => {
    setTitle('');
    setImgUrl('');
    setImdbUrl('');
    setImdbId('');
    setDescription('');
    setCount(prevCount => prevCount + 1);
  };

  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAdd(newMovieComponents);

    ClearFrom();
  };

  return (
    <form
      className="NewMovie"
      key={count}
      onSubmit={handleSubmitForm}
    >
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={setTitle}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={setDescription}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        onChange={setImgUrl}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={setImdbUrl}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbId}
        onChange={setImdbId}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={!canSubmitForm}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};