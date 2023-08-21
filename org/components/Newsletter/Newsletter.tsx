import React, { useState } from 'react';
import Button from '../Button/button';
import Input from '../Input/input';

import {
  NewsletterWrapper,
  NewsletterInnerWrapper,
  NewsletterTitle,
  NewsletterDescription,
  NewsletterInputWrapper,
  ErrorMessage,
  SuccessMessage,
} from './newsletter.style';

type NewsletterProps = {};

const Newsletter: React.FunctionComponent<NewsletterProps> = ({ ...props }) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState();
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    setEmail(e.target.value);
    setMessage('');
    setError(undefined);
    setSuccess(undefined);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSuccess(undefined);
      setLoading(true);
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data?.error) {
        setError(data?.error);
      } else {
        setMessage(data?.message ?? 'Thanks for subscribing');
      }
    } catch (err: any) {
      console.log('got err');
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <NewsletterWrapper {...props}>
      <NewsletterInnerWrapper>
        <NewsletterTitle>
          Get The Best Of All Hands Delivered To Your Inbox
        </NewsletterTitle>
        {!!message && !error && (
          <NewsletterDescription>{message}</NewsletterDescription>
        )}
        <NewsletterInputWrapper onSubmit={handleSubmit}>
          {success ? (
            <SuccessMessage>{success} 🙂</SuccessMessage>
          ) : (
            <>
              <Input
                type="email"
                name="email"
                placeholder="Write your email here"
                onChange={handleChange}
                value={email}
                required
              />
              <Button title="Subscribe" type="submit" isLoading={loading} />
            </>
          )}
        </NewsletterInputWrapper>
        {error && (
          <ErrorMessage
            dangerouslySetInnerHTML={{ __html: `<span>*</span>${error}` }}
          />
        )}
      </NewsletterInnerWrapper>
    </NewsletterWrapper>
  );
};

export default Newsletter;
